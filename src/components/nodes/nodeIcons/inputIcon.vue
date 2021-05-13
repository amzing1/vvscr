<template>
  <div class="inputIcon" @mouseenter="canLineEnd" @mouseleave="notLineEnd" ref="inputIcon">
    <svg class="icon" aria-hidden="true">
      <use :xlink:href="icon"></use>
    </svg>
  </div>
</template>


<script>
export default {
  data() {
    return {
      canEnd: false,
    };
  },
  props: {
    icon: String,
    type: String,
    pin: Object
  },
  methods: {
    canLineEnd() {
      console.log(this.$store.state.currentLine)
      console.log(this.type)
      if(this.$store.state.currentLine && this.$store.state.currentLine.type == this.type)
        this.canEnd = true;
      
    },
    notLineEnd() {
      this.canEnd = false;
    },
  },
  mounted() {
    window.addEventListener('mouseup', event => {
      if(event.button == 0 && this.canEnd && this.$store.state.currentLine && this.$store.state.currentLine.findEnd ){
        console.log('input mouseup')
        this.$store.state.currentLine.end = this.$refs.inputIcon
        // this.$store.state.currentLine.findEnd = false
      }
    })
  }
};
</script>

<style>
.inputIcon {
  position: absolute;
  left: -20px;
}
</style>