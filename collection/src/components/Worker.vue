<template>
	<div id="worker">
		<myhead></myhead>
		<scroll></scroll>
		<div class="btn">
			<router-link to="/Upload">
				加入我们
			</router-link>	    		
		</div>
	</div>
</template>

<script>
	import myhead from '@/components/Fhead'
	import scroll from '@/components/scroll'
	export default {
		name:"Worker",
		components:{
		  myhead,
		  scroll
		},
		data(){
			return{
				
			}
		},
		methods:{
		},
	}
</script>

<style scoped>
	#worker{
		height: 100vh;
		position: relative;
	}
	.btn{
		position: absolute;
		bottom: 21%;
		width: 30vw;
		height: 6.8vw;
		line-height: 6.8vw;
		left: 50%;
		transform: translate(-50%,0);
		border: 1px solid #33d066;
		border-radius: 15px;
	}
	.btn>*{
		color: #33d066;
		display: block;
	}

</style>