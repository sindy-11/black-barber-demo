import { Phone, MapPin, Clock, Instagram, MessageCircle } from "lucide-react";
import { business } from "@/data/business";
import { phoneLink, getWhatsAppLink } from "@/lib/links";
import { SectionHeading } from "./ui";
export default function Contacts() {
  return (
    <section id="contacts" className="section container">
      <SectionHeading number="06" label="Контакты" title="Увидимся в кресле." />
      <div className="contacts-grid">
        <div className="contact-info">
          <div className="contact-row">
            <MapPin />
            <div>
              <span>Ждём тебя здесь</span>
              <h3>{business.address}</h3>
              <p>{business.addressNote}</p>
            </div>
          </div>
          <div className="contact-row">
            <Clock />
            <div>
              <span>Время для себя</span>
              <h3>{business.hours}</h3>
            </div>
          </div>
          <div className="contact-row">
            <Phone />
            <div>
              <span>Позвони нам</span>
              <a className="contact-phone" href={phoneLink}>
                {business.phone}
              </a>
            </div>
          </div>
          <div className="contact-actions">
            <a className="button" href={phoneLink}>
              Позвонить
            </a>
            <a
              className="button button-outline"
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} />
              Написать в WhatsApp
            </a>
          </div>
          <a
            className="social-link"
            href={business.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={18} />
            {business.instagramLabel}
          </a>
        </div>
        <div className="map">
          <iframe
            src={business.map.embed}
            title={`Карта — ${business.name}`}
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <a
            className="button map-link"
            href={business.map.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MapPin size={17} />
            Открыть карту
          </a>
        </div>
      </div>
    </section>
  );
}
