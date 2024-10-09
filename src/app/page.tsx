import { Features } from '~/components/modules/features';
import { Hero } from '~/components/modules/hero';
import { Testimonials } from '~/components/modules/testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Testimonials />
    </>
  );
}
