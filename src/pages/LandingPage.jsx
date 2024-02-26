import About from "components/about/About";
import Container from "components/container/Container";
import Footer from "components/footer/Footer";
import Header from "components/header/Header";
import Hero from "components/hero/Hero";

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

        </Container>
      </section>
      <section id="contact" className="section-contact">
        <Container>

        </Container>
      </section>
      <Footer />
    </>
  )
}

export default LandingPage;