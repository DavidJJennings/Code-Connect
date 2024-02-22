import styled from "styled-components";
import Left from "./Left";
import Center from "./Center";
import Right from "./Right";

const Home: React.FC = () => {
  return (
    <Container>
      <GridLayout>
        <Left />
        <Center />
        <Right />
      </GridLayout>
    </Container>
  );
};
export default Home;

const Container = styled.div`
  margin-top: 4rem;
  padding: 0;
  margin-bottom: 50px;
  width: 100%;
  overflow-y: hidden;
`;

const GridLayout = styled.div`
  height: 100%;
  padding: 2rem;
  max-width: 100%;
  display: grid;
  grid-template-areas: "Left Center Right";
  grid-template-columns: 2fr 5.5fr 2.5fr;
  grid-template-rows: auto;
  grid-column-gap: 1rem;
  @media (max-width: 1000px) {
    padding: 2rem 15px;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
