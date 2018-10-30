<template>
    <div id="app">
        <!--<img alt="Vue logo" src="./assets/logo.png">-->
        <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
        <!--<FormComponent class="component component-one"></FormComponent>-->
        <!--<ListComponent class="component component-two"></ListComponent>-->

        <div class="container container-one">
            <FormComponent class="component component-one"></FormComponent>
        </div>
        <div class="container container-two">
            <ListComponent class="component"></ListComponent>
        </div>
    </div>
</template>

<script>
    //import HelloWorld from './components/HelloWorld.vue'
    import FormComponent from './components/FormComponent.vue';
    import ListComponent from './components/ListComponent.vue';
    export default {
        name: 'app',
        components: {
            //HelloWorld
            FormComponent,
            ListComponent
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Pacifico');

    #app {
        font-family: 'Pacifico', cursive,'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        //margin-top: 60px;
    }

    body{
        margin: 0;
        padding: 0;
        background: #F9F7E7;
        //overflow: hidden;
    }

    .container{
        float:left;
        width: 50%;
    }

    .container-one{
        position: fixed;
    }
    .container-two{
        position: relative;
        margin-left: 50%;
    }
    .component{
        display: flex;
        justify-content: center;
        align-items: center;
        //height: 80%;
    }

    .component-one{
        background: linear-gradient(#2ecc71,#34495e);
    }

    body::-webkit-scrollbar {
        background-color:transparent;
        width:10px
    }

    /* background of the scrollbar except button or resizer */
    body::-webkit-scrollbar-track {
        background-color:transparent;
    }

    /* scrollbar itself */
    body::-webkit-scrollbar-thumb {
        background-color:#babac0;
        border-radius:16px;
        //border:4px solid #fff
    }

    /* set button(top and bottom of the scrollbar) */
    body::-webkit-scrollbar-button {display:none}

</style>
