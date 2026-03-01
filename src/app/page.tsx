import Introduction from "./components/Introduction";
import About from "./components/About";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main>
      <section id="home"><Introduction /></section>
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
    </main>
  );
}