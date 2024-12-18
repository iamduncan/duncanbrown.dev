import Link from 'next/link';

import Container from '@/components/container';
import SocialLinks from '@/components/ui/SocialLinks';

export default function About({ settings }: any) {
  return (
    <Container>
      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight dark:text-white lg:text-4xl lg:leading-snug">
        About
      </h1>

      <div className="prose prose-xl mx-auto mt-14 text-left dark:prose-invert md:text-justify">
        <p>
          For over 10 years I have been working on the in house design, build and
          maintenance of marketing websites. These have been mostly built using WordPress.
        </p>
        <p>
          I am also passionate about streamlining workflows and implementing automation to
          avoid repetitive tasks. Therefore, I created several applications to make
          business processes faster and reduce repetition. I used this to further my
          knowledge of many technologies.
        </p>
        <p>
          Whilst in the past I have used cakePHP for a basic web application, python for
          data processing and JQuery for user interface applications. I am now using
          Symfony for creating RESTful api back ends, React JS for creating progressive
          web apps. I use Gatsby for creating fast and simple static websites and
          WordPress for creating full featured blog, marketing and ecommerce websites.
        </p>
        <p>
          As with many other developers, I am always on the lookout for the latest shiny
          technology stack.
        </p>
        <p>
          On this blog I intend to write posts about the technologies I am using and
          learning, primarily for self documentation. I will also use it as a place to try
          out fresh ideas and to work on some best practices.
        </p>
        <p className="text-center">
          <Link href="/contact">Get in touch</Link>
        </p>
      </div>

      <div className="mx-auto my-10 grid max-w-screen-md auto-cols-fr gap-2 md:grid-cols-3">
        {settings.social && <SocialLinks settings={settings} />}
      </div>
    </Container>
  );
}
