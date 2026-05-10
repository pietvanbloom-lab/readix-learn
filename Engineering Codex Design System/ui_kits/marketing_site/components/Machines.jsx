/* global React */

// ─────────────────────────────────────────────────────
// Codex × Comic mechanical machine illustrations.
// Three machines: Press (Tier 01), Engine (Tier 02), Atelier (Tier 03).
// Each follows the locked spec: 2.6/1.8/0.5–0.9 line weights,
// 35° hatching, copper accents, ochre starburst, frame chrome.
// ─────────────────────────────────────────────────────

const MachineDefs = ({ id }) => (
  <defs>
    <pattern id={`hatch-${id}`} width="3" height="3" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
      <line x1="0" y1="0" x2="0" y2="3" stroke="#2A1810" strokeWidth="0.6" opacity="0.85" />
    </pattern>
    <radialGradient id={`glow-${id}`} cx="50%" cy="50%" r="50%">
      <stop offset="0%" stopColor="#FFC47C" stopOpacity="1"/>
      <stop offset="60%" stopColor="#D97757" stopOpacity="0.85"/>
      <stop offset="100%" stopColor="#8B3A1F" stopOpacity="0.4"/>
    </radialGradient>
  </defs>
);

const ComicBurst = ({ x, y, r, text, rot=-12, points=12 }) => {
  const path = [];
  for (let i = 0; i < points*2; i++) {
    const ang = (i / (points*2)) * Math.PI * 2;
    const rr = i % 2 === 0 ? r : r * 0.66;
    path.push(`${i===0?'M':'L'} ${Math.cos(ang)*rr} ${Math.sin(ang)*rr}`);
  }
  path.push("Z");
  return (
    <g transform={`translate(${x}, ${y}) rotate(${rot})`} className="machine-burst">
      <path d={path.join(" ")} fill="#FFC47C"/>
      <path d={path.join(" ")} stroke="#2A1810" strokeWidth="2" fill="none" strokeLinejoin="round"/>
      <text textAnchor="middle" y="4" fontFamily="GT Sectra, Source Serif 4, serif" fontStyle="italic" fontWeight="700" fontSize="13" fill="#2A1810">{text}</text>
    </g>
  );
};

