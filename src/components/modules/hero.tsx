import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

import { Button } from '../ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { RocketIcon } from '@radix-ui/react-icons';

const SERVERS = [
  {
    name: 'Random Server',
    users: '1.2K',
    avatar: 'https://via.placeholder.com/200',
  },
];

const Hero: React.FC = () => {
  return (
    <div className="flex min-h-[75vh] items-center justify-center">
      <div className="mx-auto flex w-full max-w-[90rem] flex-col p-4 md:flex-row">
        <div className="m-2 flex flex-1 flex-col justify-center">
          <a href="https://github.com/meteor-discord/" target="_blank" rel="noopener noreferrer">
            <p className="bg-meteor/15 text-meteor mb-4 flex w-fit items-center justify-center space-x-1 rounded-md px-2 py-0.5">
              <RocketIcon className="h-3.5 w-3.5" />
              <span>Proudly open-source!</span>
            </p>
          </a>

          <h1 className="mb-2 text-4xl font-medium">Meteor keeps your server safe</h1>
          <p className="max-w-[40ch] text-lg text-muted-foreground">
            Meteor is an open-source Discord application that is flexible and easy to use. It includes features that
            improve server security and enhance the user experience.
          </p>

          <div className="mt-4 flex items-center gap-2">
            <Button variant="default" asChild>
              <a href="https://discord.com/oauth2/authorize?client_id=1290627459548581888&permissions=8&integration_type=0&scope=bot">
                Get started
              </a>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="#features">Learn more</Link>
            </Button>
          </div>

          <span className="mt-6 text-muted-foreground">
            Trusted by <span className="text-white">lots of servers</span>
          </span>

          <div className="mt-4 flex flex-wrap gap-2">
            <TooltipProvider delayDuration={0}>
              {SERVERS.map(server => (
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

        <div className="m-2 flex flex-1 flex-col justify-center">
          <Image
            src="/banner-old.png"
            alt="app dir"
            width={2000}
            height={1200}
            className="mt-6 w-full rounded-3xl border border-border md:mt-0"
          />
        </div>
      </div>
    </div>
  );
};

export { Hero };
