
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
    </main>
  );
}
