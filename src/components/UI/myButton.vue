<template>
  <button class="button font-small">
    <slot></slot>
  </button>
</template>

<script>
export default {

}
</script>

<style scoped>
.button{
  padding: 10px;
  width: 100%;
  background: #EEEEEE;
  border-radius: 10px;
  border: none;
  margin-top: 1.5em;
}
</style>