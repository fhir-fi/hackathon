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
            aspect-ratio="1 / 1"
          />
        </picture>
      </Link>
      <Link className="fragment" href="/">
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
      <section id="challenges">
        <a className="fragment" href="#challenges"><h2>Haasteet</h2></a>
        <p>
          Kartoitamme parhaillaan hyvinvointialueilta ja muilta terveydenhuollon toimijoilta
          haasteita hackathonin osallistujille.
        </p>
        <p>
          Mikäli sinulla on mielessä hyvä haaste, kerro siitä Jari Porrasmaalle <a
          href="mailto:jari.porrasmaa@hyvaks.fi">jari.porrasmaa@hyvaks.fi</a> ja Tero Laiholle <a
          href="mailto:tero.laiho@hel.fi">tero.laiho@hel.fi</a>.
        </p>
        <p>
          Haasteita on tulossa useita ja ne julkaistaan tässä alla sitä mukaa kun ne valmistuvat.
        </p>
        <details id="helsinki-terveydenhuolto">
          <summary>
            <h3>Helsingin kaupunki: terveydenhuollon haaste</h3>
          </summary>
          <p>
            Helsingin kaupunki tahtoo löytää sovelluksia, jotka tukevat asiakkaan hoitoa,
            kuntoutumista tai hoidon toteutumisen omaseurantaa. 
          </p>
          <p>
            Sovellus voi olla mobiili- tai selaimella käytettävä sovellus. Sovellus sitouttaa
            asiakasta omaan hoitoonsa ja mahdollisuuksien mukaan myös lisää asiakkaan osallisuutta.
          </p>
          <p>
            Sovelluksen tulee oltava integroitavissa asiakas- ja potilastieto&shy;järjestelmään.
            Integraatio toteutetaan käyttämällä olemassaolevia HL7 ja FHIR-rajapintoja.
            Integraatioiden avulla sovellus vähentää ammattilaisen kirjaamistarvetta.
          </p>
          <h4>Arviointikriteerit</h4>
          <dl>
            <dt>Hyödyt</dt>
            <dd>
              Sovellus käyttää terveysdataa, jota voidaan jakaa Apotin/Epicin tai itsenäisesti
              Maisan/MyChartin kautta. Sovellus on vaikuttava ja tuottaa hyötyä julkiselle
              terveydenhuollolle esimerkiksi kustannus&shy;tehokkuuden, sosiaalisen vaikuttavuuden
              tai yksilölle ja/tai terveydenhuollon ammattilaisille koituvien etujen kautta.
            </dd>
            <dt>Toteutettavuus</dt>
            <dd>
              Sovelluksen käyttöönotto on suoraviivaista. Sovelluksella käytettävissä oleva data ei
              ole rajoitettua. Sovellus voi hyödyntää myös muita terveys&shy;sovelluksia asiakkaan
              kokonaisvaltaisen hoidon tukena. Sovellus voi talletaa tietoa Apottiin/Epiciin joko
              suoran integraation tai Maisan/MyChartin kautta. Sovellus hyödyntää laajasti ja
              monipuolisesti FHIR-standardin ja muiden HL7-standardien tarjoamia mahdollisuuksia
              tiedon käsittelyssä.
            </dd>
            <dt>Käytettävyys</dt>
            <dd>
              Sovellus on helppokäyttöinen. Käytettävyys tarkoittaa esimerkiksi teknistä
              yksinkertaisuutta, tarkoituksenmukaisuutta ja selkeää kieltä sovelluksessa. Asiakas
              ei tarvitse terveydenhuollon ammattilaisen tukea sovelluksen käyttämiseen.
            </dd>
            <dt>Sitouttavuus</dt>
            <dd>
              Sovellus kannustaa asiakasta käyttämään sitä säännöllisesti ja mielekkäällä tavalla.
              Sopivia pelillistämisen elementtejä hyödynnetään sitoutumisen tukena. Sovellus
              vahvistaa asiakkaan aktiivista osallistumista omaan hoitoonsa.
            </dd>
          </dl>
          <h4>Palkinnot</h4>
          <p>
            Haasteen voittajat palkitaan rahasumilla:
          </p>
          <ol>
            <li>sija: 2&nbsp;500&nbsp;€</li>
            <li>sija: 1&nbsp;500&nbsp;€</li>
            <li>sija: 1&nbsp;000&nbsp;€</li>
          </ol>
        </details>
        <details id="helsinki-sosiaalihuolto">
          <summary>
            <h3>Helsingin kaupunki: sosiaalihuollon haaste</h3>
          </summary>
          <p>
            Sosiaalihuollon haasteena on kehittää sovellus tai sovelluskonsepti, joka auttaa
            asiakasta asioinnista eri viranomaisten muodostamassa kokonaisuudessa tai tukee
            asiakasta oman toimintakyvyn parantamisessa ja kuntouttamisessa.
          </p>
          <p>
            Sovellus voi toimia verkkoselaimen kautta, tai olla erillinen ladattava
            mobiilisovellus.
          </p>
          <p>
            Sovellus voi olla kohdennettu johonkin tiettyyn asiakasryhmään, kuten esimerkiksi
            päihdekuntoutujat tai lapsiperheet, tai olla yleinen kaikki palvelut huomioiva
            kokonaisuus. Sovellus sitouttaa asiakasta omaan hoitoon. Alla esimerkkejä mahdollisista
            sovelluksista, nämä ovat esimerkkejä ja hackathonissa haetaan myös innovaatioita, jotka
            ovat esimerkeissä olevien rajausten ulkopuolella.
          </p>
          <ul className="a">
            <li>
              Sovellus voi esimerkiksi toimia asiakkaan eri viranomaisasioinnit koostavana
              välineenä, ja mahdollisesti myös tiedon välittävänä komponenttina. Sovellus voisi
              tukea asiakasta ohjautumaan oikeaan palveluun tai täyttämään oikean lomakkeen
              tarvekartoituksen perusteella.
            </li>
            <li>
              Sovellus voi esimerkiksi tukea asiakasta arjen selviytymisessä toimien ns. arjen
              apurina tai elämänhallinnan valmentajana. pyrkien parantamaan asiakkaan toimintakykyä
              ja toimijuutta.
            </li>
          </ul>
          <p>
            Sovellus voi olla tarpeen mukaan integroitavissa asiakas- ja
            potilastieto&shy;järjestelmään. Mikäli integraatio ei ole sovelluksessa
            tarkoituksen&shy;mukaista, ei sitä vaadita. Mikäli sovellus käyttää integraatiota,
            käytetään siinä olemassaolevia HL7- ja FHIR-rajapintoja. Integraatioiden avulla
            sovellus vähentää ammattilaisen kirjaamistarvetta.
          </p>
          <h4>Arviointikriteerit</h4>
          <dl>
            <dt>Hyödyt</dt>
            <dd>
              Sovellus käyttää tarkoituksenmukaisesti sosiaalihuollon dataa, jota voidaan jakaa
              Apotin/Epicin tai itsenäisesti Maisan/MyChartin kautta. Sovellus on vaikuttava ja
              tuottaa hyötyä julkiselle sosiaalihuollolle esimerkiksi kustannus&shy;tehokkuuden,
              sosiaalisen vaikuttavuuden tai yksilölle ja/tai sosiaalihuollon ammattilaisille
              koituvien etujen kautta.
            </dd>
            <dt>Toteutettavuus</dt>
            <dd>
              Sovelluksen käyttöönotto on suoraviivaista. Sovelluksella käytettävissä oleva data ei
              ole rajoitettua. Sovellus voi hyödyntää myös muita sovelluksia asiakkaan
              kokonaisvaltaisen hoidon tukena. Sovellus voi talletaa tietoa Apottiin/Epiciin joko
              suoran integraation tai Maisan/MyChartin kautta. Sovellus hyödyntää laajasti ja
              monipuolisesti FHIR ja HL7 tarjoamia mahdollisuuksia tiedon käsittelyssä, mikäli nämä
              ovat sovelluksen tarkoituksen mukaisia.
            </dd>
            <dt>Käytettävyys</dt>
            <dd>
              Sovellus on helppokäyttöinen. Käytettävyys tarkoittaa esimerkiksi teknistä
              yksinkertaisuutta, tarkoituksenmukaisuutta ja selkeää kieltä sovelluksessa. Asiakas
              ei tarvitse sosiaalihuollon ammattilaisen tukea sovelluksen käyttämiseen.
            </dd>
            <dt>Sitouttavuus</dt>
            <dd>
              Sovellus kannustaa asiakasta käyttämään sitä säännöllisesti ja mielekkäällä tavalla.
              Sopivia pelillistämisen elementtejä hyödynnetään sitoutumisen tukena. Sovellus
              vahvistaa asiakkaan aktiivista osallistumista omaan toimijuutta ja osallisuutta hänen
              omien tavoitteidensa edistämisessä.
            </dd>
          </dl>
          <h4>Palkinnot</h4>
          <p>
            Haasteen voittajat palkitaan rahasumilla:
          </p>
          <ol>
            <li>sija: 2&nbsp;500&nbsp;€</li>
            <li>sija: 1&nbsp;500&nbsp;€</li>
            <li>sija: 1&nbsp;000&nbsp;€</li>
          </ol>
        </details>
        <details id="suomi-sote">
          <summary>
            <h3>SuomiSote-digialustaa käyttävien hyvinvointialueiden haaste</h3>
          </summary>
          <p>
            SuomiSote-digialustaa käyttävät hyvinvointialueet haluavat kehittää alustan avointa
            liittettävyys&shy;kykyä ja ekosysteemimäisyyttä. Haasteena kohteena ovat erityisesti <a
            href="https://hl7.fi/fhir/finnish-smart/">SMART App Launch</a>-määrittelyn sekä
            FHIR-standardin hyödyntäminen digialustan ja erilaisten hyvinvointi&shy;sovellusten sekä
            APTJ-järjestelmien yhdistämisessä.
          </p>
          <h4>Arviointikriteerit</h4>
          <dl>
            <dt>Hyödyt</dt>
            <dd>
              Ratkaisu tuottaa lisäarvoa digialustan muodostamaan ekosysteemi&shy;kokonaisuuteen
              tuottamalla alustasta puuttuvia kyvykkyyksiä esimerkiksi MDR-ominaisuuksien tai
              tekoälyn suhteen. Ratkaisu tuottaa selkeän hyödyn tai lisäarvon digialustaa
              käyttävälle sote-ammattilaiselle tai asiakkaalle.
            </dd>
            <dt>Yhteentoimivuus</dt>            
            <dd>
              Ratkaisu tuo esille yhteentoimivuuden hyödyt ja soveltaa keskeisiä
              yhteentoimivuus&shy;standardeja (FHIR, OpenEHR, CDA ym.) innovatiivisella tavalla.
            </dd>
            <dt>Toteutettavuus</dt>            
            <dd>
              Ratkaisu tai sovellus on helppo ottaa käyttöön hyvinvointi&shy;alueella organisaation
              ja myös yksittäisen ammattilaisen toimesta. Myös asiakkaan käyttöönotto on
              suoraviivainen. Ratkaisussa hyödynnettävät tiedot ovat saatavilla rajapintojen kautta
              hyvinvointi&shy;alueiden järjestelmistä tai kansallisista palveluista.
            </dd>
          </dl>
          <h4>Palkinnot</h4>
          <p>
            3 parasta yhteentoimivuutta edistävää ratkaisua tai konseptia palkitaan ATK-päivien
            iltajuhlassa.
          </p>
          <p>
            Lisäksi SuomiSote-digialustaa käyttävien hyvinvointi&shy;alueiden konsortio käy
            voittajien kanssa tarkemmat keskustelut ratkaisuiden toteuttamisesta osaksi
            hyvinvointi&shy;alueiden digiasiointi&shy;kokonaisuutta.
          </p>
        </details>
      </section>
      <section id="info">
        <a className="fragment" href="#info"><h2>Ohjeet</h2></a>
        <p>
          Ajankohta: <time dateTime="2026-05-25">ma 25.5.2026</time> klo <time
          dateTime="2026-05-25T07:00:00+03:00">07:00</time>-<time
          dateTime="2026-05-25T18::00:00+03:00">18:00</time> ja <time dateTime="2026-05-25">ti
          26.5.2026</time> klo <time dateTime="2026-05-25T07:00:00+03:00">07:00</time>-<time
          dateTime="2026-05-25T18::00:00+03:00">18:00</time>.
        </p>
        <p>
          Ohjeet rekisteröitymiseen löytyvät alta.
        </p>
        <p>
          <strong>Toteutuksia saa ja kannattaa työstää jo etukäteen!</strong> Esimerkiksi Epicin
          kehitysympäristöön pääsee rekisteröitymään ja sovelluksen integraatiota voi aloittaa
          itsenäisesti jo etukäteen. Tällöin jää itse hackathonissa paremmin aikaa nimenomaan
          Apottiin liittyvien asioiden työstämiseen.
        </p>
        <p>
          Etenkin Helsingin kaupungin haasteiden osalta kannattaa tutustua Apotin ekosysteemin <a
          href="https://www.apotti.fi/ekosysteemi/">Apotti Online Sandboxin toimintaohjeeseen</a>,
          tammikuussa 2026 järjestetyn Finnish Health Data Hackathonin Epic-ohjeistukseen (<a
          href="https://www.youtube.com/watch?v=3GZRHARVwoQ">tallenne</a>, <a
          href="https://fhir.fi/hackathon/GettingStartedWithEpicIntegrations.pdf">esitys</a>) ja <a
          href="">FHIR-standardiin</a> sekä erityisesti <a
          href="https://hl7.fi/fhir/finnish-smart/">SMART App Launch</a>-määrittelyyn.
        </p>
        <p>
          <strong>
            Hackathonin käytännön toteutusta esitellään tarkemmin webinaarissa <time
            dateTime="2026-05-11T09:00:00+03:00">11.5.2026 klo 9.00</time> (<a
            href="https://teams.microsoft.com/meet/385262028201071?p=UZ7YplX1ysA289MNEL"
            >Teams-linkki</a>, <a
            href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NmNvbWkxc2xkMTE2YXV1ZzFuOHF0bGY4bm4gZmhpci5maW5sYW5kQG0&tmsrc=fhir.finland%40gmail.com"
            >Google-kalenteri</a>). Tuolloin on myös
            mahdollisuus esittää kysymyksiä tapahtuman järjestäjille.
          </strong>
        </p>
      </section>
      <section id="register">
        <a className="fragment" href="#register"><h2>Rekisteröityminen</h2></a>
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
        <a className="fragment" href="#organisers"><h2>Järjestäjät</h2></a>
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
