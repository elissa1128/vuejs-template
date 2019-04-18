<script>
export default {
  props: ['id']
}
</script>

<template>
  <div class="content">
    <h3>產品</h3>
    <p v-if="id">產品編號 {{id}}</p>
  </div> 
</template>

<style lang="scss" scoped>

</style>