// ─── PRESS · MK II ───
const PressMachine = () => (
  <svg viewBox="0 0 400 320" preserveAspectRatio="xMidYMid meet" width="100%" style={{maxHeight:340}}>
    <MachineDefs id="press" />
    {/* action lines */}
    <g className="machine-action-lines" stroke="#4A3520" strokeWidth="0.9" opacity="0.5" strokeLinecap="round">
      {[15,30,55,140,160,200,220,330,345].map(a => {
        const rad = a * Math.PI / 180;
        return <line key={a} x1={200 + Math.cos(rad)*90} y1={150 + Math.sin(rad)*90} x2={200 + Math.cos(rad)*150} y2={150 + Math.sin(rad)*150}/>;
      })}
    </g>
    {/* uprights */}
    <rect x="60" y="40" width="18" height="220" fill="#E8DCC0"/>
    <rect x="60" y="40" width="18" height="220" stroke="#1A0F08" strokeWidth="2.6" fill="none" strokeLinejoin="round"/>
    <rect x="68" y="40" width="10" height="220" fill="url(#hatch-press)"/>
    <rect x="322" y="40" width="18" height="220" fill="#E8DCC0"/>
    <rect x="322" y="40" width="18" height="220" stroke="#1A0F08" strokeWidth="2.6" fill="none" strokeLinejoin="round"/>
    <rect x="330" y="40" width="10" height="220" fill="url(#hatch-press)"/>
    {/* crossbeam */}
    <rect x="50" y="28" width="300" height="24" fill="#D8C8A8"/>
    <rect x="50" y="28" width="300" height="24" stroke="#1A0F08" strokeWidth="2.6" fill="none"/>
    <rect x="50" y="44" width="300" height="8" fill="url(#hatch-press)"/>
    {[70,110,150,190,230,270,310].map(x => (
      <g key={x}>
        <circle cx={x} cy="40" r="3" stroke="#1A0F08" strokeWidth="2.6" fill="#B85F40"/>
        <circle cx={x-1} cy="39" r="1" fill="#FFC47C"/>
      </g>
    ))}
    {/* screw */}
    <line x1="200" y1="52" x2="200" y2="158" stroke="#1A0F08" strokeWidth="2.6" strokeLinecap="round"/>
    {[60,76,92,108,124,140,156].map(y => (
      <g key={y}>
        <ellipse cx="200" cy={y} rx="16" ry="4" fill="#D8C8A8"/>
        <ellipse cx="200" cy={y} rx="16" ry="4" stroke="#2A1810" strokeWidth="1.8" fill="none"/>
      </g>
    ))}
    {/* knob */}
    <circle cx="200" cy="42" r="11" fill="url(#glow-press)"/>
    <circle cx="200" cy="42" r="11" stroke="#1A0F08" strokeWidth="2.6" fill="none"/>
    <ellipse cx="196" cy="38" rx="3" ry="2" fill="#FFC47C" opacity="0.85"/>
    {/* lever */}
    <line x1="200" y1="42" x2="290" y2="14" stroke="#8B3A1F" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="290" cy="14" r="6" fill="#B85F40"/>
    <circle cx="290" cy="14" r="6" stroke="#1A0F08" strokeWidth="2.6"/>
    {/* swooshes */}
    <path className="machine-swoosh" d="M 296 12 Q 308 16 314 26" stroke="#2A1810" strokeWidth="1.6" fill="none" strokeLinecap="round"/>
    <path className="machine-swoosh" d="M 300 8 Q 314 10 322 20" stroke="#2A1810" strokeWidth="1.6" fill="none" strokeLinecap="round"/>
    {/* platen */}
    <rect x="135" y="158" width="130" height="18" fill="#E8DCC0"/>
    <rect x="135" y="158" width="130" height="18" stroke="#1A0F08" strokeWidth="2.6" fill="none"/>
    <rect x="135" y="170" width="130" height="6" fill="url(#hatch-press)"/>
    {/* pistons */}
    <rect x="105" y="155" width="22" height="8" fill="#D8C8A8"/>
    <rect x="105" y="155" width="22" height="8" stroke="#2A1810" strokeWidth="1.8" fill="none"/>
    <rect x="95" y="148" width="14" height="22" fill="#E8DCC0"/>
    <rect x="95" y="148" width="14" height="22" stroke="#1A0F08" strokeWidth="2.6" fill="none"/>
    <rect x="98" y="151" width="8" height="16" fill="url(#hatch-press)"/>
    <rect x="273" y="155" width="22" height="8" fill="#D8C8A8"/>
    <rect x="273" y="155" width="22" height="8" stroke="#2A1810" strokeWidth="1.8" fill="none"/>
    <rect x="291" y="148" width="14" height="22" fill="#E8DCC0"/>
    <rect x="291" y="148" width="14" height="22" stroke="#1A0F08" strokeWidth="2.6" fill="none"/>
    <rect x="294" y="151" width="8" height="16" fill="url(#hatch-press)"/>
    {/* tray */}
    <rect x="115" y="194" width="170" height="58" fill="#FAF3E0"/>
    <rect x="115" y="194" width="170" height="58" stroke="#1A0F08" strokeWidth="2.6" fill="none"/>
    <line x1="130" y1="206" x2="270" y2="206" stroke="#2A1810" strokeWidth="1.8"/>
    <line x1="130" y1="214" x2="245" y2="214" stroke="#4A3520" strokeWidth="0.9"/>
    <line x1="130" y1="222" x2="260" y2="222" stroke="#4A3520" strokeWidth="0.9"/>
    {/* embedded chip */}
    <rect x="130" y="232" width="18" height="14" fill="#FAF3E0" stroke="#1A0F08" strokeWidth="2.6"/>
    <text x="139" y="242" fontFamily="JetBrains Mono, monospace" fontSize="6" fontWeight="700" fill="#1A0F08" textAnchor="middle">G/AI</text>
    <line x1="153" y1="237" x2="225" y2="237" stroke="#4A3520" strokeWidth="0.9"/>
    <line x1="153" y1="244" x2="210" y2="244" stroke="#4A3520" strokeWidth="0.9"/>
    {/* base */}
    <rect x="38" y="252" width="324" height="22" fill="#D8C8A8"/>
    <rect x="38" y="252" width="324" height="22" stroke="#1A0F08" strokeWidth="2.6"/>
    <rect x="38" y="266" width="324" height="8" fill="url(#hatch-press)"/>
    <rect x="55" y="274" width="22" height="10" stroke="#1A0F08" strokeWidth="2.6" fill="#E8DCC0"/>
    <rect x="323" y="274" width="22" height="10" stroke="#1A0F08" strokeWidth="2.6" fill="#E8DCC0"/>
    {/* steam */}
    <g className="machine-steam" stroke="#2A1810" strokeWidth="1.8" opacity="0.7" strokeLinecap="round" fill="none" strokeDasharray="2 1.5">
      <path d="M 102 145 Q 95 138 100 130 Q 106 124 100 116"/>
      <path d="M 297 145 Q 304 138 299 130 Q 293 124 299 116"/>
    </g>
    {/* burst */}
    <ComicBurst x={70} y={120} r={28} text="STAMP!" rot={-15} points={11}/>
    {/* labels */}
    <line x1="370" y1="170" x2="306" y2="166" stroke="#8B3A1F" strokeWidth="2.2" strokeLinecap="round"/>
    <text x="370" y="173" fontFamily="JetBrains Mono, monospace" fontSize="7" fill="#B85F40" textAnchor="end" fontWeight="700" letterSpacing="0.1em">PISTON · 2T</text>
  </svg>
);

