const Nav = ({links}) => {
    return (
        <ul>
            {links.map((links) => <li>{links}</li>)}
        </ul>
    )
};

export default Nav