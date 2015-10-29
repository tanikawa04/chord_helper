import Interval from './interval';

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
        return new ChordType(constructorEnforcer, [Interval.P1, Interval.M3, Interval.P5]);
    }

    static get SUSPENDED_FOURTH() {
        return new ChordType(constructorEnforcer, [Interval.P1, Interval.P4, Interval.P5]);
    }

    static get AUGUMENT() {
        return new ChordType(constructorEnforcer, [Interval.P1, Interval.M3, Interval.A5]);
    }

    static get MINOR() {
        return new ChordType(constructorEnforcer, [Interval.P1, Interval.m3, Interval.P5]);
    }

    static get DIMINISH() {
        return new ChordType(constructorEnforcer, [Interval.P1, Interval.m3, Interval.d5]);
    }

    static get MAJOR_SEVENTH() {
        return new ChordType(constructorEnforcer, [Interval.P1, Interval.M3, Interval.P5, Interval.M7]);
    }

    static get SEVENTH() {
        return new ChordType(constructorEnforcer, [Interval.P1, Interval.M3, Interval.P5, Interval.m7]);
    }

    static get SEVENTH_SUSPENDED_FOURTH() {
        return new ChordType(constructorEnforcer, [Interval.P1, Interval.P4, Interval.P5, Interval.m7]);
    }

    static get ADD_NINTH() {
        return new ChordType(constructorEnforcer, [Interval.P1, Interval.M3, Interval.P5, Interval.M9]);
    }

    static get SIXTH() {
        return new ChordType(constructorEnforcer, [Interval.P1, Interval.M3, Interval.P5, Interval.M6]);
    }

    static get AUGUMENT_SEVENTH() {
        return new ChordType(constructorEnforcer, [Interval.P1, Interval.M3, Interval.m6, Interval.m7]);
    }

    static get MINOR_SEVENTH() {
        return new ChordType(constructorEnforcer, [Interval.P1, Interval.m3, Interval.P5, Interval.m7]);
    }

    static get MINOR_MAJOR_SEVENTH() {
        return new ChordType(constructorEnforcer, [Interval.P1, Interval.m3, Interval.P5, Interval.M7]);
    }

    static get MINOR_ADD_NINTH() {
        return new ChordType(constructorEnforcer, [Interval.P1, Interval.m3, Interval.P5, Interval.M9]);
    }

    static get MINOR_SIXTH() {
        return new ChordType(constructorEnforcer, [Interval.P1, Interval.m3, Interval.P5, Interval.M6]);
    }

    static get HALF_DIMINISH() {
        return new ChordType(constructorEnforcer, [Interval.P1, Interval.m3, Interval.d5, Interval.m7]);
    }

    static get DIMINISH_SEVENTH() {
        return new ChordType(constructorEnforcer, [Interval.P1, Interval.m3, Interval.d5, Interval.d7]);
    }
}
