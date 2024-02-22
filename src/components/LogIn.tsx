import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { logInUser } from "../state/user/userSlice";
import { AppDispatch, RootState } from "../state/store";
import { Navigate } from "react-router-dom";
import { useState } from "react";

const LogIn: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [invalidLogin, setInvalidLogin] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const emailSignIn = async (
    event: React.FormEvent<HTMLFormElement>,
    email: string,
    password: string
  ) => {
    event.preventDefault();
    await signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        if (user.uid && user.email) {
          dispatch(
            logInUser({
              uid: "demoAccountUid",
              email: user.email,
              photoURL: "/demo-profile-icon.svg",
              displayName: "Demo User",
            })
          );
        }
      })
      .catch(() =>
        setInvalidLogin(
          "Invalid Login, please use the demo account provided or login with your google account."
        )
      );
  };

  const signInWithGoogle = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();

    await signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;

        if (user.uid && user.email)
          dispatch(
            logInUser({
              uid: user.uid,
              email: user.email,
              photoURL: user.photoURL,
              displayName: user.displayName,
            })
          );
      })
      .catch((error) => console.error(error));
  };

  const currentUser = useSelector((state: RootState) => state.user.user);

  return (
    <>
      {currentUser ? (
        <Navigate to="/home" />
      ) : (
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

              <Form onSubmit={(event) => emailSignIn(event, email, password)}>
                <label htmlFor="username">Email or Phone</label>
                <input
                  id="username"
                  type="text"
                  autoComplete="current-email"
                  placeholder="demo@email.com"
                  onChange={(event) => handleEmailChange(event)}
                />
                <label htmlFor="password">Password</label>
                <input
                  onChange={(event) => handlePasswordChange(event)}
                  type="password"
                  id="password"
                  placeholder="demo123"
                  autoComplete="current-password"
                />
                <a href="#">Forgot Password?</a>
                {invalidLogin && <span>{invalidLogin}</span>}
                <LogInBtn type="submit">Sign In</LogInBtn>
                <GoogleBtn onClick={(event) => signInWithGoogle(event)}>
                  <img src="/google-g-icon.svg" alt="" />
                  Sign In with Google
                </GoogleBtn>
              </Form>
              <img src="/Login-Hero.png" alt="Background Image of Atom" />
            </Hero>
          </Section>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  padding: 0;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Nav = styled.nav`
  max-width: 1180px;
  padding: 1.5rem 0 1rem 0;
  margin: auto;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;

  a img {
    width: 12rem;
    height: 5rem;
    @media (max-width: 768px) {
      width: 10rem;
    }

    @media (max-width: 450px) {
      width: 7rem;
    }
  }
`;

const Join = styled.a`
  font-size: 1rem;
  color: #34495e;
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

  @media screen and (max-width: 768px) {
    margin-right: 1rem;
    font-size: 0.85rem;
  }
  @media (max-width: 450px) {
    margin-right: 0.75rem;
    font-size: 0.75rem;
  }
  @media (max-width: 360px) {
    margin-right: 0.75rem;
    font-size: 0.55rem;
  }
`;

const SignIn = styled.a`
  font-size: 1rem;
  color: white;
  margin-right: 0.75rem;
  border-radius: 44px;
  padding: 0.75rem 1rem;
  background-color: #34495e;
  text-decoration: none;
  text-align: center;
  transition-duration: 300ms;
  cursor: pointer;
  &:hover {
    background-color: rgba(52, 73, 94, 0.65);
  }
  @media screen and (max-width: 768px) {
    margin-right: 1rem;
    font-size: 0.85rem;
  }
  @media (max-width: 450px) {
    margin-right: 0.75rem;
    font-size: 0.75rem;
  }
  @media (max-width: 360px) {
    margin-right: 0.75rem;
    font-size: 0.55rem;
  }
`;

const Section = styled.section`
  display: flex;
  align-content: start;
  min-height: 600px;
  padding-top: 3.5rem;

  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1180px;
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
    font-size: 3.25rem;
    line-height: 60px;
    @media (max-width: 768px) {
      font-size: 2rem;
      text-align: center;
      width: 100%;
    }
  }

  img {
    width: 500px;
    position: absolute;
    top: 28px;

    right: -120px;

    @media (min-width: 769px) and (max-width: 1000px) {
      width: 400px;
    }

    @media (max-width: 768px) {
      width: 100px;
      position: initial;
      margin: auto;
    }
  }
`;

const Form = styled.form`
  padding-top: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 400px;
  width: 50%;

  span {
    color: red;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  label {
    font-size: 1.5rem;
  }

  input {
    box-sizing: border-box;
    font-size: 1.25rem;
    width: 100%;
    height: auto;
    padding: 0.5rem;
    @media (max-width: 768px) {
      width: 100%;
    }
    @media (max-width: 450px) {
      margin-right: 0.75rem;
      font-size: 0.9rem;
    }
  }
`;

const LogInBtn = styled.button`
  margin: 1rem 0;
  height: 46px;
  width: 100%;
  font-size: 1.5rem;
  padding: 0.5rem;
  border-radius: 44px;
  border: 0;
  text-align: center;
  background-color: #34495e;
  color: white;
  transition-duration: 300ms;
  cursor: pointer;
  &:hover {
    background-color: rgba(52, 73, 94, 0.65);
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const GoogleBtn = styled.button`
  box-sizing: border-box;
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 46px;
  width: 100%;
  font-size: 1.5rem;
  padding: 0.5rem;
  border-radius: 44px;
  border: 1px solid #34495e;
  text-align: center;
  background-color: #fff;
  transition-duration: 300ms;
  color: #34495e;
  cursor: pointer;
  &:hover {
    background-color: rgba(52, 73, 94, 0.3);
  }
  @media (max-width: 768px) {
    width: 100%;
  }

  img {
    width: 30px;
    position: initial;
    margin: 0;
  }
`;

export default LogIn;
