import Header from '../components/header/Header';
import Container from '../components/container/Container';
import Hero from '../components/hero/Hero';
import Footer from '../components/footer/Footer';

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
          <Hero />
        </Container>
      </section>
      <section id="projects" className="section-projects">
        <Container>
          <Hero />
        </Container>
      </section>
      <section id="contact" className="section-contact">
        <Container>
          <Hero />
        </Container>
      </section>
      <Footer />
    </>
  )
}

export default LandingPage;