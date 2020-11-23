import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

export default function HooksNews(){
    const [ results, setResults ] = useState([]);
    const [ query, setQuery ] = useState("react hooks");
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState(null);

    const searchInputRef = useRef();

    useEffect(() => {
        // axios.get('http://hn.algolia.com/api/v1/search?query=reacthooks')
        //     .then(response => {
        //         setResults(response.data.hits);
        //     })
        fetchData(); 
         
    }, [])

    const fetchData = async() => {
        setLoading(true);
        try{
            const response = await axios.get(`http://hn.algolia.com/api/v1/search?query=${query}`);
            setResults(response.data.hits);
        } catch(err) {
            setError(err);
        }
        setLoading(false);
    }

    const handleClear = (event) => {
        event.preventDefault();
        setQuery("");
        searchInputRef.current.focus();
    }

    return (
        <div>
            <input type="search" value={query} onChange={e => setQuery(e.target.value)} ref={searchInputRef}/>
            <button type="button" onClick={fetchData}>Search</button>
            <button type="button" onClick={handleClear}>Clear</button>
            {
                loading ? (
                    <div>Loading...</div>
                ) :
             <ul>
                {results.map(result => (
                    <li key={result.objectID}>
                        <a href={result.url}>{result.title}</a>
                    </li>
                ))}
              </ul>
            }
            { error && error.message }
        </div>
    )
}