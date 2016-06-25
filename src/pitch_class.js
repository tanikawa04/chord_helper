const constructorEnforcer = Symbol();

export default class PitchClass {
    constructor(enforcer, number, name) {
        if (enforcer !== constructorEnforcer) {
            throw 'Cannot call constructor of PitchClass';
        }
        this._number = number;
        this._name = name;
    }

    get number() {
        return this._number;
    }

    get name() {
        return this._name;
    }

    static get C() {
        return new PitchClass(constructorEnforcer, 0, 'C');
    }

    static get CS() {
        return new PitchClass(constructorEnforcer, 1, 'C#');
    }

    static get DF() {
        return new PitchClass(constructorEnforcer, 1, 'Db');
    }

    static get D() {
        return new PitchClass(constructorEnforcer, 2, 'D');
    }

    static get DS() {
        return new PitchClass(constructorEnforcer, 3, 'D#');
    }

    static get EF() {
        return new PitchClass(constructorEnforcer, 3, 'Eb');
    }

    static get E() {
        return new PitchClass(constructorEnforcer, 4, 'E');
    }

    static get FF() {
        return new PitchClass(constructorEnforcer, 4, 'Fb');
    }

    static get F() {
        return new PitchClass(constructorEnforcer, 5, 'F');
    }

    static get FS() {
        return new PitchClass(constructorEnforcer, 6, 'F#');
    }

    static get GF() {
        return new PitchClass(constructorEnforcer, 6, 'Gb');
    }

    static get G() {
        return new PitchClass(constructorEnforcer, 7, 'G');
    }

    static get GS() {
        return new PitchClass(constructorEnforcer, 8, 'G#');
    }

    static get AF() {
        return new PitchClass(constructorEnforcer, 8, 'Ab');
    }

    static get A() {
        return new PitchClass(constructorEnforcer, 9, 'A');
    }

    static get AS() {
        return new PitchClass(constructorEnforcer, 10, 'A#');
    }

    static get BF() {
        return new PitchClass(constructorEnforcer, 10, 'Bb');
    }

    static get B() {
        return new PitchClass(constructorEnforcer, 11, 'B');
    }

    static get CF() {
        return new PitchClass(constructorEnforcer, 11, 'Cb');
    }
}
