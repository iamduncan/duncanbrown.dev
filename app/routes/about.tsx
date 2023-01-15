export default function About() {
  return (
    <div className="dark:text-slate-50">
      <div className="mx-10 rounded-xl bg-slate-300 p-6 dark:bg-slate-800">
        <h1 className="text-4xl">Hi, I'm Duncan 👋</h1>
        <div className="mt-8 w-full">
          <h2 className="text-2xl">About Me</h2>
          <p className="mt-4">
            I'm a full stack developer from the UK. I help small businesses with
            their online presence by building them websites and applications. I
            also like to write about my experiences and share my knowledge with
            others.
          </p>
        </div>
        <div className="mt-8 w-full">
          <h2 className="text-2xl">What I Do</h2>
          <p className="mt-4">
            I'm a full stack developer, which means I can build you a website or
            application from the ground up. I can also help you with your
            existing website or application by adding new features or fixing
            bugs.
          </p>
        </div>
        <div className="mt-8 w-full">
          <h2 className="text-2xl">How I Work</h2>
          <p className="mt-4">
            I like to work closely with my clients to ensure that I'm building
            them exactly what they want. I also like to keep my clients in the
            loop throughout the development process so they can see the progress
            being made.
          </p>
        </div>
        <div className="mt-8 flex w-full">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl">What I&apos;ve done</h2>
            <ul>
              <li>MyLocal Gifts</li>
              <li>Wiltshire Gifts</li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl">What I&apos;m working on</h2>
            <ul className="py-6">
              <li>Scout Challenge</li>
              <li>Get into the Garden</li>
              <li>WordPress Update Server</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
