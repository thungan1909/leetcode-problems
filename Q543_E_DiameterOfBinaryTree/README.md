# Diameter of Binary Tree

- **Link problem:** [Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree)
- **Difficulty:** Easy
- **Topic:** Tree, Depth-First Search, Binary Tree

## Problem Statement

Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them.

## Example 1:

![Alt text](diamtree.jpg)

- **Input:** `root = [1,2,3,4,5]`
- **Output:** `3`
- **Explanation:** `3 is the length of the path [4,2,1,3] or [5,2,1,3].`

## Example 2:

- **Input:** `root = [1,2]`
- **Output:** `1`

## Constraints

- `The number of nodes in the tree is in the range [1, 104].`
- `-100 <= Node.val <= 100`

## Implementation

You can find the implementation in [JavaScript Solution](solution.js) or in [Leetcode solution](https://leetcode.com/problems/diameter-of-binary-tree/solutions/4788619/very-simple-javascript-solution-using-dfs/)
