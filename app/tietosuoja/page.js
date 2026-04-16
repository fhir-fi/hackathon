import Link from "next/link";

import Footer from "../footer";

export default function Privacy() {
  return (
    <main>
      <Link href="/">
        <picture>
          <img className="decoration" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/atk-hackathon-logo.svg`} alt="" />
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
        <p>
          Mikäli rekisteröidyt hackathonin osallistujaksi, tallennamme sinusta vain rekisteröinnin
          yhteydessä itse kertomasi tiedot. Käsittelemme näitä tietoja vain hackathonin
          järjestämiseksi tarpeellisiin tarkoituksiin. Käsittelemme tietojasi luottamuksellisesti
          emmekä jaa niitä ulkopuolisille. Poistamme tallennetut tiedot hackathonin päättymisen
          jälkeen.
        </p>
        <p>
          Mikäli sinulla on kysyttävää tietosuojasta tai toiveita tietojesi käsittelyyn liittyen,
          ota yhteyttä: <a href="mailto:fhir.finland@gmail.com">fhir.finland@gmail.com</a>.
        </p>
      </section>
      <Footer />
      <Link href="/">
        <picture>
          <img className="decoration" src={`${process.env.NEXT_PUBLIC_BASE_PATH}/atk-hackathon-logo.svg`} alt="" />
        </picture>
      </Link>
    </main>
  );
}
