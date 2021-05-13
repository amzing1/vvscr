<template>
  <Menu/>
  <UnitBar/>
  <EditPanel/>
  <NodeList/>
</template>

<script>
import 'assets/css/iconfont.js'
import 'js/Graph.js'
import 'js/GraphNode.js'
import 'js/GraphPin.js'
import Menu from 'components/menu.vue'
import UnitBar from 'components/unitBar.vue'
import NodeList from 'components/nodes/nodeList.vue'
import EditPanel from 'components/editPanel/editPanel.vue'


export default {
  name: 'App',
  components: {
    Menu,
    UnitBar,
    EditPanel,
    NodeList
  },
  mounted() {
    let unitBar = document.querySelector('.unitBar')
    let menu = document.querySelector('.menu')
    document.oncontextmenu = () => {return false}
    document.onmousedown = (event) => {
      if(!(unitBar.contains(event.target) || menu.contains(event.target))) {
        unitBar.style.display = 'none'
        menu.style.display = 'none'
      }
    }
    window.addEventListener('scroll', event => {
      this.$store.state.x_scroll = window.pageXOffset
      this.$store.state.y_scroll = window.pageYOffset
    })
  }
}
</script>

<style>
@import url('./assets/css/base.css');
</style>
