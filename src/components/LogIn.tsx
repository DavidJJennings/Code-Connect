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
    </Container>
  );
};

const Container = styled.div`
  padding: 0;
`;

const Nav = styled.nav`
  max-width: 1440px;
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
      padding: 5rem 2rem;
    }
  }
`;

const Join = styled.a`
  font-size: 1rem;
  color: #34495e;
  padding: 0.5rem 0.75rem;
  font-family: TabarraPro-black, sans-serif;
  margin-right: 0.75rem;
  border: 3px solid black;
  border-radius: 44px;
  border-color: #34495e;
  cursor: pointer;
  &:hover {
    background-color: rgba(52, 73, 94, 0.3);
  }
`;

const SignIn = styled.a`
  font-size: 1rem;
  color: white;
  padding: 0.5rem 0.75rem;
  font-family: TabarraPro-black, sans-serif;
  margin-right: 0.75rem;
  border: 3px solid black;
  border-radius: 44px;
  border-color: #34495e;
  background-color: #34495e;
  cursor: pointer;
  &:hover {
    background-color: rgba(66, 69, 72, 0.3);
  }
`;

export default LogIn;
