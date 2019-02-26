const vm = new Vue({
    el: 'main',
    data: {
        newTask: null,
        tasks: [
            'Aprender Vue.js',
            'Aprender ES6',
            'Publicar algo todos los dias'
           
        ],
       
    },

    methods: {

        addTask(){
            //this, hace referencia a la instancia VUE
            this.tasks.unshift(this.newTask);
            this.newTask  = null;
        }
    }

});

//Vanilla Javascript

/*
function addTask(){

    const input =  document.querySelector('input[type=text]');
    vm.task.unshift(input.value);
    input.value = '';

}*/