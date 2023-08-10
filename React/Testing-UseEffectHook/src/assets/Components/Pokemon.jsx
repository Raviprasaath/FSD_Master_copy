import { useState } from "react";
import { useEffect } from "react";




function convertJsonData (data) {
    const {id, name, height, weight, abilities} = data;
        
    const abilityDataString = abilities.map((item)=> {
        return (item.ability.name);
    }).join(",");
    return {id, name, height, weight, abilityDataString};
}

const Pokemon = () => {
    const [selectedPokemon, setSelectedPokemon] = useState();
    const [pokemonChoice, SetPokemonChoice] = useState("");
    
    function pokemonHandler(e) {
        let value = e.target.value;
        SetPokemonChoice(value);
    }
    
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonChoice}`
    
    useEffect( () => {
        fetch(url).then(data=> data.json()).then(data=> {
            
            if (pokemonChoice) {
                const convert = convertJsonData(data);
                console.log(convert)
                setSelectedPokemon(convert);
            }
        });        
    }, [pokemonChoice]);

    return (
        <>
            <div style = {{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center",gap:"10px", margin:"10px"}}>
                <select onChange={(e)=>{pokemonHandler(e)}}>
                    <option value = "ditto">Ditto</option>
                    <option value = "bulbasaur">Bulbasaur</option>
                    <option value = "pikachu">Pickachu</option>
                </select>
                <div style = {{border: "2px solid black", minWidth:"300px", padding:"10px"}}>
                    <p>Name: {selectedPokemon?.name} </p>                    
                    <p>Height: {selectedPokemon?.height} </p>
                    <p>Weight: {selectedPokemon?.weight} </p>
                    <p>Abilities: {selectedPokemon?.abilityDataString} </p>
                </div>
            </div>
        </>
    )
}

export default Pokemon;