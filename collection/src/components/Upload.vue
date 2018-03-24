<template>
	<div id="wrap">
		<myhead></myhead>
		<div class="main">
			<div class="imgBox">
				<img src="../assets/imgs/upload/upImg.png">
				<input type="file" name="avatar" id="upImg" form="upform">
			</div>
			<div class="textBox">
				<nav class="stepBar">
					<li class="step step1" 
					:class="upIndex >= '1'?'activeStep':'' ">
						<span :style="upIndex >= 1?{color:'#4bd678'}:{}">
						①
					</span>选择组别
					</li>
					<li class="step step2"
					:class="upIndex >= '2'?'activeStep':'' ">
						<span :style="upIndex >= 2?{color:'#4bd678'}:{}">
							>>②
						</span>基本信息
					</li>
					<li class="step step3"
					:class="upIndex >= '3'?'activeStep':'' ">
						<span :style="upIndex == 3?{color:'#4bd678'}:{}">
							>>③
						</span>详细信息
					</li>
				</nav>
				<div class="choiceClass box" v-show="upIndex == 1">
					<p class="p">请选择组别</p>
					<nav class="classNav">
						<li data-zubie="design" 
						:class="choiceClass == 'design'?'active':'' "
						@click="changeClass">设计组</li>
						<li data-zubie="front" 
						:class="choiceClass == 'front'?'active':'' "
						@click="changeClass"
						>前端组</li>
						<li data-zubie="behind" 
						:class="choiceClass == 'behind'?'active':'' "
						@click="changeClass">后台组</li>
						<li data-zubie="operating" 
						:class="choiceClass == 'operating'?'active':'' "
						@click="changeClass">运营组</li>
					</nav>
					<div class="introduceBox">
						<p class="intr-design" v-html="introText.design"
						v-show="choiceClass == 'design'"></p>
						<p class="intr-front" v-html="introText.front"
						v-show="choiceClass == 'front'"></p>
						<p class="intr-behind" v-html="introText.behind"
						v-show="choiceClass == 'behind'"></p>
						<p class="intr-operating" 
						v-html="introText.operating"
						v-show="choiceClass == 'operating'"></p>
					</div>
				</div>
				<div class="basMsg box" v-show="upIndex == 2">
					<form name="upForm" id='upForm'>
						<div class="inputBox" :key="index"
						v-for="(item, index) in upItem1">
							<p><span>*</span> {{item.china}}</p>
							<input type="text" :name="item.name"/>
						</div>
					</form>
				</div>
				<div class="detailMsg box" v-show="upIndex == 3">
					<div class="inputBox" :key="index"
					v-for="(item, index) in upItem2">
						<p>{{item.china}}</p>
						<textarea type="text" :name="item.name" 
						:placeholder=" '请在此输入'+ item.china">		
						</textarea>
					</div>
				</div>
			</div>
			<div class="btnBox">
				<div class="previous" 
				v-bind:style="OneStep"
				@click="preStep">
					上一步
				</div>
				<div v-show="upIndex !==3" 
				class="next" @click="nextStep">
					下一步
				</div>
				<div v-show="upIndex ==3" 
				class="next" @click="complete">
					完成
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import myhead from '@/components/Fhead'
	import axios from 'axios'
	export default {
		name:"Upload",
		components:{
		  myhead
		},
		data(){
			return{
				//'front','behind','operating'
				choiceClass:"design",
				//表示第几步,1:choiceClass,2:basMsg,3:detailMsg
				upIndex:1,	
				introText:{
				design:`属性：夜晚较为活泼物种 <br/>
            特征：脸色苍白、面无表情、黑眼圈、僵硬的肢体（与吸血鬼、僵尸特征相似）<br/>但是我们爱设计，爱生活，爱天马行空的想象。熬了无数的夜就是希望自己的作品能打动观看者的心。 <br/>爱，便义无反顾。<br/>`,
       	front:`主要基于Html/CSS/Javascipt，运用Jquery等库开发网页，以及运用AugularJS/Vue.js/React.js开发web应用，致力于呈现优美的页面，提供优秀的交互，并且在不断的改进中，使体验更加完美。 `,
       	behind:`我们认为，PHP是世界上最好的语言，没有之一。我们使用Linux/Unix，使用Terminal作为工作室的技术担当，拥有工作室最丰富的技术栈,PHP、JavaScript、Python、Ruby、Java自由切换，SQL、NoSQL灵活应用。`,
       	operating:`运营运营的策划者，<br/> 
				产品的背后分析优化者，<br/> 
				用户的产品维护者。`
				},
				upItem:[
					{	name:'name',
						china:'姓名'		 },					
					{	name:'academy',
						china:'学院专业'},
					{	name:'phone',
						china:'联系方式'},
					{ name:'intro',
						china:'个人简历'},
					{	name:'exper',
						china:'个人经历'}
				]
			}
		},
		methods:{
			changeClass(e){
				this.choiceClass = e.target.dataset.zubie
			},
			nextStep(){
				if (this.upIndex < 3) {
					this.upIndex++;
				}
			},
			preStep(){
				if (this.upIndex > 1) {
					this.upIndex--;
				}				
			},
			complete(){
				console.log(666)
			}
		},
		computed:{
			OneStep(){
				if (this.upIndex == 1) {
					return {
						opacity:0
					}
				}else{
					return {}					
				}
			},
			upItem1(){
				return this.upItem.slice(0,3);
			},
			upItem2(){
				return this.upItem.slice(3);
			},
		}
	}
