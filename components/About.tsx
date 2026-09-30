import Image from "next/image";
import { business } from "@/data/business";
export default function About() {
  return (
    <section id="about" className="section container about">
      <div className="about-photo">
        <Image
          src={business.photos.about}
          alt="Интерьер барбершопа: кресла, зеркала и тёплый свет"
          fill
          sizes="(max-width: 760px) 100vw, 50vw"
        />
        <span className="photo-label">
          EST. {business.founded} / {business.city}
        </span>
      </div>
      <div className="about-copy">
        <p className="eyebrow">
          <span>01</span> Место с характером
        </p>
        <h2>{business.about.title}</h2>
        <p>{business.about.text}</p>
        <p className="muted">{business.about.detail}</p>
        <div className="signature">
          {business.name}
          <span>Дело в деталях.</span>
        </div>
      </div>
    </section>
  );
}
