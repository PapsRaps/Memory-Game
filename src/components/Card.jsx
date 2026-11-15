import "../styles/Cards.css";
import questionMarkCard from "../assets/questionmarkCard.png";

function Card({ 
    id, 
    name, 
    imageUrl, 
    isFlipped, 
    shuffle 
}) {
    return (
        <button
            className="card"
            id={id}
            onClick={()=>shuffle(id)}
            disabled={isFlipped || !imageUrl}
        >
            <div className={`cardInner ${isFlipped ? "flipped" : ""}`}>

                <div className="cardFront">
                    <img src={imageUrl || questionMarkCard} alt={name}  
                        onError={(event) => {
                            event.currentTarget.onerror = null;
                            event.currentTarget.src = questionMarkCard
                        }}
                    />

                    <div className="cardName">
                        <p>{name}</p>
                    </div>
                </div>

                <div className="cardBack">
                    <img src={questionMarkCard} alt="Hidden character" />
                    <div className="cardName">
                        <p>???</p>
                    </div>
                </div>

            </div>
        </button>
    );
}

export default Card;