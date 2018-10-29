<template>
    <div id="app">
        <!--<img alt="Vue logo" src="./assets/logo.png">-->
        <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
        <FormComponent class="component component-one"></FormComponent>
    </div>
</template>

<script>
    //import HelloWorld from './components/HelloWorld.vue'
    import FormComponent from './components/FormComponent.vue';
    export default {
        name: 'app',
        components: {
            //HelloWorld
            FormComponent
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
    }

    .component{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
    }

    .component-one{
        background: linear-gradient(#2ecc71,#34495e);
    }
</style>
