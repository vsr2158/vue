const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods:{
    // Function taking arguments
    add(num){
      this.counter = this.counter + num;
    },
    // Function taking arguments
    reduce(num){
      this.counter = this.counter - num;
    },
    setName(event){
    // mdm input from Javascript
      this.name = event.target.value;
    }
  }
});

app.mount('#events');
