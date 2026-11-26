// Divisor minimalista: filetes finos com um losango central
export default function Ornament() {
  return (
    <div className="ornament" aria-hidden="true">
      <svg viewBox="0 0 240 16" width="200" height="14" fill="none" stroke="currentColor" strokeWidth="1">
        <line x1="0" y1="8" x2="104" y2="8" />
        <path d="M120 2 L126 8 L120 14 L114 8 Z" />
        <line x1="136" y1="8" x2="240" y2="8" />
      </svg>
    </div>
  );
}
