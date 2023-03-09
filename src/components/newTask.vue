<template>
  <div>
    <div class="new__task">
      <b-button @click="create_new_task" class="add__button" variant="success">Add</b-button>
      <b-form-textarea
      class="textarea"
      type="text"
      v-model="text"
      placeholder="Enter something..."
      rows="3"
      max-rows="6"
    ></b-form-textarea>
    </div>
    <div class="container__tasks">
        <div class="task" v-for="(task, index) in tasks" :key="index" v-bind:id="'task__' + task.id">
          <b-button @click="delete_new_task" class="delete__button btn-sm br0" variant="danger">x</b-button>
          <div class="task__text">{{ task.text }}</div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      tasks: []
    };
  },
  methods: {
    render_tasks_list({data}){
      this.tasks = []
      this.tasks.push(...data)
    },
    create_new_task() {
      let newTask = {
        text: this.text,
        label_id: $
      };
      axios.post("http://127.0.0.1:8000/task", newTask).then(this.get_tasks_list)
    },
    delete_new_task({target}) {
      let id = target.parentElement.id
      id = id.slice(6)
      axios({
        method:'delete',
        url:'http://127.0.0.1:8000/task/' + id,
      }).then(this.get_tasks_list)
    },
    get_tasks_list() {
      axios.get("http://127.0.0.1:8000/tasks").then(this.render_tasks_list)
    },
  },
  mounted() {
    this.get_tasks_list();
  }
};
</script>


<style>
.new__task {
  margin: 20px 10%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.add__button {
  height: 50%;
}
.textarea {
  margin-left: 10px;
}

.container__tasks {
  display: flex;
  flex-direction: column;
}

.task {
    margin: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.task__text {
    overflow-wrap: break-word;
    margin-left: 10px;
    display: block;
    width: 60%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background: #e2e3e5;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0.375rem;
}
</style>

