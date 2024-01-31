import styled from "styled-components";

const Center: React.FC = () => {
  return (
    <Container>
      <PostBox>
        <User>
          <img src="/User-Icon.svg" alt="User Icon" />
          <button>Start a post</button>
        </User>
        <ContentUpload>
          <button>
            <img src="/Post-Media-Icon.svg" alt="Media Upload Icon" />
            <span>Media</span>
          </button>

          <button>
            <img src="/Post-Event-Icon.svg" alt="Event Upload Icon" />
            <span>Event</span>
          </button>

          <button>
            <img src="/Post-Article-Icon.svg" alt="Article Upload Icon" />
            <span>Write Article</span>
          </button>
        </ContentUpload>
      </PostBox>
      <Article>
        <PostUser>
          <img src="/User-Icon.svg" alt="Default User Icon" />
          <div>
            <h6>Title</h6>
            <span>Info</span>
            <span>Date</span>
          </div>

          <button>
            <img src="/Ellipsis-Icon.svg" alt="Ellipsis" />
          </button>
        </PostUser>

        <Description>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae,
          delectus at perspiciatis quisquam quo facere consectetur, blanditiis
          harum culpa, quis consequuntur tempore deserunt velit minus magni iste
          laborum nam distinctio. Ipsam vel soluta incidunt? Odit, quia esse.
          Magni aut unde laborum quas natus necessitatibus impedit sed, harum
          corporis distinctio, enim obcaecati! Molestias amet saepe adipisci
          deserunt corporis officia corrupti facere.
        </Description>
        <SharedImage>
          <img
            src="/Sample-Post.jpg"
            alt="Sample Post of a Sunset over the Beach."
          />
        </SharedImage>

        <Reactions>
          <Counter>
            <div>
              <img
                src="/Reaction-Counter-Icon.svg"
                alt="Reaction Counter Icon"
              />
              <span>87</span>
            </div>
            <span>1 repost</span>
          </Counter>
          <Buttons>
            <LikeButton>
              <button>
                <img src="/Like-Icon.svg" alt="Like Icon" />
                <span>Like</span>
              </button>
              <ReactionModal>
                <button>
                  <img src="/Filled-Like-Icon.svg" alt="Heart Reaction Icon" />
                </button>
                <button>
                  <img src="/Clapping-Icon.svg" alt="Heart Reaction Icon" />
                </button>
                <button>
                  <img src="/Heart-Icon.svg" alt="Heart Reaction Icon" />
                </button>
                <button>
                  <img src="/Stunned-Icon.svg" alt="Heart Reaction Icon" />
                </button>
                <button>
                  <img src="/Laughing-Icon.svg" alt="Heart Reaction Icon" />
                </button>
              </ReactionModal>
            </LikeButton>

            <button>
              <img src="Comment-Icon.svg" alt="" />
              <span>Comment</span>
            </button>
            <button>
              <img src="Repost-Icon.svg" alt="" />
              <span>Repost</span>
            </button>
            <button>
              <img src="Share-Icon.svg" alt="" />
              <span>Send</span>
            </button>
          </Buttons>
        </Reactions>
      </Article>
    </Container>
  );
};
export default Center;

const Container = styled.section`
  grid-area: Center;
`;

const PostBox = styled.div`
  text-align: center;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 1px rgba(52, 73, 94, 0.2), 0 0 0 1px rgba(52, 73, 94, 0.3);
  position: relative;
  display: flex;
  flex-direction: column;
`;

const User = styled.div`
  display: flex;
  padding: 1rem 1rem 0.5rem 1rem;
  text-align: left;

  button {
    background: transparent;
    border: none;
    border-radius: 25px;
    flex-grow: 1;
    border: 1px solid rgba(0, 0, 0, 0.4);
    padding: 1rem;
    text-align: left;
  }
  img {
    border-radius: 50%;
    margin-right: 10px;
    width: 2.85rem;
    height: 2.85rem;
  }
`;

const ContentUpload = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  padding: 0.5rem 1rem;
  button {
    display: flex;
    align-items: center;
    outline: none;
    font-size: 0.75rem;
    min-height: 50px;
    background: transparent;
    min-height: 40px;
    border: none;
    font-family: "QuicksandBold";
    font-size: 13px;
    color: #424242;
    padding: 15px 10px 5px;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background-color: #dddddd;
    }
    img {
      height: 20px;
      margin-right: 10px;
    }
  }
`;

const Article = styled(PostBox)`
  padding: 0;
  margin: 0 0 8px;
  overflow: visible;
  flex-direction: column;
`;

const PostUser = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  position: relative;
  justify-content: flex-start;

  span {
    font-size: 12.5px;
    color: #424242;
    text-align: left;
  }

  img {
    width: 2.85rem;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  }

  button {
    position: absolute;
    background: transparent;
    border: none;
    outline: none;
    top: 1rem;
    right: 1rem;
    padding: 0;

    img {
      width: 25px;
      border-radius: 0;
    }
  }
`;

const Description = styled.div`
  padding: 1rem;
  overflow: hidden;
  font-size: 1rem;
  text-align: left;
`;

const SharedImage = styled.div`
  display: block;
  position: relative;
  padding: 1rem 0 0 0;

  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;

const Reactions = styled.div`
  display: block;
`;

const Counter = styled.div`
  padding: 0.25rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
  }
  span {
    font-size: 15px;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  img {
    width: 35px;
    margin-right: 5px;
  }
`;

const Buttons = styled.div`
  margin-top: 5px;
  padding: 0.2rem 1rem;
  border-top: 1px solid rgba(52, 73, 94, 0.4);
  display: flex;
  button {
    position: relative;
    display: flex;
    cursor: pointer;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    background: transparent;
    padding: 1rem;
    height: 100%;
    flex-grow: 1;
    flex-basis: 0;
    border: none;
    &:hover {
      background-color: #dddddd;
    }
    img {
      width: 20px;
      height: 20px;
      margin-right: 5px;
    }
    @media (max-width: 550px) {
      padding: 0.5rem 0;
    }
  }
`;

const ReactionModal = styled.div`
  display: flex;
  column-gap: 4px;
  position: absolute;
  top: -40.5px;
  left: -40px;
  padding: 0;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.62) 0px 2px 16px 0px;
  z-index: 2;
  background-color: white;
  border-radius: 5px;
  display: none;

  button {
    padding: 0;
    margin: 0;
    &:hover {
      background: transparent;
    }

    img {
      width: 35px;
      height: 29px;
      margin: 0;
      padding: 5px;
      &:hover {
        /* transform: translateY(-7.5px); */
        position: relative;
        bottom: 9px;
        transform: scale(1.35);
      }
    }
  }
`;

const LikeButton = styled.div`
  position: relative;
  flex-grow: 1;
  flex-basis: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  &:hover {
    background-color: #dddddd;
    border-radius: 5px;
    ${ReactionModal} {
      display: flex;
    }
  }
`;
