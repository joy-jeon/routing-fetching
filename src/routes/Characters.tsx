import { useParams } from "react-router";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";


const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  padding: 0 20px;
  max-width: 1280px;
  margin: 0 auto;
`
const Loader = styled.span`
  display: block;
  text-align: center;
`
const Title = styled.h1`
  display: flex;
  align-items: center;
  color: ${props => props.theme.accentColor};
  font-size: 40px;
  height: 100px;
`

const CharacterImage = styled.img`
  width: 200px;
  border-radius: 15px;
  margin-top: 20px;
`;

const CharacterName = styled.h2`
  display: flex;
  font-size: 20px;
`
const CharacterFilm = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4px;
  width: 100%;
  max-width: 600px;
  li {
    display: inline-block;
    width: fit-content;
    border-radius: 4px;
    background-color: #fff;
    color: #666;
    align-items: center;
    padding: 2px 6px 0;
    }
`
interface ICharacterDetail {
    id: number;
    name: string;
    imageUrl: string;
    sourceUrl: string;
    films: string[];
}
async function fetchCharacter(id: string): Promise<ICharacterDetail> {
  const response = await fetch(`https://disney_api.nomadcoders.workers.dev/characters/${id}`);
  return response.json();
}

function Characters() {
  const { id } = useParams<{ id: string }>();
  const { isLoading, data } = useQuery(["character", id], () => fetchCharacter(id));
  return (
    <Container>
      {isLoading ? (
        <Loader>...로딩중</Loader>
      ) : (
        <>
          <Title>
            <Link to={"/"}>👈🏻 back</Link>
          </Title>
          <CharacterImage src={data?.imageUrl} alt={data?.name} />
          <CharacterName>{data?.name?? "홍길동"}</CharacterName>
          <CharacterFilm>
            {data?.films.map((film, index) => (
              <li key={index}>{film}</li>
            ))}
          </CharacterFilm>
        </>
      )}
    </Container>
  );
}
export default Characters;