const chai = require('chai');
const expect = chai.expect;

const Node = require('../graphGenerator');
const BFS = require('../breadthFirstSearch');
const DFS = require('../depthFirstSearch');

describe('Graph Generator', () => {
  beforeEach(() => {
    let A = new Node("A", "Joe");
    let B = new Node("B", "Jon");
    let C = new Node("C", "Ray");
    let D = new Node("D", "JSON");
    let E = new Node("E", "Marifel");
    let F = new Node("F", "Nigel");
  });

  it('should be a function that exists', () => {
    expect(Node).to.exist;
    expect(Node).to.be.a('function');
  });
  it('Creating a new Node should return an object', () => {
    expect(A).to.exist;
    expect(A).to.be.an('object');
  });
  it('Node should have a property `name`', () => {
    expect(A.name).to.exist;
    expect(B.name).to.exist;
    expect(C.name).to.exist;
    expect(A.name).to.equal('A');
    expect(B.name).to.equal('B');
    expect(C.name).to.equal('C');
  });
  it('Node should have a property `value`', () => {
    expect(A.value).to.exist;
    expect(B.value).to.exist;
    expect(C.value).to.exist;
    expect(A.value).to.equal('Joe');
    expect(B.value).to.equal('Jon');
    expect(C.value).to.equal('Ray');
  });
  it('Node should have a property `neighbors`', () => {
    expect(A.neighbors).to.exist;
    expect(B.neighbors).to.exist;
    expect(C.neighbors).to.exist;
    expect(A.neighbors).to.be.an('Array');
    expect(B.neighbors).to.be.an('Array');
    expect(C.neighbors).to.be.an('Array');
  });
  it('Node should have a method `addNeighbors`', () => {
    expect(A.addNeighbors()).to.exist;
    expect(B.addNeighbors()).to.exist;
    expect(C.addNeighbors()).to.exist;
  });
  it('Node `neighbors` should refernce other neighbors', () => {
    A.addNeighbors([B, C]);
    B.addNeighbors([D, E]);
    C.addNeighbors([F]);
    expect(A.neighbors[0].name).to.equal('B');
    expect(A.neighbors[0].value).to.equal('Jon');
    expect(A.neighbors[0].neighbors[0].name).to.equal('D');
    expect(A.neighbors[1].name).to.equal('C');
    expect(A.neighbors[1].value).to.equal('Ray');
    expect(A.neighbors[1].neighbors[0].name).to.equal('F');
    expect(B.neighbors[0].name).to.equal('D');
    expect(B.neighbors[0].value).to.equal('JSON');
    expect(B.neighbors[0].neighbors).to.deep.equal([]);
    expect(B.neighbors[1].name).to.equal('E');
    expect(B.neighbors[1].value).to.equal('Marifel');
    expect(B.neighbors[1].neighbors).to.deep.equal([]);
  });
});

describe('Depth First Search', () => {
  beforeEach(() => {
    let A = new Node("A", "Joe");
    let B = new Node("B", "Jon");
    let C = new Node("C", "Ray");
    let D = new Node("D", "JSON");
    let E = new Node("E", "Marifel");
    let F = new Node("F", "Nigel");
    A.addNeighbors([B, C]);
    B.addNeighbors([D, E]);
    C.addNeighbors([F]);
  });

  it('should be a function that exists', () => {
    expect(DFS).to.exist;
    expect(DFS).to.be.a('function');
  });
  it('should return the name of the node with the value stored in it', () => {
    expect(DFS(A, "JSON").name).to.equal("D");
    expect(DFS(A, "Nigel").name).to.equal("F");
    expect(DFS(B, "Marifel").name).to.equal("E");
  });
  it('should return false if it cant find the value in the graph', () => {
    expect(DFS(F, "Joe")).to.equal(false);
    expect(DFS(E, "Joe")).to.equal(false);
  });
});

describe('Breadth First Search', () => {
  beforeEach(() => {
    let A = new Node("A", "Joe");
    let B = new Node("B", "Jon");
    let C = new Node("C", "Ray");
    let D = new Node("D", "JSON");
    let E = new Node("E", "Marifel");
    let F = new Node("F", "Nigel");
    A.addNeighbors([B, C]);
    B.addNeighbors([D, E]);
    C.addNeighbors([F]);
  });

  it('should be a function that exists', () => {
    expect(BFS).to.exist;
    expect(BFS).to.be.a('function');
  });
  it('should return the traversal path from the starting point all the way to the end', () => {
    expect(BFS(A)).to.equal("[A,B,C,D,E,F]");
    expect(BFS(B)).to.equal("[B,D,E]");
    expect(BFS(C)).to.equal("[C,F]");
    expect(BFS(D)).to.equal("[D]");
    expect(BFS(E)).to.equal("[E]");
    expect(BFS(F)).to.equal("[F]");
  });
});
