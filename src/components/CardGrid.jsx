import "../styles/Cards.css";
import Card from "./Card";

function CardGrid({
    characters,
    isLoading,
    isShuffling,
    shuffleCharacters
}) {
    const isFlipped = isLoading || isShuffling;

    return (
        <div className="cardGrid">
            {Array.from({ length: characters.length }).map((_, index) => {
                const character = characters[index];

                return (
                    <Card
                        key={character?.id || index}
                        id={character?.id || index}
                        name={character?.name || "???"}
                        imageUrl={character?.imageUrl}
                        isFlipped={isFlipped}
                        shuffle={shuffleCharacters}
                    />
                );
            })}
        </div>
    );
}

export default CardGrid;