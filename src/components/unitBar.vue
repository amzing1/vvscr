<template>
    <div class="unitBar">
        <input class="search" type="text">
        <span class="searchIcon iconfont">&#xe61d;</span>
        <div class="title">Unit</div>
        <ul class="allType">
            <li v-for="item in allTypes" :key="item">{{item}}
                <span class="right iconfont">&#xe604;</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            allTypes: ['CodeBase', 'Collections', 'Control', 'Events', 'Logic', 'Macros', 'Math', 'Nesting', 'Nulls', 'Time', 'Variables', 'Self']
        }
    }
}
</script>

<style>
    .unitBar {
        display: none;
        position: absolute;
        width: 200px;
        height: 340px;
        background-color: rgb(60,60,60);
        color: #ccc;
    }
    .unitBar .search {
        display: block;
        width: 170px;
        height: 15px;
        border: 1px solid rgb(58,121,187);
        border-radius: 5px;
        margin: 5px 5px;
        background-color: rgb(60,60,60);
        color: #ccc;
        padding-left: 20px;
    }
    .unitBar .searchIcon {
        position: absolute;
        left: 10px;
        top: 7px;
    }
    
    .unitBar .title {
        display: block;
        text-align: center;
        padding: 10px 0;
        font-size: 12px;
        border-bottom: 1px solid #000;
        color: #aaa;
    }
    .unitBar ul li {
        display: block;
        position: relative;
        padding:2px 10px;
        font-size: 14px;
    }
    .unitBar ul li:hover {
        cursor: pointer;
        background-color: rgb(62,95,150);
    }
    .unitBar ul li .right {
        position: absolute;
        top: 5px;
        right: 5px;
    }
    
</style>