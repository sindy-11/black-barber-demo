"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { X, Plus } from "lucide-react";
import { business } from "@/data/business";
import { SectionHeading } from "./ui";
export default function Gallery() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState(0);
  return (
    <section id="gallery" className="section container">
      <SectionHeading
        number="04"
        label="В объективе"
        title="Атмосфера в деталях."
        text="Наши работы и место, в котором они рождаются."
      />
      <div className="gallery-grid">
        {business.gallery.map((photo, i) => (
          <button
            className="gallery-item"
            key={photo.src}
            aria-label={`Увеличить: ${photo.alt}`}
            onClick={() => {
              setSelected(i);
              dialog.current?.showModal();
            }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 760px) 100vw, 40vw"
            />
            <span>
              <Plus size={22} />
            </span>
          </button>
        ))}
      </div>
      <dialog
        ref={dialog}
        aria-label="Просмотр фотографии"
        className="lightbox"
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
      >
        <button
          autoFocus
          className="lightbox-close"
          aria-label="Закрыть фотографию"
          onClick={() => dialog.current?.close()}
        >
          <X />
        </button>
        <div className="lightbox-image">
          <Image
            src={business.gallery[selected].src}
            alt={business.gallery[selected].alt}
            fill
            sizes="90vw"
          />
        </div>
        <p>{business.gallery[selected].alt}</p>
      </dialog>
    </section>
  );
}
