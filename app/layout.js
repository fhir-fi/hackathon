import "./globals.css";

export const metadata = {
  title: "ATK-hackathon",
  description: "HL7 Finland: Sosiaali- ja terveydenhuollon ATK-hackathon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fi">
      <body>{children}</body>
    </html>
  );
}
