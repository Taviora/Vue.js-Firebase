
new Vue({

    el: 'main',
    data: {
        search: '',
        min: 5,
        games: [{
            title: 'Battlefield 1',
            genre: 'FPS',
            points: 9
        },
        {
            title: 'TLOU',
            genre: 'Adventura-horror',
            points: 10
        },
        {
            title: 'GTA 5',
            genre: 'FPS',
            points: 8
        },
       ]
    },

    computed:{

        bestGames() {
            return this.games.filter((game) => game.points >= this.min);
        },

        findGame(){
            return this.games.filter((game) => game.title.includes(this.search));
        }
    }
});