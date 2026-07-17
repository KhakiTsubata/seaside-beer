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

export const primaryNav = [
  { href: '/services/corporate/', label: '企業向けAI支援' },
  { href: '/academy/', label: '若者AI人材育成' },
  { href: '/about/', label: 'SeasideBeerについて' },
  { href: '/insights/', label: '活動と記事' },
] as const;
