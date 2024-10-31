import { Button } from '~/components/ui/button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex h-full min-h-[50vh] w-full items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-semibold">Page not found</h1>
        <p className="mt-2 text-muted-foreground">The page you are looking for does not exist.</p>

        <div className="flex flex-col items-center justify-center">
          <Button variant="default" asChild className="mt-4">
            <Link href="/">Go Home</Link>
          </Button>

          <Button variant="link" asChild className="mt-2">
            <a href="https://github.com/meteor-discord/" target="_blank" rel="noopener noreferrer">
              Having issues? Contact us.
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
