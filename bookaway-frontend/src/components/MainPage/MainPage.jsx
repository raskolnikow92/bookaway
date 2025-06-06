import genres from "../../utils/GenreList";
import styles from './MainPage.module.css';

export function MainPage() {
  return (
    <div className={styles.viewContainer}>
      <div className={styles.textContainer}>
            <h1>Willkommen bei BookAway</h1>
            <p>
                BookAway verbindet Menschen, die Bücher spenden möchten, mit Lesebegeisterten, die
                kostenlose Bücher entdecken und mitnehmen können. Wähle ein Genre aus und finde dein
                nächstes Lieblingsbuch – ganz einfach und kostenfrei.
            </p>
      </div>
      <div className={styles.genreContainer}>
        {genres.map((genre) => (
          <div key={genre.id} className={styles.genreCard}>
            <div className={styles.genreContent}>
              <img src={genre.img} alt={genre.name} />
              <p>{genre.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
