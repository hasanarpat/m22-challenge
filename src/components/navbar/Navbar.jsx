import searchIcon from '../../assets/icons/searchIcon.svg'
const Navbar = () => {
  return (
    <div className="navbar">
        <div></div>
        <ul className="navbarList">
            <li className="navbarListItem"><a href='#etkinlik'><h4>Tüm Etkinlikler</h4></a></li>
            <li className="navbarListItem"><a href='#tiyatro'><h4>Tiyatro</h4></a></li>
            <li className="navbarListItem"><a href='#konser'><h4>Konser</h4></a></li>
            <li className="navbarListItem"><a href='#standUp'><h4>Stand Up</h4></a></li>
            <li className="navbarListItem"><a href='#sinema'><h4>Sinema</h4></a></li>
            <li className="navbarListItem"><a href='#cocuk'><h4>Çocuk</h4></a></li>
        </ul>
        <div className='navbarSearch'>
        <img src={searchIcon}  className='navbarSearchIcon'/>
            <input className="navbarSearchInput" placeholder="Etkinlik Ara" />
        </div>
    </div>
  )
}

export default Navbar