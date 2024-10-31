import Image from 'next/image';

const productLinks = [
  { href: '/ai-automod', label: 'AI Automod' },
  { href: '/ticketing', label: 'Ticketing' },
  { href: '/modmail', label: 'Modmail' },
  { href: '/birthdays', label: 'Birthdays' },
];

const resourcesLinks = [
  { href: '/status', label: 'Status' },
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Service' },
  { href: '/become-a-partner', label: 'Become a Partner' },
  { href: '/branding', label: 'Branding' },
  { href: '/packages.txt', label: 'Packages.txt' },
];

const contactLinks = [
  { href: 'https://github.com/meteor-discord/', label: 'GitHub' },
  { href: 'https://discord.gg/2NtGV5Tjk4', label: 'Discord Server' },
];

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-neutral-800 bg-[var(--background)] py-12 text-neutral-400">
      <div className="container mx-auto px-6 md:px-28">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <a className="mb-2 flex items-center space-x-1 text-base font-medium text-primary" href="/">
              <Image src="/icons/logo.png" width={22} height={22} alt="logo" />
              <span>Meteor Labs</span>
            </a>
            <p className="text-sm">All rights reserved.</p>
            <p className="text-sm">Meteor is not affiliated with Discord Inc.</p>
          </div>

          <div>
            <h2 className="mb-2 text-base font-medium text-primary">Product</h2>
            <ul className="space-y-0.5">
              {productLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm transition-colors hover:text-neutral-500">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-2 text-base font-medium text-primary">Resources</h2>
            <ul className="space-y-0.5">
              {resourcesLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm transition-colors hover:text-neutral-500">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-2 text-base font-medium text-primary">Contact</h2>
            <ul className="space-y-0.5">
              {contactLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm transition-colors hover:text-neutral-500">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
