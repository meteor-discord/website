import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';

import { cn } from '~/lib/utils';

function StatusCard({
  online,
  shard,
  uptime,
  latency,
  users,
  servers,
  isHighLoad,
}: {
  online: boolean;
  shard: number;
  uptime: string;
  latency: number;
  users: number;
  servers: number;
  isHighLoad: boolean;
}) {
  return (
    <Card>
      <CardHeader>
        <CardDescription>Shard {shard}</CardDescription>
        <CardTitle className="flex items-center space-x-2 text-xl font-medium">
          <span
            className={cn(
              'inline-flex h-3 w-3 items-center justify-center rounded-full',
              online ? 'bg-green-500' : 'bg-red-500'
            )}
          ></span>
          <span>
            {online ? 'Online' : 'Offline'} for {uptime}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">Latency: {latency}ms</p>
        <p className="text-sm text-muted-foreground">Users: {users}</p>
        <p className="text-sm text-muted-foreground">Servers: {servers}</p>

        {isHighLoad && (
          <p className="mt-3 flex items-center justify-center rounded-md bg-orange-500/15 px-2 py-0.5 text-sm text-orange-500">
            This shard is experiencing high load
          </p>
        )}
      </CardContent>
    </Card>
  );
}

export default function Status() {
  const shardPlaceholders = [
    {
      online: true,
      shard: 0,
      uptime: '23 hours, 59 minutes',
      latency: 93,
      users: 1003,
      servers: 3,
      isHighLoad: false,
    },
    {
      online: true,
      shard: 1,
      uptime: '23 hours, 59 minutes',
      latency: 103,
      users: 643,
      servers: 10,
      isHighLoad: true,
    },
    {
      online: false,
      shard: 2,
      uptime: '5 minutes',
      latency: 0,
      users: 2300,
      servers: 2,
      isHighLoad: false,
    },
    {
      online: true,
      shard: 3,
      uptime: '12 minutes',
      latency: 99,
      users: 6240,
      servers: 23,
      isHighLoad: false,
    },
    {
      online: true,
      shard: 4,
      uptime: '24 minutes',
      latency: 590,
      users: 6438,
      servers: 21,
      isHighLoad: true,
    },
    {
      online: true,
      shard: 5,
      uptime: '24 minutes',
      latency: 99,
      users: 5403,
      servers: 6,
      isHighLoad: false,
    },
  ];

  return (
    <div className="mx-auto mb-28 mt-6 flex w-full max-w-[90rem] flex-col p-4 md:mt-16 md:flex-row">
      <div className="m-2 flex flex-1 flex-col justify-center">
        <h1 className="mb-2 text-3xl font-medium">Status</h1>
        <p className="max-w-[40ch] text-lg text-muted-foreground">Check the status of Meteor shards</p>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shardPlaceholders.map(shard => (
            <StatusCard key={shard.shard} {...shard} />
          ))}
        </div>
      </div>
    </div>
  );
}
