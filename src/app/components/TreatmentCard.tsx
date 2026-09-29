import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowUpRight } from "./ArrowUpRight";

export type TreatmentCardProps = {
  name: string;
  href: string;
  description: string;
  poster: string;
  label: string;
  tint: string;
  objectPosition?: string;
};

/**
 * Treatment tile: a still only. The films play on the individual treatment
 * pages, so the overview stays light and does not autoplay five videos.
 */
export function TreatmentCard({
  name,
  href,
  description,
  poster,
  label,
  tint,
  objectPosition = "50% 50%",
}: TreatmentCardProps) {
  return (
    <Link
      className="so-card"
      data-card="1"
      data-rev="1"
      href={href}
      style={{ "--so-card-tint": tint } as CSSProperties}
    >
      <div className="so-card-media">
        <div className="so-card-zoom" style={{ "--film-position": objectPosition } as CSSProperties}>
          {/* sizes was 50vw/20vw, guessed rather than measured: this tile is
              actually ~0.95fr of a two-column row on desktop and 82% of the
              scroll rail on mobile. Measured live at 604px (~42vw) on a 1440
              viewport and 275px (~73vw) on a 375 one — the old values under-
              served both by roughly 2x, so every treatment photo (including
              this component's own poster prop) was upscaled and blurry. */}
          <Image src={poster} alt={label} fill sizes="(max-width: 760px) 73vw, 45vw" />
        </div>
      </div>
      <div className="so-card-body">
        <h3>{name}</h3>
        <p>{description}</p>
        <span className="so-card-cue">
          Zur Behandlung
          <ArrowUpRight size={11} />
        </span>
      </div>
    </Link>
  );
}
