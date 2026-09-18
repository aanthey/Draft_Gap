const Nav = ({links}) => {
    return (
        <ul className= "nav">
            {links.map((links) => <li>{links}</li>)}
        </ul>
    )
};

export default Nav