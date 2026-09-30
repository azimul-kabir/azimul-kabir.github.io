export type SocialLink = {
  label: string;
  href: string;
  note: string;
  /** Show in the site footer. */
  footer?: boolean;
};

export const social: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/azimul-kabir',
    note: 'Open-source projects and code',
    footer: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/azimulk',
    note: 'Professional profile',
    footer: true,
  },
  {
    label: 'Google Play',
    href: 'https://play.google.com/store/apps/developer?id=Azimul+Kabir+Apu',
    note: 'Actua and other Android apps',
  },
  {
    label: 'Discord',
    href: 'https://discord.gg/FyGxRjmhw',
    note: 'Actua community',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/azimul.kabir',
    note: 'Photos',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/azimul.kabir',
    note: 'Personal',
  },
];

export const github = social[0];
