import styled from "styled-components";

const Home: React.FC = () => {
  return (
    <Container>
      <GridLayout>
        <Left>Left</Left>
        <Center>Center</Center>
        <Right>Right</Right>
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
  display: grid;
`;

const Left = styled.section``;

const Center = styled.section``;

const Right = styled.section``;
