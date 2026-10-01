import { feature } from '../data/content';
import Shot from './Shot';

/**
 * The supplied logo is a full lockup (icon + wordmark) on a square canvas.
 * This crops to just the icon so it can sit inline like a real app icon.
 * Offsets are measured off the 1563px source: icon spans x 470–1095, y 270–895.
 */
function AppIcon({ src, size = 64 }) {
  const scale = size / (625 / 1563);
  return (
    <span
      className="relative block shrink-0 overflow-hidden rounded-[22%] shadow-paper"
      style={{ width: size, height: size }}
    >
      <img
        src={src}
        alt=""
        className="absolute max-w-none"
        style={{
          width: scale,
          left: -(470 / 1563) * scale,
          top: -(270 / 1563) * scale,
        }}
      />
    </span>
  );
}

function StoreButton({ href, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group inline-flex items-center gap-2 bg-ink px-4 py-3 text-[14px] font-medium text-paper transition-colors hover:bg-accent"
    >
      {label}
      <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
        ↗
      </span>
    </a>
  );
}

function Dendo() {
  const { brand, shots } = feature;
  const live = feature.links.filter((link) => link.href);

  return (
    <section id="dendo" className="border-y border-rule bg-card/50 py-20 sm:py-24">
      <div className="mx-auto grid w-full max-w-page items-center gap-14 px-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-16 lg:px-10">
        <div>
          <p className="font-display text-sm italic text-accent">{feature.kicker}</p>

          <div className="mt-4 flex items-center gap-4">
            <AppIcon src={brand.logo} />
            <div>
              <h2 className="font-display text-4xl font-semibold leading-none tracking-tight sm:text-5xl">
                {feature.title}
              </h2>
              <p className="mt-1.5 text-[15px] text-muted">{feature.subtitle}</p>
            </div>
          </div>

          <div className="mt-8 max-w-prose space-y-5 text-[17px] leading-[1.7] text-soft">
            {feature.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          {live.length > 0 && (
            <div className="mt-9 flex flex-wrap gap-3">
              {live.map((link) => (
                <StoreButton key={link.href} {...link} />
              ))}
            </div>
          )}
        </div>

        {shots.length > 0 ? (
          // Phones fanned slightly so the row doesn't read as a spec sheet.
          <div className="flex items-end justify-center gap-3 sm:gap-5">
            {shots.map((shot, i) => (
              <figure
                key={shot.src}
                className={[
                  'w-1/3 max-w-[11rem] rounded-[1.6rem] border border-rule bg-white p-1.5 shadow-lift transition-transform duration-300 hover:-translate-y-1.5',
                  i === 0 ? '-rotate-3 md:mb-8' : '',
                  i === 1 ? 'z-10' : '',
                  i === 2 ? 'rotate-3 md:mb-8' : '',
                ].join(' ')}
              >
                <Shot
                  src={shot.src}
                  alt={`Dendo — ${shot.label}`}
                  label={shot.label}
                  className="rounded-[1.2rem] bg-white"
                />
              </figure>
            ))}
          </div>
        ) : (
          <figure className="rotate-1.5 border border-rule bg-white p-8 shadow-paper">
            <img src={brand.logo} alt="Dendo" className="mx-auto w-full max-w-[15rem]" />
          </figure>
        )}
      </div>
    </section>
  );
}

export default Dendo;
