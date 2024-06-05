class Pyramid {
    #rowCount;
    #character;
    #spacingCharacter;
    #rows = [];

    constructor(rowCount, character, spacingCharacter) {
        this.#character = character;
        this.#spacingCharacter = spacingCharacter;
        this.#rowCount = rowCount;
    }

    #padRow(rowNumber) {
        return this.#spacingCharacter.repeat(this.#rowCount - rowNumber)
                + this.#character.repeat(2 * rowNumber - 1) 
                + this.#spacingCharacter.repeat(this.#rowCount - rowNumber);
    }

    #addPyramidRows() {
        for(let i = 1; i < this.#rowCount; i++) {
            this.#rows.push(this.#padRow(i));
        }
    }

    printPyramid() {
        this.#addPyramidRows();
        for(const row of this.#rows){
            console.log("\n" + row);
        }
    }
}

const newPyramid = new Pyramid(50, "#", ".");
newPyramid.printPyramid();