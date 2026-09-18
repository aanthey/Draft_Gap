const Nav = ({links,pointer,image}) => {
    return (
        
        <nav className= "nav">
        <div className="brand-group">
            <img src={image} alt="" />
            <span>Draft Gap</span>
        </div>
         <ul>
                {links.map((links) => <li><a href={pointer}>{links}</a></li>)}
        </ul>
        </nav>
    )
};

export default Nav