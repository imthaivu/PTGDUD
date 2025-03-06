import '../css/Item.css';

const item = ({items}) => {
    return (
        <>
            <div className="items-container">
                {items.map((item) => (
                    <div className="item" key={item.id}>
                        <div className="item-img">
                            <img src={item.img} alt={item.name} />
                        </div>
                        <div className="item-info">
                            <div className="item-logo">
                                <img src={item.logo} alt="logo" />
                            </div>
                            <h2 className="item-text">{item.name}</h2>
                            <p className="item-tag">{item.minutes}</p>
                        </div>
                    </div>
                ))};
            </div>
        </>
    );
}

export default item;