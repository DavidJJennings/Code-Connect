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
  height: 100vh;
  width: 100%;
  background-color: rgba(54, 69, 79, 0.1);
`;

const GridLayout = styled.div`
  height: 100%;
  padding: 2rem 10%;
  max-width: 100%;
  display: grid;
  grid-template-areas: "Left Center Right";
  grid-template-columns: 2fr 6fr 2fr;
  grid-template-rows: auto;
  grid-column-gap: 1rem;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
