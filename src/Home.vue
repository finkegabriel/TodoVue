  <template>
  <div id="app">
    <h3>Home</h3>
    <AddTodo v-on:add-todo="addTodo"/>
    <Todo
    v-bind:todos="todos" 
    v-on:del-todo="deleteTodo"/>
  </div>
</template>

<script>
import todo from './routes/todo';
import Todo from './components/todo.vue'
import AddTodo from './components/AddTodo.vue'

export default {
    components: {
    Todo,
    AddTodo
  },
  data () {
    return {
      oauthData:{},
      todos:[],
    }
  },
  methods:{
    async deleteTodo(id){
      this.todos = this.todos.filter(todo => todo._id !==id);
      await todo.delTodo(id);
    },
    async addTodo(newTodo){
      this.todos = [...this.todos,newTodo];
      todo.addTodo({text:newTodo.text,date:new Date(),completed:false});
    }
  },
    async created(){
        const data = await todo.browseTodos();
        this.todos = data;
        console.log("todo ",this.todos);
}
}
</script>