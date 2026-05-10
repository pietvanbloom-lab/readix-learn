/* global React */
// Reading-room theme toggle: 'dark' (default) or 'lighter' (warm graphite).
// Used by Brief Builder, Live Briefs, and the Radar shell.
// Persisted to localStorage. Posted into the wk19 iframe so the standalone brief follows along.

const THEME_KEY = 'readix.theme';

const readTheme = () => {
  try { return localStorage.getItem(THEME_KEY) || 'dark'; } catch { return 'dark'; }
};

const useTheme = () => {
  const [theme, _setTheme] = React.useState(readTheme);
  const setTheme = (t) => {
    _setTheme(t);
    try { localStorage.setItem(THEME_KEY, t); } catch {}
    // Broadcast to any open iframe (the wk19 standalone brief)
    document.querySelectorAll('iframe.radar-iframe').forEach(f => {
      try { f.contentWindow.postMessage({ readixTheme: t }, '*'); } catch {}
    });
  };
  return [theme, setTheme];
};

// Small chip — sits top-right of brief / live / radar views.
const ThemeChip = ({ theme, setTheme, anchor = 'absolute' }) => {
  const isLighter = theme === 'lighter';
  return (
    <div
      className={`theme-chip ${isLighter ? 'is-lighter' : ''}`}
      style={{ position: anchor }}
      onClick={() => setTheme(isLighter ? 'dark' : 'lighter')}
      title="Toggle reading tone"
    >
      <span className="t-mono-label" style={{ color: 'inherit', letterSpacing: '0.14em' }}>READING</span>
      <span className="theme-chip-track">
        <span className={`theme-chip-pip ${isLighter ? 'right' : 'left'}`}></span>
      </span>
      <span className="theme-chip-label">{isLighter ? 'LIGHTER' : 'DARK'}</span>
    </div>
  );
};

Object.assign(window, { useTheme, readTheme, ThemeChip });
