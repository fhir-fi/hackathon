import Footer from "./footer";

export default function Home() {
  return (
    <main>
      <picture>
        <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/atk-hackathon-logo.svg`} />
      </picture>
      <h1>ATK-hackathon</h1>
      <p className="ingress">
        HL7 Finland ja Helsingin kaupunki järjestävät Sosiaali- ja terveydenhuollon ATK-päivien
        yhteydessä hackathon-tapahtuman.
      </p>
      {/*
      <section id="systems">
        <a href="#systems"><h2>Järjestelmät</h2></a>
        <ul>
          <li>Apotti</li>
          <li>Esko</li>
          <li>SuomiSote</li>
        </ul>
      </section>
      */}
      <section id="challenges">
        <a href="#challenges"><h2>Haasteet</h2></a>
        <p>
          Kartoitamme parhaillaan hyvinvointialueilta ja muilta terveydenhuollon toimijoilta
          haasteita hackathonin osallistujille.
        </p>
        <p>
          Mikäli sinulla on mielessä hyvä haaste, kerro siitä Jari Porrasmaalle <a
          href="jari.porrasmaa@hyvaks.fi">jari.porrasmaa@hyvaks.fi</a> ja Tero Laiholle <a
          href="tero.laiho@hel.fi">tero.laiho@hel.fi</a>.
        </p>
      </section>
      {/*
      <section id="prizes">
        <a href="#prizes"><h2>Palkinnot</h2></a>
        <p>
          
        </p>
      </section>
      */}
      <section id="info">
        <a href="#info"><h2>Ohjeet</h2></a>
        <p>
          Ohjeet päivittyvät tälle sivulle lähempänä ajankohtaa.
        </p>
        <p>
          Kannattaa myös perehtyä tammikuussa 2026 järjestetyn Finnish Health Data Hackathonin <a
          href="https://fhir.fi/hackathon/2026/finland#webinars">webinaareihin ja
          ohjeistuksiin</a>.
        </p>
      </section>
      <Footer />
      <picture>
        <img src={`${process.env.NEXT_PUBLIC_BASE_PATH}/atk-hackathon-logo.svg`} />
      </picture>
    </main>
  );
}
