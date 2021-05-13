<template>
    <div class="nodelist">
        <ul>
            <li v-for="node in nodes" :key="node">
                <Node :nodeContent=node />
            </li>
        </ul>
    </div>
</template>

<script>
import Node from 'nodes/node.vue'
export default {
    data() {
        return {
            nodes: this.$store.state.nodeList
        }
    },
    components: {
        Node
    }
}
</script>

<style>
    /* .nodelist {
        position: fixed;
        left: 20%;
        top: 0;
        background-color: #666;
    } */
</style>