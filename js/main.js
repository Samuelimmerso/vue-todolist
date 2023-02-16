const app = Vue.createApp({
    data() {
        return {

            todo: [
                {
                    text: "portare a spasso il cane",
                    done: false,
                    content: "X",

                },
                {
                    text: "studiare",
                    done: true,
                    content: 'V'

                },
                {
                    text: "aperitivo",
                    done: false,
                    content: "X"
                }
            ]

        }
    },

    methods: {
        eventChecked(i) {
            if (!this.todo[i].done) {
                this.todo[i].done = true;
                this.todo[i].content = "V"
            }
        }
    }
});

app.mount('#app');
