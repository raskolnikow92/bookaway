import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { urlConfig } from '../../config';
function DetailsPage(){
    const { bookid } = useParams();
    const [bookData, setBookData] = useState(null);
    useEffect(()=>{
        const fetchdata = async()=>{
            try{
                const response = await fetch(`${urlConfig.backendUrl}/api/book/${bookid}`);
                if(!response.ok){
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                console.log(data)
                setBookData(data);
                console.log(bookData);
            }catch(err){
                console.error(err);
            }   
        }
        fetchdata();
    },[])
    
    if(!bookData){
        return <div>Loading</div>
    }else{
        return (
            <div className='bookContainer'>
                <div className='bookCard'>
                    <h1>{bookData.title}</h1>
                    <h2>{bookData.author}</h2>
                    <p>{bookData.description}</p>
                </div>
            </div>
        )
    }
    
}

export default DetailsPage;