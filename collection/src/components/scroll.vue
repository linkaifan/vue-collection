<template>
	<div id="scroll">
		<div class="imgBar">
			<transition-group name="img-list" tag="ul">
			    <li class="imgBox" v-for="(item,index) in items"
			    :id="index === curIndex?'activeImg':''" 
			    :key="index">
			    	{{item.img}}
			    </li>	
			</transition-group>	
			<p>(上下滑动可查看)</p>
		</div>
		<div class="msgText">
			<div class="textBox" v-for="(item,index) in items"
			v-show="curIndex == index">
				<h3 class="Title">{{item.title}}</h3>
				<div class="line"></div>
				<p class="intro">{{item.intro}}</p>
				<div class="content">
					<h4>技术领域：</h4>
					<p>{{item.content}}</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				oImgs:[],
				curIndex:0,
				items:[{
					img:'tu1',
					title:'1',
					intro:'11',
					content:'111',
				},{
					img:'tu2',
					title:'2',
					intro:'22',
					content:'222',
				},{
					img:'tu3',
					title:'3',
					intro:'33',
					content:'333',
				},{
					img:'tu4',
					title:'4',
					intro:'44',
					content:'444',
				},{
					img:'tu5',
					title:'5',
					intro:'55',
					content:'555',
				}]
			}
		},
		methods:{
			imgInitP() {
				this.oImgs = document.getElementsByClassName('imgBox')
				let Imgsheight = []
				let addTop = new Array(this.oImgs.length).fill(0)
				for (let i = 0; i < this.oImgs.length; i++) {
					Imgsheight.push(this.oImgs[i].clientHeight)
					this.oImgs[i].style.top = 0;
				}
				for (let i = 0; i < this.oImgs.length; i++) {
					for (let n = 0; n < i; n++) {
						addTop[i] += Imgsheight[n];
					}			
					this.oImgs[i].style.top = addTop[i] + 22*i +'px';
				}
			},
			init() {
				this.imgInitP()
	      this.play()
	      window.onblur = function() { this.stop() }.bind(this)
	     window.onfocus = function() { this.play() }.bind(this)
	    },
	    //dir 参数表示方向，-1向上滑动，1向下滑动，默认-1
			move(dir){
				dir = dir || -1;
				let oImgsLength = this.oImgs.length;		
				if (dir === -1) {
					if (this.curIndex !== 4) {
						++this.curIndex
					}else{
						this.curIndex = 0
					}					
					let t5 = this.oImgs[oImgsLength-1].style.top
					for (let i = oImgsLength-1;i >= 0; i--) {				
						if (i == 0) {
							this.oImgs[i].style.top = t5;
						}else{
							this.oImgs[i].style.top = this.oImgs[i-1].style.top
						}				
					}
				}else{
					if (this.curIndex) {
						--this.curIndex
					}else{
						this.curIndex = oImgsLength-1
					}		
					let t1 = this.oImgs[0].style.top 
					for (let i = 0;i <= oImgsLength-1;i++ ) {				
						if (i == oImgsLength-1) {
							this.oImgs[i].style.top = t1;
						}else{
							this.oImgs[i].style.top = this.oImgs[i+1].style.top
						}				
					}
				}		
				
			},
			play() {
		    if (this.timer) {
		        window.clearInterval(this.timer)
		        this.timer = null
		    }
		    this.timer = window.setInterval(() => {
		        this.move();
		    }, 2000)
			},
			stop() {
		    window.clearInterval(this.timer)
		    this.timer = null
			}
		},
		mounted() {
		  this.init()
		},
	}
</script>

<style scoped>
	#scroll{
		display: flex;
		padding:10vw;
	}
	.imgBar{
		width: 65vw;
		position: relative;
		overflow: hidden;
	}
	.imgBar>ul{
		height: 55vh;
	}
	#activeImg{
		width: 35vw;
		height: 25vw;
	}
	.imgBox{
		width: 25vw;
		height: 18vw;
		border:1px solid black;
		position: absolute;
		left: 50%;
		transform: translate(-50%,0);
	}
	.msgText{
		width: 60vw;
		padding-left: 10vw;
		text-align: left;
		position: relative;
	}
	.Title{
		color: rgb(55, 142, 255);
		font-weight: 500;
		font-size: 20px;
	}
	.line{
		margin: 2vw 0;
		background-color: rgba(55,142,255,0.4);
		width: 23vw;
		height: 1.5px;
	}
	.intro{
		color: rgb(55, 142, 255);
		font-size: 14px;
	}
	.content{
		color: #8c97a5;
		position: absolute;
		top: 17vh;
	}
	.content>h4{
		font-weight: 400;
		font-size: 15px;
		margin-bottom: 3vw;
	}
	.content>p{
		font-size: 12px;
	}

	/* 	move过渡 */

	.img-list-move{
		transition: all .5s;
	}

</style>