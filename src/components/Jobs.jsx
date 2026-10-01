import { jobs } from '../data/content';

function Jobs() {
  return (
    <section id="jobs" className="border-t border-rule py-20 sm:py-24">
      <div className="mx-auto w-full max-w-page px-6 lg:px-10">
        <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Before that
        </h2>

        <div className="mt-12 space-y-12">
          {jobs.map((job) => (
            <div key={job.company} className="grid gap-2 md:grid-cols-[10rem_minmax(0,1fr)] md:gap-10">
              <p className="pt-1 text-sm text-muted">{job.period}</p>

              <div className="max-w-prose">
                <h3 className="font-display text-xl font-semibold tracking-tight">
                  {job.company}
                </h3>
                <p className="mt-0.5 text-[15px] text-muted">{job.role}</p>
                <p className="mt-3 text-[17px] leading-[1.7] text-soft">{job.blurb}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Jobs;
