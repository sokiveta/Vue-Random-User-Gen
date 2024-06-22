// using Vue object will allow us to use the Vue methods, like createApp()
const app = Vue.createApp({
  // data() is a function that returns an object
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@gmail.com',
      gender: 'male',
      picture: 'https://randomuser.me/api/portraits/men/10.jpg',
    };
  },
  methods: {
    // create new methods, like getUser(), which can be called by using v-on:click="getUser" on a button
    async getUser() {
      // fetch api
      const res = await fetch('https://randomuser.me/api');
      // deconstruct promised results
      const { results } = await res.json();
      // assign method parameters
      this.firstName = results[0].name.first;
      this.lastName = results[0].name.last;
      this.email = results[0].email;
      this.gender = results[0].gender;
      this.picture = results[0].picture.large;
    },
  },
});
// use mount() method to #app selector
app.mount('#app');
