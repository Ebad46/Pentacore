export default function Noise() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[1] h-full w-full">
      <svg className="absolute inset-0 h-full w-full opacity-[0.04] mix-blend-overlay">
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.7" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </div>
  );
}
