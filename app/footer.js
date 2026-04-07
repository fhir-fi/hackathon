import Link from "next/link";

export default function Footer() {
  return (
    <section id="footer">
      &copy; 2026+ <a href="https://hl7.fi/"><picture className="inline"><img
      src={`${process.env.NEXT_PUBLIC_BASE_PATH}/hl7-finland.svg`} alt="HL7 Finland"
      /></picture></a>
      <nav>
        <li><Link href="/tietosuoja">Tietosuoja</Link></li>
        <li><a href="https://github.com/fhir-fi/hackathon">Lähdekoodi</a></li>
      </nav>
    </section>
  );
}
