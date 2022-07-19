<template>
  <div class="formElem">
    <div class="description">
      <p class="description__content">{{formElem.name}}</p>
      <div class="description__redBall" v-if="formElem.required"></div>
    </div>
    <my-input
        class="myInput"
        v-model:value="inputName"
        :placeholder="formElem.placeholder"
    />
  </div>
</template>

<script>
import MyInput from "@/components/UI/myInput";
export default {
  components: {MyInput},
  props:{
    formElem:{
      type: Object,
      required:true
    },
    name:{
      type:String,
      required: true
    }
  },
  data(){
    return{
      inputName: this.name
    }
  },
  methods:{

  },
  mounted() {

  },
  watch:{
    inputName(){
      this.$emit('update:value', this.inputName)
    }
  }
}
</script>

<style scoped lang="scss">
.formElem{
  .description{
    display: flex;
    &__content{

    }
    &__redBall{
      align-self: start;
      width: 4px;
      height: 4px;
      background: #FF8484;
      border-radius: 4px;
    }
  }
  .myInput{
    margin-top: 4px;
  }
}
</style>