const app = Vue.createApp({
    data(){
        return{
            text: '',
            textEnter: ''
        };
    },
    methods:{
        altDown(){
            alert('Alert-KeyDown')
        },
        altUp(){
            alert('Alert-KeyUp')
        },
        dataText(event){
            this.text = event.target.value;
        },
        dataEnter(event){
            this.textEnter = event.target.value;
        }
    },
})
app.mount('#assignment')