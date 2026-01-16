export function PlasmaBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="plasma-container">
        <div className="plasma-blob plasma-blob-1"></div>
        <div className="plasma-blob plasma-blob-2"></div>
        <div className="plasma-blob plasma-blob-3"></div>
        <div className="plasma-blob plasma-blob-4"></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-cyan-900/20 to-violet-900/20"></div>
    </div>
  );
}
