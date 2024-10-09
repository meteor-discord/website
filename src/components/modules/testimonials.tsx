import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';
import { Card, CardContent, CardHeader } from '~/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '~/components/ui/carousel';

import React from 'react';

const TestimonialCard: React.FC<{ avatar: string; name: string; description: string; children: React.ReactNode }> = ({
  avatar,
  name,
  description,
  children,
}) => {
  return (
    <Card className="md:basis-1/2 lg:basis-1/3">
      <CardHeader className="pb-2">
        <Avatar className="h-12 w-12">
          <AvatarImage src={avatar} />
          <AvatarFallback>?</AvatarFallback>
        </Avatar>

        <div>
          <h1 className="text-xl font-medium">{name}</h1>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-muted-foreground">{children}</p>
      </CardContent>
    </Card>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section className="mx-auto mt-32 w-full max-w-[90rem] p-4">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-medium">Reviews</h1>
        <p className="max-w-[40ch] text-lg text-muted-foreground">What our users say about us</p>
      </div>

      <Carousel>
        <CarouselContent>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <TestimonialCard avatar="https://github.com/vercel.png" name="Some user" description="Position">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, consequatur. Nisi, quos.
            </TestimonialCard>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <TestimonialCard avatar="https://github.com/vercel.png" name="Some user" description="Position">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, consequatur. Nisi, quos.
            </TestimonialCard>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <TestimonialCard avatar="https://github.com/vercel.png" name="Some user" description="Position">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, consequatur. Nisi, quos.
            </TestimonialCard>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <TestimonialCard avatar="https://github.com/vercel.png" name="Some user" description="Position">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, consequatur. Nisi, quos.
            </TestimonialCard>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <TestimonialCard avatar="https://github.com/vercel.png" name="Some user" description="Position">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, consequatur. Nisi, quos.
            </TestimonialCard>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <TestimonialCard avatar="https://github.com/vercel.png" name="Some user" description="Position">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, consequatur. Nisi, quos.
            </TestimonialCard>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <TestimonialCard avatar="https://github.com/vercel.png" name="Some user" description="Position">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, consequatur. Nisi, quos.
            </TestimonialCard>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <TestimonialCard avatar="https://github.com/vercel.png" name="Some user" description="Position">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, consequatur. Nisi, quos.
            </TestimonialCard>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};

export { Testimonials };
