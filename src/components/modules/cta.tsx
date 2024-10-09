import { Button } from '../ui/button';

const CTA: React.FC = () => {
  return (
    <section className="mx-auto mt-32 flex w-full max-w-[90rem] items-center justify-center p-4">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-medium">Get started</h1>
        <p className="mb-4 max-w-[40ch] text-lg text-muted-foreground">Start using Meteor today, it&apos;s free</p>

        <div className="flex justify-center space-x-2">
          <Button variant="default" asChild>
            <a href="https://discord.com/oauth2/authorize?client_id=1290627459548581888&permissions=8&integration_type=0&scope=bot">
              Get started
            </a>
          </Button>

          <Button variant="secondary" asChild>
            <a href="https://github.com/meteor-discord/" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export { CTA };
