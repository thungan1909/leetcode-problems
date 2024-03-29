# Least Number of Unique Integers after K Removals

- **Link problem:** [Least Number of Unique Integers after K Removals](https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/)
- **Difficulty:** Medium
- **Topic:** Array, Hash Table, Greedy, Sorting, Counting

## Problem Statement

Given an array of integers `arr` and an integer `k`, find the least number of unique integers after removing exactly `k` elements.

## Example

- **Input:** `arr = [5,5,4], k = 1`
- **Output:** `2`
- **Explanation:** Remove the single 4, only 5 is left.

## Example 2:

- **Input:** `arr = [4,3,1,1,3,3,2], k = 3`
- **Output:** `2`
- **Explanation:** Remove 4, 2, and either one of the two 1s or three 3s. 1 and 3 will be left.

## Constraints

- `1 <= arr.length <= 10^5`
- `1 <= arr[i] <= 10^9`
- `0 <= k <= arr.length`

## Implementation

You can find the implementation in [JavaScript Solution](solution.js) or in [Leetcode solution](https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/solutions/4736282/beats-97-44-of-users-with-javascript-least-number-of-unique-integers-after-k-removals/)
