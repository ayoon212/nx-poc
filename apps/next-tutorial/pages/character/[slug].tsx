import Layout from '../../components/layout';
import fetch from 'isomorphic-unfetch';

function getCharacterName(slug: string): string {
  return slug.replace(/_/g, ' ');
}

const Character = ({ character }) => (
  <Layout>
    <h1>{character.name}</h1>
    {character.titles ? (
      <div>
        <p>Titles:</p>
        <ul>
          {character.titles.map((title: string) => (<li key={title}>{title}</li>))}
        </ul>
      </div>
    ) : null}
  </Layout>
);

Character.getInitialProps = async function(context) {
  const { slug } = context.query;
  console.log(`https://www.anapioficeandfire.com/api/characters?name=${getCharacterName(slug)}`);
  const res = await fetch(`https://www.anapioficeandfire.com/api/characters?name=${getCharacterName(slug)}`)
  const data = await res.json();

  return {
    character: data[0] // Not very robust
  }
}

export default Character;
