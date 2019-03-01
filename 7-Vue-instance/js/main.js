
const vm1 = new Vue({

    el: 'main',
    data: {
       message: 'Vue instance',
    },

    computed:{

        messageToUpperCase(){

            return this.message.toUpperCase();
        }

        
    }
});

const vm2 = new Vue({

    el: '#app',
    data: {
        message: 'Vue instance 2'
    }
});