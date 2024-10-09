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

interface Testimonial {
  name: string;
  avatar: string;
  description: string;
  content: string;
  hidden?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    name: 'curldie',
    avatar: 'https://cdn.discordapp.com/avatars/1155174672158167201/2157578d25ab61ed235c3c7a7de03da3.png?size=1024',
    description: 'Meteor Contributor',
    content:
      'Working with Meteor Labs is a fantastic experience. I have been contributing to the project for a year now and it has been a great experience. I highly recommend it to anyone looking for a great Discord bot.',
  },
];
