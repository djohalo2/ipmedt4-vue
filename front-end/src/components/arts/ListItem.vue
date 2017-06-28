<template>
  <div class="item">
    <div class="item-content">
      <div class="item-title">{{title}}</div>
    </div>
  </div>
</template>

<script>

export default {
    name: 'list-item',
    props: ['title', 'subtitle']
}
</script>

<style lang="scss" scoped>
  .item {
    border-bottom: 1px solid #e0e0e0;
  }
</style>
