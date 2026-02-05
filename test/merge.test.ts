import { merge } from "../src/merge";

describe("merge()", () => {
    test("merges two ascending and one descending into ascending", () => {
        const c1 = [0, 3, 4, 31];
        const c2 = [1, 2, 30, 32];
        const c3 = [40, 20, 10, 5, 0]; // des

        expect(merge(c1, c2, c3)).toEqual([0, 0, 1, 2, 3, 4, 5, 10, 20, 30, 31, 32, 40]);
    });

    test("handles empty arrays", () => {
        expect(merge([], [], [])).toEqual([]);
        expect(merge([0, 1], [], [])).toEqual([0, 1]);
        expect(merge([], [0, 2], [])).toEqual([0, 2]);
        expect(merge([], [], [3, 2, 1, 0])).toEqual([0, 1, 2, 3]);
    });

    test("handles duplicates across collections", () => {
        const c1 = [0, 0, 2];
        const c2 = [0, 1, 2];
        const c3 = [2, 2, 0]; // des
        expect(merge(c1, c2, c3)).toEqual([0, 0, 0, 0, 1, 2, 2, 2, 2]);
    });

    test("works with negative numbers too (even if not expected by prompt)", () => {
        const c1 = [-5, -1, 0];
        const c2 = [-4, 2];
        const c3 = [10, 3, -2]; // des
        expect(merge(c1, c2, c3)).toEqual([-5, -4, -2, -1, 0, 2, 3, 10]);
    });

    test("already sorted inputs remain correct without using sort()", () => {
        const c1 = [0, 10];
        const c2 = [1, 2, 3];
        const c3 = [9, 8, 7, 0]; // des
        expect(merge(c1, c2, c3)).toEqual([0, 0, 1, 2, 3, 7, 8, 9, 10]);
    });
});
