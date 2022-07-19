<template>
  <div class="product">
    <img :src="product.img" alt="" class="product__preview">
    <div class="mainContent">
      <h3 class="mainContent__name">{{product.name}}</h3>
      <p class="mainContent__description">{{product.description}}</p>
      <h2 class="mainContent__price">{{product.price}}</h2>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    product:{
      type: Object,
      required: true
    }
  },
  computed:{

  }
}
</script>

<style scoped lang="scss">
.product{
  max-width: 20.75em;
  background: #FFFEFB;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  &:nth-child(1){

  }
  &__preview{
    max-width: 332px;
  }
  .mainContent{
    padding: 1em;
    padding-bottom: 1.5em;
    border-radius: 4px;

    &__name{
      margin-top: 1em;
    }
    &__description{
      margin-top: 1em;
    }
    &__price{
      margin-top: 2em;
    }
  }
}

</style>