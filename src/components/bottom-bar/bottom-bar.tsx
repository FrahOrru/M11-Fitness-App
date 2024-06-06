"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './bottom-bar.modules.css';

const BottomBar = () => {
  const pathname = usePathname();

  return (
    <div className="bottom-bar">
      <Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link>
      <Link href="/about" className={pathname === '/about' ? 'active' : ''}>About</Link>
      <Link href="/services" className={pathname === '/services' ? 'active' : ''}>Services</Link>
      <Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>Contact</Link>
    </div>
  );
};

export default BottomBar;
