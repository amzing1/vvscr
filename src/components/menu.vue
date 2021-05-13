<template>
  <div class="menu">
    <ul>
      <li @click="showUnit">add unit ...</li>
      <li>copy section</li>
      <li>cut section</li>
      <li>duplicate section</li>
      <li>delete section</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Menu",
  methods: {
      showUnit(event) {
          let unitBar = document.querySelector('.unitBar')
          let menu = document.querySelector('.menu')
          menu.style.display = 'none'
          unitBar.style.display = 'block'
          unitBar.style.top = event.clientY + 'px'
          unitBar.style.left = event.clientX + 'px'
          //to del
          this.$store.commit('createNode', {})
      }
  },
  mounted() {
    let menu = document.querySelector(".menu")
    window.addEventListener("mousedown", (event) => {
      if (event.button == 2) {
        menu.style.display = "block"
        menu.style.top = event.clientY + "px"
        menu.style.left = event.clientX + "px"
      } 
    });
  },
};
</script>

<style>
.menu {
  position: absolute;
  width: 200px;
  height: 150px;
  background-color: rgb(144, 144, 144);
  color: #333;
  display: none;
}
.menu li {
  display: block;
  padding: 5px 10px;
}
.menu li:hover {
  cursor: pointer;
  background-color: rgb(80,110,180);
}
</style>