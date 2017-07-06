<template>
  <div class="item-content" @click="$refs.medicineModal.open()">
    {{medicine.name}}

    <q-modal ref="medicineModal" class="minimized appointment-modal">
      <div class="modal-image">
        <i class="close-btn" @click="$refs.medicineModal.close()">close</i>
      </div>
      <div class="modal-title">
        <h4>{{medicine.name}}</h4>
      </div>

      <div class="modal-text">
        <ul>
          <li>Belangrijk: {{medicine.important}}</li>
          <li>Mogelijke bijwerkingen: {{medicine.side_effects}}</li>
          <li>Hoe gebruiken: {{medicine.usage}}</li>
        </ul>
      </div>
    </q-modal>
  </div>
</template>

<script>
import _ from 'lodash';

export default {
    name: 'medicatie',
    props: ['medicine']
}

</script>

<style lang="scss" scoped>
    .item-content {
      border-bottom: 1px solid #e6e6e6;
      margin: 0!important;
      padding-left: 1rem !important;

      &:hover {
        background-color: #f6f6f6;
        cursor: pointer;
      }
    }

    .modal-image {
      height: 300px;
      overflow: hidden;
      background-image: url('../../../statics/appointment-background.png');
      -webkit-background-size: cover;
      background-size: cover;
      background-position: center;

      .close-btn {
        font-size:20px;
        position: absolute;
        font-weight: 700;
        color: #fff;
        top: 15px;
        right:15px;
        cursor: pointer;
      }
    }

    .modal-title {
      background-color: #e74c3c;
      padding: 1rem;

      h4 {
        font-size: 22px;
        color: #fff;
        margin-left: 0.8rem;
      }
    }

    .modal-text {
      padding: 1rem;
      max-width: 800px;

      ul {
        list-style-type: none;
        padding: 0;
        margin-left: 0.8rem;

        i {
          margin-right: 1rem;
          font-size: 20px;
        }

        li {
          margin-bottom: 1rem;
        }

        .patient-list-item {
          cursor: pointer;

          &:hover {
            color: #e74c3c;
          }
        }

      }
    }
</style>
