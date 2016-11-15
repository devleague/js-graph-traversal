'use strict';

const Node = require('./graphGenerator');

const BFS = (start) => {
  // initailize the open to be the nodes we are currently exploring
  let open = [];
  open.push(start);

  // Keep track of the nodes we have already visited, so we don't repeat nodes
  let visited_nodes = [start];
  let searched_path = [];

  // Keep checking nodes until our open array is empty
  while (open.length > 0) {

    // Pull the first item off of our queue
    let current = open.shift();

    // Add the current node to our search path stack
    searched_path.push(current);

    //Iterate through all of the neighbors of the current node
    current.neighbors.forEach((next) => {

      // If we haven't already visisted a node, add it to our visisted stack, and add it to our open queue
      if (visited_nodes.indexOf(next) < 0) {
        visited_nodes.push(next);
        open.push(next);
      }
    });
  }

  //Once we have traversed the whole graph - return the search path
  return searched_path;
}

module.exports = BFS;
