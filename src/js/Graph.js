class Graph{
    constructor(nodes) {
        this.graphNodes = nodes
    }
    addNode(node) {
        this.graphNodes.push(node)
    }
    removeNode(node) {
        let index = 0;
        for(let i=0; i<this.graphNodes.length; i++) {
            if(node == this.graphNodes[i]){
                index = i;
                break;
            }
        }
        this.graphNodes.splice(index, 1);
    }
}

export default Graph;