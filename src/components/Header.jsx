import '../styles/Header.css'
import logo from '../assets/logo.png'

function Header(){
    return(
        <header>
            <img src={logo} alt='Logo of the game showing memory game'></img>
            <div className="gameDesc">
                <hr/>
                <span>PICK A CARD YOU HAVEN'T PICKED BEFORE</span>
                <hr/>
            </div>
        </header>
    )
}

export default Header;