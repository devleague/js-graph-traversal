'use strict';

const Node = require('./graphGenerator');

const BFS = (start) => {
  let queue = [start];
  let visitedNodes = [];
  while(queue.length){
    let currentNode = queue.shift();
    if(visitedNodes.indexOf(currentNode.name) === -1){
      visitedNodes.push(currentNode.name);
    }

    currentNode.getNeighbors().map(n => queue.push(n));
  }

  return visitedNodes;
}

module.exports = BFS;
