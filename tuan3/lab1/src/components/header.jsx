import '../css/header.css'
import logo from '../img/chefify.png'
import check from '../img/check.png'
import avater from '../img/avatar.png'

const header = () => {
    return (
        <div className="container">
            <img src={logo} alt="Logo" className='logo'/>

            <div className="textbox">
                <input type="text" />
            </div>

            <div className="header-menu">
                <div className="header-menu-item">What to cook</div>
                <div className="header-menu-item">Recipes</div>
                <div className="header-menu-item">Ingredients</div>
                <div className="header-menu-item">Occasions</div>
                <div className="header-menu-item">About Us</div>
            </div>

            <div className="button">
                <img src={check} alt="" />
                <p>Your Recipe Box</p>
            </div>

            <div className="avatar">
                <img src={avater} alt="" />
            </div>
        </div>
    );
}

export default header;