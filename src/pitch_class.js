const constructorEnforcer = Symbol();

export default class PitchClass {
    constructor(enforcer, number) {
        if (enforcer !== constructorEnforcer) {
            throw 'Cannot call constructor of PitchClass';
        }
        this._number = number;
    }

    get number() {
        return this._number;
    }

    static get C() {
        return new PitchClass(constructorEnforcer, 0);
    }

    static get CS() {
        return new PitchClass(constructorEnforcer, 1);
    }

    static get DF() {
        return new PitchClass(constructorEnforcer, 1);
    }

    static get D() {
        return new PitchClass(constructorEnforcer, 2);
    }

    static get DS() {
        return new PitchClass(constructorEnforcer, 3);
    }

    static get EF() {
        return new PitchClass(constructorEnforcer, 3);
    }

    static get E() {
        return new PitchClass(constructorEnforcer, 4);
    }

    static get FF() {
        return new PitchClass(constructorEnforcer, 4);
    }

    static get F() {
        return new PitchClass(constructorEnforcer, 5);
    }

    static get FS() {
        return new PitchClass(constructorEnforcer, 6);
    }

    static get GF() {
        return new PitchClass(constructorEnforcer, 6);
    }

    static get G() {
        return new PitchClass(constructorEnforcer, 7);
    }

    static get GS() {
        return new PitchClass(constructorEnforcer, 8);
    }

    static get AF() {
        return new PitchClass(constructorEnforcer, 8);
    }

    static get A() {
        return new PitchClass(constructorEnforcer, 9);
    }

    static get AS() {
        return new PitchClass(constructorEnforcer, 10);
    }

    static get BF() {
        return new PitchClass(constructorEnforcer, 10);
    }

    static get B() {
        return new PitchClass(constructorEnforcer, 11);
    }

    static get CF() {
        return new PitchClass(constructorEnforcer, 11);
    }
}
