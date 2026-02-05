export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    const result: number[] = [];
    let i = 0;                  // collection_1 min to max
    let j = 0;                  // collection_2 min to max
    let k = collection_3.length - 1;    // collection_3: max to min

    const totalLength = collection_1.length + collection_2.length + collection_3.length;

    for (let step = 0; step < totalLength; step++) {
        const v1 = i < collection_1.length ? collection_1[i] : Infinity;
        const v2 = j < collection_2.length ? collection_2[j] : Infinity;
        const v3 = k >= 0 ? collection_3[k] : Infinity;

        // select value least
        if (v1 <= v2 && v1 <= v3) { // v1 is least
            result.push(v1);
            i++;
        } else if (v2 <= v1 && v2 <= v3) { // v2 is least
            result.push(v2);
            j++;
        } else { // v3 is least
            result.push(v3);
            k--;
        }
    }

    return result;
}

const c1 = [0, 3, 4, 31];
const c2 = [1, 2, 30, 32];
const c3 = [40, 20, 10, 5, 0]; // des

console.log(merge(c1, c2, c3));