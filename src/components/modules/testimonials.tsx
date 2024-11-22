'use client';

import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { Card, CardContent, CardHeader } from '~/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '~/components/ui/carousel';

import Autoplay from 'embla-carousel-autoplay';
import React from 'react';

interface Testimonial {
  name: string;
  avatar: string;
  description: string;
  content: string;
  hidden?: boolean;
}

const testimonials: Testimonial[] = [
  {
    name: 'FTWDawid',
    avatar: 'https://github.com/ftwdawid.png',
    description: 'Meteor Contributor',
    content: 'Working with Meteor is a great experience, and I am very happy to be a part of their community.',
  },
];

const TestimonialCard: React.FC<{ avatar: string; name: string; description: string; children: React.ReactNode }> = ({
  avatar,
  name,
  description,
  children,
}) => {
  return (
    <Card className="md:basis-1/2 lg:basis-1/3">
      <CardHeader className="flex flex-row items-center gap-3 pb-2">
        <Avatar className="h-11 w-11">
          <AvatarImage src={avatar} />
          <AvatarFallback>?</AvatarFallback>
        </Avatar>

        <div>
          <h1 className="font-medium">{name}</h1>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-muted-foreground">{children}</p>
      </CardContent>
    </Card>
  );
};

const Testimonials: React.FC = () => {
  const autoplay = React.useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  return (
    <section className="mx-auto mt-32 w-full max-w-[90rem] p-4">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-medium">Reviews</h1>
        <p className="max-w-[40ch] text-lg text-muted-foreground">What our users say about us</p>
      </div>

      <Carousel
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {testimonials.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <TestimonialCard avatar={item.avatar} name={item.name} description={item.description}>
                {item.content}
              </TestimonialCard>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </section>
  );
};

export { Testimonials };
