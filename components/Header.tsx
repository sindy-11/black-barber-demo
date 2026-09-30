"use client";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { business, navigation } from "@/data/business";
import { BookingLink } from "./ui";
export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 30);
    scroll();
    window.addEventListener("scroll", scroll, { passive: true });
    return () => window.removeEventListener("scroll", scroll);
  }, []);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        button.current?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className={`header ${scrolled || open ? "solid" : ""}`}>
      <div className="container header-inner">
        <a
          className="brand"
          href="#home"
          aria-label={`${business.name} — главная`}
        >
          <span className="brand-symbol">
            {business.shortName}
            <i />
          </span>
          <span>
            {business.name}
            <small>
              {business.category} · {business.city}
            </small>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Основная навигация">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <BookingLink className="header-book" />
        <button
          ref={button}
          className="menu-toggle"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <nav
        id="mobile-nav"
        className="mobile-nav"
        aria-label="Мобильная навигация"
        hidden={!open}
      >
        {navigation.map((item) => (
          <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
        <BookingLink />
      </nav>
    </header>
  );
}
