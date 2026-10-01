import Bus360 from '../assets/bus360.jpg';
import { work } from '../data/content';

const images = { bus360: Bus360 };

function Work() {
  return (
    <section id="work" className="mx-auto w-full max-w-page px-6 py-20 sm:py-24 lg:px-10">
      <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
        Other things I&apos;ve built
      </h2>

      <div className="mt-12 space-y-16">
        {work.map((item, i) => {
          const image = item.image ? images[item.image] : null;

          return (
            <article
              key={item.title}
              className={`grid gap-8 md:gap-12 ${
                image ? 'md:grid-cols-2 md:items-center' : ''
              }`}
            >
              {image && (
                <div
                  className={`overflow-hidden border border-rule bg-white p-1.5 shadow-paper ${
                    i % 2 ? 'md:order-2' : ''
                  }`}
                >
                  <img
                    src={image}
                    alt={item.title}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover object-top"
                  />
                </div>
              )}

              <div className={image ? '' : 'max-w-prose'}>
                <div className="flex items-baseline gap-3">
                  <h3 className="font-display text-2xl font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <span className="text-sm text-muted">{item.year}</span>
                </div>

                <p className="mt-4 text-[17px] leading-[1.7] text-soft">{item.blurb}</p>

                {item.hard && (
                  <p className="mt-4 border-l-2 border-accent/40 pl-4 text-[17px] leading-[1.7] text-soft">
                    {item.hard}
                  </p>
                )}

                <p className="mt-5 text-sm text-muted">{item.stack.join(' · ')}</p>

                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="link mt-4 inline-block text-[15px]"
                  >
                    See the code ↗
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Work;
