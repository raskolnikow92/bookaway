import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { urlConfig } from '../../config';
function DetailsPage(){
    const { genreName } = useParams();
    const {genreData, setGenreData} = useState([]);
    useEffect(()=>{
        const fetchdata = async()=>{
            try{
                const response = await fetch(`${urlConfig.backendUrl}/api/genres/${genreName}`);
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
        <div>
            <ul>
                {genreData.map(item=>(<li>{item.title}</li>))}
            </ul>
        </div>
    )
}

export default DetailsPage;