import { primaryContact, telUrl, whatsappUrl } from '@/data/site';
import { ChatIcon, PhoneIcon } from '@/components/ui/Icons';

export function FloatingCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-3 border-t border-line bg-white/95 p-3 backdrop-blur md:hidden">
      <a href={telUrl(primaryContact.phone)} className="flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-navy font-bold text-navy">
        <PhoneIcon /> Llamar
      </a>
      <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent font-bold text-navy">
        <ChatIcon /> WhatsApp
      </a>
    </div>
  );
}
