const constructorEnforcer = Symbol();

export default class ChordType {
    constructor(enforcer, semitones) {
        if (enforcer !== constructorEnforcer) {
            throw 'Cannot call constructor of ChordType';
        }
        this._semitones = semitones;
    }

    get semitones() {
        return this._semitones;
    }

    static get MAJOR() {
        return new ChordType(constructorEnforcer, [0, 4, 7]);
    }

    static get SUSPENDED_FOURTH() {
        return new ChordType(constructorEnforcer, [0, 5, 7]);
    }

    static get AUGUMENT() {
        return new ChordType(constructorEnforcer, [0, 4, 8]);
    }

    static get MINOR() {
        return new ChordType(constructorEnforcer, [0, 3, 7]);
    }

    static get DIMINISH() {
        return new ChordType(constructorEnforcer, [0, 3, 6]);
    }

    static get MAJOR_SEVENTH() {
        return new ChordType(constructorEnforcer, [0, 4, 7, 11]);
    }

    static get SEVENTH() {
        return new ChordType(constructorEnforcer, [0, 4, 7, 10]);
    }

    static get SEVENTH_SUSPENDED_FOURTH() {
        return new ChordType(constructorEnforcer, [0, 5, 7, 10]);
    }

    static get ADD_NINTH() {
        return new ChordType(constructorEnforcer, [0, 4, 7, 14]);
    }

    static get SIXTH() {
        return new ChordType(constructorEnforcer, [0, 4, 7, 9]);
    }

    static get AUGUMENT_SEVENTH() {
        return new ChordType(constructorEnforcer, [0, 4, 8, 10]);
    }

    static get MINOR_SEVENTH() {
        return new ChordType(constructorEnforcer, [0, 3, 7, 10]);
    }

    static get MINOR_MAJOR_SEVENTH() {
        return new ChordType(constructorEnforcer, [0, 3, 7, 11]);
    }

    static get MINOR_ADD_NINTH() {
        return new ChordType(constructorEnforcer, [0, 3, 7, 14]);
    }

    static get MINOR_SIXTH() {
        return new ChordType(constructorEnforcer, [0, 3, 7, 9]);
    }

    static get HALF_DIMINISH() {
        return new ChordType(constructorEnforcer, [0, 3, 6, 10]);
    }

    static get DIMINISH_SEVENTH() {
        return new ChordType(constructorEnforcer, [0, 3, 6, 9]);
    }
}
