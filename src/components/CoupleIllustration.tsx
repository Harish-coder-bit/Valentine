"use client";

interface Props {
  dayId: number;
  className?: string;
}

export default function CoupleIllustration({ dayId, className = "" }: Props) {
  const scenes: Record<number, React.ReactNode> = {
    // Rose Day - Boy giving girl a rose
    7: (
      <svg viewBox="0 0 200 200" fill="none" className={className}>
        <defs>
          <radialGradient id="glow7" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fda4af" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#fda4af" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="100" cy="100" r="90" fill="url(#glow7)" />
        {/* Boy */}
        <circle cx="75" cy="72" r="16" fill="#fbbf24" />
        <path d="M75 88 C60 88 50 105 50 120 L100 120 C100 105 90 88 75 88Z" fill="#3b82f6" />
        <circle cx="71" cy="70" r="1.5" fill="#1e293b" />
        <circle cx="79" cy="70" r="1.5" fill="#1e293b" />
        <path d="M72 76 Q75 79 78 76" stroke="#1e293b" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        {/* Boy's hair */}
        <path d="M59 68 Q60 52 75 50 Q90 52 91 68" fill="#1e293b" />
        {/* Boy's arm reaching with rose */}
        <path d="M100 108 L118 95" stroke="#3b82f6" strokeWidth="6" strokeLinecap="round" />
        <path d="M98 110 L100 108" stroke="#fbbf24" strokeWidth="4" strokeLinecap="round" />
        {/* Rose */}
        <circle cx="121" cy="92" r="7" fill="#e11d48" />
        <circle cx="118" cy="89" r="5" fill="#f43f5e" />
        <circle cx="124" cy="89" r="4" fill="#be123c" />
        <path d="M121 99 L121 112" stroke="#16a34a" strokeWidth="2" />
        <path d="M121 104 L126 100" stroke="#16a34a" strokeWidth="1.5" />
        {/* Girl */}
        <circle cx="135" cy="72" r="16" fill="#fbbf24" />
        <path d="M135 88 C120 88 112 105 112 120 L158 120 C158 105 150 88 135 88Z" fill="#ec4899" />
        <circle cx="131" cy="70" r="1.5" fill="#1e293b" />
        <circle cx="139" cy="70" r="1.5" fill="#1e293b" />
        <path d="M131 76 Q135 80 139 76" stroke="#1e293b" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        {/* Girl's hair */}
        <path d="M119 72 Q118 50 135 48 Q152 50 151 72" fill="#1e293b" />
        <path d="M119 72 L116 95" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
        <path d="M151 72 L154 95" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
        {/* Blush */}
        <circle cx="127" cy="75" r="3" fill="#fda4af" opacity="0.5" />
        <circle cx="143" cy="75" r="3" fill="#fda4af" opacity="0.5" />
        {/* Hearts */}
        <path d="M105 55 C105 52 108 50 110 53 C112 50 115 52 115 55 C115 59 110 62 110 62 C110 62 105 59 105 55Z" fill="#f43f5e" opacity="0.6" />
        {/* Ground */}
        <ellipse cx="100" cy="125" rx="60" ry="5" fill="#fda4af" opacity="0.2" />
      </svg>
    ),

    // Propose Day - Boy on knee proposing
    8: (
      <svg viewBox="0 0 200 200" fill="none" className={className}>
        <defs>
          <radialGradient id="glow8" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#c084fc" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#c084fc" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="100" cy="100" r="90" fill="url(#glow8)" />
        {/* Boy on one knee */}
        <circle cx="70" cy="78" r="15" fill="#fbbf24" />
        <path d="M70 93 C58 93 50 106 50 118 L90 118 C90 110 85 93 70 93Z" fill="#3b82f6" />
        {/* Kneeling leg */}
        <path d="M65 118 L60 135 L75 135" stroke="#1e3a5f" strokeWidth="5" strokeLinecap="round" />
        <path d="M80 118 L90 128 L95 128" stroke="#1e3a5f" strokeWidth="5" strokeLinecap="round" />
        <circle cx="66" cy="76" r="1.5" fill="#1e293b" />
        <circle cx="74" cy="76" r="1.5" fill="#1e293b" />
        <path d="M67 82 Q70 85 73 82" stroke="#1e293b" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M55 74 Q58 58 70 56 Q82 58 85 74" fill="#1e293b" />
        {/* Ring box in hand */}
        <rect x="90" y="105" width="14" height="10" rx="2" fill="#7c3aed" />
        <rect x="91" y="100" width="12" height="6" rx="2" fill="#8b5cf6" />
        {/* Ring */}
        <circle cx="97" cy="103" r="3" stroke="#fbbf24" strokeWidth="1.5" fill="none" />
        <circle cx="97" cy="100" r="1.5" fill="#fbbf24" />
        {/* Arm reaching */}
        <path d="M87 105 L90 108" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" />
        {/* Girl standing, hands on heart */}
        <circle cx="135" cy="68" r="16" fill="#fbbf24" />
        <path d="M135 84 C120 84 112 100 112 118 L158 118 C158 100 150 84 135 84Z" fill="#d946ef" />
        <circle cx="131" cy="66" r="1.5" fill="#1e293b" />
        <circle cx="139" cy="66" r="1.5" fill="#1e293b" />
        {/* Surprised happy mouth */}
        <ellipse cx="135" cy="74" rx="3" ry="3.5" fill="#1e293b" />
        <path d="M119 68 Q118 48 135 46 Q152 48 151 68" fill="#1e293b" />
        <path d="M119 68 L115 92" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
        <path d="M151 68 L155 92" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
        {/* Hands on heart */}
        <path d="M125 95 L132 92 L138 92 L145 95" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" />
        {/* Blush */}
        <circle cx="127" cy="71" r="3" fill="#f9a8d4" opacity="0.6" />
        <circle cx="143" cy="71" r="3" fill="#f9a8d4" opacity="0.6" />
        {/* Sparkles */}
        <path d="M97 90 L97 86 M95 88 L99 88" stroke="#fbbf24" strokeWidth="1.5" />
        <path d="M155 58 L155 54 M153 56 L157 56" stroke="#c084fc" strokeWidth="1.5" />
        <path d="M112 55 L112 51 M110 53 L114 53" stroke="#f472b6" strokeWidth="1.5" />
        <ellipse cx="100" cy="138" rx="55" ry="5" fill="#c084fc" opacity="0.15" />
      </svg>
    ),

    // Chocolate Day - Couple sharing chocolate
    9: (
      <svg viewBox="0 0 200 200" fill="none" className={className}>
        <defs>
          <radialGradient id="glow9" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="100" cy="100" r="90" fill="url(#glow9)" />
        {/* Boy */}
        <circle cx="78" cy="72" r="15" fill="#fbbf24" />
        <path d="M78 87 C64 87 56 102 56 118 L100 118 C100 102 92 87 78 87Z" fill="#3b82f6" />
        <circle cx="74" cy="70" r="1.5" fill="#1e293b" />
        <circle cx="82" cy="70" r="1.5" fill="#1e293b" />
        <path d="M75 76 Q78 79 81 76" stroke="#1e293b" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M63 68 Q64 54 78 52 Q92 54 93 68" fill="#1e293b" />
        {/* Girl */}
        <circle cx="128" cy="72" r="15" fill="#fbbf24" />
        <path d="M128 87 C114 87 106 102 106 118 L150 118 C150 102 142 87 128 87Z" fill="#f97316" />
        <circle cx="124" cy="70" r="1.5" fill="#1e293b" />
        <circle cx="132" cy="70" r="1.5" fill="#1e293b" />
        <path d="M125 76 Q128 79 131 76" stroke="#1e293b" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M113 68 Q114 54 128 52 Q142 54 143 68" fill="#1e293b" />
        <path d="M113 68 L110 90" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
        <path d="M143 68 L146 90" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
        {/* Chocolate box between them */}
        <rect x="86" y="96" width="28" height="18" rx="3" fill="#92400e" />
        <rect x="86" y="93" width="28" height="5" rx="2" fill="#78350f" />
        <path d="M100 93 L100 114" stroke="#fbbf24" strokeWidth="1" />
        <path d="M86 103 L114 103" stroke="#fbbf24" strokeWidth="1" />
        {/* Chocolates inside */}
        <circle cx="93" cy="100" r="2.5" fill="#451a03" />
        <circle cx="107" cy="100" r="2.5" fill="#451a03" />
        <circle cx="93" cy="109" r="2.5" fill="#451a03" />
        <circle cx="107" cy="109" r="2.5" fill="#451a03" />
        {/* Ribbon */}
        <path d="M96 93 L100 88 L104 93" fill="#e11d48" />
        {/* Arms reaching for chocolate */}
        <path d="M95 105 L88 100" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" />
        <path d="M112 100 L105 105" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" />
        {/* Blush */}
        <circle cx="70" cy="75" r="3" fill="#fda4af" opacity="0.4" />
        <circle cx="136" cy="75" r="3" fill="#fda4af" opacity="0.4" />
        {/* Hearts */}
        <path d="M98 78 C98 76 100 74 102 77 C104 74 106 76 106 78 C106 81 102 83 102 83 C102 83 98 81 98 78Z" fill="#f43f5e" opacity="0.5" />
        <ellipse cx="100" cy="122" rx="55" ry="5" fill="#fbbf24" opacity="0.15" />
      </svg>
    ),

    // Teddy Day - Couple with teddy between them
    10: (
      <svg viewBox="0 0 200 200" fill="none" className={className}>
        <defs>
          <radialGradient id="glow10" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f9a8d4" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#f9a8d4" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="100" cy="100" r="90" fill="url(#glow10)" />
        {/* Boy */}
        <circle cx="65" cy="72" r="15" fill="#fbbf24" />
        <path d="M65 87 C52 87 44 102 44 118 L86 118 C86 102 78 87 65 87Z" fill="#3b82f6" />
        <circle cx="61" cy="70" r="1.5" fill="#1e293b" />
        <circle cx="69" cy="70" r="1.5" fill="#1e293b" />
        <path d="M62 76 Q65 79 68 76" stroke="#1e293b" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M50 68 Q52 54 65 52 Q78 54 80 68" fill="#1e293b" />
        {/* Girl */}
        <circle cx="140" cy="72" r="15" fill="#fbbf24" />
        <path d="M140 87 C127 87 119 102 119 118 L161 118 C161 102 153 87 140 87Z" fill="#ec4899" />
        <circle cx="136" cy="70" r="1.5" fill="#1e293b" />
        <circle cx="144" cy="70" r="1.5" fill="#1e293b" />
        <path d="M137 76 Q140 79 143 76" stroke="#1e293b" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M125 68 Q127 54 140 52 Q153 54 155 68" fill="#1e293b" />
        <path d="M125 68 L122 90" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
        <path d="M155 68 L158 90" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
        {/* Big Teddy Bear in center */}
        <ellipse cx="103" cy="108" rx="16" ry="14" fill="#d4a574" />
        <circle cx="103" cy="90" r="13" fill="#d4a574" />
        {/* Teddy ears */}
        <circle cx="93" cy="80" r="5" fill="#d4a574" />
        <circle cx="93" cy="80" r="3" fill="#c28b5e" />
        <circle cx="113" cy="80" r="5" fill="#d4a574" />
        <circle cx="113" cy="80" r="3" fill="#c28b5e" />
        {/* Teddy face */}
        <circle cx="99" cy="88" r="2" fill="#1e293b" />
        <circle cx="107" cy="88" r="2" fill="#1e293b" />
        <ellipse cx="103" cy="93" rx="2" ry="1.5" fill="#1e293b" />
        <path d="M100 95 Q103 98 106 95" stroke="#1e293b" strokeWidth="1" fill="none" strokeLinecap="round" />
        {/* Teddy arms */}
        <ellipse cx="88" cy="104" rx="5" ry="8" fill="#d4a574" transform="rotate(-20 88 104)" />
        <ellipse cx="118" cy="104" rx="5" ry="8" fill="#d4a574" transform="rotate(20 118 104)" />
        {/* Teddy heart */}
        <path d="M101 102 C101 100 103 99 104 101 C105 99 107 100 107 102 C107 105 104 107 104 107 C104 107 101 105 101 102Z" fill="#e11d48" />
        {/* Couple arms holding teddy */}
        <path d="M82 105 L88 104" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" />
        <path d="M122 105 L118 104" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" />
        <circle cx="58" cy="75" r="3" fill="#fda4af" opacity="0.4" />
        <circle cx="147" cy="75" r="3" fill="#fda4af" opacity="0.4" />
        <ellipse cx="103" cy="125" rx="55" ry="5" fill="#f9a8d4" opacity="0.15" />
      </svg>
    ),

    // Promise Day - Couple holding pinkies
    11: (
      <svg viewBox="0 0 200 200" fill="none" className={className}>
        <defs>
          <radialGradient id="glow11" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="100" cy="100" r="90" fill="url(#glow11)" />
        {/* Boy */}
        <circle cx="72" cy="72" r="15" fill="#fbbf24" />
        <path d="M72 87 C58 87 50 102 50 118 L94 118 C94 102 86 87 72 87Z" fill="#6366f1" />
        <circle cx="68" cy="70" r="1.5" fill="#1e293b" />
        <circle cx="76" cy="70" r="1.5" fill="#1e293b" />
        <path d="M69 76 Q72 79 75 76" stroke="#1e293b" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M57 68 Q59 54 72 52 Q85 54 87 68" fill="#1e293b" />
        {/* Girl */}
        <circle cx="132" cy="72" r="15" fill="#fbbf24" />
        <path d="M132 87 C118 87 110 102 110 118 L154 118 C154 102 146 87 132 87Z" fill="#a855f7" />
        <circle cx="128" cy="70" r="1.5" fill="#1e293b" />
        <circle cx="136" cy="70" r="1.5" fill="#1e293b" />
        <path d="M129 76 Q132 79 135 76" stroke="#1e293b" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M117 68 Q119 54 132 52 Q145 54 147 68" fill="#1e293b" />
        <path d="M117 68 L114 90" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
        <path d="M147 68 L150 90" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
        {/* Pinky promise - hands meeting in center */}
        <path d="M90 102 L97 98" stroke="#fbbf24" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M114 102 L107 98" stroke="#fbbf24" strokeWidth="3.5" strokeLinecap="round" />
        {/* Interlinked pinkies */}
        <path d="M97 98 C99 95 101 95 102 97 C103 95 105 95 107 98" stroke="#fbbf24" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        {/* Glow around hands */}
        <circle cx="102" cy="97" r="10" fill="#a78bfa" opacity="0.15" />
        <circle cx="102" cy="97" r="6" fill="#c084fc" opacity="0.15" />
        {/* Sparkles around promise */}
        <path d="M102 84 L102 80 M100 82 L104 82" stroke="#a78bfa" strokeWidth="1.5" />
        <path d="M90 88 L88 85" stroke="#c084fc" strokeWidth="1" />
        <path d="M114 88 L116 85" stroke="#c084fc" strokeWidth="1" />
        <path d="M95 92 L92 90" stroke="#e879f9" strokeWidth="1" />
        <path d="M109 92 L112 90" stroke="#e879f9" strokeWidth="1" />
        {/* Blush */}
        <circle cx="64" cy="75" r="3" fill="#fda4af" opacity="0.4" />
        <circle cx="140" cy="75" r="3" fill="#fda4af" opacity="0.4" />
        <ellipse cx="102" cy="122" rx="55" ry="5" fill="#a78bfa" opacity="0.15" />
      </svg>
    ),

    // Hug Day - Couple hugging
    12: (
      <svg viewBox="0 0 200 200" fill="none" className={className}>
        <defs>
          <radialGradient id="glow12" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#5eead4" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#5eead4" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="100" cy="100" r="90" fill="url(#glow12)" />
        {/* Couple hugging - overlapping bodies */}
        {/* Boy body */}
        <path d="M95 87 C80 87 72 102 72 120 L110 120 C110 102 105 87 95 87Z" fill="#0d9488" />
        {/* Girl body */}
        <path d="M108 87 C95 87 90 102 90 120 L128 120 C128 102 120 87 108 87Z" fill="#06b6d4" />
        {/* Boy head */}
        <circle cx="95" cy="72" r="15" fill="#fbbf24" />
        <path d="M80 68 Q82 54 95 52 Q108 54 110 68" fill="#1e293b" />
        {/* Boy face - eyes closed happily */}
        <path d="M89 70 Q91 68 93 70" stroke="#1e293b" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M97 70 Q99 68 101 70" stroke="#1e293b" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M92 76 Q95 79 98 76" stroke="#1e293b" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        {/* Girl head - resting on boy */}
        <circle cx="108" cy="74" r="14" fill="#fbbf24" />
        <path d="M94 70 Q96 56 108 54 Q120 56 122 70" fill="#1e293b" />
        <path d="M94 70 L91 92" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
        <path d="M122 70 L125 92" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
        {/* Girl face - eyes closed, content */}
        <path d="M103 72 Q105 70 107 72" stroke="#1e293b" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M110 72 Q112 70 114 72" stroke="#1e293b" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M105 78 Q108 81 111 78" stroke="#1e293b" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        {/* Hugging arms */}
        <path d="M80 95 Q75 100 78 108 Q82 115 90 112" stroke="#fbbf24" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M122 95 Q127 100 124 108 Q120 115 112 112" stroke="#fbbf24" strokeWidth="3" fill="none" strokeLinecap="round" />
        {/* Blush */}
        <circle cx="87" cy="75" r="3" fill="#fda4af" opacity="0.5" />
        <circle cx="116" cy="77" r="3" fill="#fda4af" opacity="0.5" />
        {/* Warmth waves */}
        <path d="M70 85 Q65 80 70 75" stroke="#5eead4" strokeWidth="1" fill="none" opacity="0.4" />
        <path d="M65 88 Q60 83 65 78" stroke="#5eead4" strokeWidth="1" fill="none" opacity="0.3" />
        <path d="M132 85 Q137 80 132 75" stroke="#5eead4" strokeWidth="1" fill="none" opacity="0.4" />
        <path d="M137 88 Q142 83 137 78" stroke="#5eead4" strokeWidth="1" fill="none" opacity="0.3" />
        {/* Hearts */}
        <path d="M100 58 C100 55 103 53 105 56 C107 53 110 55 110 58 C110 62 105 65 105 65 C105 65 100 62 100 58Z" fill="#f43f5e" opacity="0.5" />
        <ellipse cx="100" cy="125" rx="50" ry="5" fill="#5eead4" opacity="0.15" />
      </svg>
    ),

    // Kiss Day - Couple close together
    13: (
      <svg viewBox="0 0 200 200" fill="none" className={className}>
        <defs>
          <radialGradient id="glow13" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fda4af" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#fda4af" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="100" cy="100" r="90" fill="url(#glow13)" />
        {/* Boy */}
        <path d="M90 87 C76 87 68 102 68 120 L108 120 C108 102 100 87 90 87Z" fill="#e11d48" />
        <circle cx="90" cy="72" r="15" fill="#fbbf24" />
        <path d="M75 68 Q77 54 90 52 Q103 54 105 68" fill="#1e293b" />
        {/* Boy eyes closed */}
        <path d="M84 70 Q86 68 88 70" stroke="#1e293b" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M92 70 Q94 68 96 70" stroke="#1e293b" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        {/* Girl */}
        <path d="M115 87 C102 87 96 102 96 120 L134 120 C134 102 128 87 115 87Z" fill="#f43f5e" />
        <circle cx="113" cy="72" r="14" fill="#fbbf24" />
        <path d="M99 68 Q101 54 113 52 Q125 54 127 68" fill="#1e293b" />
        <path d="M99 68 L96 90" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
        <path d="M127 68 L130 90" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
        {/* Girl eyes closed */}
        <path d="M107 70 Q109 68 111 70" stroke="#1e293b" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M115 70 Q117 68 119 70" stroke="#1e293b" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        {/* Kiss - lips meeting */}
        <path d="M97 76 L103 76" stroke="#e11d48" strokeWidth="2.5" strokeLinecap="round" />
        {/* Blush */}
        <circle cx="83" cy="75" r="4" fill="#fda4af" opacity="0.6" />
        <circle cx="120" cy="75" r="4" fill="#fda4af" opacity="0.6" />
        {/* Kiss marks floating */}
        <text x="65" y="58" fontSize="12" opacity="0.5">&#x1f48b;</text>
        <text x="130" y="50" fontSize="10" opacity="0.4">&#x1f48b;</text>
        <text x="75" y="45" fontSize="8" opacity="0.3">&#x1f48b;</text>
        {/* Hearts */}
        <path d="M96 55 C96 52 99 50 101 53 C103 50 106 52 106 55 C106 59 101 62 101 62 C101 62 96 59 96 55Z" fill="#f43f5e" opacity="0.6" />
        <path d="M108 48 C108 46 110 45 111 47 C112 45 114 46 114 48 C114 51 111 53 111 53 C111 53 108 51 108 48Z" fill="#fb7185" opacity="0.4" />
        {/* Arms around each other */}
        <path d="M75 100 Q72 95 76 92" stroke="#fbbf24" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M130 100 Q133 95 129 92" stroke="#fbbf24" strokeWidth="3" fill="none" strokeLinecap="round" />
        <ellipse cx="100" cy="125" rx="50" ry="5" fill="#fda4af" opacity="0.15" />
      </svg>
    ),

    // Valentine's Day - Couple holding a big heart together
    14: (
      <svg viewBox="0 0 200 200" fill="none" className={className}>
        <defs>
          <radialGradient id="glow14" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f43f5e" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#f43f5e" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="heartGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f43f5e" />
            <stop offset="50%" stopColor="#e11d48" />
            <stop offset="100%" stopColor="#be123c" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="100" r="90" fill="url(#glow14)" />
        {/* Big heart in center */}
        <path d="M100 130 C100 130 60 105 60 80 C60 65 72 58 85 62 C92 65 97 70 100 76 C103 70 108 65 115 62 C128 58 140 65 140 80 C140 105 100 130 100 130Z" fill="url(#heartGrad)" opacity="0.9" />
        {/* Sparkles on heart */}
        <circle cx="80" cy="78" r="3" fill="white" opacity="0.3" />
        <circle cx="85" cy="73" r="1.5" fill="white" opacity="0.2" />
        {/* Boy on left side */}
        <circle cx="72" cy="55" r="14" fill="#fbbf24" />
        <path d="M72 69 C60 69 52 82 52 98 L92 98 C92 82 84 69 72 69Z" fill="#dc2626" />
        <path d="M58 52 Q60 40 72 38 Q84 40 86 52" fill="#1e293b" />
        {/* Boy face */}
        <path d="M67 53 Q69 51 71 53" stroke="#1e293b" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M73 53 Q75 51 77 53" stroke="#1e293b" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M69 59 Q72 62 75 59" stroke="#1e293b" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        {/* Girl on right side */}
        <circle cx="130" cy="55" r="14" fill="#fbbf24" />
        <path d="M130 69 C118 69 110 82 110 98 L150 98 C150 82 142 69 130 69Z" fill="#e11d48" />
        <path d="M116 52 Q118 40 130 38 Q142 40 144 52" fill="#1e293b" />
        <path d="M116 52 L113 72" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
        <path d="M144 52 L147 72" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
        {/* Girl face */}
        <path d="M125 53 Q127 51 129 53" stroke="#1e293b" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M131 53 Q133 51 135 53" stroke="#1e293b" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M127 59 Q130 62 133 59" stroke="#1e293b" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        {/* Both holding the heart */}
        <path d="M88 92 L82 88" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" />
        <path d="M114 92 L120 88" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" />
        {/* Blush */}
        <circle cx="65" cy="58" r="3" fill="#fda4af" opacity="0.5" />
        <circle cx="137" cy="58" r="3" fill="#fda4af" opacity="0.5" />
        {/* Sparkles around */}
        <path d="M100 32 L100 27 M98 30 L102 30" stroke="#fbbf24" strokeWidth="1.5" />
        <path d="M50 60 L46 58 M48 62 L48 56" stroke="#f43f5e" strokeWidth="1" />
        <path d="M152 60 L156 58 M154 62 L154 56" stroke="#f43f5e" strokeWidth="1" />
        <path d="M60 42 L57 39" stroke="#fbbf24" strokeWidth="1" />
        <path d="M142 42 L145 39" stroke="#fbbf24" strokeWidth="1" />
        {/* Crown / special */}
        <path d="M92 28 L96 22 L100 26 L104 22 L108 28" stroke="#fbbf24" strokeWidth="1.5" fill="#fbbf24" opacity="0.7" />
        <ellipse cx="100" cy="135" rx="55" ry="5" fill="#f43f5e" opacity="0.15" />
      </svg>
    ),
  };

  return <>{scenes[dayId] || null}</>;
}
