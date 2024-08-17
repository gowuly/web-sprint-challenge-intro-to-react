import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API
  // ❗ Create effects to fetch the data and put it in state

const [characters, setCharacters] = useState([]);

useEffect(() => {

  const fetchData = async () => {

      try {

      const [peopleResponse, planetsResponse] = await Promise.all([
          axios.get(urlPeople),
          axios.get(urlPlanets),
        ]);
          console.log(peopleResponse.data, planetsResponse.data);// Check the response data
  
      const combinedData = peopleResponse.data.map(person => { // Combine the data here
      const homeworldData = planetsResponse.data.find(planet =>  
        planet.id === person.homeworld);// Find the corresponding planet data using the homeworld ID
           
        return {
            ...person,
            homeworld: homeworldData,
          };
        });
        console.log("combined character data:", combinedData)
  
        
        setCharacters(combinedData); // Update the state with the combined data

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
     fetchData();
  }, []); // Empty dependency array means this runs once on mount

    return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}

      {characters.map(character => (
      <Character key={character.id} character={character} />
    ))}
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
