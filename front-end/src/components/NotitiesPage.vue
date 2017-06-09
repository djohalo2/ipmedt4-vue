<template>
    <div class="layout-view">
        <div class="layout-padding">
            <q-select
              class="float-right"
              type="radio"
              v-model="noteTypeSelect"
              :options="selectOptions"
            ></q-select>
            <p class="page-title">NOTITIES</p>
            <p class="no-entries-msg" v-if="artsNotities.length === 0">
                Er zijn geen notities gevonden.
            </p>

            <div v-if="artsNotities.length > 0" class="list item-delimiter">
                <q-collapsible group="notities" v-for="notitie in artsNotities" :label="notitie.title">
                    <div>
                        <p>{{notitie.note}}</p>
                    </div>
                </q-collapsible>
            </div>
            <button class="primary big circular fixed-bottom-right" @click="$refs.noteModal.open()"><i>note_add</i></button>

            <q-modal ref="noteModal" class="minimized" :content-css="{padding: '2rem'}">
                <i @click="$refs.noteModal.close()">close</i>
                <p>Notitie toevoegen</p>
                <input v-model="noteTitle" placeholder="Title">
                <textarea v-model="noteContent" class="notitie-content" placeholder="Notitie"></textarea>
                <button @click="addNote" class="primary" v-bind:class="{disabled: noteTitle === '' || noteContent === ''}">Toevoegen</button>
            </q-modal>
        </div>
    </div>
</template>

<script>
export default {
    name: 'notitie-page',
    data() {
        return {
            noteTitle: "",
            noteContent: "",
            noteTypeSelect: "arts",
            selectOptions: [
                {
                    label: 'Arts',
                    value: 'arts'
                },
                {
                    label: 'Patient',
                    value: 'patient'
                }
            ]
        }
    },
    methods: {
        addNote() {
            const payload = {
                noteTitle: this.noteTitle,
                noteContent: this.noteContent
            };
            this.$store.commit('ADD_NOTE', payload);
        }
    },
    computed: {
        artsNotities() {
            return this.$store.getters.getArtsNotities
        },
        patientNotities() {
            return this.$store.getters.getPatientNotities
        }

    }
}
</script>

<style lang="scss" scoped>
    .list {
        background-color: #fff;
        margin-top: 1.2rem;
    }

    button {
        margin: 1rem;
        box-shadow: 0 10px 20px rgba(0,0,0,0.12), 0 4px 5px rgba(0,0,0,0.13);
    }

    .no-entries-msg {
        color: #a8a8a8;
    }

    .minimized {
        textarea, input {
            width: 100%;
        }

        .notitie-content {
            height: 10rem;
        }

        button {
            margin: 0.5rem 0;
        }

        i {
            float:right;
            font-size: 18px;
        }
    }
</style>
