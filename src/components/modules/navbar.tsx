'use client';

import { ArrowRightIcon, ExternalLinkIcon, HamburgerMenuIcon } from '@radix-ui/react-icons'; // Assuming you have these icons

import { Button } from '~/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const LINKS: { name: string; href: string; disabled?: boolean; external?: boolean }[] = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Dashboard',
    href: '/dashboard',
  },
  {
    name: 'Documentation',
    href: '/docs',
  },
  {
    name: 'Invite',
    href: 'https://invite.meteors.cc/',
    external: true,
  },
  {
    name: 'Support Server',
    href: 'https://discord.meteors.cc/',
    external: true,
  },
];

const NavbarLink: React.FC<{ href: string; external?: boolean; children: React.ReactNode }> = ({
  href,
  external,
  children,
}) => {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center space-x-1 text-foreground/90 transition-colors hover:text-foreground/80"
      >
        <span>{children}</span>
        <ExternalLinkIcon className="h-3.5 w-3.5" />
      </a>
    );
  } else {
    return (
      <Link href={href} className="text-foreground/90 transition-colors hover:text-foreground/80">
        {children}
      </Link>
    );
  }
};

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-[4.2rem] max-w-[1650px] items-center justify-between md:px-16">
        <div className="flex w-full items-center px-6 md:px-0">
          <Link href="/" className="mr-4 flex items-center space-x-1.5 lg:mr-6">
            <Image src="/icons/logo.png" alt="logo" width={32} height={32} className="h-7 w-7 md:h-6 md:w-6" />
            <span className="hidden font-medium lg:inline-block">Meteor</span>
          </Link>

          <nav className="hidden items-center gap-4 text-sm md:flex lg:gap-6">
            {LINKS.map(link => (
              <NavbarLink key={link.name} href={link.href} external={link.external}>
                {link.name}
              </NavbarLink>
            ))}
          </nav>
        </div>

        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
            className="mr-6 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
          >
            <HamburgerMenuIcon className="h-6 w-6" />
          </button>
        </div>

        <div className="flex items-center space-x-2">
          <Button variant="secondary" className="hidden md:flex">
            <span>Sign in</span>
            <ArrowRightIcon className="ml-1.5 h-3.5 w-3.5" />
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="fixed left-0 right-0 top-[17] z-50 border-b border-t border-border bg-background/95 p-4 backdrop-blur md:hidden">
          <nav className="flex flex-col items-start gap-3.5 text-sm">
            {LINKS.map(link => (
              <NavbarLink key={link.name} href={link.href} external={link.external}>
                {link.name}
              </NavbarLink>
            ))}
            <Button variant="secondary" className="mt-2 w-full">
              <span>Sign in</span>
              <ArrowRightIcon className="ml-1.5 h-3.5 w-3.5" />
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export { Navbar };
