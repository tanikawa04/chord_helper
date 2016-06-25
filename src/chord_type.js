import Interval from './interval';

const constructorEnforcer = Symbol();

export default class ChordType {
    constructor(enforcer, semitones, name) {
        if (enforcer !== constructorEnforcer) {
            throw 'Cannot call constructor of ChordType';
        }
        this._semitones = semitones;
        this._name = name;
    }

    get semitones() {
        return [...this._semitones];
    }

    get name() {
        return this._name;
    }

    static get MAJOR() {
        return new ChordType(constructorEnforcer, [Interval.P1, Interval.M3, Interval.P5], 'MAJOR');
    }

    static get SUSPENDED_FOURTH() {
        return new ChordType(constructorEnforcer, [Interval.P1, Interval.P4, Interval.P5], 'SUSPENDED_FOURTH');
    }

    static get AUGUMENT() {
        return new ChordType(constructorEnforcer, [Interval.P1, Interval.M3, Interval.A5], 'AUGUMENT');
    }

    static get MINOR() {
        return new ChordType(constructorEnforcer, [Interval.P1, Interval.m3, Interval.P5], 'MINOR');
    }

    static get DIMINISH() {
        return new ChordType(constructorEnforcer, [Interval.P1, Interval.m3, Interval.d5], 'DIMINISH');
    }

    static get MAJOR_SEVENTH() {
        return new ChordType(constructorEnforcer, [Interval.P1, Interval.M3, Interval.P5, Interval.M7], 'MAJOR_SEVENTH');
    }

    static get SEVENTH() {
        return new ChordType(constructorEnforcer, [Interval.P1, Interval.M3, Interval.P5, Interval.m7], 'SEVENTH');
    }

    static get SEVENTH_SUSPENDED_FOURTH() {
        return new ChordType(constructorEnforcer, [Interval.P1, Interval.P4, Interval.P5, Interval.m7], 'SEVENTH_SUSPENDED_FOURTH');
    }

    static get ADD_NINTH() {
        return new ChordType(constructorEnforcer, [Interval.P1, Interval.M3, Interval.P5, Interval.M9], 'ADD_NINTH');
    }

    static get SIXTH() {
        return new ChordType(constructorEnforcer, [Interval.P1, Interval.M3, Interval.P5, Interval.M6], 'SIXTH');
    }

    static get AUGUMENT_SEVENTH() {
        return new ChordType(constructorEnforcer, [Interval.P1, Interval.M3, Interval.m6, Interval.m7], 'AUGUMENT_SEVENTH');
    }

    static get MINOR_SEVENTH() {
        return new ChordType(constructorEnforcer, [Interval.P1, Interval.m3, Interval.P5, Interval.m7], 'MINOR_SEVENTH');
    }

    static get MINOR_MAJOR_SEVENTH() {
        return new ChordType(constructorEnforcer, [Interval.P1, Interval.m3, Interval.P5, Interval.M7], 'MINOR_MAJOR_SEVENTH');
    }

    static get MINOR_ADD_NINTH() {
        return new ChordType(constructorEnforcer, [Interval.P1, Interval.m3, Interval.P5, Interval.M9], 'MINOR_ADD_NINTH');
    }

    static get MINOR_SIXTH() {
        return new ChordType(constructorEnforcer, [Interval.P1, Interval.m3, Interval.P5, Interval.M6], 'MINOR_SIXTH');
    }

    static get HALF_DIMINISH() {
        return new ChordType(constructorEnforcer, [Interval.P1, Interval.m3, Interval.d5, Interval.m7], 'HALF_DIMINISH');
    }

    static get DIMINISH_SEVENTH() {
        return new ChordType(constructorEnforcer, [Interval.P1, Interval.m3, Interval.d5, Interval.d7], 'DIMINISH_SEVENTH');
    }
}
