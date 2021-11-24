const app = Vue.createApp({
    data(){
        return{
            yourName: 'VSR',
            yourAge: 42,
            image: "http://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
        }
    },
    methods: {
        yourAgePlus5(){
            let y5 = this.yourAge + 5;
            return y5;
            },
        yourFav(){
            return Math.random();
            }            
        }
}
);
app.mount('#assignment')