import { now, skills } from '../data/content';

function About() {
  return (
    <section id="about" className="border-t border-rule bg-card/50 py-20 sm:py-24">
      <div className="mx-auto grid w-full max-w-page gap-12 px-6 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:gap-16 lg:px-10">
        <div>
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            A bit about me
          </h2>

          <div className="mt-7 max-w-prose space-y-5 text-[17px] leading-[1.7] text-soft">
            <p>{now.origin}</p>
            <p>{now.study}</p>
            <p>{now.reading}</p>
            <p>{now.between}</p>
          </div>
        </div>

        <div className="md:pt-3">
          <h3 className="font-display text-sm italic text-accent">What I use</h3>

          <dl className="mt-5 space-y-6">
            {skills.map((group) => (
              <div key={group.label}>
                <dt className="text-sm text-muted">{group.label}</dt>
                <dd className="mt-1.5 text-[16px] leading-[1.7] text-soft">
                  {group.items.join(', ')}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export default About;
