import styled from "styled-components";

const LogIn = () => {
  return (
    <Container>
      <Nav>
        <a href="/">
          <img src="/Login-Logo.svg" alt="Login Logo" />
        </a>
        <div>
          <Join>Join Now</Join>
          <SignIn>Sign In</SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Connect, Create, Conquer!</h1>
          <img src="/Login-Hero.png" alt="Background Image of Atom" />
        </Hero>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  padding: 0;
`;

const Nav = styled.nav`
  max-width: 1280px;
  padding: 2rem 0 2rem 0;
  margin: auto;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;

  a img {
    width: 15rem;
    height: 5rem;
    @media (max-width: 768px) {
    }
  }
`;

const Join = styled.a`
  font-size: 1.25rem;
  color: #34495e;
  padding: 0.5rem 0.75rem;
  font-family: TabarraPro-black, sans-serif;
  margin-right: 2rem;
  box-shadow: inset 0 0 0 2px #34495e;
  text-decoration: none;
  border-radius: 44px;
  padding: 0.75rem 1rem;
  text-align: center;
  transition-duration: 300ms;
  cursor: pointer;
  &:hover {
    background-color: rgba(52, 73, 94, 0.3);
  }
`;

const SignIn = styled.a`
  font-size: 1.25rem;
  color: white;
  padding: 0.5rem 0.75rem;
  font-family: TabarraPro-black, sans-serif;
  margin-right: 0.75rem;
  border-radius: 44px;
  padding: 0.75rem 1rem;
  background-color: #34495e;
  text-decoration: none;
  text-align: center;
  transition-duration: 300ms;
  cursor: pointer;
  &:hover {
    background-color: rgba(66, 69, 72, 0.3);
  }
`;

const Section = styled.section`
  display: flex;
  align-content: start;
  min-height: 600px;
  padding-top: 5rem;
  padding-bottom: 7.5rem;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1280px;
  margin: auto;

  @media (max-width: 768px) {
    padding-top: 2rem;
  }
`;

const Hero = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  h1 {
    width: 65%;
    color: #34495e;
    font-size: 3.5rem;
    font-family: TabarraPro-Light;
    line-height: 100px;
    @media (max-width: 768px) {
      font-size: 2rem;
      text-align: center;
      width: 100%;
    }
  }

  img {
    width: 600px;
    position: absolute;
    top: 150px;

    right: -120px;

    @media (min-width: 761px) and (max-width: 1000px) {
      width: 500px;
      top: 250px;
    }

    @media (max-width: 760px) {
      width: 100px;
      position: initial;
      margin: auto;
    }
  }
`;

export default LogIn;
