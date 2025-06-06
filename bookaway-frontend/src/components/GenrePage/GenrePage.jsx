import { useParams } from "react-router-dom"
import genres from "../../utils/GenreList";

export function GenrePage(){
    const { genreName } = useParams();
    const currentGenre = genres.find(genre => genre.name === genreName);
    return (
        <div>

        </div>
    )
}