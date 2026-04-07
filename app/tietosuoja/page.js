import Link from "next/link";

import Footer from "../footer";

export default function Privacy() {
  return (
    <main>
      <Link href="/">
        <picture>
          <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/atk-hackathon-logo.svg`} alt="" />
        </picture>
      </Link>
      <Link href="/">
        <h1>ATK-hackathon</h1>
      </Link>
      <p className="ingress">
        HL7 Finland ja Helsingin kaupunki järjestävät Sosiaali- ja terveydenhuollon ATK-päivien
        yhteydessä hackathon-tapahtuman.
      </p>
      <section id="privacy">
        <a href="#privacy"><h2>Tietosuoja</h2></a>
        <p>
          Voit selata näitä sivuja huoletta. Sinua tai käyttäytymistäsi sivuilla ei seurata.
        </p>
      </section>
      <Footer />
      <Link href="/">
        <picture>
          <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/atk-hackathon-logo.svg`} alt="" />
        </picture>
      </Link>
    </main>
  );
}
