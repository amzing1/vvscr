class GraphPin{
    constructor(args) {
        this.pinId = args.pinId
        this.pinName = args.pinName
        this.linkedTo = args.linkedTo
        this.pinType = args.pinType
        this.value = args.value
        this.priority = args.priority
    }

    makeLineTo(pin) {
        this.linkedTo.push(pin)
    }

    breakAllPinLinks() {
        this.linkedTo.splice(0, this.linkedTo.length)
    }

    breakLinkTo(pin) {
        let index = 0;
        for(let i=0; i<this.linkedTo.length; i++) {
            if(pin == this.linkedTo[i]){
                index = i;
                break;
            }
        }
        this.linkedTo.splice(index, 1);
    }
}

export default GraphPin