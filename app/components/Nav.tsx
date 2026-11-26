'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { X, ArrowRight } from 'lucide-react';
import { nav, site } from '@/app/content/site';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [open]);

  return (
    <header ref={headerRef} className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner relative flex items-center justify-between">
        <Link href="/" className="brand" aria-label={site.name}>
          <Image
            src="/brand/logo-light-no-global.svg"
            alt="Eagle Pathway"
            width={110}
            height={48}
            className="brand-logo"
            priority
            unoptimized
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="nav-links" aria-label="Main Navigation">
          {nav.map((item) => {
            const active = pathname === item.href;
            const isExternal = item.href.startsWith('http') || item.href === '/apply-with-us';
            const isApply = item.label === 'Apply with Us';
            const applyClass = isApply ? 'nav-link-apply' : '';
            return isExternal ? (
              <a
                key={item.href}
                href="https://forms.gle/NL2oB6mHHUscnZo9A"
                target="_blank"
                rel="noopener noreferrer"
                className={`nav-link ${applyClass}`}
              >
                <span>{item.label}</span>
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${applyClass} ${active ? 'active' : ''}`}
              >
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="nav-ctas">
          <a
            href="https://forms.gle/Fpcrq4bimki647M16"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary nav-cta-btn"
          >
            <span>Book Package to 2027 Intake</span>
            <ArrowRight size={17} className="nav-cta-arrow transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="nav-toggle"
          aria-label="Toggle Navigation"
          aria-expanded={open}
        >
          {open ? (
            <X size={26} className="text-orange-600" />
          ) : (
            <div className="flex flex-col gap-1.5 w-6 h-5 justify-center items-center">
              <span className="w-6 h-0.5 bg-slate-900 rounded-full" />
              <span className="w-6 h-0.5 bg-slate-900 rounded-full" />
              <span className="w-6 h-0.5 bg-slate-900 rounded-full" />
            </div>
          )}
        </button>
      </div>

      {/* Slide-Down Mobile Menu Dropdown & Backdrop */}
      {open && (
        <>
          <div
            className="fixed inset-0 top-[var(--nav-h)] bg-slate-950/20 backdrop-blur-[2px] z-[99998]"
            onClick={() => setOpen(false)}
          />
          <div className="mobile-menu animate-in relative z-[99999]">
            {nav.map((item) => {
              const isExternal = item.href.startsWith('http') || item.href === '/apply-with-us';
              const active = pathname === item.href;
              const isApply = item.label === 'Apply with Us';
              const applyClass = isApply ? 'mobile-nav-apply' : '';
              return isExternal ? (
                <a
                  key={item.href}
                  href="https://forms.gle/NL2oB6mHHUscnZo9A"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className={applyClass}
                >
                  <span>{item.label}</span>
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`${active ? 'active' : ''} ${applyClass}`.trim()}
                >
                  <span>{item.label}</span>
                </Link>
              );
            })}
            <a
              href="https://forms.gle/Fpcrq4bimki647M16"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn btn-primary flex items-center justify-center gap-2 py-3.5 text-base font-bold"
            >
              <span>Book Package to 2027 Intake</span>
              <ArrowRight size={17} />
            </a>
          </div>
        </>
      )}
    </header>
  );
}
