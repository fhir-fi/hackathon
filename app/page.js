import Link from "next/link";

import Footer from "./footer";

export default function Home() {
  return (
    <main>
      <Link href="/">
        <picture>
          <img
            className="decoration"
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/atk-hackathon-logo.svg`}
            alt=""
          />
        </picture>
      </Link>
      <Link href="/">
        <h1>ATK-hackathon</h1>
      </Link>
      <p className="ingress">
        HL7 Finland ja Helsingin kaupunki järjestävät Sosiaali- ja terveydenhuollon ATK-päivien
        yhteydessä hackathon-tapahtuman.
      </p>
      <p>
        Hackathonin tavoitteena on havainnollistaa standardien ja avointen rajapintojen hyötyjä
        sosiaali- ja terveydenhuollon toimijoille.
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
          href="mailto:jari.porrasmaa@hyvaks.fi">jari.porrasmaa@hyvaks.fi</a> ja Tero Laiholle <a
          href="mailto:tero.laiho@hel.fi">tero.laiho@hel.fi</a>.
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
          Ajankohta: <time dateTime="2026-05-25">ma 25.5.2026</time> klo <time
          dateTime="2026-05-25T07:00:00+03:00">07:00</time>-<time
          dateTime="2026-05-25T18::00:00+03:00">18:00</time> ja <time dateTime="2026-05-25">ti
          26.5.2026</time> klo <time dateTime="2026-05-25T07:00:00+03:00">07:00</time>-<time
          dateTime="2026-05-25T18::00:00+03:00">18:00</time>.
        </p>
        <p>
          Ohjeet päivittyvät tälle sivulle lähempänä ajankohtaa.
        </p>
        <p>
          Kannattaa myös perehtyä tammikuussa 2026 järjestetyn Finnish Health Data Hackathonin <a
          href="https://fhir.fi/hackathon/2026/finland#webinars">webinaareihin ja
          ohjeistuksiin</a>.
        </p>
      </section>
      <section id="register">
        <a href="#register"><h2>Rekisteröityminen</h2></a>
        <p>
          Rekisteröityminen tapahtuu erillisellä lomalleella. Rekisteröityminen on
          mahdollista <time dateTime="2026-05-12">12.5.2026</time> saakka.
        </p>
        <p>
          Rekisteröitymällä aikaisin autat meitä järjestämään parhaan mahdollisen tapahtuman!
        </p>
        <p>
           <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSe8Erwcck3Q7cWDSwemG6580kHnb3A_R5Zk-xuCQ-gcG38WZw/viewform?usp=publish-editor"
          >Rekisteröidy!</a>
        </p>
      </section>
      <section id="organisers">
        <a href="#organisers"><h2>Järjestäjät</h2></a>
        <a href="https://www.hl7.fi/">
          <picture>
            <img
              className="logo"
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/hl7-finland.svg`}
              alt="FCG"
            />
          </picture>
        </a>
        <a href="https://www.hel.fi/">
          <picture>
            <img
              id="helsinki"
              className="logo"
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/helsinki.svg`}
              alt="FCG"
            />
          </picture>
        </a>
        <a href="https://www.fcg.fi/">
          <picture>
            <img
              className="logo"
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/FCG.svg`}
              alt="FCG"
            />
          </picture>
        </a>
      </section>
      <Footer />
      <Link href="/">
        <picture>
          <img
            className="decoration"
            src={`${process.env.NEXT_PUBLIC_BASE_PATH}/atk-hackathon-logo.svg`}
            alt=""
          />
        </picture>
      </Link>
    </main>
  );
}
