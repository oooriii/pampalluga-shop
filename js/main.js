
var vm = new Vue({
 el: '#vue-app',
 data: {
   articles:[],
 },

 data () {
   return {
     articles:[],
   }
 },
mounted () {
    this.loading = true;
    self = this;
    //
    axios.get('articles.json')
    .then(response => (this.articles = response.data)).
    finally(function(){
      self.loading=false;

      console.log(self.data);

    });

},
});

/*
var vm = new Vue({
 el: '#vue-header',
 data: {
   isActiveBurger: false,
   loadingBtn: false,
   message: {
     missatge: '',
     status: '',
   },
 },

 methods:{
   // generals
   toggleBurger: function(){
       this.isActiveBurger = !this.isActiveBurger;
       //console.log('toggle');
   },
 },

});
*/
