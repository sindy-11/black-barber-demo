import { business, navigation } from "@/data/business";
import { getWhatsAppLink, phoneLink } from "@/lib/links";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <a className="footer-brand" href="#home">
            {business.name}
          </a>
          <nav aria-label="Навигация в подвале">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="footer-contact">
          <span>
            {business.city}, {business.address}
          </span>
          <a href={phoneLink}>{business.phone}</a>
          <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
          <a
            href={business.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {business.name}. Все права защищены.
          </span>
          <span>Сделано с характером.</span>
        </div>
      </div>
    </footer>
  );
}
