export type MenuItem = {
  title: string;
  href: string;
};

export type Menu = MenuItem[];

export enum HamburgerVariant {
  Open = 'open',
  Close = 'close',
}

export type HamburgerProps = {
  variant: HamburgerVariant;
  onClick: () => void;
};

export type PostMetadata = {
  title: string;
  publishedAt: string;
  excerpt: string;
  category: string;
  thumbnail: string;
  description?: string;
};

export type PostData = {
  metadata: PostMetadata;
  content: string;
};
