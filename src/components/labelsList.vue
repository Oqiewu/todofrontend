<template>
    <div>
      <div class="add__label_container">
        <b-button @click="create_new_label">+</b-button>
        <b-form-input class="new__label__text" type="text" v-model="name" placeholder="Enter your name"></b-form-input>
      </div>
        <b-list-group class="labels__list" flush="true">
          <b-list-group-item href="#" v-for="(label, index) in labels" :key="index" v-bind:id="'label__' + label.id" class="labels__items" flush="True">
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
          labels: []
        }
    },

    methods: {
      render_labels_list({data}){
        this.labels = []
        this.labels.push(...data)
      },
      create_new_label() {
        let newTask = {
          name: this.name
      };
      axios.post("http://127.0.0.1:8000/label", newTask).then(this.get_labels_list)
      },
      delete_new_label({target}) {
        let id = target.parentElement.id
        id = id.slice(7)
        axios({
          method:'delete',
          url:'http://127.0.0.1:8000/label/' + id + "/tasks",
        }).then(this.get_labels_list)
      },
      get_labels_list() {
        axios.get("http://127.0.0.1:8000/labels").then(this.render_labels_list)
      },
    },
    
    mounted() {
      this.get_labels_list();
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