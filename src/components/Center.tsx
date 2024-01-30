import styled from "styled-components";

const Center: React.FC = () => {
  return (
    <Container>
      <PostBox>
        <div>
          <img src="/User-Icon.svg" alt="User Icon" />
          <button>Start a post</button>
        </div>

        <div>
          <button>
            <img src="/Post-Media-Icon.svg" alt="Media Upload Icon" />
          </button>
          <span>Media</span>
        </div>
        <div>
          <button>
            <img src="/Post-Event-Icon.svg" alt="Event Upload Icon" />
          </button>
          <span>Event</span>
        </div>
        <div>
          <button>
            <img src="/Post-Article-Icon.svg" alt="Article Upload Icon" />
          </button>
          <span>Write Article</span>
        </div>
      </PostBox>
    </Container>
  );
};
export default Center;

const Container = styled.section`
  grid-area: Center;
`;

const TemplateCard = styled.div`
  text-align: center;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgba(52, 73, 94, 0.2), 0 0 0 1px rgba(52, 73, 94, 0.3);
  position: relative;
`;

const PostBox = styled(TemplateCard)`
  display: flex;
  flex-direction: column;
  div {
    button {
      outline: none;
      font-size: 0.75rem;
      min-height: 50px;
      background: transparent;
      min-height: 40px;
    }
    img {
      width: 30px;
      height: 30px;
    }
  }
`;
