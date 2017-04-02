const Node =  class {
  constructor(name, value) {
    this.name = name;
    this.value = value;
    this.neighbors = [];
  }

  addNeighbors(neighbors){
    if(neighbors){
      this.neighbors = this.neighbors.concat(neighbors);
    }

    return this.neighbors;
  }

  getNeighbors(){
    return this.neighbors;
  }
}

module.exports = Node;
