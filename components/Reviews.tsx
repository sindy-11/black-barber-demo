import { Star } from "lucide-react";
import { business } from "@/data/business";
import { SectionHeading } from "./ui";
export default function Reviews() {
  return (
    <section id="reviews" className="section reviews">
      <div className="container">
        <SectionHeading
          number="05"
          label="Отзывы"
          title="Возвращаются. Рекомендуют."
        />
        <div className="reviews-grid">
          {business.reviews.map((review) => (
            <article className="review" key={review.name}>
              <div className="stars" aria-label={`${review.rating} из 5`}>
                {Array.from({ length: review.rating }, (_, i) => (
                  <Star
                    key={i}
                    size={15}
                    fill="currentColor"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote>«{review.text}»</blockquote>
              <div className="review-person">
                <span className="avatar">{review.name[0]}</span>
                <div>
                  <h3>{review.name}</h3>
                  <span>{review.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
