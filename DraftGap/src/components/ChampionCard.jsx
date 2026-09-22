
const ChampionCard = ({name,image,type}) => {
    return (
        <article className="champion-card">
            
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <div className="champion-type-badge">
                <span>{type}</span>
            </div>
            
        </article>
    )
};

export default ChampionCard;