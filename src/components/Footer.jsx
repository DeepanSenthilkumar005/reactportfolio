import { profile } from '../data/content';

function Footer() {
  return (
    <footer className="border-t border-rule py-10">
      <div className="mx-auto flex w-full max-w-page flex-col gap-2 px-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <p>
          © {new Date().getFullYear()} {profile.name} — {profile.location}
        </p>
        <p>Built with React and Tailwind. No template.</p>
      </div>
    </footer>
  );
}

export default Footer;
