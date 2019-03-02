//use vue-resource to get information from API REST with ajax
//and also we use Axios for do the same but in  a differenst way

new Vue({
    el:'main',
    mounted(){
        this.loadPerson();
    },
    
    data:{
        persons: []
    },

    methods: {
        loadPerson(){
            //USING VUE-RESOURCE
            // this.$http.get('https://randomuser.me/api/?results=500')
            // .then((response) => {
            //     console.log(response);
            //     //send the information from API to the array persons
            //     this.persons = response.body.results;
            // });

            //USING AXIOS
            axios.get('https://randomuser.me/api/?results=500')
            .then((response) => {
                console.log(response);
                this.persons = response.data.results;
            });
        }
    }
});

