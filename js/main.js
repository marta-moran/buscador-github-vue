const API = "https://api.github.com/users/";



const app = Vue.createApp({
    data() {
        return {
            //message: "Hello Vue!",
            search: null,
            result: null,
            error: null
        };
    },
    methods: {
        async doSearch() {
            this.result = this.error = null;
            try {
                const response = await fetch(API + this.search);
                if (!response.ok) throw new Error ("User not found")
                const data = await response.json()
                console.log(data)
                this.result = data;

            } catch (error) {
                this.error = error
            } finally {
                this.search = null;
            }
        }
    }
});