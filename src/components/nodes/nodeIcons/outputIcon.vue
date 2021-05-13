<template>
  <div class="outputIcon" @mousedown="canCreateLine">
    <svg class="icon" aria-hidden="true" ref="lineStart">
      <use :xlink:href="icon"></use>
    </svg>
    <div class="lineEnd" ref="lineEnd"></div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      canLine: false,
      line: null,
      node: Object,
    };
  },
  props: {
    icon: String,
    type: String,
    nodeMove: Boolean,
    pin: Object
  },
  methods: {
    canCreateLine(event) {
      event.stopPropagation();
      this.$store.state.currentNode = this.node
      this.$store.commit('indicateNodeSelected')
      this.canLine = true;
      this.$refs.lineEnd.style.display = "block";
      const lineStart = this.$refs.lineStart;
      const lineEnd = this.$refs.lineEnd;
      const options = {
        color: "rgb(163,163,163)",
        size: 4,
        endSocket: "left",
      };
      const pin = this.pin;
      this.$store.commit("createLine", { lineStart, lineEnd, options, pin });
    },
  },
  mounted() {
    console.log(this.pin)
    this.node = this.$store.state.currentNode
    window.addEventListener("mousemove", (event) => {
      if (this.canLine) {
        this.$refs.lineEnd.style.top = event.clientY + "px";
        this.$refs.lineEnd.style.left = event.clientX + "px";
        this.$store.state.currentLine.position();
      }
      if (this.$store.state.currentLine && this.nodeMove) {
        this.$store.state.currentLine.position();
      }
    });
    window.addEventListener("mouseup", (event) => {
      this.canLine = false;
    });
  },
};
</script>

<style>
.outputIcon {
  position: absolute;
  right: -20px;
}
.lineEnd {
  display: none;
  position: fixed;
  width: 20px;
  height: 20px;
  background-color: transparent;
}
</style>