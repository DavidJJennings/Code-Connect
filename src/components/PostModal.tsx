import styled from "styled-components";
import useCurrentUser from "../state/user/useCurrentUser";
import { useRef, useState } from "react";
import { Timestamp } from "firebase/firestore";
import { postArticle } from "../state/articles/articlesSlice";
import { useAppDispatch } from "../state/store";

type modalProps = {
  switchModal: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

type postProps = {
  $isContent: boolean;
};

const PostModal: React.FC<modalProps> = ({ switchModal }) => {
  const currentUser = useCurrentUser();
  const [textContent, setTextContent] = useState("");
  const [shareMedia, setShareMedia] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useAppDispatch();

  const handleMediaUpload = (event: React.MouseEvent<HTMLLIElement>) => {
    event.preventDefault();
    fileInputRef.current?.click();
  };

  const handleTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const target = event.target;
    setTextContent(target.value);

    //JS solution to make textarea grow in response to text to avoid multiple scroll bars.
    target.style.height = "inherit";
    target.style.height = `${target.scrollHeight}px`;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) {
      alert("No file selected.");
      return;
    }

    const file = event.target.files[0];

    if (!file.type.match("image.*") && !file.type.match("video.*")) {
      alert("Selected file is not an image or a video.");
      return;
    }

    setShareMedia(file);
  };
  const reset = () => {
    setTextContent("");
    setShareMedia(null);
  };

  const handleClose = (event: React.MouseEvent<HTMLButtonElement>) => {
    reset();
    switchModal(event);
  };

  const executePost = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const payload = {
      content: textContent,
      user: currentUser,
      file: shareMedia,
      timestamp: Timestamp.now().toDate().toISOString(),
    };

    dispatch(postArticle(payload));
    handleClose(event);
  };
  return (
    <Container>
      <Wrapper>
        <Header>
          <Button>
            <DisplayIcon>
              <img
                src={currentUser?.photoURL || "/User-Icon.svg"}
                alt="User Icon SVG"
              />
            </DisplayIcon>

            <UserInfo>
              <h1>{currentUser?.displayName || "User"}</h1>
              <p>Post to anyone!</p>
            </UserInfo>
            <img src="/Drop-Down Icon.svg"></img>
          </Button>
          <CloseModal onClick={(event) => handleClose(event)}>
            <img src="/Cross-Icon.svg" alt="Cross Icon" />
          </CloseModal>
        </Header>
        <Content>
          <textarea
            placeholder="What would you like to discuss?"
            autoFocus={true}
            value={textContent}
            onChange={(event) => {
              handleTextArea(event);
            }}
          />
          <UploadMedia>
            {shareMedia && (
              <RemoveImage onClick={() => setShareMedia(null)}>
                <img src="Remove-Media.svg" alt="remove image icon" />
              </RemoveImage>
            )}
            {shareMedia && <img src={URL.createObjectURL(shareMedia)} />}
            <input
              type="file"
              style={{ display: "none" }}
              onChange={(event) => handleChange(event)}
              ref={fileInputRef}
              accept="image/gif, image/jpeg, image/png, image/svg+xml, video/mp4, video/webm, video/ogg"
            />
          </UploadMedia>
        </Content>
        <ShareActions>
          <ActionWrapper>
            <Action onClick={(event) => handleMediaUpload(event)}>
              <a>
                <img src="/Post-Media-Icon.svg" alt="Post-Media-Icon" />
                <ActionInfo>
                  <span>Share Media</span>
                </ActionInfo>
              </a>
            </Action>

            <Action>
              <a>
                <img src="/Post-Event-Icon.svg" alt="Post-Event-Icon" />
                <ActionInfo>
                  <span>Share Event</span>
                </ActionInfo>
              </a>
            </Action>
            <Action>
              <a>
                <img src="/Add-Friend-Icon.svg" alt="emoji keyboard icon" />
                <ActionInfo>
                  <span>Tag your team</span>
                </ActionInfo>
              </a>
            </Action>
            <Action>
              <a>
                <img src="/More-Icon.svg" alt="See More Icon" />
                <ActionInfo>
                  <span>More</span>
                </ActionInfo>
              </a>
            </Action>
          </ActionWrapper>
        </ShareActions>
        <PostWrapper>
          <PostButtons>
            <Schedule>
              <img src="/Schedule-Icon.svg" alt="Schedule Post Icon" />
              <ScheduleInfo>
                <span>Schedule</span>
              </ScheduleInfo>
            </Schedule>

            <Post
              onClick={(event) => executePost(event)}
              disabled={textContent ? false : true}
              $isContent={!!textContent || !!shareMedia}
            >
              Post
            </Post>
          </PostButtons>
        </PostWrapper>
      </Wrapper>
    </Container>
  );
};
export default PostModal;

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Wrapper = styled.div`
  width: 100%;
  max-height: 75%;
  max-width: 700px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  top: 32px;
  margin: 0 auto;
`;

