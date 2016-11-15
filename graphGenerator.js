// Implement a graph generator that represents a set of objects where some pairs of objects are connected by links.

const Node = function(name, value) {
  this.name = name;
  this.value = value;
  this.neighbors = [];
}

Node.prototype.addNeighbors = function(neighbors) {
  this.neighbors = this.neighbors.concat(neighbors);
  return this.neighbors;
}

Node.prototype.neighbors = function() {
  return this.neighbors;
}

Node.prototype.toString = function() {
  return this.name;
}

module.exports = Node;