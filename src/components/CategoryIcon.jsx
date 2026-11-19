const paths = {
  Camisetas: <path d="M22 12 8 20l5 10 7-3v25h24V27l7 3 5-10-14-8c-2 4-6 6-10 6s-8-2-10-6Z" />,
  'Calças': <path d="M20 8h24l4 48H35l-3-30-3 30H16Z" />,
  'Bonés': <><path d="M12 44C12 28 21 16 32 16s20 12 20 28Z" /><path d="M52 44h10" /></>,
  Headphones: <><path d="M12 38v-6c0-12 9-20 20-20s20 8 20 20v6" /><rect x="8" y="36" width="10" height="16" rx="3" /><rect x="46" y="36" width="10" height="16" rx="3" /></>,
  'Tênis': <><path d="M6 44V30l10 4 6-10 6 6c6 2 16 4 24 10 6 2 6 6 4 8H8c-2 0-2-2-2-4Z" /><path d="M6 44h52" /></>,
}
export default function CategoryIcon({ name }) {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" aria-hidden="true">
      {paths[name]}
    </svg>
  )
}