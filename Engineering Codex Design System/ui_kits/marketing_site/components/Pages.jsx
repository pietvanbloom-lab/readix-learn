/* global React, Nav, Footer, Eyebrow, BtnPrimary, BtnSecondary, Apparatus, MachineCard, StatRow, ArticleCard, Trustbar */
const { useState } = React;

// ===== HOME =====
const Home = ({ go }) => (
  <>
    <section className="section hero" data-screen-label="01 Home">
      <div className="inner">
        <div className="hero-wrap">
          <div className="hero">
            <Eyebrow num="00">INTRODUCTION</Eyebrow>
            <h1>Research that closes <em>the questions</em> that matter.</h1>
            <p className="lead">Engineered, not generated. Delivered in 48 hours by analysts who read the footnotes.</p>
            <div className="hero-ctas">
              <BtnPrimary onClick={() => go('brief')}>Start a brief</BtnPrimary>
              <BtnSecondary onClick={() => go('library')}>See a sample</BtnSecondary>
            </div>
          </div>
          <Apparatus tag="FIG 0.1" caption="FIG 0.1 · The Codex stack" variant={1} />
        </div>
      </div>
    </section>

    <section className="section tight">
      <div className="inner">
        <StatRow stats={[
          {n:'48h', l:'standard turnaround'},
          {n:'97%', l:'client retention'},
          {n:'300+', l:'briefs delivered'},
          {n:'24', l:'industries covered'},
        ]} />
      </div>
    </section>

    <section className="section paper">
      <div className="inner">
        <div className="section-head">
          <div>
            <Eyebrow num="2.0">SERVICE TIERS</Eyebrow>
            <h2>Three machines. <em>One workshop.</em></h2>
          </div>
          <div className="sub">Pick by question shape, not seat count. Every tier is staffed by a senior analyst who signs the cover page.</div>
        </div>
        <div className="machine-grid">
          <MachineCard tier="01" name="The Brief" italic="the rapid response" variant={1}
            blurb="Single-question reports, 48-hour turnaround. For when the board meeting is on Thursday."
            items={['Scope · 1 question','Sources · 5–10','Format · 8-page PDF','Turnaround · 48 hours']}
            cta="Start a brief" />
          <MachineCard tier="02" name="The Engine" italic="the running analytics" variant={2}
            blurb="Continuous research streams with monthly cadence. A standing analyst on retainer."
            items={['Scope · ongoing topic','Sources · 30+','Format · dashboard + memo','Cadence · monthly']}
            cta="Configure your engine" />
          <MachineCard tier="03" name="The Foundry" italic="the custom programme" variant={3}
            blurb="Enterprise research operations, fully bespoke. A dedicated team and board-ready outputs."
            items={['Scope · bespoke','Sources · unrestricted','Format · custom','Team · dedicated']}
            cta="Talk to the foundry" />
        </div>
      </div>
    </section>

    <section className="section">
      <div className="inner">
        <div className="quote-block">
          <div>
            <Eyebrow num="3.1">A CFO ON COMPRESSION</Eyebrow>
            <div style={{height:24}}/>
            <div className="q">"We replaced a six-week McKinsey workstream with a Codex brief. The analyst caught three regulatory edges our deck missed."</div>
            <div className="meta">— Priya Vance, CFO, Halberd Industries</div>
          </div>
          <div style={{aspectRatio:'1.4', background:'linear-gradient(135deg, #273951, #091423)', border:'1px solid var(--gray-800)'}}/>
        </div>
      </div>
    </section>

    <section className="section paper">
      <div className="inner">
        <div className="section-head">
          <div>
            <Eyebrow num="4.0">SAMPLE LIBRARY</Eyebrow>
            <h2>Recently <em>shipped.</em></h2>
          </div>
          <div className="sub">A rotating slice of work we've delivered. Anonymized where required. Click any title to read the full brief.</div>
        </div>
        <div className="article-grid" style={{filter:'invert(0)'}}>
          <ArticleCard category="BRIEF · READ" headline="Procurement compression in mid-market SaaS, Q1 2026." author="J. Ranganathan" mins={12} gradient="linear-gradient(135deg,#E8DCC0,#B85F40)" />
          <ArticleCard category="PERSPECTIVE · READ" headline="Why most uptime claims are accounting, not engineering." author="M. Ostrowski" mins={6} gradient="linear-gradient(135deg,#091423,#273951)" />
          <ArticleCard category="FIELD NOTE · READ" headline="The methodology drift we found in our own Q3 sources." author="S. Adeyemi" mins={4} gradient="linear-gradient(135deg,#B85F40,#091423)" />
        </div>
      </div>
    </section>

    <section className="section tight">
      <div className="inner"><Trustbar /></div>
    </section>
  </>
);

