import React,{useState} from 'react'

function Character({character}) { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld

  
  const [showHomeworld, setShowHomeworld] = useState(false);
  const toggleHomeworld = () => {
    setShowHomeworld(!showHomeworld);
  };

  return (
    <div className="character-card" onClick={toggleHomeworld}>
      {/* Use the same markup with the same attributes as in the mock */}

      <h3 className="character-name">{character.name}</h3>
      {showHomeworld && <p className="character-planet">Homeworld: {character.homeworld.name}</p>}
    </div>
  )
}


export default Character
