<template>
  <div class="node" @mousedown="startMove" @mouseup="stopMove" ref="node">
    <div class="head">
      <div class="icon iconfont">&#xe7f3;</div>
      <div class="name">
        <p ref="nodeName">Update</p>
        <p ref="nodeType">Event</p>
      </div>
    </div>
    <div class="content">
      <ul>
        <li v-for="(item, index) in muchPins" :key="item.id">
          <RowIcons
            :input="nodeContent.inputPins[index]"
            :output="nodeContent.outputPins[index]"
            :index="index"
            :nodeMove="canMove"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import RowIcons from "nodes/nodeIcons/rowIcons.vue";
export default {
  props: {
    nodeContent: Object,
  },
  computed: {
    muchPins() {
      return this.nodeContent.inputPins.length >=
        this.nodeContent.outputPins.length
        ? this.nodeContent.inputPins
        : this.nodeContent.outputPins;
    },
  },
  data() {
    return {
      canMove: false,
      cursorInNode: { x: 0, y: 0 },
    };
  },
  components: {
    RowIcons,
  },
  methods: {
    startMove(event) {
      this.$store.state.currentNode = this.nodeContent;
      this.indicateSelected();
      this.canMove = true;
      let rect = this.$refs.node.getBoundingClientRect();
      let left = rect.left;
      let top = rect.top;
      this.cursorInNode.x = event.clientX - left;
      this.cursorInNode.y = event.clientY - top;
    },
    stopMove() {
      this.canMove = false;
    },
    createNodeStyle() {
      this.$refs.node.style.height =
        this.nodeContent.nodeHeight + this.muchPins.length * 20 + 10 + "px";
      this.$refs.node.style.width = this.nodeContent.nodeWidth + "px";
      this.$refs.node.style.top = this.nodeContent.nodePosY + "px";
      this.$refs.node.style.left = this.nodeContent.nodePosX + "px";
      this.$refs.nodeName.innerHTML = this.nodeContent.nodeName;
      this.$refs.nodeType.innerHTML = this.nodeContent.nodeType;
    },
    indicateSelected() {
      this.$store.commit("indicateNodeSelected");
    },
  },
  mounted() {
    this.$store.state.currentNode.element = this.$refs.node;
    this.indicateSelected();
    this.createNodeStyle();
    window.addEventListener("mousemove", (event) => {
      if (this.canMove) {
        let x = event.clientX;
        let y = event.clientY;
        let oldX = this.$refs.node.getBoundingClientRect().left;
        let oldY = this.$refs.node.getBoundingClientRect().top;
        console.log("x-oldX", x - this.cursorInNode.x - oldX);
        if (x - this.cursorInNode.x - oldX > 0 && x > window.innerWidth - 100) {
          this.$store.state.x_scroll += 10;
          window.scroll(this.$store.state.x_scroll, this.$store.state.y_scroll);
        } else if (
          x - this.cursorInNode.x - oldX < 0 &&
          x <= window.innerWidth * 0.2 + 100
        ) {
          this.$store.state.x_scroll -= 10;
          window.scroll(this.$store.state.x_scroll, this.$store.state.y_scroll);
        } else if (
          y - this.cursorInNode.y - oldY > 0 &&
          y > window.innerHeight - 100
        ) {
          this.$store.state.y_scroll += 10;
          window.scroll(this.$store.state.x_scroll, this.$store.state.y_scroll);
        } else if (y - this.cursorInNode.y - oldY < 0 && y < 100) {
          this.$store.state.y_scroll -= 10;
          window.scroll(this.$store.state.x_scroll, this.$store.state.y_scroll);
        }
        this.$refs.node.style.left = `${
          x - this.cursorInNode.x + this.$store.state.x_scroll
        }px`;
        
        this.$refs.node.style.top = `${
          y - this.cursorInNode.y - this.$store.state.y_scroll
        }px`;
      }
    });
  },
};
</script>

<style>
.node {
  position: absolute;
  width: 150px;
  height: 120px;
  background-color: rgb(60, 60, 60);
  border-radius: 5px;
  color: #eee;
  margin: 0 auto;
}
.node .head {
  height: 42px;
  background-color: rgb(94, 99, 105);
  border-radius: 5px 5px 0 0;
}
.node .head .icon {
  float: left;
  width: 35%;
  font-size: 30px;
  text-align: center;
  color: aqua;
  padding-top: 5px;
}
.node .head .name {
  float: left;
  padding-left: 5%;
  width: 60%;
  font-size: 14px;
}
.node .content li {
  position: relative;
  height: 12px;
  padding: 5px 5px;
  color: #ccc;
}
.node .content li .mess {
  position: absolute;
}
.node .content li .left {
  left: 5px;
}
.node .content li .right {
  right: 5px;
}
.node .content li .outLeft {
  left: -20px;
}
.node .content li .outRight {
  right: -20px;
}
</style>