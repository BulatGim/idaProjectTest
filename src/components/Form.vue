<template>
  <div class="form">
    <FormElem
        :formElem="formElem"
        v-for="formElem in formElements"
        v-model:value="newProduct[formElem.formName]"
        :name="newProduct[formElem.formName]"
        class="form__item"
    />
    <my-button @click="createProduct23">Добавить товар</my-button>
  </div>
</template>

<script>
import FormElem from "@/components/UI/FormElem";
import MyButton from "@/components/UI/myButton";
import store from "@/store"
import {mapActions, mapMutations, mapState} from "vuex";
export default {
  components: {MyButton, FormElem},
  data(){
    return{
      formElements:[
        {
          formName:"name",
          name: "Наименование товара",
          placeholder:"Введите наименование товара",
          required: true,
        },{
          formName:"description",
          name: "Описание товара",
          placeholder:"Введите описание товара",
          required: false,
        },{
          formName:"img",
          name: "Ссылка на изображение товара",
          placeholder:"Введите ссылку",
          required: true,
        },{
          formName:"price",
          name: "Цена товара",
          placeholder:"Введите цену",
          required: true,
        },
      ],
      newProduct:{
        name: "",
        description: "",
        img:"",
        price: ""
      }
    }
  },
  methods:{
    ...mapMutations([
      'products/setProducts'
    ]),
    ...mapActions({
  createProduct: 'products/createProduct'
}),
    createProduct23(){
      store.commit('products/setProducts', [...this.products, this.newProduct])
    }
  },
  computed:{
    ...mapState({
      products: state => state.products.products,
    }),
  }
}
</script>

<style scoped lang="scss">
.form{
  max-height: 440px;
  background: #FFFEFB;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  min-width: 332px;
  padding: 24px;
  &__item{
    margin-top: 1em;
    &:first-child{
      margin-top: 0;
    }
    &_name{

    }
    &_description{

    }
    &_photo{

    }
    &_price{

    }
    &_btn{

    }
  }
}
</style>