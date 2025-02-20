import Image from "next/image";

interface HeaderProps {
  activePage: 'home' | 'services' | 'contact';
}

export default function Header({ activePage }: HeaderProps) {
  return (
    <header className="bg-white sticky top-0 z-50 flex items-center justify-between w-full px-8 py-4">
      <div className="flex items-center gap-2">
        <Image src="/images/brand/logo.png" alt="Armaand Consultancy" height={32} width={32} />
        <span className="text-xl font-medium">Armaand</span>
      </div>

      <nav className="flex gap-8">
        <a 
          href="/" 
          className={`${activePage === 'home' ? 'font-bold text-black' : 'text-gray-600'} hover:text-black`}
        >
          Home
        </a>
        <a 
          href="/services" 
          className={`${activePage === 'services' ? 'font-bold text-black' : 'text-gray-600'} hover:text-black`}
        >
          Services
        </a>
        <a 
          href="/contact" 
          className={`${activePage === 'contact' ? 'font-bold text-black' : 'text-gray-600'} hover:text-black`}
        >
          Contact us
        </a>
      </nav>

      <button className="px-4 py-2 rounded-full border border-black">
        Schedule a call
      </button>
    </header>
  );
} 