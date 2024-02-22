import styled from "styled-components";
import PostModal from "./PostModal";
import useCurrentUser from "../state/user/useCurrentUser";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RingLoader } from "react-spinners";
import { AppDispatch, RootState } from "../state/store";
import { fetchArticles } from "../state/articles/fetchArticleSlice";

const Center: React.FC = () => {
  const currentUser = useCurrentUser();
  const [showModal, setShowModal] = useState(false);
  const status = useSelector((state: RootState) => state.articles.status);
  const articles = useSelector(
    (state: RootState) => state.fetchArticles.articles
  );
  const dispatch: AppDispatch = useDispatch();

  const switchModal = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    const modalState = !showModal;
    setShowModal(modalState);
  };
  useEffect(() => {
    dispatch(fetchArticles(currentUser)); // Fetch the latest articles once the post operation has succeeded
  }, []);
  useEffect(() => {
    if (status === "succeeded") {
      dispatch(fetchArticles(currentUser)); // Fetch the latest articles once the post operation has succeeded
    }
  }, [status]);

  return (
    <Container>
      <PostBox>
        <User>
          <img
            src={
              currentUser?.photoURL ? currentUser.photoURL : "/User-Icon.svg"
            }
            alt="User Icon"
          />
          <button onClick={(event) => switchModal(event)}>Start a post</button>
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

      <Content>
        {status == "loading" && (
          <LoadingModal>
            <SpinnerContainer>
              <RingLoader color="#34495e" size={80} />
            </SpinnerContainer>
          </LoadingModal>
        )}
        {articles &&
          articles.map((article) => {
            const { content, id, mediaUrl, timestamp, user, mimeType } =
              article;
            const dateAndTime = new Date(timestamp);

            const options: Intl.DateTimeFormatOptions = {
              day: "2-digit",
              month: "short",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            };
            const formattedDate = dateAndTime.toLocaleDateString(
              undefined,
              options
            );

            return (
              <Article key={id}>
                <PostUser>
                  <img
                    src={user?.photoURL ? user.photoURL : "/User.Icon"}
                    alt="User Icon"
                  />
                  <div>
                    <h6>{user?.displayName ? user.displayName : "New User"}</h6>
                    <span>Trial User</span>
                    <span>{formattedDate}</span>
                  </div>

                  <button>
                    <img src="/Ellipsis-Icon.svg" alt="Ellipsis" />
                  </button>
                </PostUser>
                <Description>{content}</Description>
                {mediaUrl && (
                  <SharedImage>
                    {mimeType && mimeType.startsWith("image/") ? (
                      <img src={mediaUrl} alt="User posted image" />
                    ) : mimeType && mimeType.startsWith("video/") ? (
                      <video width="320" height="240" controls>
                        <source src={mediaUrl} type={mimeType} />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <p>Unsupported media type</p>
                    )}
                  </SharedImage>
                )}
                <Reactions>
                  <Buttons>
                    <LikeButton>
                      <button>
                        <img src="/Like-Icon.svg" alt="Like Icon" />
                        <span>Like</span>
                      </button>
                      <ReactionModal>
                        <button>
                          <img
                            src="/Filled-Like-Icon.svg"
                            alt="Heart Reaction Icon"
                          />
                        </button>
                        <button>
                          <img
                            src="/Clapping-Icon.svg"
                            alt="Heart Reaction Icon"
                          />
                        </button>
                        <button>
                          <img
                            src="/Heart-Icon.svg"
                            alt="Heart Reaction Icon"
                          />
                        </button>
                        <button>
                          <img
                            src="/Stunned-Icon.svg"
                            alt="Heart Reaction Icon"
                          />
                        </button>
                        <button>
                          <img
                            src="/Laughing-Icon.svg"
                            alt="Heart Reaction Icon"
                          />
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
            );
          })}

        <Article>
          <PostUser>
            <img src="/Logo.svg" alt="Default User Icon" />
            <div>
              <h6>David Jennings</h6>
              <span>Creator of Code Connect</span>
              <span>20/02/2024</span>
            </div>

            <button>
              <img src="/Ellipsis-Icon.svg" alt="Ellipsis" />
            </button>
          </PostUser>

          <Description>
            Welcome to Code Connect, a social media platform for Junior
            Developers to connect an collaborate on larger scale projects,
            giving them an opportunity to practise the cohesion of soft and hard
            skills in an environment of their peers. <br /> <br />
            Try clicking "Start a post" to post your own content to the feed,
            once the modal opens, feel free to click the add media button to
            share images and videos of your own! <br /> <br />
            Please be aware that as this purely a showcase website, all uploads
            will be wiped 30 minutes after upload for security purposes. Enjoy!
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
                <span>16</span>
              </div>
              <span>2 reposts</span>
            </Counter>
            <Buttons>
              <LikeButton>
                <button>
                  <img src="/Like-Icon.svg" alt="Like Icon" />
                  <span>Like</span>
                </button>
                <ReactionModal>
                  <button>
                    <img
                      src="/Filled-Like-Icon.svg"
                      alt="Heart Reaction Icon"
                    />
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
      </Content>

      {showModal && <PostModal switchModal={switchModal} />}
    </Container>
  );
};
export default Center;

const Container = styled.section`
  grid-area: Center;
  position: relative;
`;

const PostBox = styled.div`
  text-align: center;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: rgba(14, 30, 37, 0.8) 0px 2px 4px 0px;
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
    cursor: pointer;
  }
  img {
    border-radius: 50%;
    margin-right: 10px;
    width: 2.85rem;
    height: 2.85rem;
  }
`;

const LoadingModal = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: white;
  opacity: 0.65;
  z-index: 2;
`;

const SpinnerContainer = styled.div`
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
`;

const Content = styled.div`
  position: relative;
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
  text-align: left;

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

  img,
  video {
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
    font-size: 17.5px;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  img {
    height: 20px;
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
  box-shadow: rgba(14, 30, 37, 0.8) 0px 2px 4px 0px;
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
