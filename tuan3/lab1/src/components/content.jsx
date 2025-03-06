import '../css/content.css'
import rating_1 from '../img/rating_1.png'
import rating_2 from '../img/rating_2.png'
import rating_3 from '../img/rating_3.png'
import rating_4 from '../img/rating_4.png'
import rating_5 from '../img/rating_5.png'
import list_filter from '../img/list_filter.png'
import slider from '../img/slider.png'
import checkboxpink from '../img/checkboxpink.png'
import checkbox from '../img/checkbox.png'
import nothing from '../img/nothing.png'
import img from '../img/image.png'

const content = () => {
    const text_title_1 = {top: "55px",left: "16px"};
    const text_title_2 = {top: "300px", left: "16px"};
    const text_title_3 = {top: "436px",left: "16px" };
    const text_mi_30 = {top: "350px",left: "85px" };
    const text_mi_50 = {top: "350px",left: "187px" };
    

    return (
        <div className="container-content">
            <div className="container-filters">
                <div className="icon">
                    <img src={list_filter} alt="list_filter" />
                </div>
                <p className="text-filter">filters</p>
                <p className="text-title" style={text_title_1}>Type</p>
                    <img src={img} alt="" />
                <div className="line_1"></div>
                <p className="text-title" style={text_title_2}>Time</p>
                <div className="text-mi" style={text_mi_30}>30 minutes</div>
                <div className="text-mi" style={text_mi_50}>50 minutes</div>
                <div className="slider">
                    <img src={slider} alt="" />
                </div>
                <div className="line_2"></div>
                <p className="text-title" style={text_title_3}>Rating</p>
                <div className="rating_5">
                    <img src={checkbox} alt="" />
                    <img src={rating_5} alt="" />
                </div>
                <div className="rating_4">
                    <img src={checkbox} alt="" />
                    <img src={rating_4} alt="" />
                </div>
                <div className="rating_3">
                <img src={checkboxpink} alt="" />
                <img src={rating_3} alt="" />
                </div>
                <div className="rating_2">
                <img src={checkboxpink} alt="" />
                <img src={rating_2} alt="" />
                </div>
                <div className="rating_1">
                <img src={checkboxpink} alt="" />
                <img src={rating_1} alt="" />
                </div>
                <div className="line_3"></div>

                <button className='button'>Apply</button>
            </div>

            <p className='text-heading'>Sorry, no results were found for “cakescascsa”</p>
            <img src={nothing} alt="" className="image" />
            <p className='text-body'>We have all your Independence Day sweets covered.</p>

            <div className="tag">
            <div className="tag-item">Sweet Cake</div>
            <div className="tag-item">Black Cake</div>
            <div className="tag-item">Pozole Verde</div>
            <div className="tag-item">Healthy food</div>
            </div>
        </div>
    );
}

export default content;