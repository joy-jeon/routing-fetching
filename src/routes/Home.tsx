import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import fetchDisney from "../api";


const Container = styled.div`
  padding: 0 20px;
  max-width: 1280px;
  margin: 0 auto;
`
const Header = styled.header`
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const CharactersList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`
const Character = styled.li`
  color: ${props => props.theme.txtColor};
  border-radius: 15px;
  border: 1px solid #424242;
  overflow: hidden;
  width: 180px;
  height: 180px;
  position: relative;
  a {
    align-items: center;
    gap: 10px;
    flex-direction: column;
  }
  
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
  span {
    text-align: center;
    display: flex;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 54px;
    padding: 6px 8px;
    text-align: right;
    justify-content: flex-end;
    align-items: flex-end;
    font-size: 16px;
  }
  &:hover {
    img {
      transform: scale(1.1); 
      transition: transform 0.3s ease-in;
    }
    span {
      background-color: rgba(0,0,0,.3);
    }
  }
`

const Title = styled.h1`
  color: ${props => props.theme.accentColor};
  font-size: 48px;
`
const Loader = styled.span`
  display: block;
  text-align: center;
  color: ${(props) => props.theme.accentColor}
`
interface ICharacter {
  id: number;
  name: string;
  imageUrl: string;
}

function Home() {
  const { isLoading, data } = useQuery<ICharacter[]>("disney", fetchDisney);

  return (
    <Container>
      <Header>
        <Title>Disney</Title>
      </Header>
      {isLoading ? (
        <Loader>...로딩중</Loader>
      ) : (
        <CharactersList>
          {data?.slice(0,50).map((character) => (
            <Character key={character.id}>
              <Link to={`/character/${character.id}`}>
                <img src={character.imageUrl} alt={character.name} width="50" />
                <span>{character.name}</span>
                </Link>
              </Character>
          ))}
        </CharactersList>
      )}
    </Container>
  )
}
export default Home;