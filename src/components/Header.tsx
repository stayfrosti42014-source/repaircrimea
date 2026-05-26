import React from 'react';
import { Send, Phone } from 'lucide-react';

interface HeaderProps {
  onNavItemClick?: (href: string) => void;
}

const NavItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    className="text-slate-600 font-medium px-2 py-1 transition-all hover:text-blue-600 hover:scale-105 active:scale-95"
  >
    {children}
  </a>
);

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* LOGO */}
          <div className="flex items-center gap-4">

            <div className="relative flex items-center justify-center">
              <div className="relative flex items-center justify-center">
  <img
    src="/logo.png"
    alt="КРЫМ.СЕРВИС"
    className="h-14 w-14 object-contain drop-shadow-lg"
  />
</div>

            <div className="flex flex-col leading-tight">
              <span className="text-2xl font-extrabold tracking-tight text-blue-600">
                КРЫМ.СЕРВИС
              </span>

              <span className="text-xs font-medium text-slate-500">
                Ремонт бытовой техники в Крыму
              </span>
            </div>

          </div>

          {/* NAVIGATION */}
          <nav className="hidden lg:flex items-center gap-6 text-sm">
            <NavItem href="#advantages">
              Почему нам доверяют
            </NavItem>

            <NavItem href="#services">
              Что мы ремонтируем
            </NavItem>

            <NavItem href="#map">
              Где мы работаем
            </NavItem>

            <NavItem href="#reviews">
              Отзывы
            </NavItem>
          </nav>

          {/* CONTACTS */}
          <div className="hidden lg:flex items-center gap-6">

            <div className="flex items-center gap-3 text-slate-400">

              <a
                href="https://t.me/DochGubernatora"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-all hover:scale-110 active:scale-90"
              >
                <Send size={18} />
              </a>

              <a
                href="tel:+79790314508"
                className="hover:text-green-500 transition-all hover:scale-110 active:scale-90"
              >
                <Phone size={18} />
              </a>

            </div>

            <div className="h-8 w-[1px] bg-slate-200"></div>

            <div className="text-right">

              <div className="flex flex-col gap-0.5">

                <a
                  href="tel:+79790314508"
                  className="text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors"
                >
                  +7 (979) 031-45-08
                </a>

                <a
                  href="tel:+79785435383"
                  className="text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors"
                >
                  +7 (978) 543-53-83
                </a>

              </div>

            </div>

          </div>

          {/* MOBILE */}
          <div className="lg:hidden flex items-center">

            <a
              href="tel:+79790314508"
              className="p-2 text-slate-400 hover:text-blue-600 transition-all hover:scale-110 active:scale-90"
            >
              <Phone size={24} />
            </a>

          </div>

        </div>
      </div>
    </header>
  );
};
