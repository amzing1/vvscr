<template>
  <div class="leftIcon">
    <svg class="icon" aria-hidden="true">
      <use :xlink:href=icon></use>
    </svg>
  </div>
</template>


<script>
export default {
    props: {
        icon: String
    }
};
</script>

<style>
.leftIcon {
    position: absolute;
    left: 5px;
}
</style>