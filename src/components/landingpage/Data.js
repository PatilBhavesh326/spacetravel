import React, { useEffect, useState } from 'react'

const Swap = () => {

//setting initial state people
    const [people, setPeople] = useState([]);
    const [planets, setPlanets] = useState([]);
    const [species, setSpecies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        async function fetchPeople(){
            let res = await fetch('https://swapi.dev/api/people/?format=json');
            let data = await res.json();
            setPeople(data.results);
        }

        async function fetchPlanets(){
            let res = await fetch('https://swapi.dev/api/planets/?format.json');
            let data = await res.json();
            setPlanets(data.results);
        }

        async function fetchSpecies(){
            let res = await fetch('https://swapi.dev/api/species/?format=json');
            let data = await res.json();
            setSpecies(data.results);
        }

        fetchPeople();
        fetchPlanets();
        fetchSpecies();
        
    }, []);

    return<div>Swap</div>

}

export default Swap;
