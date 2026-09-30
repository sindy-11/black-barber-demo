import { business } from "@/data/business";
import { BookingLink } from "./ui";
export default function CTA() {
  return (
    <section className="cta container">
      <div>
        <p className="eyebrow">Хороший день начинается с себя</p>
        <h2>{business.cta.title}</h2>
        <p>{business.cta.text}</p>
      </div>
      <BookingLink>Записаться сейчас</BookingLink>
      <span className="cta-watermark" aria-hidden="true">
        {business.shortName}
      </span>
    </section>
  );
}
