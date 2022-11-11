/**
 * https://app.codility.com/programmers/lessons/5-prefix_sums/min_avg_two_slice/
 * 
 * Find the minimal average of any slice containing at least two elements.
 * 
 * A non-empty array A consisting of N integers is given. A pair of integers (P, Q), such that 0 ≤ P < Q < N, is called a slice of array A (notice that the slice contains at least two elements). The average of a slice (P, Q) is the sum of A[P] + A[P + 1] + ... + A[Q] divided by the length of the slice. To be precise, the average equals (A[P] + A[P + 1] + ... + A[Q]) / (Q − P + 1).

For example, array A such that:

    A[0] = 4
    A[1] = 2
    A[2] = 2
    A[3] = 5
    A[4] = 1
    A[5] = 5
    A[6] = 8
contains the following example slices:

slice (1, 2), whose average is (2 + 2) / 2 = 2;
slice (3, 4), whose average is (5 + 1) / 2 = 3;
slice (1, 4), whose average is (2 + 2 + 5 + 1) / 4 = 2.5.
The goal is to find the starting position of a slice whose average is minimal.

Write a function:

class Solution { public int solution(int[] A); }

that, given a non-empty array A consisting of N integers, returns the starting position of the slice with the minimal average. If there is more than one slice with a minimal average, you should return the smallest starting position of such a slice.

For example, given array A such that:

    A[0] = 4
    A[1] = 2
    A[2] = 2
    A[3] = 5
    A[4] = 1
    A[5] = 5
    A[6] = 8
the function should return 1, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [2..100,000];
each element of array A is an integer within the range [−10,000..10,000].} A 
 */
//O(N)
export default function MinAvgTwoSlice(A) {
    let min = 10001
    let minStart = 0

    for (let i = 0; i < A.length - 1; i++) {
        let temp1 = (A[i] + A[i + 1]) / 2
        if (temp1 < min) {
            min = temp1
            minStart = i
        }

        if (i != A.length - 2) {
            let temp2 = (A[i] + A[i + 1] + A[i + 2]) / 3
            if (temp2 < min) {
                min = temp2
                minStart = i
            }
        }
    }
    return minStart
}

// O(N^2)
// function MinAvgTwoSlice(A) {
//     let pref = prefixSums(A)
//     let minAvg = countTotal(pref, 0, 1) / 2
//     let minStart = 0
//     for (let i = 0; i < A.length; i++) {
//         for (let j = i + 1; j < A.length; j++) {
//             let temp = countTotal(pref, i, j) / (j - i + 1)
//             if (temp < minAvg) {
//                 minAvg = temp
//                 minStart = i
//             }
//         }
//     }

//     return minStart
// }

// function prefixSums(A) {
//     let result = Array(A.length + 1).fill(0)

//     for (let i = 1; i < A.length + 1; i++) {
//         result[i] = result[i - 1] + A[i - 1]
//     }
//     return result
// }

// function countTotal(P, x, y) {
//     let result = P[y + 1] - P[x]
//     return result
// }
