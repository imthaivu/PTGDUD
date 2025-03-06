import '../css/footer.css';
import chefifywhite from '../img/chefifywhite.png';

const footer = () => {
    const about_us = {top: "40px",left: "48px"};
    const learn_more = {top: "40px",left: "825px", with: "120px"};
    const shop = {top: "40px",left: "1212px"};
    const recipes = {top: "239px",left: "825px"}; 
    const wel = {top: "76px",left: "48px"}; 
    const out_cooks = {top: "74px",left: "825px"};
    const see = {top: "107px",left: "825px"};
    const faq = {top: "141px",left: "825px"};
    const gift = {top: "273px",left: "825px"};
    const send = {top: "307px",left: "825px"};
    const what = {top: "74px",left: "1212px"};
    const pasta = {top: "107px",left: "1212px"};
    const dinner = {top: "147px",left: "1212px"};
    const heal = {top: "187px",left: "1212px"};
    const vege = {top: "227px",left: "1212px"};
    const vega = {top: "267px",left: "1212px"};
    const chris = {top: "307px",left: "1212px"};

    return (
        <div className="container-footer">
            <p className="text-title" style={about_us}>About Us</p>
            <p className="text" style={wel}>Welcome to our website, a wonderful place to explore and learn how to cook like a pro.</p>
            <div className="textbox">
            <input type="text" placeholder='Enter your email'/>
            </div>
            <button type="button" className='button'>Send</button>
            <div className="learn-more">
                <p className="text-title" style={learn_more}>Learn More</p>
                    <p className='text' style={out_cooks}>Our Cooks</p>
                    <p className='text' style={see}>See Our Features</p>
                    <p className='text' style={faq}>FAQ</p>
            </div>
            <div className="shop">
                <p className="text-title" style={shop}>Shop</p>
                <p className='text' style={gift}>Gift Subscription</p>
                <p className='text' style={send}>Send Us Feedback</p>
            </div>
            <div className="recipes">
                <p className="text-title" style={recipes}>Recipes</p>
                <p className='text' style={what}>What to Cook This Week</p>
                <p className='text' style={pasta}>Pasta</p>
                <p className='text' style={dinner}>Dinner</p>
                <p className='text' style={heal}>Healthy</p>
                <p className='text' style={vege}>Vegetarian</p>
                <p className='text' style={vega}>Vegan</p>
                <p className='text' style={chris}>Christmas</p>
            </div>

            <div className="trademark">
                <img src={chefifywhite} alt="" />
                <p>2023 Chefify Company</p>
                <p>Terms of Service| Privacy Policy</p>
            </div>
        </div>
    );
};

export default footer;