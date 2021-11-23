const app = Vue.createApp({
    data(){
        return{
            courseGoal: 'Finish Course Vue!',
            vueLink: 'http://vuejs.org'
        }
    }

});

app.mount('#user-goal')