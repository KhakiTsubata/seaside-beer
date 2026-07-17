const MAX_BODY_BYTES = 64_000;

function json(body: Record<string, unknown>, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}

function text(value: FormDataEntryValue | null) {
  return typeof value === 'string' ? value.trim() : '';
}

export default {
  async fetch(request: Request) {
    if (request.method !== 'POST') {
      return json({ success: false, message: 'Method not allowed' }, 405);
    }

    const requestUrl = new URL(request.url);
    const origin = request.headers.get('origin');
    if (origin && new URL(origin).host !== requestUrl.host) {
      return json({ success: false, message: 'Invalid origin' }, 403);
    }

    const contentLength = Number(request.headers.get('content-length') ?? 0);
    if (contentLength > MAX_BODY_BYTES) {
      return json({ success: false, message: 'Request too large' }, 413);
    }

    let input: FormData;
    try {
      input = await request.formData();
    } catch {
      return json({ success: false, message: 'Invalid form data' }, 400);
    }

    if (text(input.get('botcheck'))) {
      return json({ success: true });
    }

    const company = text(input.get('company'));
    const name = text(input.get('name'));
    const email = text(input.get('email'));
    const topic = text(input.get('topic'));
    const message = text(input.get('message'));
    const privacyConsent = text(input.get('privacy_consent'));

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      !name || name.length > 100 ||
      !emailPattern.test(email) || email.length > 254 ||
      !topic || topic.length > 100 ||
      !message || message.length > 5_000 ||
      !privacyConsent || company.length > 200
    ) {
      return json({ success: false, message: '入力内容を確認してください。' }, 400);
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      return json({ success: false, message: 'フォーム設定を確認できません。' }, 500);
    }

    const outgoing = new FormData();
    outgoing.set('access_key', accessKey);
    outgoing.set('subject', '【SeasideBeer】Webサイトからのお問い合わせ');
    outgoing.set('from_name', 'SeasideBeer Webサイト');
    outgoing.set('会社・団体名', company || '未入力');
    outgoing.set('お名前', name);
    outgoing.set('メールアドレス', email);
    outgoing.set('ご相談の内容', topic);
    outgoing.set('状況や相談したいこと', message);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: outgoing,
      });
      const result = await response.json() as { success?: boolean };
      if (!response.ok || !result.success) {
        return json({ success: false, message: '送信できませんでした。' }, 502);
      }
    } catch {
      return json({ success: false, message: '送信できませんでした。' }, 502);
    }

    if (request.headers.get('accept')?.includes('text/html')) {
      return Response.redirect(new URL('/contact/?sent=1', request.url), 303);
    }

    return json({ success: true });
  },
};
