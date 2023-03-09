<template>
    <div class="container_tasks_page">
      <labellist class="labellist" />
      <newtask class="tasks"/>
    </div>
  </template>
    
  <script lang="ts">
  import newtask from "../components/newTask.vue"  
  import labellist from "../components/labelsList.vue" 
  export default {
      components: {
        newtask,
        labellist
      }
    }
  </script>
  
  <style>
  .container_tasks_page {
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: 200px auto;
  }
  
  .labellist {
    grid-column: 1;
  }
  .tasks {
    grid-column: 2;
  }
  </style>