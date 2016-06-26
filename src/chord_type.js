import Interval from './interval';

const constructorEnforcer = Symbol();

export default class ChordType {
    constructor(enforcer, semitones, name, displayName) {
        if (enforcer !== constructorEnforcer) {
            throw 'Cannot call constructor of ChordType';
        }
        this._semitones = semitones;
        this._name = name;
        this._displayName = displayName;
    }

    get semitones() {
        return [...this._semitones];
    }

    get name() {
        return this._name;
    }

    get displayName() {
        return this._displayName;
    }

    equals(type) {
        // TODO: type が ChordType のインスタンスでなければエラーにする
        return this._name === type._name;
    }

    static get MAJOR() {
        return new ChordType(constructorEnforcer, [Interval.P1, Interval.M3, Interval.P5], 'MAJOR', '');
    }

    static get SUSPENDED_FOURTH() {
        return new ChordType(constructorEnforcer, [Interval.P1, Interval.P4, Interval.P5], 'SUSPENDED_FOURTH', 'sus4');
    }

    static get AUGUMENT() {
        return new ChordType(constructorEnforcer, [Interval.P1, Interval.M3, Interval.A5], 'AUGUMENT', 'aug');
    }

    static get MINOR() {
        return new ChordType(constructorEnforcer, [Interval.P1, Interval.m3, Interval.P5], 'MINOR', 'm');
    }

    static get DIMINISH() {
        return new ChordType(constructorEnforcer, [Interval.P1, Interval.m3, Interval.d5], 'DIMINISH', 'dim');
    }

    static get MAJOR_SEVENTH() {
        return new ChordType(constructorEnforcer, [Interval.P1, Interval.M3, Interval.P5, Interval.M7], 'MAJOR_SEVENTH', 'M7');
    }

    static get SEVENTH() {
        return new ChordType(constructorEnforcer, [Interval.P1, Interval.M3, Interval.P5, Interval.m7], 'SEVENTH', '7');
    }

    static get SEVENTH_SUSPENDED_FOURTH() {
        return new ChordType(constructorEnforcer, [Interval.P1, Interval.P4, Interval.P5, Interval.m7], 'SEVENTH_SUSPENDED_FOURTH', '7sus4');
    }

    static get ADD_NINTH() {
        return new ChordType(constructorEnforcer, [Interval.P1, Interval.M3, Interval.P5, Interval.M9], 'ADD_NINTH', 'add9');
    }

    static get SIXTH() {
        return new ChordType(constructorEnforcer, [Interval.P1, Interval.M3, Interval.P5, Interval.M6], 'SIXTH', '6');
    }

    static get AUGUMENT_SEVENTH() {
        return new ChordType(constructorEnforcer, [Interval.P1, Interval.M3, Interval.m6, Interval.m7], 'AUGUMENT_SEVENTH', 'aug7');
    }

    static get MINOR_SEVENTH() {
        return new ChordType(constructorEnforcer, [Interval.P1, Interval.m3, Interval.P5, Interval.m7], 'MINOR_SEVENTH', 'm7');
    }

    static get MINOR_MAJOR_SEVENTH() {
        return new ChordType(constructorEnforcer, [Interval.P1, Interval.m3, Interval.P5, Interval.M7], 'MINOR_MAJOR_SEVENTH', 'mM7');
    }

    static get MINOR_ADD_NINTH() {
        return new ChordType(constructorEnforcer, [Interval.P1, Interval.m3, Interval.P5, Interval.M9], 'MINOR_ADD_NINTH', 'madd9');
    }

    static get MINOR_SIXTH() {
        return new ChordType(constructorEnforcer, [Interval.P1, Interval.m3, Interval.P5, Interval.M6], 'MINOR_SIXTH', 'm6');
    }

    static get HALF_DIMINISH() {
        return new ChordType(constructorEnforcer, [Interval.P1, Interval.m3, Interval.d5, Interval.m7], 'HALF_DIMINISH', 'φ');
    }

    static get DIMINISH_SEVENTH() {
        return new ChordType(constructorEnforcer, [Interval.P1, Interval.m3, Interval.d5, Interval.d7], 'DIMINISH_SEVENTH', 'dim7');
    }
}
