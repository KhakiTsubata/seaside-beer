export const site = {
  name: 'SeasideBeer',
  title: 'SeasideBeer｜松山のAI研修・AI導入支援',
  description:
    '松山を拠点に、企業のAI研修・AI導入支援と、若者のAI人材育成を行うSeasideBeerの公式サイトです。',
  email: 'seasidebeer.setouchi@gmail.com',
  location: '愛媛県松山市',
  tagline: 'AIに仕事を任せて、海辺でビールでも飲もう。',
  representative: '貝崎泰我',
} as const;

export const primaryNav = [
  { href: '/services/corporate/', label: '企業向け支援' },
  { href: '/academy/', label: 'AI人材育成' },
  { href: '/insights/', label: '記事・活動' },
  { href: '/about/', label: 'SeasideBeerについて' },
] as const;
