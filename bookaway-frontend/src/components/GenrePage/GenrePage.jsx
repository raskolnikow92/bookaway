import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { urlConfig } from '../../config';
import genres from '../../utils/GenreList';
import styles from './GenrePage.module.css';
function GenrePage(){
    const { genreName } = useParams();
    const [genreData, setGenreData] = useState([]);
    const currentGenre = genres.find(item => item.name === genreName);
    
    useEffect(()=>{
        const fetchdata = async()=>{
            try{
                const response = await fetch(`${urlConfig.backendUrl}/api/genre/${genreName}`);
                if(!response.ok){
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setGenreData(data);
            }catch(err){
                console.error(err);
            }   
        }
        fetchdata();
    },[])
    
    

    return (
        <div className={styles.pageContainer}>
            <div className={styles.genreContainer}>
                <div className={styles.genreCard}>
                    <div className={styles.genreImg}>
                        <img src={currentGenre.img} alt={currentGenre.name} />
                    </div>
                    <div className={styles.genreTextBox}>
                        <h1 className={styles.genreTitle}>{currentGenre.name}</h1>
                        <p className={styles.genreDescription}>{currentGenre.description}</p>
                    </div>
                </div>
            </div>

            <table className={styles.bookTable}>
                <thead>
                    <tr>
                    <th>Autor</th>
                    <th>Titel</th>
                    <th>Genre</th>
                    <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {genreData.map((item, index) => (
                    <tr key={index}>
                        <td>{item.author}</td>
                        <td>{item.title}</td>
                        <td>{item.genre}</td>
                        <td>Link</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default GenrePage;