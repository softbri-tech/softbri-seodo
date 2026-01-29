
export interface NavItem {
  label: string;
  link: string;
  dropdown?: { label: string; link: string }[];
}

export interface HeroSlide {
  title: string;
  subtitle: string;
  buttonText: string;
  bgImage: string;
}

export interface CommitmentCard {
  category: string;
  title: string;
  excerpt: string;
  image: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

export interface NewsCard {
  title: string;
  date: string;
  cta: string;
  image: string;
}

export interface Partner {
  name: string;
  logo: string;
}
