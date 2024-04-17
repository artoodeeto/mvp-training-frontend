import Navbar from "../components/Navbar";

export default function CoreLayout({children}: {children: React.ReactNode}) {
  return (
    <section>
      <div>
        <Navbar />
      </div>
      {children}
    </section>
  );
}
