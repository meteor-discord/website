'use client';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

import { Button } from '../ui/button';
import Image from 'next/image';
import { RocketIcon } from '@radix-ui/react-icons';

interface Server {
  name: string;
  users: string;
  avatar: string;
  hidden?: boolean;
}

const servers: Server[] = [
  {
    name: 'Discord',
    users: '100,000+ Members',
    avatar:
      'https://static.vecteezy.com/system/resources/previews/006/892/625/non_2x/discord-logo-icon-editorial-free-vector.jpg',
  },
];

const Hero: React.FC = () => {
  const scrollToFeatures = () => {
    const element = document.getElementById('features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
    }
  };

  return (
    <section className="flex min-h-[75vh] items-center justify-center">
      <div className="mx-auto flex w-full max-w-[90rem] flex-col p-4 md:flex-row">
        <div className="m-2 flex flex-1 flex-col justify-center">
          <a href="https://github.com/meteor-discord/" target="_blank" rel="noopener noreferrer">
            <p className="mb-4 flex w-fit items-center justify-center space-x-1 rounded-md bg-meteor/15 px-2 py-0.5 text-meteor">
              <RocketIcon className="h-3.5 w-3.5" />
              <span>Proudly open-source!</span>
            </p>
          </a>

          <h1 className="mb-2 text-4xl font-medium">Secure your server with Meteor</h1>
          <p className="max-w-[40ch] text-lg text-muted-foreground">
            Meteor is an open-source Discord application that is flexible and easy to use. It includes features that
            improve server security and enhance the user experience.
          </p>

          <div className="mt-4 flex items-center gap-2">
            <Button variant="default" asChild>
              <a href="https://invite.meteors.cc/" target="_blank" rel="noopener noreferrer">
                Get started
              </a>
            </Button>
            <Button variant="secondary" onClick={scrollToFeatures}>
              Learn more
            </Button>
          </div>

          <span className="mt-6 text-muted-foreground">
            Trusted by <span className="text-white">lots of servers</span>
          </span>

          <div className="mt-4 flex flex-wrap gap-2">
            <TooltipProvider delayDuration={0}>
              {servers.map(server => (
                <Tooltip key={server.name}>
                  <TooltipTrigger>
                    <img src={server.avatar} alt={server.name} className="h-9 w-9 rounded-full" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{server.name}</p>
                    <p className="flex items-center gap-1">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span>{server.users}</span>
                    </p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </TooltipProvider>
          </div>
        </div>

        <div className="relative m-2 flex flex-1 flex-col justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="-z-10 h-20 w-52 rounded-full bg-meteor blur-[200px] md:h-40 md:w-80 md:blur-[300px]"></div>
          </div>
          <Image
            src="/banner-old.png"
            alt="app dir"
            width={2000}
            height={1200}
            className="mt-6 w-full rounded-3xl border border-border md:mt-0"
          />
        </div>
      </div>
    </section>
  );
};

export { Hero };