// ===== METHODOLOGY =====
const Methodology = () => (
  <section className="longread" data-screen-label="02 Methodology">
    <div className="inner">
      <div className="meta">● 1.0 · METHODOLOGY · v.2026.05</div>
      <h1>How we read the footnotes.</h1>
      <div className="prose">
        <p>The most expensive thing in research is a confident answer that turns out to be a footnote misread. Our method is built around catching the moment where the source diverges from the citation, not the moment the model finishes its sentence.</p>
        <p>Every brief moves through three stations. Sources, verification, synthesis. Each station is staffed by a different analyst. Nobody verifies their own gather, and nobody synthesizes their own verification. The handoff is the audit.</p>

        <h2>1.1 Sources</h2>
        <p>We start with a question, not a query. The lead analyst writes a one-page intake that names the decision the brief will support. From that intake we build a source map of primary documents, secondary commentary, adjacent regulatory filings, and the three or four practitioners worth a phone call.</p>

        <div className="pull">"The model is the last tool we reach for, not the first. By the time it sees the source set, the set has already been read."</div>

        <h2>1.2 Verification</h2>
        <p>A second analyst takes the gather and tries to break it. They re-read every cited paragraph in its original context. They re-derive every number from its primary source. They flag the gap between what a source actually says and what the brief is about to claim it says.</p>

        <div className="figure">
          <div className="img" style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <svg viewBox="0 0 400 240" width="80%" stroke="#D97757" fill="none" strokeWidth="0.8">
              <line x1="40" y1="200" x2="360" y2="200"/>
              <line x1="40" y1="40" x2="40" y2="200"/>
              <path d="M40,180 L100,160 L160,140 L220,90 L280,70 L340,50" stroke="#D97757" strokeWidth="1.5"/>
              <path d="M40,190 L100,180 L160,170 L220,140 L280,120 L340,100" stroke="#4A6FA5" strokeWidth="1.2" strokeDasharray="3,2"/>
              <circle cx="220" cy="90" r="4" fill="#D97757"/>
              <text x="226" y="84" fontSize="8" fontFamily="monospace" fill="#D97757">Q3 spike · sec 4(b)</text>
              <text x="40" y="225" fontSize="9" fontFamily="monospace" fill="#6B5D45">Q1   Q2   Q3   Q4</text>
            </svg>
          </div>
          <div className="cap">FIG 1.2 · Methodology drift, Q1–Q4 2025. The Q3 spike correlates with the regulatory change in section 4(b). See Appendix A for source breakdown.</div>
        </div>

        <h2>1.3 Synthesis</h2>
        <p>Only after both passes does a third analyst write the brief. Synthesis is where the work earns its honorific: a careful argument with a recommendation, not a montage of bullet points. Confidence levels are stated explicitly. Where we are guessing, we say so.</p>
      </div>
    </div>
  </section>
);

