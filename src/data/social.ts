import type { BrandIcon } from './icons';

export type SocialLink = {
  label: string;
  href: string;
  note: string;
  icon: BrandIcon;
  /** Show in the site footer. */
  footer?: boolean;
};

export const social: SocialLink[] = [
  {
    label: 'GitHub',
    icon: 'github',
    href: 'https://github.com/azimul-kabir',
    note: 'Open-source projects and code',
    footer: true,
  },
  {
    label: 'LinkedIn',
    icon: 'linkedin',
    href: 'https://www.linkedin.com/in/azimulk',
    note: 'Professional profile',
    footer: true,
  },
  {
    label: 'Google Play',
    icon: 'googleplay',
    href: 'https://play.google.com/store/apps/developer?id=Azimul+Kabir+Apu',
    note: 'Actua and other Android apps',
  },
  {
    label: 'Discord',
    icon: 'discord',
    href: 'https://discord.com/users/395108876799967232',
    note: 'azimulkabir',
  },
  {
    label: 'Actua Discord',
    icon: 'discord',
    href: 'https://discord.gg/FyGxRjmhw',
    note: 'Actua community server',
  },
  {
    label: 'Instagram',
    icon: 'instagram',
    href: 'https://www.instagram.com/azimul.kabir',
    note: 'Photos',
  },
  {
    label: 'Facebook',
    icon: 'facebook',
    href: 'https://www.facebook.com/azimul.kabir',
    note: 'Personal',
  },
];

export const github = social[0];
