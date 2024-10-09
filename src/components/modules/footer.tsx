import Image from 'next/image';

const resourcesLinks = [
  { href: '/about', label: 'About' },
  { href: '/branding', label: 'Branding' },
  { href: '/status', label: 'Status' },
  { href: '/terms', label: 'Terms of Service' },
  { href: '/privacy', label: 'Privacy Policy' },
];

const developerLinks = [
  { href: 'https://github.com/meteor-discord', label: 'GitHub' },
  {
    href: 'https://github.com/meteor-discord/application/blob/main/CONTRIBUTING.md',
    label: 'How to Contribute',
  },
];

const contactLinks = [{ href: 'https://discord.gg/', label: 'Support Server' }];

const Footer: React.FC = () => {
  return (
    <footer className="mt-12 border-t border-neutral-800 bg-[var(--background)] py-12 text-neutral-400 md:mt-32">
      <div className="container mx-auto px-6 md:px-28">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h2 className="mb-2 text-base font-medium text-primary">Resources</h2>
            <ul>
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
            <h2 className="mb-2 text-base font-medium text-primary">For developers</h2>
            <ul>
              {developerLinks.map(link => (
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
            <ul>
              {contactLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm transition-colors hover:text-neutral-500">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-2 flex items-center space-x-1 text-base font-medium text-primary">
              <Image src="/logo.png" width={22} height={22} alt="logo" />
              <span>Meteor Labs</span>
            </h2>
            <p className="text-sm">All rights reserved.</p>
            <p className="text-sm">Meteor is not affiliated with Discord Inc.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
