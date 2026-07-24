export const site = {
  name: 'SeasideBeer',
  title: 'SeasideBeer｜AIと、地域のあいだに。',
  description:
    '松山で、企業のAI導入・実務研修と、若者のAI人材育成を行うSeasideBeer。実際の仕事と、企業に見せられる成果物をつくります。',
  email: 'seasidebeer.setouchi@gmail.com',
  location: '愛媛県松山市',
  tagline: 'AIに仕事を任せて、海辺でビールでも飲もう。',
  representative: '貝崎泰我',
} as const;

export const book = {
  title: '中小企業のためのAI活用入門',
  subtitle: 'はじめてでもわかる 仕事の変え方と90日導入ロードマップ',
  author: '貝崎泰我',
  href: 'https://www.amazon.co.jp/dp/B0H98S9S21',
} as const;

export const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/taiga-kaizaki-1105a1259/' },
  { label: 'X', href: 'https://x.com/SeasideBeer' },
  { label: 'note', href: 'https://note.com/seaside_beer' },
] as const;

export const primaryNav = [
  { href: '/services/corporate/', label: '企業向けAI支援' },
  { href: '/academy/', label: '若者AI人材育成' },
  { href: '/about/', label: 'SeasideBeerについて' },
  { href: '/insights/', label: '活動と記事' },
] as const;