// ─── ENGINE · MK II ───
const EngineMachine = () => (
  <svg viewBox="0 0 400 320" preserveAspectRatio="xMidYMid meet" width="100%" style={{maxHeight:340}}>
    <MachineDefs id="engine" />
    <rect x="40" y="55" width="320" height="210" fill="#E8DCC0"/>
    <rect x="40" y="55" width="320" height="210" stroke="#1A0F08" strokeWidth="2.6" fill="none"/>
    <rect x="40" y="55" width="320" height="210" fill="url(#hatch-engine)" opacity="0.4"/>
    <rect x="50" y="65" width="300" height="190" stroke="#2A1810" strokeWidth="1.8" fill="none"/>
    {[[60,75],[200,75],[340,75],[60,245],[200,245],[340,245]].map(([x,y],i) => (
      <g key={i}>
        <circle cx={x} cy={y} r="4" fill="#B85F40" stroke="#1A0F08" strokeWidth="2.6"/>
        <circle cx={x-1} cy={y-1} r="1.2" fill="#FFC47C"/>
      </g>
    ))}
    {/* primary gear */}
    <g transform="translate(140, 160)">
      {Array.from({length:14}).map((_,i) => {
        const a = (i / 14) * Math.PI * 2;
        const r1 = 38, r2 = 50, ang = 0.22;
        const x1 = Math.cos(a-ang) * r1, y1 = Math.sin(a-ang) * r1;
        const x2 = Math.cos(a-ang*0.65) * r2, y2 = Math.sin(a-ang*0.65) * r2;
        const x3 = Math.cos(a+ang*0.65) * r2, y3 = Math.sin(a+ang*0.65) * r2;
        const x4 = Math.cos(a+ang) * r1, y4 = Math.sin(a+ang) * r1;
        return <path key={i} d={`M${x1},${y1} L${x2},${y2} L${x3},${y3} L${x4},${y4} Z`} stroke="#1A0F08" strokeWidth="2.6" fill="#D97757" strokeLinejoin="round"/>;
      })}
      <circle r="38" fill="#E8DCC0"/>
      <circle r="38" stroke="#1A0F08" strokeWidth="2.6" fill="none"/>
      <circle r="38" fill="url(#hatch-engine)" opacity="0.5"/>
      <circle r="24" fill="#D8C8A8"/>
      <circle r="24" stroke="#2A1810" strokeWidth="1.8" fill="none"/>
      {[0,72,144,216,288].map(a => {
        const rad = a * Math.PI / 180;
        return <line key={a} x1={Math.cos(rad)*7} y1={Math.sin(rad)*7} x2={Math.cos(rad)*22} y2={Math.sin(rad)*22} stroke="#1A0F08" strokeWidth="2.6" strokeLinecap="round"/>;
      })}
      <circle r="11" fill="url(#glow-engine)"/>
      <circle r="11" stroke="#1A0F08" strokeWidth="2.6" fill="none"/>
      <circle r="4" fill="#2A1810"/>
    </g>
    {/* drive gear */}
    <g transform="translate(258, 160)">
      {Array.from({length:10}).map((_,i) => {
        const a = (i / 10) * Math.PI * 2 + 0.3;
        const r1 = 24, r2 = 34, ang = 0.27;
        const x1 = Math.cos(a-ang) * r1, y1 = Math.sin(a-ang) * r1;
        const x2 = Math.cos(a-ang*0.65) * r2, y2 = Math.sin(a-ang*0.65) * r2;
        const x3 = Math.cos(a+ang*0.65) * r2, y3 = Math.sin(a+ang*0.65) * r2;
        const x4 = Math.cos(a+ang) * r1, y4 = Math.sin(a+ang) * r1;
        return <path key={i} d={`M${x1},${y1} L${x2},${y2} L${x3},${y3} L${x4},${y4} Z`} stroke="#1A0F08" strokeWidth="2.6" fill="#D97757" strokeLinejoin="round"/>;
      })}
      <circle r="24" fill="#E8DCC0"/>
      <circle r="24" stroke="#1A0F08" strokeWidth="2.6" fill="none"/>
      <circle r="24" fill="url(#hatch-engine)" opacity="0.5"/>
      <circle r="14" fill="#D8C8A8"/>
      <circle r="14" stroke="#2A1810" strokeWidth="1.8" fill="none"/>
      <circle r="7" fill="url(#glow-engine)"/>
      <circle r="7" stroke="#1A0F08" strokeWidth="2.6" fill="none"/>
      <circle r="2" fill="#2A1810"/>
    </g>
    {/* gauge */}
    <g transform="translate(95, 110)">
      <circle r="26" fill="#FAF3E0"/>
      <circle r="26" stroke="#1A0F08" strokeWidth="2.6" fill="none"/>
      <circle r="22" stroke="#8B3A1F" strokeWidth="2.2" fill="none"/>
      <line x1="0" y1="0" x2="16" y2="-10" stroke="#8B3A1F" strokeWidth="2" strokeLinecap="round"/>
      <circle r="4" fill="#B85F40" stroke="#1A0F08" strokeWidth="2.6"/>
      <text y="18" fontFamily="JetBrains Mono, monospace" fontSize="7" fontWeight="700" fill="#2A1810" textAnchor="middle">PSI · MAX</text>
    </g>
    {/* pipe */}
    <path d="M 95 138 Q 95 156 110 165" fill="none" stroke="#D8C8A8" strokeWidth="9" strokeLinecap="round"/>
    <path d="M 95 138 Q 95 156 110 165" stroke="#1A0F08" strokeWidth="2.6" fill="none" strokeLinecap="round"/>
    {/* embedded chip */}
    <g transform="translate(300, 100)">
      <circle className="machine-pulse" r="22" stroke="#B85F40" strokeWidth="1.4" strokeDasharray="2 2" fill="none" opacity="0.55"/>
      <circle className="machine-pulse" r="28" stroke="#B85F40" strokeWidth="1.4" strokeDasharray="2 3" fill="none" opacity="0.35"/>
      <rect x="-22" y="-14" width="44" height="28" fill="#FAF3E0"/>
      <rect x="-22" y="-14" width="44" height="28" stroke="#1A0F08" strokeWidth="2.6" fill="none"/>
      {[-13,-5,3,11].map(x => <line key={`t${x}`} x1={x} y1="-14" x2={x} y2="-19" stroke="#2A1810" strokeWidth="1.8"/>)}
      {[-13,-5,3,11].map(x => <line key={`b${x}`} x1={x} y1="14" x2={x} y2="19" stroke="#2A1810" strokeWidth="1.8"/>)}
      <polygon points="-9,-6 9,-6 13,0 9,6 -9,6 -13,0" stroke="#1A0F08" strokeWidth="2.6" fill="#D97757"/>
      <text y="3" fontFamily="JetBrains Mono, monospace" fontSize="6" fontWeight="700" fill="#FAF3E0" textAnchor="middle">OAI</text>
    </g>
    <path d="M 300 114 Q 300 138 270 150" fill="none" stroke="#D8C8A8" strokeWidth="9" strokeLinecap="round"/>
    <path d="M 300 114 Q 300 138 270 150" stroke="#1A0F08" strokeWidth="2.6" fill="none" strokeLinecap="round"/>
    {/* burst */}
    <ComicBurst x={200} y={170} r={22} text="CLANK!" rot={-8} points={12}/>
    <text x="140" y="118" fontFamily="JetBrains Mono, monospace" fontSize="7" fontWeight="700" fill="#B85F40" textAnchor="middle" letterSpacing="0.1em">GEAR · 14T</text>
    <text x="258" y="124" fontFamily="JetBrains Mono, monospace" fontSize="7" fontWeight="700" fill="#B85F40" textAnchor="middle" letterSpacing="0.1em">DRIVE · 10T</text>
  </svg>
);

