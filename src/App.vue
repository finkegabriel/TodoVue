<template>
  <div id="app">
    <Header/>
    <AddTodo v-on:add-todo="addTodo"/>
    <Todo
    v-bind:todos="todos" 
    v-on:del-todo="deleteTodo"/>
  </div>
</template>

<script>
import Todo from './components/todo.vue'
import Header from './components/layout/Header.vue'
import AddTodo from './components/AddTodo.vue'

export default {
  name: 'App',
  components: {
    Header,
    Todo,
    AddTodo
  },
  data(){
    return{
      todos:[]
    }
  },
  
  methods:{
    deleteTodo(id){
      this.todos = this.todos.filter(todo => todo.id !==id);
    },
    addTodo(newTodo){
      this.todos = [...this.todos,newTodo];
    }
  },
  created(){
    //this is where we can make a fetch request
   fetch('https://jsonplaceholder.typicode.com/todos').then(res =>res.json())
   .then(json =>this.todos =json).catch(()=>{
     this.todos = [{
          id:1,
          title:"todo one",
          completed:false
        },
        {
          id:2,
          title:"todo two",
          completed:false
        },
        {
          id:3,
          title:"todo three",
          completed:false
        }];

   });
  }
}
</script>

