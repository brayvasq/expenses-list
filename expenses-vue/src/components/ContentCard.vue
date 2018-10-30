<template>
    <div class="">
        <div v-show="!edit">
            <div class="card">
                <p class="info">{{name}} - ${{price}}</p>
                <p class="button red" @click="deleteItem">Eliminar</p>
                <p class="button green" @click="editToggle">Editar</p>
            </div>
        </div>
        <div v-show="edit">
            <div class="card">
                <p class="info">Name: <input type="text" v-model="newname"> </p>
                <p class="info">Price: <input type="text" v-model="newprice"> </p>
                <p class="button green" @click="editItem">OK</p>
            </div>

        </div>

    </div>
</template>

<script>
    export default{
        name:'ContentCard',
        data(){
            return{
                newname: this.name,
                newprice: this.price,
                edit: false
            }
        },
        props: ['id','name','price'],
        methods:{
            async deleteItem(){
                const resp = await axios.delete(`http://localhost:3000/expenses/${this.id}/delete`);
            },
            editToggle(){
                this.edit = !this.edit;
            },
            async editItem(){
                const data = {
                    item: this.newname,
                    price: this.newprice
                }
                const resp = await axios.put(`http://localhost:3000/expenses/${this.id}/update`,data);
                this.editToggle()
            }
        }
    }
</script>

<style scoped>
    .card{
        background: #fff;
        //display: block;
        font-size: 16px;
        margin-bottom: 5%;
        width: 100%;
        font-family: 'Pacifico', cursive;
        -webkit-box-shadow: 0px 5px 4px #c0c0c09d;
        -moz-box-shadow: 0px 5px 4px #c0c0c09d;
        box-shadow: 0px 5px 4px #c0c0c09d;
        border:none;
        outline: none;
        float:left;
    }
    .info{
        float: left;
        width: 60%;
    }
    .button{
        float:left;
        width: 10%;
        //margin-left: %;
        vertical-align: center;
        cursor: pointer;
    }
    .red{
        color: #e74c3c;
        margin-left: -5%;
        margin-right: 15%;
    }
    .green{
        color: #2ecc71;
    }

    input[type="text"], input[type="number"] {
        margin-top: 2%;
        font-family: 'Pacifico', cursive;
        font-size: 16px;
        border: 1px solid #2ecc71;
        outline: none;
    }
</style>