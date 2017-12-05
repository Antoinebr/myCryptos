<template>
      <div>

        <md-card class="card-main">
            <md-card-header class="row">

                <md-card-media class="col-xs-4 card-icon u-mts">
                    <img :src="crypto.logo" alt="People">
                    <div class="md-title u-txtCenter">{{crypto.ticker.base}}</div>
                </md-card-media>

                <md-card-header-text class="col-xs-8">
                
                    <md-list>
                        <md-list-item>
                            <span>Price</span> {{ Math.round(crypto.ticker.price,2) }} €
                        </md-list-item>
                            <md-list-item>
                            <span>Valorisation</span> {{ crypto.valorisation }} €
                        </md-list-item>
                            <md-list-item>
                            <span>Profit</span> {{ crypto.profit }}  €
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

.card-main{
    overflow: hidden!important;
}

</style>