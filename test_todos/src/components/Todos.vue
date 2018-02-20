<template>
	<section class="todoapp">
		<header class="header">
			<h1 class="Todos">Todos</h1>
			<input type="text" class="new-todo" placeholder="add task..." v-model="newTodo" @keyup.enter="addTodo">
		</header>
		<div class="main">
			<ul class="todo-list">
				<li class="todo" v-for="todo in computedList" :class="{completed: todo.completed}">
					<div class="view">
						<input type="checkbox" class="toggle" v-model="todo.completed">
						<label>{{ todo.name }}</label>
						<button class="destroy" @click.prevent="deleteTodo(todo)">&times</button>
					</div>
				</li>
			</ul>
		</div>
		<footer class="footer" v-show="todos.length > 0">
			<span class="todo-count"><i>{{ remaining }}</i> task is running</span>
			<ul class="filters">
					<li><a href="#" :class="{selected: filter === 'all'}" @click.prevent="filter = 'all'">All</a></li>
					<li><a href="#" :class="{selected: filter === 'todo'}" @click.prevent="filter = 'todo'">Todo</a></li>
					<li><a href="#" :class="{selected: filter === 'done'}"  @click.prevent="filter = 'done'">Done</a></li>
				</ul>
		</footer>
	</section>
</template>

<script>
	
	export default {
		data () {
			return {
				todos: [{
					name: 'Task test',
					completed: false
				}],
				newTodo: '',
				filter: 'all'
			}
		},
		methods: {
			addTodo() {
				this.todos.push({
					completed: false,
					name: this.newTodo
				})
				this.newTodo = ''
			},
			deleteTodo (todo) {
				this.todos = this.todos.filter(i => i !== todo)
			}
		},
		computed: {
			remaining () {
				return this.todos.filter(todo => !todo.completed).length
			},
			filteredTodos () {
				if(this.filter === 'todo') {
					return this.todos.filter(todo => !todo.completed)
				} else if (this.filter === 'done') {
					return this.todos.filter(todo => todo.completed)
				}
				return this.todos
			},
			computedList: function () {
    	  var vm = this
    	  return this.filteredTodos.filter(function (item) {
    	    return item.name.toLowerCase().indexOf(vm.newTodo.toLowerCase()) !== -1
    	  })
    	}
		}
	}

</script>

<style src="./todos.css"></style>