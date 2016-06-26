import ChordType from './chord_type';
import Interval from './interval';
import parseChord from './parse_chord';
import ChordParseError from './chord_parse_error';

let _includesBass = false;
let _autoVoicing = false;
let _lowerBound = 60;
let _centerNote = 60;

const KeyToNote = {
    C: 0,
    CS: 1,
    DF: 1,
    D: 2,
    DS: 3,
    EF: 3,
    E: 4,
    FF: 4,
    F: 5,
    FS: 6,
    GF: 6,
    G: 7,
    GS: 8,
    AF: 8,
    A: 9,
    AS: 10,
    BF: 10,
    B: 11,
    CF: 11
};
const NoteToKey_F = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
const NoteToKey_S = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

export default class Chord {
    constructor(root, type, bass = root, option = {}) {
        this._root = root;
        this._type = type;
        this._tensions = [];
        this._bass = bass;
        this._option = option;
    }

    toName() {
        const {root, type, bass} = this.toObj();
        if (root === bass) {
            return `${root}${ChordType[type].displayName}`;
        } else {
            return `${root}${ChordType[type].displayName}/${bass}`;
        }
    }

    // コードをオブジェクトに変換する
    toObj() {
        const option = this._option;
        let rootNoteToKey = null;
        let bassNoteToKey = null;

        // Root の変化記号
        if (option.displaysRootFlat || this._isTypeMajor()) {
            rootNoteToKey = NoteToKey_F;
        } else {
            rootNoteToKey = NoteToKey_S;
        }
        // Bass の変化記号
        if (option.displaysBassFlat || this._isTypeMajor()) {
            bassNoteToKey = NoteToKey_F;
        } else {
            bassNoteToKey = NoteToKey_S;
        }

        return {
            root: rootNoteToKey[this._root],
            type: this._type.name,
            bass: bassNoteToKey[this._bass]
        };
    }

    // コードをノートナンバーの配列に変換する
    toNotes() {
        const rootNumber = this._clipNote(this._root, _lowerBound, _lowerBound + 11);
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
            return [this._clipNote(this._bass, bottomNote - 15, bottomNote - 3), ...chordTones];
        } else {
            return chordTones;
        }
    }

    shift(value) {
        if (!value) {
            throw new Error('Shift value is undefined');
        }

        // MEMO: 仕様を変更する際は注意
        this._option = {};

        // シフト後の高さがマイナスの場合を考慮してこのような計算式にしている
        this._root = ((((this._root + value) % 12) + 12) % 12);
        this._bass = ((((this._bass + value) % 12) + 12) % 12);
        return this;
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

    // メジャー系のコードか判定する
    _isTypeMajor() {
        return [
            ChordType.MAJOR,
            ChordType.SUSPENDED_FOURTH,
            ChordType.AUGUMENT,
            ChordType.MAJOR_SEVENTH,
            ChordType.SEVENTH,
            ChordType.SEVENTH_SUSPENDED_FOURTH,
            ChordType.ADD_NINTH,
            ChordType.SIXTH,
            ChordType.AUGUMENT_SEVENTH
        ].some((type) => {
            return this._type.equals(type);
        });
    }

    // 文字列のコードをパースする
    static parse(str) {
        try {
            const obj = parseChord(str);
            const root = KeyToNote[obj.root.replace('#', 'S').replace('b', 'F')];
            const type = ChordType[obj.type];
            const bass = (obj.bass === '') ? root : KeyToNote[obj.bass.replace('#', 'S').replace('b', 'F')];
            const option = {};
            if (obj.root.includes('b')) {
                option.displaysRootFlat = true;
            } else if (obj.root.includes('#')) {
                option.displaysRootSharp = true;
            }
            if (obj.root.includes('b')) {
                option.displaysBassFlat = true;
            } else if (obj.bass.includes('#')) {
                option.displaysBassSharp = true;
            }
            return new Chord(root, type, bass, option);
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
