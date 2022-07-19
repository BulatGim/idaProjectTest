<template>
  <div class="main">
    <div class="main__header">
      <h1>Добавление товара</h1>
      <select name="" class="sort">
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
      </select>
    </div>
    <div class="content">
      <Form/>
      <div class="products">
        <product :product="product" v-for="product in sortedPosts" :key="product.id"/>
      </div>
    </div>
  </div>
</template>

<script>
import Product from "@/components/product";
import {mapMutations, mapState, mapActions, mapGetters} from "vuex"
import MyInput from "@/components/UI/myInput";
import Form from "@/components/Form";
export default {
  components: {Form, MyInput, Product},
  data(){
    return{
      product:{
        name: "",
        description: "",
        photo:"",
        price:"",
      }
    }
  },
  computed:{
    ...mapGetters({
      sortedPosts: 'products/sortedPosts',
    })
  }
}
</script>

<style scoped lang="scss">
.main{
  margin: 2em 2em 2em 2em;
  &__header{
    display: flex;
    justify-content: space-between;
  }
  .content{
    margin-top: 1em;
    display: flex;
    .products{
      margin-left: 1em;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      column-gap: 1em;
      row-gap: 1em;
    }
  }
}
</style>