import Image from "next/image";
import { business } from "@/data/business";
import { BookingLink, SectionHeading } from "./ui";
export default function Masters() {
  return (
    <section id="masters" className="section container">
      <SectionHeading
        number="03"
        label="Команда"
        title="Знакомься. Твои мастера."
        text="Разные характеры. Один стандарт — работа, за которую не стыдно."
      />
      <div className="masters-grid">
        {business.masters.map((master, i) => (
          <article className="master" key={master.name}>
            <div className="master-photo">
              <Image
                src={master.photo}
                alt={`${master.name} — ${master.role}`}
                fill
                sizes="(max-width: 760px) 100vw, 33vw"
              />
              <span className="master-index">
                0{i + 1} / {master.experience}
              </span>
            </div>
            <div className="master-title">
              <h3>{master.name}</h3>
              <span>{master.role}</span>
            </div>
            <p>{master.description}</p>
            <BookingLink master={master.name} className="button-outline">
              Записаться к мастеру
            </BookingLink>
          </article>
        ))}
      </div>
    </section>
  );
}
