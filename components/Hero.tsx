import Image from "next/image";
import { Star } from "lucide-react";
import { business } from "@/data/business";
import { BookingLink } from "./ui";
export default function Hero() {
  return (
    <section id="home" className="hero">
      <Image
        src={business.photos.hero}
        alt="Барбер за работой в атмосферном мужском барбершопе"
        fill
        priority
        sizes="100vw"
        className="hero-image"
      />
      <div className="hero-shade" />
      <div className="container hero-content">
        <p className="eyebrow">
          <span className="line" /> {business.city} · С {business.founded} года
        </p>
        <p className="hero-name">{business.name}</p>
        <h1>{business.slogan}</h1>
        <p className="hero-description">{business.description}</p>
        <div className="hero-actions">
          <BookingLink>Записаться на стрижку</BookingLink>
          <a className="button button-outline" href="#services">
            Наши услуги
          </a>
        </div>
        <div className="hero-stats">
          {business.stats.map((stat, i) => (
            <div key={stat.label}>
              <strong>
                {stat.value}
                {i === 0 && <Star size={18} fill="currentColor" />}
              </strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="hero-bottom container">
        <span>Мужские стрижки. Настоящий характер.</span>
        <a href="#about">Познакомимся ближе ↓</a>
      </div>
    </section>
  );
}
