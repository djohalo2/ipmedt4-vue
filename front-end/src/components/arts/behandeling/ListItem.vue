<template>
  <div class="item">
    <div class="item-content">
      <i class="float-right" @click="deleteItem()">delete_forever</i>
      <div class="item-title">{{title}}</div>
    </div>
  </div>
</template>

<script>

export default {
    name: 'list-item',
    props: ['title', 'type', 'id', 'therapyId'],
    methods: {
      deleteItem() {
        let item = {
          id: this.id,
          therapy_id: this.therapyId,
          type: this.type
        }
        this.$store.dispatch('DELETE_ITEM', item)
      }
    }
}
</script>

<style lang="scss" scoped>
  .item {
    border-bottom: 1px solid #e0e0e0;

    i {
      font-size: 22px;
      cursor: pointer;

      &:hover {
        color: #e74c3c;
      }
    }
  }
</style>
