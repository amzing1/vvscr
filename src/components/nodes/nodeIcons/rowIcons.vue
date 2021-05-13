<template>
  <div class="rowIcons">
    <LeftIcon :icon="leftIcon" />
    <RightIcon :icon="rightIcon" />
    <InputIcon :icon="inputIcon" :type="inputType" :pin="inputPin" />
    <OutputIcon :icon="outputIcon" :type="outputType" :pin="outputPin" :nodeMove="nodeMove" />
    <Attribute
      v-if="input.pinName"
      :name="input.pinName"
      :value="input.value"
      :index=index
    />
  </div>
</template>


<script>
import LeftIcon from "nodes/nodeIcons/leftIcon.vue";
import RightIcon from "nodes/nodeIcons/rightIcon.vue";
import InputIcon from "nodes/nodeIcons/inputIcon.vue";
import OutputIcon from "nodes/nodeIcons/outputIcon.vue";
import Attribute from "nodes/nodeIcons/attribute.vue";
export default {
  props: {
    input: Object,
    output: Object,
    index: Number,
    nodeMove: Boolean,
  },
  computed: {
    inputIcon() {
      if (this.input)
        return this.input.pinType == "event"
          ? "#icon-bofangsanjiaoxing"
          : "#icon-yuanxingweixuanzhong";
    },
    leftIcon() {
      if (this.input)
        return this.input.pinType == "event"
          ? "#icon-V"
          : "#icon-yuanxingweixuanzhong";
    },
    outputIcon() {
      if (this.output)
        return this.output.pinType == "event"
          ? "#icon-bofangsanjiaoxing"
          : "#icon-yuanxingweixuanzhong";
    },
    rightIcon() {
      if (this.output)
        return this.output.pinType == "event"
          ? "#icon-V"
          : "#icon-yuanxingweixuanzhong";
    },
    inputType() {
      if(this.input){
        return this.input.pinType
      }
    },
    outputType() {
      if(this.output) {
        return this.output.pinType
      }
    },
    inputPin() {
      if(this.input) {
        return this.input
      }
    },
    outputPin() {
      if(this.output) {
        return this.output
      }
    }
  },
  components: {
    LeftIcon,
    RightIcon,
    InputIcon,
    OutputIcon,
    Attribute,
  },
};
</script>

<style>
</style>