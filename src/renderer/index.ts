import Vue from "vue";
import App from "./App.vue"
// @ts-ignore
import * as AsyncComputed from "vue-async-computed";

// @ts-ignore
Vue.use(AsyncComputed);

new Vue({
    el: '#app',
    created: function () {
        window.addEventListener("keyup", this.keyup)
    },
    methods: {
        keyup: function (event: any) {
            switch (event.key) {
                case "ArrowDown":
                    this.$root.$emit("navDown");
                    break;
                case "ArrowUp":
                    this.$root.$emit("navUp");
                    break;
                case "ArrowLeft":
                    this.$root.$emit("navLeft");
                    break;
                case "ArrowRight":
                    this.$root.$emit("navRight");
                    break;
                case "Enter":
                    this.$root.$emit("enter");
                    break;
            }
        }
    },
    render: h => h(App),
});