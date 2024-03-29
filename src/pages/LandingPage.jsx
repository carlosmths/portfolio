import About from "components/about/About";
import Contact from "components/contact/Contact";
import Container from "components/container/Container";
import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import Hero from "components/hero/Hero";
import Projects from "components/projects/Projects";

const LandingPage = () => {
  return (
    <>
      <Header />
      <section id="home" className="section-home theme-dark">
        <Container>
          <Hero />
        </Container>
      </section>
      <section id="about" className="section-about">
        <Container>
          <About />
        </Container>
      </section>
      <section id="projects" className="section-projects">
        <Container>
          <Projects />
        </Container>
      </section>
      <section id="contact" className="section-contact">
        <Container>
          <Contact />
        </Container>
      </section>
      <Footer />
    </>
  )
}

export default LandingPage;