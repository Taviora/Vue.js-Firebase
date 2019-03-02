new Vue({
    el: 'main',
    data: {
        show : true,
        messages: {
            transition: "Transitions CSS with Vue.js",
            animation: "Animation  CSS with Vue.js",
            animationCustom: "Animation custom CSS with Vue.js",
            betweenElements: "Transitions between elements with Vue.js"

        }
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