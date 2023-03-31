<template>
  <div class="container_tasks_page">
    <userauth class="userauth" />
    <labellist class="labellist" />
    <newtask class="tasks"/>
  </div>
</template>
  
<script lang="ts">
import newtask from "../components/newTask.vue"  
import labellist from "../components/labelsList.vue" 
import userauth from "../components/userAuth.vue"
export default {
    components: {
      newtask,
      labellist,
      userauth
    }
  }
</script>

<style>
.container_tasks_page {
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 200px auto;
}

.userauth {
  grid-column: 1;
}

.labellist {
  grid-row: 2;
  grid-column: 1;
}
.tasks {
  grid-row: 2;
  grid-column: 2;
}
  </style>