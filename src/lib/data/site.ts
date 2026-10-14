export const site = {
  name: 'Alex Nygård',
  title: 'Associate Consultant at PwC Norway',
  location: 'Oslo, Norway',
  cv: 'https://files.alexandernygard.com/CV_ALEXANDERNYGARD.pdf',
  email: 'alexander.k.nygard@gmail.com',
  github: 'https://github.com/alexandernygard',
  linkedin: 'https://www.linkedin.com/in/alexandernygard/',
  whatsapp: { href: 'https://wa.me/4790016100', label: '+47 900 16 100' },
} as const;

export const nav = [
  { href: '/about', label: 'About', key: 'a' },
  { href: '/work', label: 'Work', key: 'w' },
  { href: '/education', label: 'Education', key: 'e' },
  { href: '/projects', label: 'Projects', key: 'p' },
  { href: '/contact', label: 'Contact', key: 'c' },
] as const;
