import { BarChartIcon, EyeOpenIcon, LightningBoltIcon } from '@radix-ui/react-icons';
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';

const Features: React.FC = () => {
  return (
    <div className="mx-auto mt-6 w-full max-w-[90rem] p-4">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-medium">Features</h1>
        <p className="max-w-[40ch] text-lg text-muted-foreground">See what Meteor has to offer</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <EyeOpenIcon className="mb-1 mr-2 h-10 w-10 rounded-lg border border-border bg-background p-2.5" />
            <CardTitle className="text-xl font-medium">Security</CardTitle>
            <CardDescription>
              Protect your server from threats with Meteor&apos;s advanced security features. Secure your server in
              matter of seconds.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <LightningBoltIcon className="mb-1 mr-2 h-10 w-10 rounded-lg border border-border bg-background p-2.5" />
            <CardTitle className="text-xl font-medium">Moderation</CardTitle>
            <CardDescription>
              Keep your community healthy with Meteor&apos;s moderation features. Moderate members with ease and
              efficiently.
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <BarChartIcon className="mb-1 mr-2 h-10 w-10 rounded-lg border border-border bg-background p-2.5" />
            <CardTitle className="text-xl font-medium">Analytics</CardTitle>
            <CardDescription>
              Gain valuable insights into your server&apos;s activity with Meteor&apos;s real-time analytics. Track user
              engagement, identify trends, and make data-driven decisions to improve your community.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export { Features };
