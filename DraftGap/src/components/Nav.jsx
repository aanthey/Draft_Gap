const Nav = ({links,image}) => {
    return (
        
        <nav className= "nav">
        <div className="brand-group">
            <img src={image} alt="" />
            <span><strong>Draft Gap</strong></span>
        </div>
         <ul>
                {links.map((link) => (
                    <li key={link.href}>
                        <a className={link.active ? "active" : ""} href={link.href}>{link.label}</a>
                    </li>
                ))}
        </ul>
        </nav>
    )
};

export default Nav
