<template>
    <div class="layout-view">
        <div class="layout-padding">
            <p class="page-title">MEDICATIE</p>
            <q-search v-model="medicijnSearch" placeholder="Zoek medicijn..." class="searchbar"></q-search>

            <div class="list striped">
              <div class="item"  v-for="(medicijn, index) in searchedMedicijnen">
                <div class="item-content">
                  <a>{{medicijn.naam}}</a>
                </div>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
import _ from 'lodash';

export default {
    name: 'medicatie',
    data() {
      return {
        medicijnSearch: "",
        medicijnen: [
          {
            naam: "ibuprofen"
          }, {
            naam: "paracetamol"
          }, {
            naam: "amfetamine"
          }
        ]
      }
    },
    computed: {
        searchedMedicijnen() {
            if(this.medicijnSearch !== ""){
                let medicijnen = [];
                this.medicijnen.map(medicijn => {
                    // Djo, hij zegt dat er iets undefined is, maar snap niet zo goed wat.
                    if(_.includes(medicijn.name.toLowerCase(), this.medicijnSearch.toLowerCase())){
                        medicijnen.push(medicijn);
                    }
                });
                return medicijnen;
            } else {
                return this.medicijnen;
            }
        }
    }
}

</script>

<style lang="styl">
    .page-title {
        font-size:0.85rem;
        font-weight: 500;
        color: #a8a8a8;
        margin: 0.5rem 0;
    }
</style>
