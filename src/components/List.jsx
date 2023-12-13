import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Card'


const List = () => {

    const [list, setList] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            const data = await axios.get("http://universities.hipolabs.com/search?country=india");
            setList(data.data);
        }
        fetch();
    }, [])


    return (
        <div className="container">
            <div className='Listcontainer'>
                {
                    list.map((i) => (
                        <Card name={i.name} domain={i.domains[0]} url={i.web_pages[0]} key={i.index} />
                    ))
                }
            </div>
        </div>
    )
}

export default List
