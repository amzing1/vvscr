import { createStore } from 'vuex'
import GraphNode from 'js/GraphNode'

export default createStore({
  state: {
    x_scroll: 0,
    y_scroll: 0,
    nodeList: [],
    currentNode: null,
    lineList: [],
    currentLine: null,
    currentOutPin: null
  },
  mutations: {
    createNode(state, mess){
      let testMess = {
        nodeId: '2021',
        nodeName: 'xixi',
        nodeType: 'Control',
        nodePosX: 800,
        nodePosY: 200,
        nodeWidth: 150,
        nodeHeight: 120,
        nodeState: 'edit',
        inputPins: [
          {
            pinId: '20210',
            pinName: '',
            linkedTo: [],
            value: 'self',
            priority: 0,
            pinType: 'event'
          },
          {
            pinId: '20211',
            pinName: 'target',
            linkedTo: [],
            value: 'self',
            priority: 1,
            pinType: 'number'
          },
          {
            pinId: '20212',
            pinName: 'target',
            linkedTo: [],
            value: 'self',
            priority: 1,
            pinType: 'number'
          },
          {
            pinId: '20213',
            pinName: 'target',
            linkedTo: [],
            value: 'self',
            priority: 1,
            pinType: 'number'
          }
        ],
        outputPins: [
          {
            pinId: '10210',
            pinName: 'target',
            linkedTo: [],
            value: 'self',
            priority: 0,
            pinType: 'event'
          }
        ]
      }
      const node = new GraphNode(testMess)
      state.currentNode = node
      state.nodeList.push(node)
      
    },
    createLine(state, argObj) {
      const {lineStart, lineEnd, options, pin} = argObj
      console.log(this.pin)
      const line = new LeaderLine(lineStart, lineEnd, options);
      line.type = pin.pinType;
      line.findEnd = true;
      state.lineList.push(line);
      state.currentLine = line;
      // state.currentOutPin = 
    },
    indicateNodeSelected(state){
      state.nodeList.map( node => node.element.style.border = 'none')
      state.currentNode.element.style.border = '2px solid rgb(48,116,174)'
    }
  },
  actions: {
  },
  modules: {
  }
})
