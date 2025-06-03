function NavBar(){
    
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" id='navbar_container'>
                <a className="navbar-brand" href="#">Bookaway</a>
                <div className="justify-content-end">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Genres</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Search</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Register</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}