import Chord from './chord';
import PitchClass from './pitch_class';
import ChordType from './chord_type';
import parseChord from './parse_chord';

export default class ChordHelper {
    static parseChord(str) {
        try {
            return new _Chord(parseChord(str));
        } catch (e) {
            throw new ChordParseError('Failed to parse chord \'' + str + '\'');
        }
    }

    static setConfig(config) {
        Chord.setConfig(config);
    }
}

class _Chord {
    constructor(obj) {
        this._obj = obj;
    }

    toObj() {
        delete this._obj.tension;   // テンションノートへの対応が不十分なため暫定的に削除
        this._obj.bass = (this._obj.bass === '') ?
            this._obj.root : this._obj.bass.replace('#', 'S').replace('b', 'F');
        return this._obj;
    }

    toNotes() {
        const obj = this._obj;
        const root = PitchClass[obj.root.replace('#', 'S').replace('b', 'F')];
        const type = ChordType[obj.type];
        const bass = (obj.bass === '') ? root : PitchClass[obj.bass.replace('#', 'S').replace('b', 'F')];
        return new Chord(root, type, bass).getNotes();
    }
}

export class ChordParseError extends Error {
    constructor(message) {
        super();
        this.name = this.constructor.name;
        this.message = message;
    }
}
