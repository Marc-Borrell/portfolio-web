import Introduction from "./components/Introduction";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <main>
      <section id="home"><Introduction /></section>
      <section id="about"><About /></section>
      <section id="education"><Education /></section>
      <section id="experience"><Experience /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
    </main>
  );
}