export default function PokemonCard({pokemon}){
    return (
        <div style={{
            background: "#000000",
            padding: "20px",
            width: "300px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            border: "1px solid #ddd"
        }}>
        <img src={pokemon.imgSrc} height={200}/>     
        <label style={{marginRight:5}} >{pokemon.name}</label>
        </div>

        
    )
}