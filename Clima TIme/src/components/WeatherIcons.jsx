const base = {
  size: 128,
}

function Sun() {
  return (
    <svg viewBox="0 0 64 64" width={base.size} height={base.size} role="img" aria-label="Sol">
      <circle cx="32" cy="32" r="12" fill="#FFD166" />
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i * Math.PI) / 4
        const x1 = 32 + Math.cos(a) * 20
        const y1 = 32 + Math.sin(a) * 20
        const x2 = 32 + Math.cos(a) * 28
        const y2 = 32 + Math.sin(a) * 28
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#FFD166" strokeWidth="4" strokeLinecap="round" />
      })}
    </svg>
  )
}

function Cloud() {
  return (
    <svg viewBox="0 0 64 64" width={base.size} height={base.size} role="img" aria-label="Nuvens">
      <circle cx="26" cy="30" r="10" fill="#D3E3FC" />
      <circle cx="38" cy="32" r="12" fill="#D3E3FC" />
      <rect x="18" y="32" width="32" height="12" rx="6" fill="#D3E3FC" />
    </svg>
  )
}

function Rain() {
  return (
    <svg viewBox="0 0 64 64" width={base.size} height={base.size} role="img" aria-label="Chuva">
      <Cloud />
      {Array.from({ length: 6 }).map((_, i) => (
        <line key={i} x1={20 + i * 6} y1={46} x2={18 + i * 6} y2={58} stroke="#60A5FA" strokeWidth="3" strokeLinecap="round" />
      ))}
    </svg>
  )
}

function Thunder() {
  return (
    <svg viewBox="0 0 64 64" width={base.size} height={base.size} role="img" aria-label="Tempestade">
      <Cloud />
      <polygon points="30,44 24,60 34,54 30,64 42,48 32,52" fill="#FBBF24" />
    </svg>
  )
}

function Snow() {
  return (
    <svg viewBox="0 0 64 64" width={base.size} height={base.size} role="img" aria-label="Neve">
      <Cloud />
      {Array.from({ length: 5 }).map((_, i) => (
        <circle key={i} cx={22 + i * 8} cy={52} r="2.5" fill="#BFDBFE" />
      ))}
    </svg>
  )
}

function Mist() {
  return (
    <svg viewBox="0 0 64 64" width={base.size} height={base.size} role="img" aria-label="Névoa">
      <Cloud />
      <rect x="16" y="50" width="32" height="3" rx="2" fill="#C7D2FE" />
      <rect x="12" y="56" width="40" height="3" rx="2" fill="#C7D2FE" />
    </svg>
  )
}

function Moon() {
  return (
    <svg viewBox="0 0 64 64" width={base.size} height={base.size} role="img" aria-label="Lua">
      <circle cx="32" cy="32" r="14" fill="#FDE68A" />
      <circle cx="38" cy="28" r="12" fill="#0F172A" />
    </svg>
  )
}

export function WeatherIcon({ id, main, isDay }) {
  if (!id && main) {
    const m = String(main).toLowerCase()
    if (m.includes('rain') || m.includes('drizzle')) return <Rain />
    if (m.includes('cloud')) return <Cloud />
    if (m.includes('snow')) return <Snow />
    if (m.includes('thunder')) return <Thunder />
    if (m.includes('mist') || m.includes('fog') || m.includes('haze')) return <Mist />
    if (m.includes('clear')) return isDay ? <Sun /> : <Moon />
  }

  if (id >= 200 && id < 300) return <Thunder /> // Trovoadas
  if (id >= 300 && id < 400) return <Rain />    // Garoa
  if (id >= 500 && id < 600) return <Rain />    // Chuva
  if (id >= 600 && id < 700) return <Snow />    // Neve
  if (id >= 700 && id < 800) return <Mist />    // Atmosfera
  if (id === 800) return isDay ? <Sun /> : <Moon /> // Céu limpo
  if (id > 800) return <Cloud />                 // Nuvens

  return isDay ? <Sun /> : <Moon />
}
