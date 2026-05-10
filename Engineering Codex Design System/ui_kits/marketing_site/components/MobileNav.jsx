/* global React */
const { useState, useEffect } = React;

// ===========================================================
// MobileNav — two patterns, both tap-target friendly.
// Pattern A: Hamburger drawer (slides from right with full nav)
// Pattern B: Bottom tab bar (5 primary destinations)
// ===========================================================

const MOBILE_BREAKPOINT = 640;

function useIsMobile() {
  const [m, setM] = useState(() =>
    typeof window !== 'undefined' && window.innerWidth <= MOBILE_BREAKPOINT
  );
  useEffect(() => {
    const onR = () => setM(window.innerWidth <= MOBILE_BREAKPOINT);
    window.addEventListener('resize', onR);
    return () => window.removeEventListener('resize', onR);
  }, []);
  return m;
}

// ----- Pattern A: Hamburger drawer -----
const MobileNavHamburger = ({ route, go, session, signOut }) => {
  const [open, setOpen] = useState(false);
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; return () => { document.body.style.overflow = ''; }; }, [open]);
  const items = [
    ['method','Methodology'],
    ['library','Sample library'],
    ['notes','Field notes'],
    session && ['live','Live briefs'],
    ['brief','Brief'],
  ].filter(Boolean);
  const tap = (k) => { go(k); setOpen(false); };
  return (
    <>
      <header className="mnav mnav-hamburger">
        <div className="mnav-mark" onClick={() => go('home')}>
          READIX<span className="am">.</span>NET
        </div>
        <div className="mnav-right">
          {!session && <button className="mnav-cta" onClick={() => go('brief')}>Brief</button>}
          {session && <span className="mnav-pill"><span className="pip"></span>{session.org}</span>}
          <button className={`mnav-burger ${open?'open':''}`} onClick={() => setOpen(!open)} aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>
      <div className={`mnav-drawer ${open?'open':''}`}>
        <div className="mnav-drawer-inner">
          <div className="mnav-drawer-eyebrow">● MENU · v.2026.05</div>
          <nav className="mnav-drawer-list">
            {items.map(([k,l]) => (
              <a key={k} className={route===k?'active':''} onClick={() => tap(k)}>
                <span className="num">{String(items.findIndex(i=>i[0]===k)+1).padStart(2,'0')}</span>
                <span className="lbl">{l}</span>
                <span className="arr">→</span>
              </a>
            ))}
          </nav>
          <div className="mnav-drawer-cta">
            {session ? (
              <button className="mnav-drawer-out" onClick={() => { signOut(); setOpen(false); }}>Sign out</button>
            ) : (
              <>
                <button className="btn-primary" onClick={() => tap('brief')}>┌──→ Open a brief</button>
                <a className="mnav-drawer-out" onClick={() => tap('signin')}>Sign in</a>
              </>
            )}
          </div>
          <div className="mnav-drawer-foot">© 2026 Readix · Engineered, not generated.</div>
        </div>
      </div>
    </>
  );
};

// ----- Pattern B: Bottom tab bar -----
const MobileNavBottom = ({ route, go, session, signOut }) => {
  // 5 slots — adapt to session
  const tabs = session ? [
    { k:'home',    l:'Home',    icon:'◐' },
    { k:'library', l:'Library', icon:'▤' },
    { k:'live',    l:'Live',    icon:'◉' },
    { k:'brief',   l:'Brief',   icon:'✎' },
    { k:'menu',    l:'More',    icon:'…' },
  ] : [
    { k:'home',    l:'Home',    icon:'◐' },
    { k:'method',  l:'Method',  icon:'⊕' },
    { k:'library', l:'Library', icon:'▤' },
    { k:'notes',   l:'Notes',   icon:'⌂' },
    { k:'menu',    l:'More',    icon:'…' },
  ];
  const [moreOpen, setMoreOpen] = useState(false);
  const tap = (k) => {
    if (k === 'menu') { setMoreOpen(true); return; }
    setMoreOpen(false);
    go(k);
  };
  const moreItems = session
    ? [['method','Methodology'],['notes','Field notes']]
    : [['live','Live briefs (sign in)'],['brief','Open a brief'],['signin','Sign in']];
  return (
    <>
      <header className="mnav mnav-top-min">
        <div className="mnav-mark" onClick={() => go('home')}>READIX<span className="am">.</span>NET</div>
        <div className="mnav-right">
          {session ? (
            <span className="mnav-pill"><span className="pip"></span>{session.org}</span>
          ) : (
            <button className="mnav-cta primary" onClick={() => go('brief')}>┌→ Brief</button>
          )}
        </div>
      </header>
      <nav className="mnav-tabs">
        {tabs.map(t => (
          <button key={t.k} className={`mnav-tab ${route===t.k?'active':''}`} onClick={() => tap(t.k)}>
            <span className="ico">{t.icon}</span>
            <span className="lbl">{t.l}</span>
          </button>
        ))}
      </nav>
      {moreOpen && (
        <div className="mnav-more-sheet" onClick={() => setMoreOpen(false)}>
          <div className="mnav-more-card" onClick={e => e.stopPropagation()}>
            <div className="mnav-drawer-eyebrow">● MORE</div>
            <div className="mnav-more-list">
              {moreItems.map(([k,l]) => (
                <a key={k} onClick={() => tap(k)}>
                  <span className="lbl">{l}</span>
                  <span className="arr">→</span>
                </a>
              ))}
              {session && <a onClick={() => { signOut(); setMoreOpen(false); }}><span className="lbl">Sign out</span><span className="arr">↗</span></a>}
            </div>
            <button className="mnav-more-close" onClick={() => setMoreOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

// ----- Wrapper -----
const MobileNav = ({ pattern, ...props }) => {
  useEffect(() => {
    document.body.dataset.mobilenav = pattern;
    return () => { delete document.body.dataset.mobilenav; };
  }, [pattern]);
  if (pattern === 'bottom') return <MobileNavBottom {...props} />;
  return <MobileNavHamburger {...props} />;
};

Object.assign(window, { MobileNav, useIsMobile, MOBILE_BREAKPOINT });
