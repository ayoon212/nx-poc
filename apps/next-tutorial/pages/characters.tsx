import React from 'react';
import Layout from '../components/layout';
import Link from 'next/Link';
import fetch from 'isomorphic-unfetch';

function getCharacterSlug(charName: string): string {
  return charName.replace(/ /g, '_');
}

const Characters = (props: any) => (
  <Layout>
    <h1>ASOIAF Characters</h1>
    {props.characters ? (
      <ul>
        {props.characters.map((character: any) => (
          <li key={character.url}>
            <Link href="/character/[slug]" as={`/character/${getCharacterSlug(character.name)}`}>
              <a>{character.name}{character.aliases && character.aliases[0] ? ', '+character.aliases[0] : '' }</a>
            </Link>
          </li>
        ))}
      </ul>
    ) : null }
  </Layout>
);

Characters.getInitialProps = async function() {
  const res = await fetch('https://www.anapioficeandfire.com/api/characters?page=4&pageSize=20');
  const data = await res.json();

  return {
    characters: data
  }
}

export default Characters;