const Header = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const Button = styled.button`
  padding: 5px;
  width: 32.5%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: transparent;
  border: 0;
  border-radius: 5px;
  cursor: pointer;

  text-align: left;
  &:hover {
    background-color: #dddddd;
  }
  & > img {
    width: 15px;
  }
`;

const DisplayIcon = styled.div`
  display: flex;

  img {
    width: 50px;
    border-radius: 50%;
  }
`;
const UserInfo = styled.div`
  h1 {
    font-size: 1rem;
  }
  p {
    font-size: 0.8rem;
  }
`;

const CloseModal = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 2rem;
  width: 2rem;
  border: none;
  background: transparent;
  border-radius: 50%;
  &:hover {
    background-color: #dddddd;
  }
  img {
    width: 1rem;
  }
`;

const Content = styled.div`
  height: auto;
  overflow-y: auto;
  overflow-x: hidden;

  padding: 1rem;
  textarea {
    width: 100%;
    min-height: 50px;
    height: auto;
    overflow-y: hidden;
    resize: none;
    font-size: 1.5rem;
    border: none;

    &:focus {
      outline: none;
    }
  }
`;

const ShareActions = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  text-decoration: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const ActionWrapper = styled.ul`
  display: flex;
  width: 25%;
  min-width: 200px;
  justify-content: space-between;
  list-style-type: none;
  padding: 1rem;
`;

const ActionInfo = styled.div`
  display: none;
  position: absolute;
  justify-content: center;
  top: -35px;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px;
  font-size: 10px;
  border-radius: 5px;
  text-align: center;
  background-color: #fff;
  font-size: 0.8rem;
  box-shadow: rgba(14, 30, 37, 0.8) 0px 2px 4px 0px;
  span {
    white-space: nowrap;
  }
`;

const Action = styled.li`
  display: flex;
  flex-wrap: nowrap;
  position: relative;
  cursor: pointer;
  &:hover {
    ${ActionInfo} {
      display: initial;
    }
  }
  img {
    width: 30px;
    height: 30px;
  }
`;

const PostWrapper = styled.section`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  justify-content: flex-end;
`;

const PostButtons = styled.div`
  display: flex;
  column-gap: 10px;
  justify-content: center;
  align-items: center;
`;

const PostEnabled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px 1rem;
  border-radius: 25px;
  border: none;
  color: #fff;
  background-color: #34495e;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: rgba(52, 73, 94, 0.65);
  }
`;

const Post = styled.button<postProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px 1rem;
  border-radius: 25px;
  border: none;
  color: #fff;
  background-color: ${(props) => (props.$isContent ? "#34495e" : "grey")};
  font-size: 1rem;
  cursor: ${(props) => (props.$isContent ? "pointer" : "unset")};

  &:hover {
    background-color: ${(props) =>
      props.$isContent ? "rgba(52, 73, 94, 0.65);" : "grey"};
  }
`;

const ScheduleInfo = styled.div`
  display: none;
  position: absolute;
  background-color: white;
  top: -38px;
  border-radius: 5px;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px;
  box-shadow: rgba(14, 30, 37, 0.3) 0px 2px 4px 0px;
  span {
    color: black;
  }
`;

const Schedule = styled(PostEnabled)`
  border-radius: 50px;
  padding: 8px;
  background-color: white;

  position: relative;
  &:hover {
    background-color: #dddddd;

    ${ScheduleInfo} {
      display: initial;
    }
  }
  img {
    width: 30px;
    height: 30px;
  }
`;

const UploadMedia = styled.div`
  position: relative;
  img {
    width: 100%;
  }
`;

const RemoveImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background: transparent;
  background-color: rgba(52, 73, 94, 0.85);
  width: 45px;
  height: 45px;
  border-radius: 50%;
  top: 10px;
  right: 10px;
  &:hover {
    background-color: rgba(52, 73, 94, 0.35);
  }
  img {
    width: 25px;
  }
`;
