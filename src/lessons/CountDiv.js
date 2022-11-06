/**
 * https://app.codility.com/programmers/lessons/5-prefix_sums/count_div/
 * Compute number of integers divisible by k in range [a..b].
 * Write a function:

class Solution { public int solution(int A, int B, int K); }

that, given three integers A, B and K, returns the number of integers within the range [A..B] that are divisible by K, i.e.:

{ i : A ≤ i ≤ B, i mod K = 0 }

For example, for A = 6, B = 11 and K = 2, your function should return 3, because there are three numbers divisible by 2 within the range [6..11], namely 6, 8 and 10.

Write an efficient algorithm for the following assumptions:

A and B are integers within the range [0..2,000,000,000];
K is an integer within the range [1..2,000,000,000];
A ≤ B.
 * @param {*} A 
 * @param {*} B 
 * @param {*} K 
 */

export default function CountDiv(A, B, K) {
    let n = A % K === 0 ? 1 : 0

    return parseInt(B / K) - parseInt(A / K) + n
}
// function CountDiv(A, B, K) {
//     let n = 0

//     for (let i = A; i < B + 1; i++) {
//         if (i % K === 0) {
//             n++
//         }
//     }

//     return n
// }
