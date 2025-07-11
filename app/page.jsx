
import Image from "next/image";
import { HomePage, AboutPage, StudioPage, ContactPage } from "@/components/Main/";

export default function Home() {
  return (
    <main>
      <section id="home"><HomePage /></section>
      <section id="about"><AboutPage /></section>
      <section id="studio"><StudioPage /></section>
      <section id="contact"><ContactPage /></section>
    </main>
  );
}
