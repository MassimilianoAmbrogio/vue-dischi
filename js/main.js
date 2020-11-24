/**
 * Attraverso una chiamata AJAX all’API di boolean 
 * avremo a disposizione una decina di dischi musicali. 
   Utilizzare Postman per analizzare i dati 
   restituiti dall'API, ancora prima di scrivere codice.
   Utilizzando Vue stampiamo tutto a schermo. 
   Creare poi una select con i seguenti generi: 
   pop, rock, metal e jazz. 
   In base a cosa scegliamo nella select 
   vedremo i corrispondenti cd.
 */

// Parte Vue 
const app = new Vue({
    el: '#app',
    data: {
        cds: [],
        actualGenre: 'all'
    },
    created() {
        /**
         * Get all albums
         */
        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
            .then(result => {
                console.log(result.data);

                this.cds = result.data.response;
            })
            .catch(error => {
                console.log(error);
            });
    },
    methods: {
        // filters
        filterGenred() {
            axios.get('https://flynn.boolean.careers/exercises/api/array/music')
            .then(result => {
                let cdsList = result.data.response;

                if (this.actualGenre !== 'all') {
                    cdsList = cdsList.filter(cd => cd.genre.toLowerCase() === this.actualGenre);
                }

                this.cds = cdsList;
            })
            .catch(error => {
                console.log(error);
            });
        }
    }
});