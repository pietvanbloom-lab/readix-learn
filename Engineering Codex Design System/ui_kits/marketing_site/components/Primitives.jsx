/* global React */
const { useState } = React;

// ---- small primitives ----
const Eyebrow = ({ num, children }) => (
  <span className="eyebrow"><span className="dot">●</span>{num && <span>{num}</span>}{num && <span>·</span>}<span>{children}</span></span>
);

const BtnPrimary = ({ children, onClick }) => (
  <button className="btn-primary" onClick={onClick}>{children}</button>
);
const BtnSecondary = ({ children, onClick }) => (
  <button className="btn-secondary" onClick={onClick}>{children}</button>
);

// ---- nav ----
const Nav = ({ route, go, session, signOut }) => (
  <nav className="nav">
    <div className="nav-brand">
      <span className="nav-mark" onClick={() => go('home')} style={{cursor:'pointer'}}>READIX<span className="am">.</span>NET</span>
      <span className="nav-ver">v.2026.05</span>
    </div>
    <div className="nav-items">
      {[['method','Methodology'],['library','Sample library'],['notes','Field notes'],session && ['live','Live briefs'],['brief','Brief']].filter(Boolean).map(([k,l]) => (
        <a key={k} className={route===k?'active':''} onClick={() => go(k)}>{l}</a>
      ))}
    </div>
    <div className="nav-cta-stack">
      {session ? (
        <>
          <span className="member-pill"><span className="pip"></span>CLIENT · {session.org}</span>
          <span className="signout" onClick={signOut}>Sign out</span>
        </>
      ) : (
        <>
          <a className="signout" onClick={() => go('signin')}>Sign in</a>
          <BtnPrimary onClick={() => go('brief')}>Open a brief</BtnPrimary>
        </>
      )}
    </div>
  </nav>
);

// ---- footer ----
const Footer = () => {
  const [motion, setMotion] = useState(true);
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="nav-mark" style={{fontSize:24}}>READIX<span className="am">.</span>NET</div>
          <div className="nav-ver" style={{marginTop:8}}>v.2026.05 · Built in Berlin</div>
        </div>
        <div className="footer-col"><h4>About</h4><a>Method</a><a>Ethos</a><a>History</a><a>Careers</a></div>
        <div className="footer-col"><h4>Library</h4><a>Briefs</a><a>Perspectives</a><a>Field notes</a><a>Spotlights</a></div>
        <div className="footer-col"><h4>Method</h4><a>Sources</a><a>Verification</a><a>Synthesis</a><a>Confidence</a></div>
        <div className="footer-col"><h4>Contact</h4><a>press@readix.net</a><a>LinkedIn</a><a>X</a><a>Talk to an analyst</a></div>
      </div>
      <div className="footer-base">
        <span>© 2026 Readix. Engineered, not generated.</span>
        <span className={`motion-toggle ${motion?'':'off'}`} onClick={() => setMotion(!motion)}>
          <span className="pip"></span>MOTION · {motion ? 'ON' : 'OFF'}
        </span>
      </div>
    </footer>
  );
};

// ---- apparatus (Codex × Comic mechanical) ----
const Apparatus = ({ tag, caption, variant=1 }) => (
  <div className="apparatus mk2">
    <div className="fig-corner">
      <div className="fig-tag">{tag}</div>
      <div className="fig-up">↤ UP ↦</div>
    </div>
    <div className="core">
      <MachineCompact which={variant} />
    </div>
    <div className="fig-cap">{caption}</div>
  </div>
);

