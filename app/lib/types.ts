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

export type PostData = {
  metadata: {
    title?: string;
    description?: string;
    author?: string;
    // inne właściwości metadanych, jeśli istnieją
  };
  content: string;
};
