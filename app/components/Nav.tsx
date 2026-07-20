'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { nav, site } from '@/app/content/site';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <Image
            src="/logo.png"
            alt={site.name}
            width={220}
            height={70}
            className="brand-logo"
            priority
          />
        </Link>

        <nav>
          <ul className="nav-links">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-right">
          <Link className="btn btn-ghost" href="/services">
            Services
          </Link>
          <Link className="btn btn-primary" href="/contact">
            Get Started
          </Link>
          <button
            className="nav-toggle"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-menu">
          <Link href="/services" onClick={() => setOpen(false)}>
            Services
          </Link>
          {nav.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link className="btn btn-primary" href="/contact" onClick={() => setOpen(false)}>
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}
