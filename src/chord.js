import PitchClass from './pitch_class';
import ChordType from './chord_type';
import Interval from './interval';
import parseChord from './parse_chord';
import ChordParseError from './chord_parse_error';

let _includesBass = false;
let _autoVoicing = false;
let _lowerBound = 60;
let _centerNote = 60;

export default class Chord {
    constructor(root, type, bass = root) {
        this._root = root;
        this._type = type;
        this._tensions = [];
        this._bass = bass;
    }

    // コードをオブジェクトに変換する
    toObj() {
        return {
            root: this._root.name,
            type: this._type.name,
            bass: this._bass.name
        };
    }

    // コードをノートナンバーの配列に変換する
    toNotes() {
        const rootNumber = this._clipNote(this._root.number, _lowerBound, _lowerBound + 11);
        const lbound = _autoVoicing ? _centerNote - 5 : rootNumber;
        const ubound = _autoVoicing ? _centerNote + 6 : rootNumber + Interval.M14;
        const intervals = [...this._type.semitones, ...this._tensions];
        const chordTones = intervals.map((interval) => {
            return this._clipNote(interval + rootNumber, lbound, ubound);
        }).sort();

        const length = chordTones.length;
        if (chordTones[length - 1] -  chordTones[length - 2] === Interval.m2) {
            chordTones.unshift(chordTones.pop() - 12);
        }

        const bottomNote = chordTones[0];
        if (_includesBass) {
            return [this._clipNote(this._bass.number, bottomNote - 15, bottomNote - 3), ...chordTones];
        } else {
            return chordTones;
        }
    }

    _clipNote(note, lbound, ubound) {
        if (note < lbound) {
            return (note + 120 - lbound) % 12 + lbound;
        } else if (note > ubound) {
            return (note - ubound - 1) % 12 + ubound - 12 + 1;
        } else {
            return note;
        }
    }

    // 文字列のコードをパースする
    static parse(str) {
        try {
            const obj = parseChord(str);
            const root = PitchClass[obj.root.replace('#', 'S').replace('b', 'F')];
            const type = ChordType[obj.type];
            const bass = (obj.bass === '') ? root : PitchClass[obj.bass.replace('#', 'S').replace('b', 'F')];
            return new Chord(root, type, bass);
        } catch (e) {
            throw new ChordParseError(`Failed to parse chord "${str}":\n${e}`);
        }
    }

    static setConfig({includesBass, autoVoicing, lowerBound, centerNote}) {
        if (typeof includesBass !== 'undefined') {
            _includesBass = includesBass;
        }
        if (typeof autoVoicing !== 'undefined') {
            _autoVoicing = autoVoicing;
        }
        if (typeof lowerBound !== 'undefined') {
            _lowerBound = lowerBound;
        }
        if (typeof centerNote !== 'undefined') {
            _centerNote = centerNote;
        }
    }
}
