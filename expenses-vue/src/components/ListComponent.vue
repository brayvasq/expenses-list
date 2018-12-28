<template>
    <div>
        <div class="container-list">
            <h1> My Expenses </h1>
            <div class="list">
                <div v-for="item in listExpenses">
                    <ContentCard :id="item._id" :name="item.item" :price="item.price"></ContentCard>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
    import ContentCard from './ContentCard.vue';

    /**
     * Componente que listará los gastos
     */
    export default {
        name: 'ListComponent',
        /**
         * components:
         *      Aquí van los componentes que se importaron y que se van a usar el el componente actual
         * */
        components:{
            ContentCard
        },
        /**
         * data()
         *      Aquí se colocan las propiedades generales del componente
         * */
        data(){
            return {
                listExpenses: null
            }
        },
        /**
         * mounted()
         *      Este es el método que se ejecuta cuando el componente ha sido montado
         * */
        async mounted(){
            await setInterval(this.getExpenses,1000)
        },
        methods:{
            /**
             * Método que consume el webservice para traer la lista de gastos
             * @returns {Promise<void>}
             */
            async getExpenses(){
                const expenses = await axios.get('http://localhost:5040/expenses/')
                this.listExpenses = expenses.data;
            }
        }
    }
</script>

<style scoped>
    h1{
        font-size: 48px;
        color: #34495e;
        margin-bottom: -10%;
    }
    .container-list{
        display: grid;
        height: -webkit-fill-available;
    }

    .list{
        margin-top: 30%;
    }

</style>