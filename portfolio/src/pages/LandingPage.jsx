import Header from "../components/header/Header";
import Container from "../components/container/Container";
import Hero from "../components/hero/Hero";

const LandingPage = () => {
  return (
    <>
      <Header />
      <section className="section-home">
        <Container>
          <Hero />
        </Container>
      </section>
      <section className="section-about">
        <Container>
          <Hero />
        </Container>
      </section>
      <section className="section-projects">
        <Container>
          <Hero />
        </Container>
      </section>
      <section className="section-contact">
        <Container>
          <Hero />
        </Container>
      </section>
    </>
  )
}

export default LandingPage;