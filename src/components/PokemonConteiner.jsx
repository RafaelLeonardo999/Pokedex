import { useState, useEffect } from "react"
import { apiFetch } from "../utils/api-fetch"
import {formatPokemonData} from "../utils/pokemon-helper";
import PokemonCard from "./PokemonCard"

export default function PokemonConteiner({ type }) {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        load()
    }, [type])

    const load = async () => {
        const retornoAPI = await apiFetch('/type/' + type);
        const novosPokemons = [];
        for (let i=0; i < retornoAPI.pokemon.length;i++){
            const {url}=retornoAPI.pokemon[i].pokemon;
            const idPokemon = url.split('/')[6];
            const dadosPokemon = await apiFetch('/pokemon/' + idPokemon);
            const pokemon = formatPokemonData(dadosPokemon);
            novosPokemons.push(pokemon);
        }
        setPokemons(novosPokemons);
    }

    return (
        <div style={{
           
            display:"grid",
            gridTemplateColumns: "1fr 1fr 1fr"
        }}>
            {
                pokemons.map((pokemonCorrenteDoFor, index) => {
                    return (
                        <PokemonCard
                            key={index}
                            pokemon={pokemonCorrenteDoFor}
                        />
                    )
                })
            }
        </div>
    )
}