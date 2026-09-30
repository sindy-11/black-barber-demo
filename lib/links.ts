import { business } from "@/data/business";
export function getWhatsAppLink(context?: {
  service?: string;
  master?: string;
}) {
  const number = business.whatsapp.replace(/\D/g, "");
  const message = [
    business.bookingMessage.replaceAll("{name}", business.name),
    context?.service && `Услуга: ${context.service}.`,
    context?.master && `Мастер: ${context.master}.`,
  ]
    .filter(Boolean)
    .join(" ");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
export const phoneLink = `tel:${business.phone.replace(/[^+\d]/g, "")}`;
export const formatPrice = (price: number) =>
  `${new Intl.NumberFormat("ru-RU").format(price)} ${business.currency}`;
