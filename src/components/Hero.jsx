import Resume from '../assets/DeepanResume.pdf';
import { profile, hero } from '../data/content';
import Shot from './Shot';

function Hero() {
  return (
    <section id="top" className="mx-auto w-full max-w-page px-6 pb-20 pt-16 sm:pt-24 lg:px-10">
      <div className="grid items-start gap-10 md:grid-cols-[minmax(0,1fr)_12rem] md:gap-14">
        <div className="order-2 md:order-1">
          <p className="mb-5 inline-flex items-center gap-2 border border-accent/30 bg-accent/10 px-3 py-1.5 text-sm text-accent">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Looking for my next role
          </p>

          <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            {hero.greeting}
          </h1>

          <div className="mt-7 max-w-prose space-y-5 text-[17px] leading-[1.7] text-soft">
            {hero.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3 text-[15px]">
            <a
              href={`mailto:${profile.email}`}
              className="bg-accent px-5 py-2.5 font-medium text-paper transition-colors hover:bg-ink"
            >
              Say hello
            </a>
            <a href={Resume} download="Deepan-S-Resume.pdf" className="link">
              Resume
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="link">
              GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="link">
              LinkedIn
            </a>
          </div>
        </div>

        {/* Pinned-photo treatment: a small rotation reads as placed by hand. */}
        <div className="order-1 md:order-2">
          <div className="w-44 rotate-1.5 bg-white p-2 shadow-paper sm:w-48 md:w-full">
            {/* Duotone: the photo has a hard studio-blue ground that fights the
                cream palette, so it's desaturated and re-tinted warm. */}
            <div className="relative overflow-hidden">
              <Shot
                src={profile.photo}
                alt={profile.name}
                label="A photo of you"
                ratio="aspect-[4/5]"
                className="grayscale contrast-[1.08]"
              />
              <div className="pointer-events-none absolute inset-0 bg-accent/25 mix-blend-multiply" />
              <div className="pointer-events-none absolute inset-0 bg-paper/15 mix-blend-screen" />
            </div>
            <p className="pb-1 pt-2.5 text-center font-display text-sm text-muted">
              {profile.location}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
