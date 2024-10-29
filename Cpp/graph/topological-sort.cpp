#include <algorithm>
#include <iostream>
#include <vector>

/*
Problem Link: https://cses.fi/problemset/task/1679/

Problem Description:
Given a graph with $n$ vertices and $m$ edges, find
the topological sort of the graph.

Input Format:
First line: $n m$ (n vertices and m edges)
Next m lines: $u v$ (there's an edge u -> v)

Output Format:
Output $n$ integers in one line: the order of
topological sort.

Constraints:
- $1 \leq u, v \leq n$

Time Complexity:
$O(n + m)$
*/

int main() {
    std::ios::sync_with_stdio(false);
    std::cin.tie(0);

    int n, m;
    std::cin >> n >> m;
    std::vector<std::vector<int>> g(n);
    for(int i = 0; i < m; i++) {
        int u, v;
        std::cin >> u >> v;
        u--, v--;
        g[u].push_back(v);
    }

    std::vector<bool> vis(n);
    std::vector<int> order;
    order.reserve(n);

    auto dfs = [&](auto&& self, int u) -> void {
        vis[u] = true;
        for(int v : g[u]) {
            if(!vis[v]) {
                self(self, v);
            }
        }
        order.push_back(u);
    };
    
    for(int i = 0; i < n; i++) {
        if(!vis[i]) {
            dfs(dfs, i);
        }
    }

    std::reverse(order.begin(), order.end());

    for(int x : order) {
        std::cout << x + 1 << " \n"[x == order.back()];
    }

    return 0;
}