// ===== LIBRARY =====
const Library = () => {
  const [filter, setFilter] = useState('all');
  const items = [
    {cat:'brief', label:'BRIEF', headline:'Procurement compression in mid-market SaaS, Q1 2026.', author:'J. Ranganathan', mins:12, gradient:'linear-gradient(135deg,#E8DCC0,#B85F40)'},
    {cat:'perspective', label:'PERSPECTIVE', headline:'Why most uptime claims are accounting, not engineering.', author:'M. Ostrowski', mins:6, gradient:'linear-gradient(135deg,#091423,#273951)'},
    {cat:'field', label:'FIELD NOTE', headline:'The methodology drift we found in our own Q3 sources.', author:'S. Adeyemi', mins:4, gradient:'linear-gradient(135deg,#B85F40,#091423)'},
    {cat:'spotlight', label:'SPOTLIGHT', headline:'A read-along of the EU AI Act, with the redlines marked.', author:'L. Bauer', mins:18, gradient:'linear-gradient(135deg,#788C5D,#091423)'},
    {cat:'brief', label:'BRIEF', headline:'Carrier consolidation in trans-Atlantic logistics, 2024–26.', author:'K. Otieno', mins:10, gradient:'linear-gradient(135deg,#FFC47C,#B85F40)'},
    {cat:'perspective', label:'PERSPECTIVE', headline:'The end of the dashboard era. (And what replaces it.)', author:'M. Ostrowski', mins:8, gradient:'linear-gradient(135deg,#7389FF,#091423)'},
    {cat:'field', label:'FIELD NOTE', headline:'Three procurement reports we will not publish, and why.', author:'J. Ranganathan', mins:5, gradient:'linear-gradient(135deg,#4A6FA5,#091423)'},
    {cat:'brief', label:'BRIEF', headline:'EBITDA quality in roll-up dental services, 2026.', author:'S. Adeyemi', mins:14, gradient:'linear-gradient(135deg,#E8DCC0,#6B5D45)'},
    {cat:'spotlight', label:'SPOTLIGHT', headline:'Reading the FTC merger guidelines as an operator.', author:'L. Bauer', mins:22, gradient:'linear-gradient(135deg,#091423,#B85F40)'},
  ];
  const filtered = filter==='all' ? items : items.filter(i => i.cat===filter);
  return (
    <section className="lib" data-screen-label="03 Library">
      <div className="inner">
        <Eyebrow num="4.0">SAMPLE LIBRARY</Eyebrow>
        <h1 style={{fontFamily:'var(--font-display)', fontSize:64, lineHeight:1, letterSpacing:'-0.025em', color:'var(--paper-warm)', margin:'16px 0', fontWeight:600}}>
          Read what we ship.
        </h1>
        <p style={{fontFamily:'var(--font-sans)', fontSize:18, color:'var(--gray-200)', maxWidth:'60ch'}}>
          Briefs, perspectives, field notes, and spotlights. Anonymized where contractually required. Updated monthly.
        </p>
        <div className="lib-filters">
          {[['all','All'],['brief','Briefs'],['perspective','Perspectives'],['field','Field notes'],['spotlight','Spotlights']].map(([k,l]) => (
            <button key={k} className={`lib-pill ${filter===k?'active':''}`} onClick={() => setFilter(k)}>{l}</button>
          ))}
        </div>
        <div className="lib-grid">
          {filtered.map((it,i) => (
            <ArticleCard key={i} category={`${it.label} · READ`} headline={it.headline} author={it.author} mins={it.mins} gradient={it.gradient} />
          ))}
        </div>
      </div>
    </section>
  );
};

