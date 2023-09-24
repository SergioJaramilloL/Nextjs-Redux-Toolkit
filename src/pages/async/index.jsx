import { connect, useSelector } from 'react-redux';

import styles  from './character.module.css'
import CharacterCard from '@/components/characterCard'
import { wrapper } from '@/redux/store'
import { stateCharacters, getAllCharacters } from '@/redux/slices/characterSlice'

const AsyncPage = () => {
  const { characters } = useSelector(stateCharacters)

  //const { characters, error, status } = stateCharacters

  return (
    <>
      <div className={styles.characters_content}>
        <h1
          className={styles.characters_title}
        >Estos personajes son una petición asíncrona</h1>
        <div className={styles.gallery_container}>
          {characters && characters.map(character => {
            return (
              <CharacterCard key={character.id} character={character} />
            )}
          )}
        </div>
      </div>
    </>
  )
}


export const getServerSideProps = wrapper.getServerSideProps( store => async () => {
  await store.dispatch(getAllCharacters())
})

// const mapStateToProps = (state) => ({
  //   stateCharacters: state.characters
  // });
  
  // export default connect(mapStateToProps)(AsyncPage);
  export default AsyncPage