export default function PokemonCard({pokemon}){
    return (
        <div>
        <img src={pokemon.imgSrc} height={200}/>     
        <label style={{marginRight:5}} >{pokemon.name}</label>
        </div>
    )
}