export default class Note {
    constructor(number) {
        this._number = number;
    }

    get number() {
        return this._number;
    }

    static get C() {
        return new Note(0);
    }

    static get CS() {
        return new Note(1);
    }

    static get DF() {
        return new Note(1);
    }

    static get D() {
        return new Note(2);
    }

    static get DS() {
        return new Note(3);
    }

    static get EF() {
        return new Note(3);
    }

    static get E() {
        return new Note(4);
    }

    static get FF() {
        return new Note(4);
    }

    static get F() {
        return new Note(5);
    }

    static get FS() {
        return new Note(6);
    }

    static get GF() {
        return new Note(6);
    }

    static get G() {
        return new Note(7);
    }

    static get GS() {
        return new Note(8);
    }

    static get AF() {
        return new Note(8);
    }

    static get A() {
        return new Note(9);
    }

    static get AS() {
        return new Note(10);
    }

    static get BF() {
        return new Note(10);
    }

    static get B() {
        return new Note(11);
    }

    static get CF() {
        return new Note(11);
    }
}
