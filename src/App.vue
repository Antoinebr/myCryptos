<template>
  <div id="app">

    <md-toolbar>
      <h1 class="md-title head-title">My cryptos</h1>
    </md-toolbar>


    <main class="container u-pln u-prn">

      <coin  v-for="(crypto,index) in cryptos" :crypto="crypto" :key="index"></coin>

    </main>
  
  
  </div>
</template>

<script>

import coin from './components/coin.vue';

export default {
  name: 'app',
  components: {coin},
  data(){
    return {
       cryptos : [],
    }
  },

  methods:{

   getCrypto(crypto){
  
      fetch(`https://api.cryptonator.com/api/ticker/${crypto}-EUR`)
        .then( (response) => response.json() )
        .then( (res) => {
            
            let index = Helpers.findIndexInData(this.myInvest,'name',res.ticker.base);

            res.valorisation = Math.round( (res.ticker.price * this.myInvest[index].amount) ,1);

            res.profit = Math.round( ( (res.ticker.price * this.myInvest[index].amount) - this.myInvest[index].value  ) ,1);

            res.logo = this.myInvest[index].logo;

            this.cryptos.push(res);
 
        })
        .catch((err) => console.log(err) );

    }
  },
  created(){

      this.myInvest = myInvests;

      this.myInvest.forEach( invest => this.getCrypto(invest.name) );

  }

}
</script>

<style>
  @import '//fonts.googleapis.com/icon?family=Material+Icons';
  @import '../assets/css/app.css'; 

  .card-icon .md-title{
    font-size: 19px;
  }

  .md-list-item .md-list-item-container {
     min-height: 37px;
  }

  .head-title{
    color: #FFF;
  }

</style>