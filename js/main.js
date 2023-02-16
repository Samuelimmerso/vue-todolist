const app = Vue.createApp({
    data() {
        return {

            todo: [
                {
                    text: "portare a spasso il cane",
                    done: false
                },
                {
                    text: "studiare",
                    done: false
                },
                {
                    text: "aperitivo",
                    done: false
                }

            ]

        }
    }
});

app.mount('#app');
