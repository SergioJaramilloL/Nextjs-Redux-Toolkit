import Image from 'next/image'
import Link from 'next/link'

import styles from '@pages/async/character.module.css'

const CharacterCard = ({character}) => {
  const styleStatus = character.status === "Dead" ? styles.status__dead : styles.status__alive

  return (
      <Link
      key={character.id}
      href={`/characters/${character.id}`}
      >
        <article className={styles.characterCard}>
          <div className={styles.characterImagen}>
            <Image 
              src={character.image} 
              alt={`imagen del personaje ${character.name}`} 
              fill={true}
            />
          </div>
          <div className={styles.characterContent}>
            <div className={styles.section}>
              <h2>{character.name}</h2>
              <span className={styles.status}>
                <span
                  className={styles.status__icon + ' ' + styleStatus}
                ></span>
                {character.status} - {character.species}
              </span>
            </div>
            <div className={styles.section}>
              <span className={styles.text_gray}>Last known location:</span>
              {character.origin.name}
            </div>
            <div className={styles.section}>
              <span className={styles.text_gray}>First seen in:</span>
              {character.location.name}
            </div>
          </div>
        </article>
    </Link>
  )
}

export default CharacterCard