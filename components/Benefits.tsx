import { Scissors, Sparkles, MapPin, Coffee } from "lucide-react";
import { business } from "@/data/business";
const icons = {
  scissors: Scissors,
  sparkles: Sparkles,
  map: MapPin,
  coffee: Coffee,
};
export default function Benefits() {
  return (
    <section className="benefits section">
      <div className="container">
        <h2 className="sr-only">Почему выбирают нас</h2>
        <div className="benefits-grid">
          {business.benefits.map((item) => {
            const Icon = icons[item.icon];
            return (
              <article key={item.title}>
                <Icon size={30} strokeWidth={1.25} aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
