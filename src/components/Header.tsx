import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FaHome, FaFolderOpen } from "react-icons/fa";
import { GiThreeFriends } from "react-icons/gi";
import { IoIosNotifications } from "react-icons/io";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { IoMdArrowDropdown } from "react-icons/io";
import useCurrentUser from "../state/user/useCurrentUser";
import { Navigate } from "react-router-dom";
import { logout } from "../state/user/userSlice";
import { useAppDispatch } from "../state/store";

const Header = () => {
  const currentUser = useCurrentUser();
  const dispatch = useAppDispatch();

  return (
    <>
      {!currentUser ? (
        <Navigate to="/" />
      ) : (
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
                    <FaHome className="navIcon" />
                    <span>Home</span>
                  </a>
                </NavList>
                <NavList>
                  <a>
                    <GiThreeFriends className="navIcon" />
                    <span>Connections</span>
                  </a>
                </NavList>
                <NavList>
                  <a>
                    <FaFolderOpen className="navIcon" />
                    <span>Projects</span>
                  </a>
                </NavList>
                <NavList>
                  <a>
                    <BiSolidMessageSquareDetail className="navIcon" />
                    <span>Messages</span>
                  </a>
                </NavList>
                <NavList>
                  <a>
                    <IoIosNotifications className="navIcon" />
                    <span>Notifications</span>
                  </a>
                </NavList>

                <User>
                  <a>
                    <img
                      src={currentUser.photoURL || "/User-Icon.svg"}
                      alt="User Icon SVG"
                    />
                    <span>
                      Me
                      <IoMdArrowDropdown className="navIcon" />
                    </span>
                  </a>

                  <SignOut onClick={() => dispatch(logout())}>
                    <a>Sign Out</a>
                  </SignOut>
                </User>
              </NavWrapper>
            </Nav>
          </Content>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  z-index: 1;
  background-color: white;
  position: fixed;
  height: 3rem;
  width: 100vw;
  top: 0;
  padding: 2rem 2rem;
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
  height: 35px;
  img {
    width: 35px;
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
      font-size: 1rem;
      padding: 0.5rem 0 0.5rem 2.5rem;
      outline-color: rgb(54, 69, 79);
    }
  }
`;

const SearchIcon = styled.div`
  pointer-events: none;
  font-size: 18px;
  z-index: 1;
  position: absolute;
  top: 5px;
  left: 12px;
`;

const Nav = styled.nav`
  margin-left: auto;

  @media screen and (max-width: 840px) {
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
  margin: 2px;

  .navIcon {
    color: #34495e;
  }
  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 28.5px;
    justify-content: center;
    min-height: 52px;
    min-width: 80px;
    position: relative;
    text-decoration: none;
    cursor: pointer;
    span {
      font-size: 12.5px;
      display: flex;
      align-items: center;
      color: rgba(52, 73, 94, 1);
    }
    @media (max-width: 840px) {
      min-width: 70px;
    }

    &:hover,
    &:active {
      span {
        border-bottom: 2px solid rgba(52, 73, 94, 1);
      }
    }
  }
`;

const SignOut = styled.div`
  display: none;
  position: absolute;
  top: 50px;
  font-size: 12.5px;
  background-color: white;
  border-radius: 0 0 5px 5px;
  width: 90%;
  transition-duration: 200ms;

  a {
    font-size: 12.5px;
  }
`;

const User = styled(NavList)`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  img {
    width: 25px;
  }
  &:hover {
    ${SignOut} {
      display: block;
    }
  }
`;

export default Header;
