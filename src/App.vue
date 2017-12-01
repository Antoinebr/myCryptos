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
       logos : {
         btc : "https://cdn.worldvectorlogo.com/logos/bitcoin.svg",
         dash : 'https://cdn.worldvectorlogo.com/logos/dash-3.svg'
       },
        myInvest:{
          btc:{
             amount: 0.01185247,
             value: 100,
          },
          dash:{
            amount: 0.0792+0.2969,
            value: 50+200
          }
        }
    }
  },

  methods:{

   getCrypto(crypto){
  
      fetch(`https://api.cryptonator.com/api/ticker/${crypto}-EUR`)
        .then( (response) => response.json() )
        .then( (res) => {
            
            if( res.ticker.base === "BTC" ){
              res.ticker.invest = this.myInvest.btc;
              res.ticker.logo = this.logos.btc;
            } 

            if( res.ticker.base === "DASH" ){
              res.ticker.invest = this.myInvest.dash;
              res.ticker.logo = this.logos.dash;
            } 

            this.cryptos.push(res.ticker) 
        })
        .catch((err) => console.log(err) );

    }
  },
  created(){

      this.getCrypto('dash');
      this.getCrypto('btc');

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


