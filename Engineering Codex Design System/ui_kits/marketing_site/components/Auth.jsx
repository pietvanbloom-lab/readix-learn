/* global React */
// Auth + member-area pages for the Readix marketing site.
// Routes added: 'signin', 'live' (Live Briefs index), 'radar' (the embedded weekly radar).
// Mock auth only — no real backend. State lives in localStorage under 'readix.session'.

const { useState: useStateA, useEffect: useEffectA } = React;

const SESSION_KEY = 'readix.session';
const readSession = () => { try { return JSON.parse(localStorage.getItem(SESSION_KEY) || 'null'); } catch { return null; } };
const writeSession = (s) => { if (s) localStorage.setItem(SESSION_KEY, JSON.stringify(s)); else localStorage.removeItem(SESSION_KEY); };

// ─── SIGN IN ───
const SignIn = ({ go, onAuth }) => {
  const [mode, setMode] = useStateA('choose'); // choose | magic | sent
  const [email, setEmail] = useStateA('');
  const submitMagic = (e) => {
    e.preventDefault();
    if (!email.includes('@')) return;
    setMode('sent');
    setTimeout(() => {
      const org = email.split('@')[1].split('.')[0].toUpperCase();
      onAuth({ email, name: email.split('@')[0].replace(/[._]/g, ' '), org, method: 'magic' });
      go('live');
    }, 1400);
  };
  const google = () => {
    onAuth({ email: 'priya.vance@fedex.com', name: 'Priya Vance', org: 'FEDEX', method: 'google' });
    go('live');
  };
  return (
    <section className="signin" data-screen-label="06 Sign in">
      <div className="signin-card">
        <div className="signin-corner">
          <div className="fig-tag">● MEMBER ENTRY · FORM 7.0</div>
          <div className="fig-up">↤ UP ↦</div>
        </div>
        <div className="signin-head">
          <div className="eyebrow"><span className="dot">●</span><span>7.0</span><span>·</span><span>SIGN IN</span></div>
          <h1>The reading room.</h1>
          <p className="lead">Members only. Briefs commissioned for your org appear here, signed and dated. Sign in to keep reading.</p>
        </div>

        {mode === 'choose' && (
          <div className="signin-body">
            <button className="auth-btn google" onClick={google}>
              <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
              <span>Continue with Google</span>
            </button>
            <div className="auth-or"><span>OR</span></div>
            <button className="auth-btn magic" onClick={() => setMode('magic')}>
              <span style={{fontFamily:'var(--font-mono)',fontSize:14,letterSpacing:'0.05em'}}>✶</span>
              <span>Email me a magic link</span>
            </button>
            <div className="signin-fineprint">
              By signing in you agree to the <a>house rules</a> and <a>privacy note</a>. Only your work email and your name. Nothing else.
            </div>
          </div>
        )}

        {mode === 'magic' && (
          <form className="signin-body" onSubmit={submitMagic}>
            <label className="auth-label">● WORK EMAIL</label>
            <input className="auth-input" type="email" autoFocus value={email} onChange={e => setEmail(e.target.value)} placeholder="priya @ fedex . com" />
            <div className="hint">We'll send a one-time link. No passwords, ever.</div>
            <div style={{display:'flex',gap:12,marginTop:24}}>
              <button type="button" className="btn-secondary" onClick={() => setMode('choose')}>Back</button>
              <button type="submit" className="btn-primary">Send the link</button>
            </div>
          </form>
        )}

        {mode === 'sent' && (
          <div className="signin-body sent">
            <div className="sent-glyph">┌──→</div>
            <h2>Check your inbox.</h2>
            <p>We sent a magic link to <em>{email}</em>. It expires in 15 minutes. (For the demo we'll let you in automatically.)</p>
          </div>
        )}
      </div>
    </section>
  );
};

// ─── LIVE BRIEFS · index of in-flight client work ───
const LiveBriefs = ({ session, go, theme, setTheme }) => {
  const briefs = [
    { wk:'WK19', date:'06 May 2026', title:'AI Intelligence Radar', topic:'Generative AI · operations', status:'live', author:'J. Ranganathan', readingTime:14, route:'radar' },
    { wk:'WK18', date:'29 Apr 2026', title:'Carrier consolidation watchlist', topic:'Logistics · M&A', status:'archived', author:'K. Otieno', readingTime:11 },
    { wk:'WK17', date:'22 Apr 2026', title:'EU AI Act · operational redlines', topic:'Regulation', status:'archived', author:'L. Bauer', readingTime:18 },
    { wk:'WK16', date:'15 Apr 2026', title:'Last-mile labor markets · DE / FR / NL', topic:'Workforce', status:'archived', author:'S. Adeyemi', readingTime:9 },
    { wk:'WK15', date:'08 Apr 2026', title:'Customs digitization · post-CBAM', topic:'Trade', status:'archived', author:'M. Ostrowski', readingTime:13 },
  ];
  return (
    <section className="live" data-screen-label="07 Live briefs">
      {theme !== undefined && <ThemeChip theme={theme} setTheme={setTheme} />}
      <div className="inner">
        <div className="live-bar">
          <div>
            <div className="eyebrow"><span className="dot">●</span><span>8.0</span><span>·</span><span>LIVE BRIEFS · {session.org} EU</span></div>
            <h1 style={{fontFamily:'var(--font-display)',fontSize:64,lineHeight:1,letterSpacing:'-0.025em',color:'var(--paper-warm)',margin:'16px 0',fontWeight:600}}>
              The reading room.
            </h1>
            <p style={{fontFamily:'var(--font-sans)',fontSize:18,color:'var(--gray-200)',maxWidth:'60ch'}}>
              In-flight briefs commissioned for {session.org}. New radar every Monday at 06:00 CET. Confidential.
            </p>
          </div>
          <div className="next-drop">
            <div className="t-mono-label">NEXT DROP</div>
            <div className="next-time">MON · 11 MAY · 06:00 CET</div>
            <div className="t-mono-label" style={{marginTop:12}}>CADENCE</div>
            <div style={{fontFamily:'var(--font-display)',fontSize:18,color:'var(--paper-warm)',marginTop:4}}>Weekly · Monday morning</div>
          </div>
        </div>

        <div className="live-table">
          <div className="live-head">
            <span>WK</span><span>DATE</span><span>BRIEF</span><span>TOPIC</span><span>BY</span><span>READ</span><span></span>
          </div>
          {briefs.map(b => (
            <div key={b.wk} className={`live-row ${b.status}`} onClick={() => b.route && go(b.route)}>
              <span className="wk">{b.wk}</span>
              <span className="date">{b.date}</span>
              <span className="title">
                {b.title}
                {b.status==='live' && <span className="live-dot">● LIVE</span>}
              </span>
              <span className="topic">{b.topic}</span>
              <span className="by">{b.author}</span>
              <span className="read">{b.readingTime} min</span>
              <span className="cta">{b.route ? '┌──→ READ' : 'ARCHIVE'}</span>
            </div>
          ))}
        </div>

        <div className="live-foot">
          <div>
            <div className="t-mono-label">ANALYST ON CALL</div>
            <div style={{fontFamily:'var(--font-display)',fontSize:24,color:'var(--paper-warm)',marginTop:6}}>J. Ranganathan</div>
            <div style={{fontFamily:'var(--font-mono)',fontSize:11,color:'var(--gray-400)',marginTop:4}}>jr@readix.net · book a 20-min slot</div>
          </div>
          <div>
            <div className="t-mono-label">EXPORT</div>
            <div style={{display:'flex',gap:12,marginTop:8}}>
              <button className="btn-secondary">Download PDF pack</button>
              <button className="btn-secondary">Private RSS</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── RADAR · embeds the FedEx WK19 brief in a member shell ───
const RadarFrame = ({ session, go, theme, setTheme }) => {
  const iframeRef = React.useRef(null);
  // Push the current theme into the iframe on mount and whenever it changes
  React.useEffect(() => {
    const send = () => {
      try { iframeRef.current && iframeRef.current.contentWindow.postMessage({ readixTheme: theme }, '*'); } catch {}
    };
    send();
  }, [theme]);
  return (
    <section className="radar-shell" data-screen-label="08 Radar · WK19">
      <div className="radar-bar">
        <button className="back" onClick={() => go('live')}>← All briefs</button>
        <div className="radar-meta">
          <span className="t-mono-label">WK19 · 06 MAY 2026</span>
          <span className="sep">·</span>
          <span className="t-mono-label">{session.org} EU · CONFIDENTIAL</span>
          <span className="sep">·</span>
          <span className="t-mono-label" style={{color:'var(--copper)'}}>● LIVE</span>
        </div>
        <div className="radar-actions">
          {theme !== undefined && <ThemeChip theme={theme} setTheme={setTheme} anchor="static" />}
          <button className="btn-secondary sm">Annotate</button>
          <button className="btn-secondary sm">Share</button>
        </div>
      </div>
      <div className="radar-watermark">{session.org} EU · CONFIDENTIAL · WK19 · 2026</div>
      <iframe
        ref={iframeRef}
        src="briefs/wk19-fedex-eu-ai-radar.html"
        className="radar-iframe"
        title="Weekly Radar"
        onLoad={() => { try { iframeRef.current.contentWindow.postMessage({ readixTheme: theme }, '*'); } catch {} }}
      ></iframe>
    </section>
  );
};

// ─── Hard-wall gate (for redirects when not signed in) ───
const Gate = ({ go, dest }) => (
  <section className="gate" data-screen-label="09 Gate">
    <div className="gate-card">
      <div className="signin-corner">
        <div className="fig-tag">● ACCESS · LOCKED</div>
        <div className="fig-up">↤ UP ↦</div>
      </div>
      <div className="eyebrow"><span className="dot">●</span><span>9.0</span><span>·</span><span>RESTRICTED</span></div>
      <h2>This brief is for members.</h2>
      <p className="lead">Live briefs are commissioned work, signed by the analyst on call. Sign in with your work email to read this week's radar.</p>
      <div style={{display:'flex',gap:12,marginTop:24}}>
        <button className="btn-primary" onClick={() => go('signin')}>Sign in</button>
        <button className="btn-secondary" onClick={() => go('library')}>See public samples</button>
      </div>
      <div className="gate-fine">
        Not a client yet? <a onClick={() => go('brief')}>Open a brief</a> — your first delivery unlocks the reading room.
      </div>
    </div>
  </section>
);

Object.assign(window, { SignIn, LiveBriefs, RadarFrame, Gate, readSession, writeSession });
