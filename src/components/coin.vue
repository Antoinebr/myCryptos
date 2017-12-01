<template>
      <div>

        <md-card>
            <md-card-header class="row">

                <md-card-media class="col-xs-4 card-icon u-mts">
                    <img :src="crypto.logo" alt="People">
                    <div class="md-title u-txtCenter">{{crypto.base}}</div>
                </md-card-media>

                <md-card-header-text class="col-xs-8">
                
                    <md-list>
                        <md-list-item>
                            <span>Price</span> {{ Math.round(crypto.price,2) }} €
                        </md-list-item>
                            <md-list-item>
                            <span>Valorisation</span> {{ Math.round( (crypto.price * crypto.invest.amount) ,1) }} €
                        </md-list-item>
                            <md-list-item>
                            <span>Profit</span> {{ Math.round( ( (crypto.price * crypto.invest.amount) - crypto.invest.value  ) ,1) }}€
                        </md-list-item>
                    </md-list>

                </md-card-header-text>

            </md-card-header>

        </md-card>
     
     </div>
</template>

<script>

export default {
    name: 'coin',
    props : ['crypto']
}
</script>

<style scoped>



  
</style>