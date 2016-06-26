import Chord from './chord';

export default class Song {
    constructor(chords = []) {
        this._chords = chords;
    }

    transpose(value) {
        this._chords = this._chords.map((chord) => {
            return chord.shift(value);
        });
    }

    static parseAll(text) {
        const chordStrs = text.trim().split(/\s+/);
        const chords = chordStrs.map((str) => {
            return Chord.parse(str);
        });
        return new Song(chords);
    }
}
