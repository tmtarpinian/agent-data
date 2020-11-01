<template>
   <div id="page-wrap">
     <div class="grid-wrap">
        <div
          v-for="agent in agentSeeds"
          class="agent"
          v-bind:key="agent.id"
        >
        <img v-bind:src="agent.picture" />
        <h3 class="agent-name">{{ agent.name }} </h3>
      </div>
     </div>
   </div>
</template>


<script>
import {agentSeeds} from '../../seed-data'
export default {
    name: 'AgentsIndex',
    data() {
      return {
        agentSeeds
      }
    }
}
</script>

<style scoped>
  .grid-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 16px;
  }

  .agent {
    align-items: center;
    border-radius: 8px;
    box-shadow: 0px 2px 5px #888;
    display: flex;
    flex-direction: column;
    margin-bottom: 2%;
    padding: 20px;
    position: relative;
    width: 32%;
  }

  .agent-name {
    margin-bottom: 0;
  }

  img {
    height: 200px;
    width: 200px;
  }

  a {
    width: 100%;
  }

  button {
    width: 100%;
  }
</style>