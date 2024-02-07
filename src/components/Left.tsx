import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";

const Left: React.FC = () => {
  const currentUser = useSelector((state: RootState) => state.user.user);

  return (
    <Container>
      <ProfileCard>
        <UserInfo>
          <CardBackground>
            <img src={currentUser?.photoURL || "/Camera-Icon.svg"} alt="" />
          </CardBackground>
          <AddPhotoHeader>
            <h4>Welcome!</h4>
            <h5>Add a Photo</h5>
          </AddPhotoHeader>
        </UserInfo>
        <AddConnections>
          <a>
            <div>
              <h6>Connections</h6>
              <span>Build Your Dev Team</span>
            </div>
            <img src="/Add-Friend-Icon.svg" alt="Add Connection Icon" />
          </a>
        </AddConnections>
        <Invitations>
          <a>
            <h6>Invitations</h6>
            <span>0</span>
          </a>
        </Invitations>
        <Items>
          <img src="/Save-Icon.svg" alt="Save Icon" />
          <span>My Items</span>
        </Items>
      </ProfileCard>
      <CommunityCard>
        <div>
          <a>
            <span>
              Recent
              <img src="Drop-Down Icon.svg" alt="Drop-down Icon" />
            </span>
          </a>
          <a>
            <span>Groups</span>
          </a>
          <a>
            <span>
              Events
              <img src="/Plus-Icon.svg" alt="Add Icon" />
            </span>
          </a>
          <a>
            <span>Followed Hashtags</span>
          </a>
        </div>
        <a>
          <h6>Dicover More</h6>
        </a>
      </CommunityCard>
    </Container>
  );
};
export default Left;

const Container = styled.section`
  grid-area: Left;
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
`;

const ProfileCard = styled.div`
  position: relative;
  text-align: center;
  overflow: hidden;
  background-color: #fff;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 0 1px rgba(52, 73, 94, 0.2), 0 0 0 1px rgba(52, 73, 94, 0.3);
  transition: box-shadow 100ms;

  .icon {
    color: #34495e;
  }
`;

const UserInfo = styled.div`
  border-bottom: 1px solid #34495e;
  word-wrap: break-word;
  word-break: break-word;
  height: 200px;
`;

const CardBackground = styled.div`
  background: url("/Card-Background.svg") center;
  background-size: 400px;
  height: 100px;
  position: relative;
  img {
    position: absolute;
    bottom: -25px;
    left: 50%;
    transform: translateX(-38px);
    width: 60px;
    height: 60px;
    padding: 0.5rem;
    border-radius: 50%;
    &:hover {
      opacity: 0.75;
    }
  }
`;

const AddPhotoHeader = styled.div`
  margin-top: 1.75rem;

  h4 {
    font-size: 1.4rem;
    font-family: "QuicksandBold";
  }
  h5 {
    font-size: 1rem;
    color: #1035d8;
    font-family: "QuicksandSemiBold";
    line-height: 30px;
  }
`;
const AddConnections = styled.div`
  padding: 1rem;
  cursor: pointer;
  text-align: left;
  &:hover {
    background-color: #dddddd;
  }

  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h6 {
    font-size: 1.1rem;
    font-family: "QuicksandLight";
  }
  span {
    font-size: 0.7rem;
    font-family: "QuicksandBold";
  }

  img {
    margin-top: 7.5px;
    max-width: 30px;
  }
`;

const Invitations = styled.div`
  padding: 0.75rem 1rem;
  text-align: left;
  border-bottom: 1px solid #34495e;
  cursor: pointer;
  &:hover {
    background-color: #dddddd;
  }
  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h6 {
    font-size: 1.1rem;
    font-family: "QuicksandLight";
  }
  span {
    font-size: 1.1rem;
    font-family: "QuicksandBold";
    margin-right: 8px;
  }

  img {
    margin-top: 7.5px;
    max-width: 30px;
  }
`;

const Items = styled.div`
  &:hover {
    background-color: #dddddd;
  }
  cursor: pointer;
  display: flex;
  font-size: 0.9rem;
  align-items: center;
  img {
    max-height: 15px;
    margin-right: 7px;
  }
  padding: 0.75rem 1rem;
`;

const CommunityCard = styled(ProfileCard)`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 10px;
  div {
    a:first-child {
      span {
        color: black;
      }
      img {
        display: none;
      }
      &:hover {
        span {
          text-decoration: none;
        }
        img:first-child {
          display: initial;
        }
      }
    }

    padding: 1rem;
    display: flex;
    flex-direction: column;
  }

  a {
    span {
      padding: 5px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #1035d8;
      &:hover {
        text-decoration: underline;
      }
    }
    h6 {
      border-top: 1px solid #34495e;
      text-align: center;
      padding: 10px 1rem;
      cursor: pointer;
      color: #424242;
      &:hover {
        background-color: #dddddd;
      }
    }
  }

  img {
    width: 15px;
  }
`;
