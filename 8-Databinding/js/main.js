new Vue({
    el: 'main',
    data: {
        tasks: [
            {title: 'Hacer la compra',completed: false},
            {title: 'Terminar el tutorial',completed: false},
            {title: 'Aprender nuevas tecnologias',completed: false},
            {title: 'Dominar ES6',completed: false},
            {title: 'Aprender firebase',completed: false},
        ]
    },

    methods: {

        completeTask(task){

           task.completed = !task.completed;
        }

    },

    computed: {

        tasksCompleted(){
            return this.tasks.filter((task) => task.completed);
        }
    }
});