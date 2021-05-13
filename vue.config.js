module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                assets: "@/assets",
                components: "@/components",
                nodes: "@/components/nodes",
                editPanel: "@/components/editPanel",
                js: "@/js",
            }
        }
    }
};