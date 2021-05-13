<template>
  <div class="rightIcon">
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
.rightIcon {
    position: absolute;
    right: 5px;
}
</style>