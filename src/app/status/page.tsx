'use client';

import { Card, CardHeader, CardTitle } from '~/components/ui/card';

import { Button } from '~/components/ui/button';
import { useServiceStatus } from '~/hooks/useServiceStatus';

const services = [
  { name: 'Website', target: 'https://meteors.cc/' },
  { name: 'Discord Application', target: 'https://app.meteors.cc/' },
  { name: 'Cobalt API', target: 'https://cobalt.meteors.cc/' },
  { name: 'PostHog', target: 'https://posthog.meteors.cc/' },
  { name: 'SonarQube', target: 'https://sonarqube.meteors.cc/' },
];

export default function Status() {
  const statuses = useServiceStatus(services);

  return (
    <div className="mx-auto mb-28 mt-6 flex w-full max-w-[90rem] flex-col p-4 md:mt-16 md:flex-row">
      <div className="m-2 flex flex-1 flex-col justify-center">
        <h1 className="mb-2 text-3xl font-medium">Status</h1>
        <p className="max-w-[40ch] text-lg text-muted-foreground">Check the status of Meteor services.</p>

        <div className="mt-8 space-y-3">
          {services.map(service => (
            <Card key={service.name} className="flex items-center justify-between">
              <CardHeader>
                <CardTitle className="text-xl font-medium tracking-normal">{service.name}</CardTitle>
              </CardHeader>
              <CardHeader className="p-0 pr-6">
                <div className="flex flex-row items-center justify-center gap-2">
                  {statuses[service.name] !== undefined ? (
                    statuses[service.name] ? (
                      <p className="font-medium text-green-500">Online</p>
                    ) : (
                      <p className="font-medium text-meteor">Offline</p>
                    )
                  ) : (
                    <p className="font-medium text-muted-foreground">Unknown</p>
                  )}
                  {statuses[service.name] !== undefined ? (
                    statuses[service.name] ? (
                      <div className="h-3.5 w-3.5 rounded-full bg-green-500" />
                    ) : (
                      <div className="h-3.5 w-3.5 rounded-full bg-meteor" />
                    )
                  ) : (
                    <div className="h-3.5 w-3.5 rounded-full bg-muted" />
                  )}
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="mt-20">
          <h1 className="mb-2 text-3xl font-medium">Having issues?</h1>
          <p className="max-w-[40ch] text-lg text-muted-foreground">Reach us on Discord.</p>

          <Button variant="default" asChild className="mt-4">
            <a href="https://discord.meteors.cc/" target="_blank" rel="noopener noreferrer">
              Discord Server
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
