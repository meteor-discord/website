import { ArrowDownIcon, ExclamationTriangleIcon } from '@radix-ui/react-icons';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';

import { Button } from '~/components/ui/button';
import { cn } from '~/lib/utils';

export function BrandingHeading() {
  return (
    <section className="flex min-h-[50vh] items-center justify-center">
      <div className="mx-auto flex w-full max-w-[90rem] flex-col p-4 md:flex-row">
        <div className="m-2 flex flex-1 flex-col justify-center">
          <p className="mb-4 flex w-fit items-center justify-center space-x-2 rounded-md bg-orange-500/15 px-2 py-0.5 text-orange-500 md:space-x-1">
            <ExclamationTriangleIcon className="h-3.5 w-3.5" />
            <span>Please do not edit our logo or other branding elements</span>
          </p>
          <h1 className="mb-2 text-4xl font-medium">Branding</h1>
          <p className="max-w-[40ch] text-lg text-muted-foreground">
            This page helps ensure our logo, colors, and brand elements are used correctly, so Meteor stays organized
            and recognizable everywhere.
          </p>
        </div>

        <div className="m-2 flex flex-1 flex-col items-center justify-center">
          <img src="/icons/logo-full.png" alt="Logo" className="mt-6 h-32 w-32 md:mt-0 md:h-48 md:w-48" />
        </div>
      </div>
    </section>
  );
}

export default function Branding() {
  const logoVariants = [
    {
      name: 'Default',
      value: 'logo',
    },
    {
      name: 'Full',
      value: 'logo-full',
    },
    {
      name: 'Primary',
      value: 'logo-primary',
    },
    {
      name: 'Blue',
      value: 'logo-blue',
    },
    {
      name: 'Orange',
      value: 'logo-orange',
    },
    {
      name: 'Green',
      value: 'logo-green',
    },
  ];
  const colors = [
    {
      name: 'Primary',
      value: '#e4213b',
    },
    {
      name: 'Primary Background',
      value: '#0c0808',
    },
    {
      name: 'Blue',
      value: '#229ee3',
    },
    {
      name: 'Blue Background',
      value: '#080b0c',
    },
    {
      name: 'Orange',
      value: '#e37f22',
    },
    {
      name: 'Orange Background',
      value: '#0c0a08',
    },
    {
      name: 'Green',
      value: '#22e335',
      blackText: true,
    },
    {
      name: 'Green Background',
      value: '#080c08',
    },
  ];

  return (
    <>
      <BrandingHeading />

      <section className="mx-auto flex w-full max-w-[90rem] flex-col p-4 md:flex-row">
        <div className="m-2 flex flex-1 flex-col justify-center">
          <h1 className="mb-6 text-3xl font-medium">Logo Variants</h1>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {logoVariants.map(variant => (
              <Card key={variant.name}>
                <CardHeader>
                  <CardDescription>{variant.name.charAt(0).toUpperCase() + variant.name.slice(1)}</CardDescription>
                  <CardTitle className="text-xl font-medium">Logo</CardTitle>
                </CardHeader>
                <CardContent>
                  <img src={`/icons/${variant.value}.png`} alt={variant.name} className="h-32 w-32 rounded-xl" />

                  <Button variant={'outline'} className="mt-6 space-x-1.5" asChild>
                    <a href={`/icons/${variant.value}.png`} download>
                      <ArrowDownIcon className="h-3.5 w-3.5" />
                      <span>Download</span>
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-32 flex w-full max-w-[90rem] flex-col p-4 md:flex-row">
        <div className="m-2 flex flex-1 flex-col justify-center">
          <h1 className="mb-6 text-3xl font-medium">Colours</h1>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {colors.map(color => (
              <Card key={color.name}>
                <CardHeader>
                  <CardDescription>{color.name.charAt(0).toUpperCase() + color.name.slice(1)}</CardDescription>
                  <CardTitle className="text-xl font-medium">Color</CardTitle>
                </CardHeader>
                <CardContent>
                  <div
                    className="flex h-32 w-full items-center justify-center rounded-xl"
                    style={{ backgroundColor: color.value }}
                  >
                    <h1 className={cn('text-xl font-medium', color.blackText && 'text-black')}>{color.value}</h1>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
