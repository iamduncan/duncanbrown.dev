import Container from '@/components/container';
import SocialLinks from '@/components/ui/SocialLinks';
import { urlForImage } from '@/lib/sanity/image';
import Image from 'next/image';
import Link from 'next/link';

export default function About({ settings }: any) {
  return (
    <Container>
      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        About
      </h1>
      <div className="text-center">
        <p className="text-lg">We are a small passionate team.</p>
      </div>

      <div className="mb-16 mt-6 grid grid-cols-3 gap-5 md:mb-32 md:mt-16 md:gap-16">
        {/*authors.slice(0, 3).map((author) => {
          const imageProps = urlForImage(author?.image) || null;
          return (
            <div
              key={author._id}
              className="relative aspect-square overflow-hidden rounded-md odd:translate-y-10 odd:md:translate-y-16"
            >
              <Link href={`/author/${author.slug}`}>
                <Image
                  src={imageProps.src}
                  alt={author.name || ' '}
                  fill
                  sizes="(max-width: 320px) 100vw, 320px"
                  className="object-cover"
                />
              </Link>
            </div>
          );
        })*/}
      </div>

      <div className="prose dark:prose-invert mx-auto mt-14 text-center">
        <p>
          We provide real-time connectivity to enable software providers and financial
          institutions to build integrated products for their small business customers.
        </p>
        <p>
          Our API infrastructure is leveraged by clients ranging from lenders to corporate
          card providers and business forecasting tools, with use cases including
          automatic reconciliation, business dashboarding, and loan decisioning.
        </p>
        <p>
          <Link href="/contact">Get in touch</Link>
        </p>
      </div>

      <div className="mx-auto my-10 grid max-w-screen-md auto-cols-fr gap-2 md:grid-cols-3">
        {settings.social && <SocialLinks settings={settings} />}
      </div>
    </Container>
  );
}
