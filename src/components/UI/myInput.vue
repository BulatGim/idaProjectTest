<template>
  <input
      :value="value"
      @input="updateInput"
      class="input"
      type="text">
</template>

<script>
export default {
  name: "my-input",
  props:{
    value: [String, Number]
  },
  methods:{
    updateInput(event){
      this.$emit('update:value', event.target.value)
    }
  }
}
</script>

<style scoped lang="scss">
.input{
  font-size: 12px;
  border: none;
  padding: 10px 0 10px 16px;
  background: #FFFEFB;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  width: 100%;
  &::placeholder{
    font-size: 12px;
  }
}
</style>