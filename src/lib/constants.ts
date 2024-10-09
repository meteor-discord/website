interface Server {
  name: string;
  users: string;
  avatar: string;
  hidden?: boolean;
}

export const servers: Server[] = [
  {
    name: 'Discord',
    users: '1,000,000+',
    avatar:
      'https://static.vecteezy.com/system/resources/previews/006/892/625/non_2x/discord-logo-icon-editorial-free-vector.jpg',
  },
];
