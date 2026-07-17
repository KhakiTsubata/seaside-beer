export const site = {
  name: 'SeasideBeer',
  title: 'SeasideBeer｜仕事を、AIに渡す。',
  description:
    '松山を拠点に、企業のAI導入・AI研修と、若者のAI人材育成を行うSeasideBeer。AIを使える人ではなく、仕事を変えられる人と仕組みをつくります。',
  email: 'seasidebeer.setouchi@gmail.com',
  location: '愛媛県松山市',
  tagline: 'AIに仕事を任せて、海辺でビールでも飲もう。',
  representative: '貝崎泰我',
} as const;

export const primaryNav = [
  { href: '/services/corporate/', label: 'For Business' },
  { href: '/academy/', label: 'For Talent' },
  { href: '/about/', label: 'About' },
  { href: '/insights/', label: 'Journal' },
] as const;
