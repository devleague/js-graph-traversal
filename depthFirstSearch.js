'use strict';

const Node = require('./graphGenerator');

/*
  1  procedure DFS(G,v):
  2      label v as discovered
  3      for all edges from v to w in G.adjacentEdges(v) do
  4          if vertex w is not labeled as discovered then
  5              recursively call DFS(G,w)
 */
const DFS = (start, searchFor) => {
  if (!searchFor || !start) {
    throw new Error('Invalid input');
  }

  //If the node we are searching for
  if (searchFor === start.value) {
    return start;
  }
  let i;
  let child;
  let found;
  let children = start.neighbors;

  // iterate through all of the starting nodes children
  for (i = 0; i < children.length; i++) {
    child = children[i];

    //Recursviely call the child nodes until we find
    found = DFS(child, searchFor);

    // If we find the item we are searching for - return the node
    if(found){
      return found;
    }
  }
  // If we cannot find the node - return false;
  return false;
}

module.exports = DFS;