// ─── ATELIER · MK II — bespoke workbench ───
const AtelierMachine = () => (
  <svg viewBox="0 0 400 320" preserveAspectRatio="xMidYMid meet" width="100%" style={{maxHeight:340}}>
    <MachineDefs id="atelier" />
    {/* workbench surface */}
    <polygon points="40,180 360,180 380,210 20,210" fill="#D8C8A8"/>
    <polygon points="40,180 360,180 380,210 20,210" stroke="#1A0F08" strokeWidth="2.6" fill="none" strokeLinejoin="round"/>
    <polygon points="40,180 360,180 380,210 20,210" fill="url(#hatch-atelier)" opacity="0.5"/>
    {/* legs */}
    <line x1="50" y1="210" x2="50" y2="280" stroke="#1A0F08" strokeWidth="2.6" strokeLinecap="round"/>
    <line x1="350" y1="210" x2="350" y2="280" stroke="#1A0F08" strokeWidth="2.6" strokeLinecap="round"/>
    <rect x="35" y="280" width="30" height="6" fill="#E8DCC0" stroke="#1A0F08" strokeWidth="2.6"/>
    <rect x="335" y="280" width="30" height="6" fill="#E8DCC0" stroke="#1A0F08" strokeWidth="2.6"/>
    {/* parchment scroll center */}
    <g transform="translate(200, 130)">
      <rect x="-60" y="-50" width="120" height="100" fill="#FAF3E0"/>
      <rect x="-60" y="-50" width="120" height="100" stroke="#1A0F08" strokeWidth="2.6" fill="none"/>
      {/* scroll lines */}
      <line x1="-50" y1="-32" x2="50" y2="-32" stroke="#2A1810" strokeWidth="1.8"/>
      <line x1="-50" y1="-22" x2="38" y2="-22" stroke="#4A3520" strokeWidth="0.9"/>
      <line x1="-50" y1="-12" x2="44" y2="-12" stroke="#4A3520" strokeWidth="0.9"/>
      <line x1="-50" y1="-2" x2="20" y2="-2" stroke="#4A3520" strokeWidth="0.9"/>
      {/* sketch annotation */}
      <circle cx="-15" cy="22" r="14" stroke="#8B3A1F" strokeWidth="2.2" fill="none"/>
      <line x1="-1" y1="22" x2="20" y2="22" stroke="#8B3A1F" strokeWidth="2.2" strokeLinecap="round"/>
      <line x1="20" y1="22" x2="16" y2="19" stroke="#8B3A1F" strokeWidth="2.2"/>
      <line x1="20" y1="22" x2="16" y2="25" stroke="#8B3A1F" strokeWidth="2.2"/>
      <text x="32" y="25" fontFamily="JetBrains Mono, monospace" fontSize="7" fontWeight="700" fill="#B85F40">CUSTOM</text>
    </g>
    {/* compass */}
    <g transform="translate(95, 140)">
      <line x1="0" y1="0" x2="-18" y2="40" stroke="#1A0F08" strokeWidth="2.6" strokeLinecap="round"/>
      <line x1="0" y1="0" x2="18" y2="40" stroke="#1A0F08" strokeWidth="2.6" strokeLinecap="round"/>
      <circle r="5" fill="url(#glow-atelier)" stroke="#1A0F08" strokeWidth="2.6"/>
      <circle cx="-18" cy="40" r="2" fill="#2A1810"/>
      <circle cx="18" cy="40" r="2" fill="#B85F40"/>
      {/* arc */}
      <path d="M -18 40 A 28 28 0 0 0 18 40" stroke="#8B3A1F" strokeWidth="1.4" strokeDasharray="2 2" fill="none"/>
    </g>
    {/* magnifier */}
    <g transform="translate(310, 140)">
      <circle r="22" fill="#FAF3E0" fillOpacity="0.4"/>
      <circle r="22" stroke="#1A0F08" strokeWidth="2.6" fill="none"/>
      <circle r="22" stroke="#8B3A1F" strokeWidth="1.4" fill="none"/>
      <line x1="16" y1="16" x2="32" y2="32" stroke="#1A0F08" strokeWidth="3.2" strokeLinecap="round"/>
      <line x1="32" y1="32" x2="40" y2="40" stroke="#8B3A1F" strokeWidth="3.6" strokeLinecap="round"/>
    </g>
    {/* pulse rings around scroll (active) */}
    <circle className="machine-pulse" cx="200" cy="130" r="80" stroke="#B85F40" strokeWidth="1.4" strokeDasharray="2 3" fill="none" opacity="0.45"/>
    <circle className="machine-pulse" cx="200" cy="130" r="92" stroke="#B85F40" strokeWidth="1.4" strokeDasharray="2 4" fill="none" opacity="0.25"/>
    {/* burst */}
    <ComicBurst x={310} y={70} r={22} text="BESPOKE!" rot={-12} points={13}/>
    {/* labels */}
    <text x="200" y="245" fontFamily="JetBrains Mono, monospace" fontSize="7" fontWeight="700" fill="#B85F40" textAnchor="middle" letterSpacing="0.1em">UNRESTRICTED · 30+ SRC</text>
  </svg>
);

const MACHINES = { 1: PressMachine, 2: EngineMachine, 3: AtelierMachine };

// Compact badge variant for hero / smaller frames
const MachineCompact = ({ which=1 }) => {
  const M = MACHINES[which] || PressMachine;
  return <M />;
};

Object.assign(window, { PressMachine, EngineMachine, AtelierMachine, MachineCompact, ComicBurst, MachineDefs });
