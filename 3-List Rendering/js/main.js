
const vm = new Vue({
    el: 'main',
    data: {
        working:['Monday','Tuesday','Wednesday','Thuersday','Friday'],
        tasks: [
            {name: 'Hacer las compras',priority: 'baja'},
            {name: 'Aprender Vue y Firebase', priority: 'alta'},
            {name: 'Ir al gimnasio', priority: 'alta'}
        ],
        person: {
            name: 'Gustavo',
            profession: 'dev',
            city: 'Cartago'
        }
    },

});