</script>

<style scoped>
	#wrap{
		position: absolute;
		top: 0;left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(153, 153, 153, 0.6);
		z-index: 0;
		font-size: 13px;
	}
	.main{
		position: relative;
		width: 78vw;
		height: 70vh;
		margin:25vw auto 0 auto;
	}
	.imgBox input{
		display: inline-block;
		position: absolute;
		width: 22vw;
		height: 22vw;
		left: 50%;
		transform: translate(-50%,0); 
		opacity: 0;
		z-index: 4;
	}
	.imgBox{
		text-align: center;
	}
	.imgBox img{
		width: 22vw;
		height: 22vw;
		border-radius: 50%;
		z-index: 4;
	}
	.textBox{
		z-index: -1;
		background-color: #fff;
		height: 64vh;
		margin-top: -11vw;
		padding-left: 7vw;
		padding-right: 7vw;
		border-radius: 8px;
	}
	.stepBar{
		display: flex;
		padding:18vw 0 8vw 0;
	}
	li.activeStep{
		color: #333333;
	}
	.step{
		color: rgb(236, 236, 236);
	}
	.classNav{
		display: flex;
		justify-content: space-between;
	}
	.p{
		text-align: left;
		margin-bottom: 5vw;
	}
	.classNav{
		margin-bottom: 5vw;
	}
	.classNav li{
		font-size: 11px;
		width: 13vw;
		height: 4.7vw;
		line-height: 4.7vw;
		border: 1px solid rgb(118, 178, 253);
		color: rgb(118, 178, 253);
		border-radius: 15px;
	}
	.classNav li.active{
		background: rgb(118, 178, 253);
		border: 1px solid rgb(118, 178, 253);
		color: white;
	}
	.introduceBox>p{
		text-align: left;
		color: #666666;
	}
	/* 共有按钮 */
	.btnBox{
		padding: 0 7vw;
		display: flex;
		justify-content: space-between;
		margin-top: -9vh;
	}
	.btnBox>div{
		width: 20vw;
		height: 6vw;
		line-height: 6vw;
	}
	.next {
	    border: 1px solid rgb(51, 208, 102);
	    background: rgb(51, 208, 102);
	    border-radius: 10px;
	    color: white;
	}
	.previous {
	    border: 1px solid rgb(51, 208, 102);
	    background: white;
	    border-radius: 10px;
	    color:rgb(51, 208, 102);
	}
	.basMsg,
	.detailMsg{
		padding-left: 3vw;
		font-size: 12px;
		text-align: left;
	}
	.inputBox>p{
		height: 4vw;
		line-height: 4vw;
		margin: 4vw 0 2vw 0;
	}
	.inputBox>input{
		height: 6.7vw;
		width: 99%;
		border-radius: 5px;
		border: 1px solid rgb(178, 178, 178);
		text-indent: 2px;
	}
	.inputBox>textarea{
		width: 97%;
		height: 18vw;
		border: 1px solid rgb(191, 191, 191);
		border-radius: 5px;
		color: #333333;
		text-indent: 2px;
	}
	.inputBox p span{
		color: red;
	}
</style>