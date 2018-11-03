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
    export default {
        name: 'ListComponent',
        components:{
            ContentCard
        },
        data(){
            return {
                listExpenses: null
            }
        },
        async mounted(){
            await setInterval(this.getExpenses,1000)
            //await this.getExpenses()
        },
        methods:{
            async getExpenses(){
                const expenses = await axios.get('http://localhost:5040/expenses/')
                this.listExpenses = expenses.data;
                //console.log(this.listExpenses)
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