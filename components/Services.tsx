import { business } from "@/data/business";
import { formatPrice } from "@/lib/links";
import { BookingLink, SectionHeading } from "./ui";
export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <SectionHeading
          number="02"
          label="Услуги и цены"
          title="Твой стиль. Наше ремесло."
          text="В стоимость уже входят консультация мастера, мытьё и укладка. Всё по делу."
        />
        <div className="service-list">
          {business.services.map((service, i) => (
            <article
              className={`service-row ${service.featured ? "featured" : ""}`}
              key={service.id}
            >
              <span className="service-number">0{i + 1}</span>
              <div className="service-info">
                <h3>
                  {service.name}
                  {service.featured && (
                    <span className="badge">Выбор гостей</span>
                  )}
                </h3>
                <p>{service.description}</p>
              </div>
              <span className="duration">{service.duration}</span>
              <strong className="price">{formatPrice(service.price)}</strong>
              <BookingLink service={service.name} className="service-book">
                Записаться
              </BookingLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
