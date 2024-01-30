import styled from "styled-components";

const Right: React.FC = () => {
  return (
    <Container>
      <NewsCard>
        <a>
          <span>
            <h6>Code Connect News</h6>
            <Info>
              <img src="Info-Icon.svg" alt="Info Icon" />
              <InfoText>
                <p>
                  Trending topics suggested to you based on your personal
                  interests.
                </p>
              </InfoText>
            </Info>
          </span>
        </a>
        <NewsBody>
          <NewsList>Using :has() as a CSS Parent Selector</NewsList>
          <NewsList>Top CSS tips and tricks for 2024!</NewsList>
          <NewsList>React Native Best Practices</NewsList>
          <NewsList>
            UseReducer vs UseEffect: When to use them and why!
          </NewsList>
        </NewsBody>
        <a>
          <span>
            Show More
            <img src="Drop-Down Icon.svg" alt="Drop-Down Icon" />
          </span>
        </a>
      </NewsCard>
    </Container>
  );
};
export default Right;

const Container = styled.section`
  grid-area: Right;
`;

const NewsCard = styled.div`
  text-align: left;
  padding: 1rem;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0 0 0 1px rgba(52, 73, 94, 0.2), 0 0 0 1px rgba(52, 73, 94, 0.3);
  background-color: #fff;
  h6 {
    font-size: 1.1rem;
  }

  img {
    width: 14.5px;
    cursor: pointer;
  }
  a {
    span {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &:last-child {
      span {
        display: inline;
        cursor: pointer;

        &:hover {
          background-color: #dddddd;
        }
        img {
          margin: 0 5px;
        }
      }
    }
  }
`;

const InfoText = styled.div`
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  padding: 1rem;
  z-index: 5;
  border-radius: 5px;
  background-color: #fff;
  position: absolute;
  right: 0.5rem;
  top: 2.5px;
  width: 200px;
  display: none;
`;

const Info = styled.span`
  position: relative;
  &:hover {
    ${InfoText} {
      display: initial;
    }
  }
`;

const NewsBody = styled.ul`
  list-style-position: inside;
  padding: 1.5rem 0;
`;

const NewsList = styled.li`
  padding: 0.25rem 0;
  font-family: "QuicksandBold";
  font-size: 0.9rem;
  &:hover {
    text-decoration: underline;
  }
`;
