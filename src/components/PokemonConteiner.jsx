import { useState, useEffect } from "react"
import { apiFetch } from "../utils/api-fetch"
import PokemonCard from "./PokemonCard"

export default function PokemonConteiner({ type }) {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        load()
    }, [type])

    const load = async () => {
        const retornoAPI = await apiFetch('/type/'+type);
        setPokemons(retornoAPI.pokemon);
    }

    return (
        <div>
            {
                pokemons.map((pokemonCorrenteDoFor, index) => {
                    return (
                        <PokemonCard
                            key={index}
                            pokemon={pokemonCorrenteDoFor.pokemon}
                        />
                    )
                })
            }
        </div>
    )
}