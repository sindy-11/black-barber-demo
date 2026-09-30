import { getWhatsAppLink } from "@/lib/links";
export function BookingLink({
  children = "Записаться",
  service,
  master,
  className = "",
}: {
  children?: React.ReactNode;
  service?: string;
  master?: string;
  className?: string;
}) {
  return (
    <a
      className={`button ${className}`}
      href={getWhatsAppLink({ service, master })}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
export function SectionHeading({
  number,
  label,
  title,
  text,
}: {
  number: string;
  label: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">
          <span>{number}</span> {label}
        </p>
        <h2>{title}</h2>
      </div>
      {text && <p className="section-description">{text}</p>}
    </div>
  );
}
