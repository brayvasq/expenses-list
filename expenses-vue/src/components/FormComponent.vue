<template>
    <div>
        <div class="form-cont">
            <h1> Add a Expense </h1>
            <img src="https://vuejsexamples.com/favicon.png" alt="">
            <div class="form-page">
                <input type="text" placeholder="Input your item here" v-model="itemName"/>
                <input type="number" placeholder="Input the price of item" v-model="itemPrice"/>
                <input type="submit" value="Send" @click="saveExpense">
            </div>

        </div>
    </div>
</template>

<script>
    /**
     * Componente que funciona como el formulario de creación de gastos
     */
    export default {
        name: 'FormComponent',
        /**
         * data()
         *      Aquí se colocan las propiedades generales del componente
         * @returns {{itemName: string, itemPrice: string}}
         */
        data() {
            return {
                itemName: '',
                itemPrice: ''
            }
        },
        methods: {
            /**
             * Método que hace la petición al ws para crear un recurso
             * @returns {Promise<void>}
             */
            async saveExpense() {
                console.log(`Item : ${this.itemName}`);
                console.log(`Price : ${this.itemPrice}`);
                const data = {
                    item: this.itemName,
                    price: this.itemPrice
                }
                const resp = await axios.post('http://localhost:5040/expenses',data);
                console.log(resp);
            }
        }
    }
</script>

<style scoped>
    .form-page {
        margin-top: 30%;
        height: -webkit-fill-available;
    }

    .form-cont{
        display: grid;
    }

    input[type="text"], input[type="number"] {
        display: block;
        margin-top: 2%;
        padding-top: 5%;
        padding-bottom: 5%;
        padding-left: 2%;
        padding-right: 2%;
        width: 100%;
        font-family: 'Pacifico', cursive;
        font-size: 18px;
        -webkit-box-shadow: 0px 5px 4px #c0c0c09d;
        -moz-box-shadow: 0px 5px 4px #c0c0c09d;
        box-shadow: 0px 5px 4px #c0c0c09d;
        border:none;
        outline: none;
    }

    input[type="submit"], input[type="button"] {
        margin-top: 10%;
        padding-top: 2%;
        padding-bottom: 2%;
        padding-left: 30%;
        padding-right: 30%;
        cursor: pointer;
        border: solid 3px white;
        outline: none;
        font-family: 'Pacifico', cursive;
        font-size: 18px;
        //background: linear-gradient(to right,white,white,#34495e) no-repeat ;
        background: transparent;
        color: white;
        border-radius: 15px;
    }
    input[type="submit"]:hover, input[type="button"]:hover{
        background: white;
        color: #34495e;
    }

    h1{
        font-size: 48px;
        color: white;
        margin-bottom: -10%;
    }

    img{
        width: 64px;
        height: 64px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-top: 2em;
    }
</style>
