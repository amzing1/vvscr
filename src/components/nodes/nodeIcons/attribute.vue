<template>
  <div class="attribute">
    <span>{{ name }}</span>
    <input
      type="text"
      @keydown="changeWidth"
      @blur="changAttrValue"
      ref="inp"
    />
    <!-- <input type="text">
        <input type="text"> -->
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    value: String,
    index: Number,
  },
  methods: {
    changeWidth() {
      const width = this.$refs.inp.value.length;
      if (width > 2) {
        this.$refs.inp.style.width = 20 + (width - 3) * 10 + "px";
        this.$store.state.currentNode.element.style.width =
          150 + (width - 3) * 10 + "px";
      }
    },
    changeAttrValue() {
      this.$store.state.currentNode.inputPins[this.index].value = this.$refs.inp.value
    }
  },
  mounted() {
    this.$refs.inp.value = this.$store.state.currentNode.inputPins[this.index].value
  }
};
</script>

<style>
.attribute {
  display: inline;
  padding: 5px 5px 5px 20px;
  font-size: 8px;
}
.attribute input {
  display: inline;
  width: 25px;
  height: 20px;
  max-width: 60px;
  margin-left: 3px;
  color: #ccc;
  font-size: 5px;
  line-height: 20px;
  text-align: center;
  background-color: rgb(42, 42, 42);
  border-radius: 5px;
}
</style>