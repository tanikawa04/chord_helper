const constructorEnforcer = Symbol();

export default class Note {
    constructor(enforcer, number) {
        if (enforcer !== constructorEnforcer) {
            throw 'Cannot call constructor of Note';
        }
        this._number = number;
    }

    get number() {
        return this._number;
    }

    static get C() {
        return new Note(constructorEnforcer, 0);
    }

    static get CS() {
        return new Note(constructorEnforcer, 1);
    }

    static get DF() {
        return new Note(constructorEnforcer, 1);
    }

    static get D() {
        return new Note(constructorEnforcer, 2);
    }

    static get DS() {
        return new Note(constructorEnforcer, 3);
    }

    static get EF() {
        return new Note(constructorEnforcer, 3);
    }

    static get E() {
        return new Note(constructorEnforcer, 4);
    }

    static get FF() {
        return new Note(constructorEnforcer, 4);
    }

    static get F() {
        return new Note(constructorEnforcer, 5);
    }

    static get FS() {
        return new Note(constructorEnforcer, 6);
    }

    static get GF() {
        return new Note(constructorEnforcer, 6);
    }

    static get G() {
        return new Note(constructorEnforcer, 7);
    }

    static get GS() {
        return new Note(constructorEnforcer, 8);
    }

    static get AF() {
        return new Note(constructorEnforcer, 8);
    }

    static get A() {
        return new Note(constructorEnforcer, 9);
    }

    static get AS() {
        return new Note(constructorEnforcer, 10);
    }

    static get BF() {
        return new Note(constructorEnforcer, 10);
    }

    static get B() {
        return new Note(constructorEnforcer, 11);
    }

    static get CF() {
        return new Note(constructorEnforcer, 11);
    }
}
