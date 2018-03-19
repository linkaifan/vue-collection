<template>
	<div class="header">
		<div class="logoBox">
			<img class="logo" src="../assets/v-logo.png"/>
		</div>
	    <div class="BtnBox">		
	    	<div v-if="isHome">
	    		<img src="../assets/imgs/home/BTN-LOG1.png" class="Btn" @click="login">
	    	</div>
	    	<div v-else>
	    		<router-link to="/">
	    			<img src="../assets/BTN-HOME.png" class="Btn">
	    		</router-link>	    		
	    	</div>
	    </div>
	    
	</div>
</template>

<script>
	export default {
		props:['isHome'],
		data(){
			return{

			}
		},
		methods:{
			login(){
				this.$emit('login')
			}
		}
	}
</script>

<style scoped>
	.header{
		width: 100%;
		padding-top: 3.8vw;
		display: flex;
		justify-content: space-between;
		z-index: 99;
	}
	.logo{
		width: 24vw;
		height: 6vw;
		margin-left: 3.8vw;
	}
	.Btn{
		width: 5.5vw;
		height: 6vw;
		margin-right: 3.8vw;
	}
</style>