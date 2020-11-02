<template>
  <div id="page-wrap" v-if="agent">
    <div id="img-wrap">
      <img v-bind:src="agent.picture" />
    </div>
    <div id="product-details">
      <h1> {{agent.name}} </h1>
     
      <h3 id="price"> NPM: {{agent.NPM}} </h3>
      <p> Price: {{agent.price}} </p>
      <button id="add-to-cart"> Add to Card </button>
      <h4>  Details </h4>
      <p> {{agent.address}}</p>
      <p> {{agent.phone}} </p>
    </div>
  </div>
  <NotFoundPage v-else />
</template>


<script>
import {agentSeeds} from '../../seed-data'
import NotFoundPage from '../NotFoundPage'

export default {
    name: 'AgentsShow',
    components: {
        NotFoundPage,
    },
    data() {
      return {
        agent: agentSeeds.find((a) => a.id == this.$route.params.id)
      }
    }
}
</script>

<style scoped>
  #page-wrap {
    margin-top: 16px;
    padding: 16px;
    max-width: 600px;
  }

  #img-wrap {
    text-align: center;
  }

  img {
    width: 400px;
  }

  #product-details {
    padding: 16px;
    position: relative;
  }

  #add-to-cart {
    width: 100%;
  }

  #price {
    position: absolute;
    top: 24px;
    right: 16px;
  }
</style>