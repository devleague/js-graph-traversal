'use strict';

const Node = require('./graphGenerator');

const DFS = (start, searchFor) => {
    return DFSRecursive(start, searchFor, [], false)
}

const DFSRecursive = (currentNode, searchFor, visitedNodes, nodeFound) =>{
  if(nodeFound){
    return nodeFound;
  }

  if(visitedNodes.indexOf(currentNode.name) === -1){
    visitedNodes.push(currentNode.name);

    if(currentNode.name === searchFor){
      nodeFound = currentNode;
    } else {
      currentNode.getNeighbors().map( n => {
        nodeFound = DFSRecursive(n, searchFor, visitedNodes, nodeFound);
      });
    }
    return nodeFound;
  }
}

module.exports = DFS;
