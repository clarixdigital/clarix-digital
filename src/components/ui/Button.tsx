import type { AnchorHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'outline' | 'outlineLight';
const styles: Record<Variant, string> = {
  primary: 'bg-accent text-navy hover:bg-[#ff7d4d] shadow-sm',
  secondary: 'bg-navy text-white hover:bg-navy-mid',
  outline: 'border-2 border-navy text-navy hover:bg-navy hover:text-white',
  outlineLight: 'border-2 border-white/40 text-white hover:bg-white/10',
};

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant; children: ReactNode };

export function Button({ variant = 'primary', className = '', children, ...rest }: Props) {
  return (
    <a
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-bold transition-colors ${styles[variant]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}
