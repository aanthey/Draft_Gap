
function ChampionCard({name,image}) {
    return (
        <article className="champion-card">
            <h2>{name}</h2>
            <img src={image} alt={name} />
        </article>
    )
};

export default ChampionCard;