<template>
    <img v-bind:src="image" v-on:click="roll()"/>
</template>

<script>
    export default {
        data() {
            return {
                image: ''
            }
        },
        created() {
            this.random();
        },
        methods: {
            random() {
                this.image = [
                    "https://i.ibb.co/PFGs32S/d1.png",
                    "https://i.ibb.co/M7fW5cf/d2.png",
                    "https://i.ibb.co/3vrfSsT/d3.png",
                    "https://i.ibb.co/PCQ1jTJ/d4.png",
                    "https://i.ibb.co/yB0N8qP/d5.png",
                    "https://i.ibb.co/FnjctYm/d6.png"
                ][Math.floor(Math.random() * 6)];
            },
            roll() {
                this.image = "https://i.ibb.co/84NCLQF/dice-mr.gif";
                setTimeout(() => {
                    this.random();
                }, 1200);
            }
        }
    }
</script>

<style scoped>
    img {
        width: 150px;
        height: 150px;
        cursor: pointer;
        margin: 0px;
    }
    @media only screen and (max-device-width:1000px)  { 
        img {
            width: 100px;
            height: 100px;
        }
        
    }
</style>