'use strict';

import assert from 'assert';
import parseChord from '../src/parse_chord';

describe('#parseChord()', () => {
    const triads = [
        {argv: 'C', expected: {root: 'C', type: 'MAJOR', tension: [], bass: ''}},
        {argv: 'D♭M', expected: {root: 'Db', type: 'MAJOR', tension: [], bass: ''}},
        {argv: 'D△', expected: {root: 'D', type: 'MAJOR', tension: [], bass: ''}},
        {argv: 'Ebmaj', expected: {root: 'Eb', type: 'MAJOR', tension: [], bass: ''}},
        {argv: 'Esus4', expected: {root: 'E', type: 'SUSPENDED_FOURTH', tension: [], bass: ''}},
        {argv: 'Faug', expected: {root: 'F', type: 'AUGUMENT', tension: [], bass: ''}},
        {argv: 'G♭+', expected: {root: 'Gb', type: 'AUGUMENT', tension: [], bass: ''}},
        {argv: 'Gm', expected: {root: 'G', type: 'MINOR', tension: [], bass: ''}},
        {argv: 'G♯-', expected: {root: 'G#', type: 'MINOR', tension: [], bass: ''}},
        {argv: 'Amin', expected: {root: 'A', type: 'MINOR', tension: [], bass: ''}},
        {argv: 'A＃dim', expected: {root: 'A#', type: 'DIMINISH', tension: [], bass: ''}},
        {argv: 'B○', expected: {root: 'B', type: 'DIMINISH', tension: [], bass: ''}}
    ];

    const tetrads = [
        {argv: 'CM7', expected: {root: 'C', type: 'MAJOR_SEVENTH', tension: [], bass: ''}},
        {argv: 'Db7', expected: {root: 'Db', type: 'SEVENTH', tension: [], bass: ''}},
        {argv: 'D7sus4', expected: {root: 'D', type: 'SEVENTH_SUSPENDED_FOURTH', tension: [], bass: ''}},
        {argv: 'E♭add9', expected: {root: 'Eb', type: 'ADD_NINTH', tension: [], bass: ''}},
        {argv: 'E6', expected: {root: 'E', type: 'SIXTH', tension: [], bass: ''}},
        {argv: 'Faug7', expected: {root: 'F', type: 'AUGUMENT_SEVENTH', tension: [], bass: ''}},
        {argv: 'F#mM7', expected: {root: 'F#', type: 'MINOR_MAJOR_SEVENTH', tension: [], bass: ''}},
        {argv: 'Gmadd9', expected: {root: 'G', type: 'MINOR_ADD_NINTH', tension: [], bass: ''}},
        {argv: 'G♯m6', expected: {root: 'G#', type: 'MINOR_SIXTH', tension: [], bass: ''}},
        {argv: 'Aφ', expected: {root: 'A', type: 'HALF_DIMINISH', tension: [], bass: ''}},
        {argv: 'A＃dim7', expected: {root: 'A#', type: 'DIMINISH_SEVENTH', tension: [], bass: ''}}
    ];

    triads.forEach(test => {
        it('should return a valid object of chord ' + test.argv, () => {
            const res = parseChord(test.argv);
            assert.deepEqual(res, test.expected);
        });
    });

    tetrads.forEach(test => {
        it('should return a valid object of chord ' + test.argv, () => {
            const res = parseChord(test.argv);
            assert.deepEqual(res, test.expected);
        });
    });
});
