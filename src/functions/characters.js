async function getCharacterArray() {
    const ids = [1,2,3,4,5,7,9,10,12,13, 154, 320, 800, 420, 620, 821];

    const response = await fetch(`https://rickandmortyapi.com/api/character/${ids}`);
    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();

    const character = data.map(character => ({
                                                    'id':character.id,
                                                    'name':character.name,
                                                    'imageUrl':character.image
    }))
    
    return character
}

export { getCharacterArray };