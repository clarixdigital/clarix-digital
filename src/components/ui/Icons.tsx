type IconProps = { className?: string };
const base = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true } as const;

export const CheckIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
);
export const PhoneIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" /></svg>
);
export const MailIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
);
export const ChatIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}><path d="M21 12a8 8 0 01-11.6 7.1L4 20l1-4.6A8 8 0 1121 12z" /></svg>
);
export const MenuIcon = ({ open }: { open: boolean }) => (
  <svg {...base} width={24} height={24}>{open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}</svg>
);
