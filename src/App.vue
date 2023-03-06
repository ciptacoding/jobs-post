<template>
  <div class="app">
    <header>
      <div class="title">
        <h1>Jobs Posts</h1>
      </div>
      <div class="order">
        <button @click="handleClick('title')">Order by title</button>
        <button @click="handleClick('salary')">Order by salary</button>
        <button @click="handleClick('location')">Order by location</button>
      </div>
    </header>
    <JobsList :jobs="jobs" :order="order"/> 
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue';
import Job from './types/Job'
import OrderTerm from './types/OrderTerm'
import JobsList from './components/JobsList.vue'

export default defineComponent({
  name: 'App',
  components: {JobsList},
  setup() {
    const jobs = ref<Job[]>([
      {title: 'Frontend Developer', location: 'Bandung', salary: 3000, id: '1'},
      {title: 'Backend Developer', location: 'Denpasar', salary: 5000, id: '2'},
      {title: 'Devops Engineer', location: 'Semarang', salary: 4000, id: '3'},
      {title: 'Software Engineer', location: 'Jakarta', salary: 6000, id: '4'},
      {title: 'Data Analyst', location: 'Tangerang', salary: 8000, id: '5'},
      {title: 'Fullstack Developer', location: 'Surabaya', salary: 7000, id: '6'}
    ])
    const order = ref<OrderTerm>('title')
    const handleClick = (term: OrderTerm) => { order.value = term }
    
    return {jobs, handleClick, order}
  },
});
</script>

<style>
  header{
    text-align: center;
  }

  header .order {
    margin-top: 20px;
  }

  button{
    margin: 0 10px;
    border: 2px solid #17bf66;
    border-radius: 4px;
    padding: 8px 16px;
    cursor: pointer;
    font-weight: bold;
    background-color: #17bf85;
    color: white;
  }

  header h1 {
    font-size: 3em;
  }
</style>
