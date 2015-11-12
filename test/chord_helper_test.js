'use strict';

import assert from 'assert';
import ChordHelper, {ChordParseError} from '../src/chord_helper';

describe('ChordHelper', () => {
    describe('config: {includesBass: true, autoVoicing: false, lowerBound: 60}', () => {
        before(() => {
            ChordHelper.setConfig({
                includesBass: true,
                autoVoicing: false,
                lowerBound: 60
            });
        });

        describe('#parseChord() #toObj()', () => {
            it(`should return {root: "C", type: "MAJOR_SEVENTH", bass: "C"} when parsing "CM7"`, () => {
                const res = ChordHelper.parseChord('CM7');
                assert.deepEqual(res.toObj(), {
                    root: 'C',
                    type: 'MAJOR_SEVENTH',
                    bass: 'C'
                });
            });

            it(`should throw an error when parsing "XM7"`, () => {
                assert.throws(() => {
                    ChordHelper.parseChord('XM7').toObj();
                }, ChordParseError);
            });
        });

        describe('#parseChord() #toNotes()', () => {
            it(`should return [48, 60, 64, 67, 71] when parsing "CM7"`, () => {
                const res = ChordHelper.parseChord('CM7');
                assert.deepEqual(res.toNotes(), [48, 60, 64, 67, 71]);
            });
        });
    });

    describe('config: {includesBass: true, autoVoicing: true, centerNote: 60}', () => {
        before(() => {
            ChordHelper.setConfig({
                includesBass: true,
                autoVoicing: true,
                centerNote: 60
            });
        });

        describe('#parseChord() #toNotes()', () => {
            it(`should return [48, 55, 59, 60, 64] when parsing "CM7"`, () => {
                const res = ChordHelper.parseChord('CM7');
                assert.deepEqual(res.toNotes(), [48, 55, 59, 60, 64]);
            });
        });
    });

    describe('config: {includesBass: true, autoVoicing: true, centerNote: 66}', () => {
        before(() => {
            ChordHelper.setConfig({
                includesBass: true,
                autoVoicing: true,
                centerNote: 66
            });
        });

        describe('#parseChord() #toNotes()', () => {
            it(`should return [48, 60, 64, 67, 71] when parsing "CM7"`, () => {
                const res = ChordHelper.parseChord('CM7');
                assert.deepEqual(res.toNotes(), [48, 60, 64, 67, 71]);
            });
        });
    });

});
