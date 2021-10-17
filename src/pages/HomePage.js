import React from 'react';
import Article from '../components/Article';

const articles = [
    {
        id: 1,
        title: "Czym jest teoria strun",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, velit corporis. Porro doloribus dignissimos incidunt amet, minus, natus sed quae consectetur nemo voluptates, magnam perferendis iure modi. Eveniet, porro ipsum."
    },
    {
        id: 2,
        title: "Czym jest materia i ciemna energia",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, velit corporis. Porro doloribus dignissimos incidunt amet, minus, natus sed quae consectetur nemo voluptates, magnam perferendis iure modi. Eveniet, porro ipsum."
    },
    {
        id: 3,
        title: "Czym jest Paradoks Fermiego",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, velit corporis. Porro doloribus dignissimos incidunt amet, minus, natus sed quae consectetur nemo voluptates, magnam perferendis iure modi. Eveniet, porro ipsum."
    }
]

const  HomePage = () => {
    
    const artList = articles.map( article => (<Article key={article.id} {...article}/>))
    return ( 
        <div className="home">
            {artList}
        </div>
     );
}
 
export default HomePage;