// ===== BRIEF BUILDER =====
const Brief = ({ go, theme, setTheme }) => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({ q:'', tier:'brief', deadline:'', context:'' });
  const set = (k,v) => setData(d => ({...d, [k]:v}));
  return (
    <section className="brief" data-screen-label="04 Brief builder">
      {theme !== undefined && <ThemeChip theme={theme} setTheme={setTheme} />}
      <div className="inner">
        <Eyebrow num="6.0">BRIEF BUILDER</Eyebrow>
        <h1 style={{marginTop:16}}>Open a brief.</h1>
        <div className="ask">Three fields. Then we call you.</div>

        <div className="brief-progress">
          {['the question','the depth','the deadline'].map((nm,i) => (
            <div key={i} className={`step ${step===i+1?'active':''}`}>
              <div className="num">0{i+1} ·</div>
              <div className="nm">{nm}</div>
            </div>
          ))}
        </div>

        {step===1 && (
          <>
            <div className="brief-field">
              <label>● FIELD 01 · THE QUESTION</label>
              <input value={data.q} onChange={e => set('q', e.target.value)} placeholder="What's eating into our gross margin?" />
              <div className="hint">One question. Sharper is faster. We will rewrite it with you on the call.</div>
            </div>
            <div className="brief-field">
              <label>● FIELD 02 · CONTEXT (OPTIONAL)</label>
              <textarea rows={3} value={data.context} onChange={e => set('context', e.target.value)} placeholder="The decision this brief will support, and by when." />
            </div>
          </>
        )}

        {step===2 && (
          <div className="brief-field">
            <label>● FIELD 03 · DEPTH</label>
            <div className="opts">
              {[
                {k:'brief', nm:'The Brief', meta:'8-page PDF · 5–10 sources · 48h'},
                {k:'engine', nm:'The Engine', meta:'Dashboard + memo · 30+ sources · monthly'},
                {k:'foundry', nm:'The Foundry', meta:'Custom · unrestricted · dedicated team'},
              ].map(o => (
                <div key={o.k} className={`opt ${data.tier===o.k?'sel':''}`} onClick={() => set('tier', o.k)}>
                  <div className="nm">{o.nm}</div>
                  <div className="meta">{o.meta}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {step===3 && (
          <>
            <div className="brief-field">
              <label>● FIELD 04 · DEADLINE</label>
              <input value={data.deadline} onChange={e => set('deadline', e.target.value)} placeholder="By Thursday, 14 May, board pack" />
              <div className="hint">Real deadlines only. We price against turnaround.</div>
            </div>
            <div className="brief-field">
              <label>● FIELD 05 · WHO TO CALL</label>
              <input placeholder="name @ company . com" />
            </div>
          </>
        )}

        <div className="brief-nav">
          <BtnSecondary onClick={() => step>1 ? setStep(step-1) : go('home')}>{step>1?'Back':'Cancel'}</BtnSecondary>
          {step<3 ? (
            <BtnPrimary onClick={() => setStep(step+1)}>Continue</BtnPrimary>
          ) : (
            <BtnPrimary onClick={() => alert('Brief sent — an analyst will call within the hour.')}>Send the brief</BtnPrimary>
          )}
        </div>
      </div>
    </section>
  );
};

// ===== FIELD NOTES =====
const FieldNotes = () => (
  <section className="fn" data-screen-label="05 Field notes">
    <div className="inner">
      <Eyebrow num="5.0">FIELD NOTES</Eyebrow>
      <h1>A changelog of the workshop.</h1>
      <p className="lead">Short writes from the analysts. What we learned this week, what we threw out, what we are watching.</p>

      {[
        {date:'2026.05.04', h:'A method we abandoned, after 11 briefs.', body:<>We had been using a confidence-weighted source ranking inside the verification station. <em>It didn't survive contact with regulatory text.</em> Replacing it with an analyst-tagged provenance log this week.</>},
        {date:'2026.04.27', h:'On the cost of a confident sentence.', body:<>The most expensive line in any brief is the one with no hedge and no source. We re-read every Q1 brief and counted them. <em>Median per brief: two.</em> Not zero. We have work to do.</>},
        {date:'2026.04.20', h:'Why we are not adding a chat interface.', body:<>Briefs are not conversations. The product is the cover page, the recommendation, and the appendix. <em>A chatbot is a way to lose the cover page.</em></>},
        {date:'2026.04.13', h:'Three procurement reports we will not publish.', body:<>The clients agreed to anonymize. We agreed they had to read like an argument, not a list. <em>Two of the three didn't have an argument.</em> The third was excellent and is in the library.</>},
      ].map((e,i) => (
        <div key={i} className="fn-entry">
          <div className="date">{e.date}</div>
          <div>
            <h3>{e.h}</h3>
            <div className="body">{e.body}</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

Object.assign(window, { Home, Methodology, Library, Brief, FieldNotes });
