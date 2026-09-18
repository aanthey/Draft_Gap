
function ChampionCard({name,image}) {
    return (
        <article className="champion-card">
            
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <div className="champion-type-badge">
                
            </div>
            
        </article>
    )
};

export default ChampionCard;