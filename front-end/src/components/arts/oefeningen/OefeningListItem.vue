<template>
  <div class="item-content" @click="$refs.excerciseModal.open()">
    {{excercise.title}}

    <q-modal ref="excerciseModal" class="minimized appointment-modal">
      <q-video
        :src="excercise.video.url"
        style="width: 853px; height: 480px"
      >
      </q-video>
      <div class="modal-title">
        <h4>{{excercise.title}}</h4>
      </div>

      <div class="modal-text">
        <ul>
          <li>Omschrijving: {{excercise.description}}</li>
        </ul>
      </div>
    </q-modal>
  </div>
</template>

<script>
import _ from 'lodash';

export default {
    name: 'oefening-list-item',
    props: ['excercise']
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
