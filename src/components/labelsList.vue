<template>
    <div>
      <div class="add__label_container">
        <b-button @click="create_new_label">+</b-button>
        <b-form-input class="new__label__text" type="text" v-model="name" placeholder="Enter your name"></b-form-input>
      </div>
        <b-list-group class="labels__list" flush>
          <b-list-group-item @click="$root.$emit('label_changed', $event)" href="#" v-for="(label, index) in labels" :key="index" v-bind:id="'label__' + label.id" class="labels__items" flush>
            {{ label.name }}
            <b-button @click="delete_new_label" class="delete__lable_button btn-sm">x</b-button>
          </b-list-group-item>

        </b-list-group>
    </div>
</template>

<script lang="ts">
import axios from 'axios'

export default {
    data() {
        return {
          name: '',
          labels: []
        }
    },
    methods: {
      change_label({target}) {
        let id = target.id
        id = id.slice(7)
        this.$store.state.label_id = id
      },
      render_labels_list({data}){
        this.labels = []
        this.labels.push(...data)
      },
      create_new_label() {
        let newTask = {
          name: this.name
      };
      this.name = ""
      axios.post("http://127.0.0.1:8000/label", newTask).then(this.get_labels_list)

      },
      delete_new_label(event) {
        let id = event.target.parentElement.id
        id = id.slice(7)
        axios({
          method:'delete',
          url:'http://127.0.0.1:8000/label/' + id + "/tasks",
        }).then(this.get_labels_list).then((event) => this.$root.$emit("label_deleted", event))
        this.$store.state.label_id = 0
      },
      get_labels_list() {
        axios.get("http://127.0.0.1:8000/labels").then(this.render_labels_list)
      },
    },
    
    mounted() {
      this.get_labels_list();
    },
    created() {
      this.$root.$on("label_changed", this.change_label)
    }
}
</script>

<style>
.add__label_container {
  display: flex;
  margin: 20px 0 20px 0 ;
}
.new__label__text {
  width: 200;
}

.labels__list {
  justify-content: center;
}

.delete__lable_button {
  float: right;
}

</style>