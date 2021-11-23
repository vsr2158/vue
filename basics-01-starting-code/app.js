const app = Vue.createApp({
    data(){
        return{
            courseGoalA: 'Finish Course Vue - A !',
            courseGoalB: 'Finish Course Vue - B !',
            vueLink: 'http://vuejs.org'
        }
    },
    methods: {
        outputGoal(){
            const randomNumber = Math.random();
            if (randomNumber < 0.5 ){
                return 'Learn Vue!';
            }
            else {
                return 'Master Vue!';
            }
            },
        outputData(){
            const randomNumber = Math.random();
            if (randomNumber < 0.5 ){
                return this.courseGoalA;
            }
            else {
                return this.courseGoalB;
            }
            }            
        }
}
);
app.mount('#user-goal')