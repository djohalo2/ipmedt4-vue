<template>
  <div class="width-1of5">
    <div class="box-event">

    </div>
  </div>
</template>

<script>

export default {
  name: 'afspraken-kolom',
}

</script>

<style lang="scss" scoped>
  .box-event {
    min-height: 80px;
  }

  .box-day {
    min-height: 100px;
  }

  .box-event{
    padding: 0.7rem;
    background-color: #fff;
    width: 100%;
    border-right: 1px solid #e4e4e4;

    &:hover {
      background-color: #e4e4e4;
    }
  }
</style>
