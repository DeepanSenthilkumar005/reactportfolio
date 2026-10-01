import { useState } from 'react';

/**
 * An image that degrades into a labelled placeholder when the file isn't there
 * yet, so a missing screenshot reads as "add one here" instead of a broken icon.
 */
function Shot({ src, alt, label, className = '', ratio = 'aspect-[9/20]' }) {
  const [failed, setFailed] = useState(!src);

  if (failed) {
    return (
      <div
        className={`${ratio} ${className} flex flex-col items-center justify-center gap-1 border border-dashed border-rule bg-card/60 p-4 text-center`}
      >
        <span className="font-display text-sm text-muted">{label}</span>
        <span className="text-xs text-muted/80">add {src}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`${ratio} ${className} w-full object-cover`}
    />
  );
}

export default Shot;
