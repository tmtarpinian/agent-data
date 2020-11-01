<template>
    <div id="page-wrap">
        <h1> Shopping Cart </h1>
        <div 
            v-for="agent in cartItems"
            v-bind:key="agent.id"
            class="product-container"
        >
            <img class="product-image" :src="agent.picture" />
            <div class="details-wrap">
                <h3> {{agent.name}} </h3>
                <p> ${{agent.price}} </p>
            </div>
            <button class="remove-button"> Remove Item </button>
        </div>
    </div>
</template>


<script>
import {cartItems} from '../seed-data'
export default {
    name: 'ShoppingCart',
    data() {
        return{
            cartItems,
        }
    },
    computed: {
        totalPrice() {
            return this.cartItems.reduce(
                (sum, item) => sum + Number(item.price),
                0,
            );
        }
    }
}
</script>

<style scoped>
  h1 {
    border-bottom: 1px solid black;
    margin: 0;
    margin-top: 16px;
    padding: 16px;
  }

  #total-price {
    padding: 16px;
    text-align: right;
  }

  #checkout-button {
    width: 100%;
  }

  .product-container {
    align-content: 'center';
    border-bottom: 1px solid #ddd;
    display: flex;
    padding: 16px;
    width: 100%;
  }

  .product-image {
    flex: 1;
    height: 100px;
    max-width: 100px;
  }

  .details-wrap {
    padding: 0 16px;
    flex: 3;
  }

  .remove-button {
    flex: 1;
    margin: auto;
  }
</style>