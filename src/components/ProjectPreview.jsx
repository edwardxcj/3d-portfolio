import { useEffect, useRef, useState } from "react";

export default function ProjectPreview({ name, preview }) {
  const container = useRef(null);
  const [scale, setScale] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Only embed the app when the browser can isolate its cookies and storage.
    if (!("credentialless" in HTMLIFrameElement.prototype)) return;

    const observer = new ResizeObserver(([entry]) => {
      setScale(entry.contentRect.width / preview.width);
    });
    observer.observe(container.current);
    return () => observer.disconnect();
  }, [preview.width]);

  return (
    <div
      ref={container}
      className="relative isolate overflow-hidden rounded-xl border border-slate-200 bg-slate-900"
    >
      <img
        src={preview.source}
        alt={preview.alt}
        width={preview.width}
        height={preview.height}
        className="block h-auto w-full"
        decoding="async"
      />
      {scale > 0 && (
        <iframe
          src={preview.url}
          title={`${name} website preview`}
          width={preview.width}
          height={preview.height}
          sandbox="allow-scripts allow-same-origin"
          credentialless=""
          referrerPolicy="no-referrer"
          tabIndex={-1}
          aria-hidden="true"
          inert=""
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={`pointer-events-none absolute left-0 top-0 border-0 ${loaded ? "" : "invisible"}`}
          style={{ zoom: scale }}
        />
      )}
      <a
        href={preview.siteUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-white"
        aria-label={`Open ${name} website (opens in a new tab)`}
      />
    </div>
  );
}
