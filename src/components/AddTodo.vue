<template>
    <div>
        <form @submit="addTodo">
            <input type="text" v-model="text" name="text" placeholder="Add Todo...">
            <input type="submit" value="Submit" class="btn">
        </form>
    </div>
</template>

<script>
export default {
    name:"AddTodo",
    data(){
        return{
            text:''
        }
    },
    methods:{
        addTodo(e){
            e.preventDefault();
            const newTodo = {
                id:'',
                text:this.text,
            }
            //send up to parent
            this.$emit('add-todo', newTodo);
            this.text = '';
        }
    }
}
</script>
