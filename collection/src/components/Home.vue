<template>
	<div class="Home">
		<myhead isHome="true"  @login="login"></myhead>
		<div class="slogan"> 
			<img src="../assets/imgs/home/SLOGAN.png">
		</div>
		<div class="LinkBox">
			<div id="toWorker">
				<router-link to="/Worker" id="a-toWorker">打开作品</router-link>			
			</div>
			<div id="toUpload">
				<router-link to="/Upload" id="a-toUpload">加入我们</router-link>
			</div>
			
		</div>		
	</div>
</template>

<script>
	import myhead from '@/components/Fhead'
	export default {
		name:"Home",
		components:{
		  myhead
		},
		data(){
			return{

			}
		},
		methods:{
			login(){
				alert('denglu');
			}
		}
	}
</script>

<style scoped>
	.Home{
		width: 100vw;
		height: 100vh;
		position: relative;
	}
	.slogan{
		width: 22vw;
		height: 73vw;
		position: absolute;
		top: 45%;
		left: 53%;
		transform: translate(-50%,-50%); 
	}
	.slogan img{
		width: 22vw;
		height: 73vw;
	}
	.LinkBox{
		width: 30vw;
		position: absolute;
		top: 78%;
		left: 50%;
		transform: translate(-50%,0); 
	}
	.LinkBox>div{
		border: 1px solid rgb(56, 140, 255);
		border-radius: 30px;
	}
	#toUpload{
		margin-top: 6vw;
		background-color: rgb(56, 140, 255);
	}
	.LinkBox a{
		display: inline-block;
		height: 6.6vw;
		line-height: 6.6vw;
	}
	#a-toWorker{
		color: rgb(155, 191, 255);
	}
	#a-toUpload{
		color: white;
	}
</style>