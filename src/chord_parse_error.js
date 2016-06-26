export default class ChordParseError extends Error {
    constructor(message) {
        super();
        this.name = this.constructor.name;
        this.message = message;
    }
}
