# Graph Traversal - An Intro to Depth and Breadth First Search

We will be creating three modules:
1. A **Graph Generator** module that helps us generate a **graph data structure**.
  1.  A **Graph** is a data structure that contains **nodes**
  1. **Nodes** are connected to each other via edges
1. A **Depth-first Search** (DFS) module that takes a **graph** and traverses it depth-first.
1. A **Breadth-first Search** (BFS) module that takes a **graph** and traverses it breadth-first.

## Graph data structure example
      A
      ^
     B C
     ^ |
    D E F

Is represented in memory as:

    { name: 'A',
      value: 'foo1',
      neighbors: [
        { name: 'B',
          value: 'foo2',
          neighbors: [
            { name: 'D',
              value: 'foo4',
              neighbors: []
            },
            { name: 'E',
              value: 'foo5',
              neighbors: []
            }
          ]
        },
        { name: 'C',
          value: 'foo3',
          neighbors: [
            { name: 'F',
              value: 'foo6',
              neighbors: []
            }
          ]
        }
      ]
    }

## Graph Methods
The basic operations provided by a graph data structure usually include:

1. `adjacent(G, x, y)`: tests whether there is an edge from the vertices x to y;
neighbors(G, x): lists all vertices such that there is an edge from the vertices x to y;
1. `add_vertex(G, x)`: adds the vertex x, if it is not there;
1. `remove_vertex(G, x)`: removes the vertex x, if it is there;
1. `add_edge(G, x, y)`: adds the edge from the vertices x to y, if it is not there;
1. `remove_edge(G, x, y)`: removes the edge from the vertices x to y, if it is there;
1. `get_vertex_value(G, x)`: returns the value associated with the vertex x;
1. `set_vertex_value(G, x, v)`: sets the value associated with the vertex x to v.


## Depth-first Search Methods
The basic operations provided by a Depth-first Search usually include:

1. `DFS(start, searchFor)`: Starting at the node `start` traverse the graph depth-first and return the value at the `node` whos key matches `searchFor`. If there are no matches, return `false`.


## Breadth-first Search Methods
1. `BFS(start, searchFor)`: Starting at the node `start` traverse the graph breadth-first and return an array of the shortest path between `start` and the node `searchFor`. If there are no matches, return `false`.

### Stretch Goals
1. Write a blog post ELI5 explaining the differences between depth and breadth-first Search.
  1. Write Pseudocode for each implementation
  1. Explain the Big O notation for each method
  1. Provide examples of when you would favor one graph traversal algorithm over the other.
1. Write Tests using `Mocha` and `Chai`.
1. Implement a **Queue Module** for **Breadth-first search.**
1. Implement a **Stack Module** for **Depth-first search.**
1. Write a recursive and non-recursive implementation of BFS and DFS.
1. Visualize each method in the DOM.

# Additional Resources

#### Graph
- Link: [Graph (Abstract Data Type)](https://en.wikipedia.org/wiki/Graph_(abstract_data_type))
- Concepts: *Graph Node*, *Graph theory*, *search* and *depth first search*

#### Depth First Search
- Link: [Depth First Search](https://en.wikipedia.org/wiki/Depth-first_search)
- Concepts: *Graph Node*, *Graph theory*, *search* and *depth first search*

#### Breadth First Search
- Link: [Breadth First Search](https://en.wikipedia.org/wiki/Breadth-first_search)
- Concepts: *Graph Node*, *Graph theory*, *search* and *breadth first search*

#### Graph Traversal Algorithms Implemented in JavaScript
- Link: [Graph Traversal Algorithms Implemented in JavaScript](https://github.com/JoeKarlsson1/data-structures/tree/master/search-algorithms)
- Concepts: *Graph Node*, *Graph theory*, *search* and *breadth first search*

https://github.com/devleague/DevLeague-Modules/blob/master/-Algorithms/Search/searchAssignment.md