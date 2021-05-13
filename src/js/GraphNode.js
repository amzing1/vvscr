class GraphNode {
    constructor(args){
        this.nodeId = args.nodeId
        this.nodeName = args.nodeName
        this.nodeType = args.nodeType
        this.nodePosX = args.nodePosX
        this.nodePosY = args.nodePosY
        this.nodeWidth = 150
        this.nodeHeight = 50
        this.nodeState = args.nodeState
        this.inputPins = args.inputPins
        this.outputPins = args.outputPins
    }
    addPin(pin) {
        this.pins.push(pin);
    }
    removePin(pin) {
        let index = 0;
        for(let i=0; i<this.pins.length; i++) {
            if(pin == this.pins[i]){
                index = i;
                break;
            }
        }
        this.pins.splice(index, 1);
    }
}

export default GraphNode