// ---- machine card ----
const MachineCard = ({ tier, name, italic, blurb, items, cta, variant }) => (
  <div className="apparatus" style={{aspectRatio:'auto'}}>
    <div className="fig-corner">
      <div className="fig-tag">TIER {tier}</div>
      <div className="fig-up">↤ UP ↦</div>
    </div>
    <div style={{margin:'24px 0 16px'}}>
      <div style={{fontFamily:'var(--font-display)', fontSize:30, color:'var(--fg-on-paper)', letterSpacing:'-0.02em', fontWeight:600, whiteSpace:'nowrap'}}>{name}</div>
      <div style={{fontFamily:'var(--font-display)', fontStyle:'italic', fontSize:17, color:'var(--fg-on-paper-mute)', marginTop:6, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis'}}>{italic}</div>
    </div>
    <div style={{display:'flex', alignItems:'center', justifyContent:'center', borderTop:'1px dashed #C8B89A', borderBottom:'1px dashed #C8B89A', padding:'12px 0', margin:'0 -8px'}}>
      <MachineCompact which={variant} />
    </div>
    <div style={{margin:'20px 0', fontFamily:'var(--font-prose)', fontSize:16, lineHeight:1.55, color:'var(--fg-on-paper)'}}>{blurb}</div>
    <ul style={{listStyle:'none', padding:0, margin:'0 0 24px', fontFamily:'var(--font-mono)', fontSize:12, color:'var(--fg-on-paper-mute)', letterSpacing:'0.04em'}}>
      {items.map((it,i) => <li key={i} style={{padding:'4px 0', borderBottom:'1px dotted #C8B89A'}}>{it}</li>)}
    </ul>
    <div style={{fontFamily:'var(--font-mono)', fontSize:11, letterSpacing:'0.1em', textTransform:'uppercase', color:'var(--copper-deep)', cursor:'pointer'}}>┌──→ {cta}</div>
  </div>
);

// ---- stat row ----
const StatRow = ({ stats }) => (
  <div className="stats">
    {stats.map((s,i) => (
      <div key={i} className="stat">
        <div className="num">{s.n}</div>
        <div className="lbl">{s.l}</div>
      </div>
    ))}
  </div>
);

// ---- article card ----
const ArticleCard = ({ category, headline, author, mins, gradient }) => (
  <div style={{display:'flex', flexDirection:'column', gap:16, cursor:'pointer'}}>
    <div style={{aspectRatio:1, background:gradient, border:'1px solid var(--gray-800)', position:'relative', overflow:'hidden'}}>
      <svg viewBox="0 0 100 100" width="100%" height="100%" style={{position:'absolute', inset:0, opacity:0.4}} stroke="#D97757" fill="none" strokeWidth="0.3">
        <circle cx="50" cy="50" r="30"/>
        <circle cx="50" cy="50" r="20"/>
        <circle cx="50" cy="50" r="10"/>
        <line x1="20" y1="50" x2="80" y2="50"/>
        <line x1="50" y1="20" x2="50" y2="80"/>
      </svg>
    </div>
    <div style={{fontFamily:'var(--font-mono)', fontSize:11, letterSpacing:'0.15em', textTransform:'uppercase', color:'var(--copper)'}}>{category}</div>
    <div style={{fontFamily:'var(--font-display)', fontSize:24, lineHeight:1.15, color:'var(--paper-warm)', letterSpacing:'-0.01em'}}>{headline}</div>
    <div style={{fontFamily:'var(--font-mono)', fontSize:11, letterSpacing:'0.05em', color:'var(--gray-400)'}}>By {author} · {mins} min</div>
  </div>
);

// ---- trustbar ----
const Trustbar = () => (
  <div className="trust">
    <div className="lbl">● TRUSTED BY</div>
    <div className="lg-serif">Halberd</div>
    <div className="lg-mono">NORTHWIND</div>
    <div className="lg-serif">Atrius</div>
    <div className="lg-mono">FOUNDRY/CO</div>
    <div className="lg-serif">Veritas</div>
    <div className="lg-mono">MERIDIAN</div>
  </div>
);

// expose
Object.assign(window, { Eyebrow, BtnPrimary, BtnSecondary, Nav, Footer, Apparatus, MachineCard, StatRow, ArticleCard, Trustbar });
