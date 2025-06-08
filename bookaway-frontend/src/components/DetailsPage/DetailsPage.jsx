import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { urlConfig } from '../../config';
function DetailsPage(){
    const { bookid } = useParams();
    const {bookData, setBookData} = useState(null);
    useEffect(()=>{
        const fetchdata = async()=>{
            try{
                const response = await fetch(`${urlConfig.backendUrl}/api/book/${bookid}`);
                if(!response.ok){
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setBookData(data);
            }catch(err){
                console.error(err);
            }   
        }
        fetchdata();
    },[])
    
    return (
        <div>

        </div>
    )
}

export default DetailsPage;