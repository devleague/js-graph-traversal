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
      B   C
      ^   |
     D E  F

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

1. Define a `Node` class that has a `name {{string}}`, `value{{}}`, and `neighbors{{array}}`
1. `Node.addNeighbors([x {{node}}, y {{node}}, z {{node}} ...])`: adds an array of nodes x, y, z to `node`.
1. `Node.adjacent(x {{node}}, y {{node}})`: tests whether there is an edge from the vertices x to y.
1. `Node.neighbors(x {{node}})`: lists all vertices such that there is an edge from the vertices x to y.
1. [Optional] `Node.removeNode(x {{node}})`: removes the vertex x, if it is there.

Using these example methods, you should be able to make the graph above like the following:

    A = new Node("A")
    B = new Node("B")
    C = new Node("C")
    D = new Node("D")
    E = new Node("E")
    F = new Node("F")
    A.neighbors = [B, C]
    B.neighbors = [D, E]
    C.neighbors = [F]
    D.neighbors = []
    E.neighbors = []
    F.neighbors = []

## Depth-first Search Methods
The basic operations provided by a Depth-first Search usually include:

1. `DFS(start, searchFor)`: Starting at the node `start` traverse the graph depth-first and return the value at the `node` whos key matches `searchFor`. If there are no matches, return `false`.


## Breadth-first Search Methods
1. `BFS(start, searchFor)`: Starting at the node `start` traverse the graph breadth-first and return an array of the shortest path between `start` and the node `searchFor`. If there are no matches, return `false`.

### Stretch Goals
1. Write a blog post ELI5 the differences between depth and breadth-first Search.
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
