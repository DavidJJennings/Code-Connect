import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FaHome } from "react-icons/fa";

const Header = () => {
  return (
    <Container>
      <Content>
        <Logo>
          <img src="/Logo.svg" alt="" />
        </Logo>
        <Search>
          <div>
            <input type="text" placeholder="Search..." />
          </div>
          <SearchIcon>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ color: "#34495e" }}
            />
          </SearchIcon>
        </Search>
        <Nav>
          <NavWrapper>
            <NavList>
              <a>
                <FaHome style={{ color: "rgba(52, 73, 94, 1)" }} />
                <span>Home</span>
              </a>
            </NavList>
          </NavWrapper>
        </Nav>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  position: fixed;
  height: 4.5rem;
  width: 100vw;
  top: 0;
  padding: 0 2rem;
  box-sizing: border-box;
  border-bottom: 1px solid #34495e;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin: 0 auto;
  max-width: 1180px;
`;

const Logo = styled.span`
  font-size: 0;
  margin-right: 1rem;
  height: 45px;
  img {
    width: 45px;
  }
`;

const Search = styled.div`
  position: relative;
  flex-grow: 1;

  & > div {
    max-width: 350px;
    input {
      border: none;
      box-shadow: none;
      width: 300px;
      background-color: rgba(54, 69, 79, 0.1);

      border-radius: 44px;
      font-size: 1.5rem;
      padding: 0.5rem 0 0.5rem 2.5rem;
      outline-color: rgb(54, 69, 79);
    }
  }
`;

const SearchIcon = styled.div`
  pointer-events: none;
  font-size: 20px;
  z-index: 1;
  position: absolute;
  top: 5.5px;
  left: 12px;
`;

const Nav = styled.nav`
  margin-left: auto;

  @media screen and (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
  }
`;

const NavWrapper = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;
`;

const NavList = styled.li`
  display: flex;
  align-items: center;
  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 35px;
    justify-content: center;
    line-height: 1.5;
    min-height: 52px;
    min-width: 80px;
    position: relative;
    text-decoration: none;
    cursor: pointer;
    span {
      font-size: 14px;
      display: flex;
      align-items: center;
      color: rgba(52, 73, 94, 1);
    }
    @media (max-width: 768px) {
      min-width: 70px;
    }

    &:hover,
    &:active {
      span {
        color: rgba(52, 73, 94, 1);
        border-bottom: 2px solid rgba(52, 73, 94, 1);
      }
    }
  }
`;

export default Header;
