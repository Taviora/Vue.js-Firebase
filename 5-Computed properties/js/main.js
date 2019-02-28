const vm = new Vue({
    el: 'main',
    data: {
        message: "Aprendiendo Vue.js",
        newTask: null,
        tasks: [
            {name: 'Hacer las compras',priority: true ,antiquity: 23},
            {name: 'Aprender Vue y Firebase', priority: false,antiquity:123},
            {name: 'Ir al gimnasio', priority: true,antiquity:455}
        ],
       
    },

    methods: {

        addTask(){
            //this, hace referencia a la instancia VUE
            this.tasks.unshift(this.newTask);
            this.newTask  = null;
        }
    },

    computed: {

        messageInverse(){

            return this.message.split('').reverse().join('');
        },

        taskPriority(){

            return this.tasks.filter((task) => task.priority);
        },

        taskAntiquity(){

            return this.tasks.sort((a,b)=> b.antiquity - a.antiquity);
        }

    }

});