<!DOCTYPE html>

<template>

	<div class="home">
		<div class="head-home">
			<span>HZNU Library's Information & Research Databases</span><span v-if="isWid"> | </span><hr v-else/><span v-if="isWid">用于学术信息的收集和论文·报告的杭州师范大学大学图书馆网站</span><span v-else>收集和论文·报告的杭州师范大学大学图书馆网站</span>
		</div>

		<div class="ctn-home row">
			<div class="category col-md-8 col-xs-12">
				<div class="category-head">
					<img height="30px" width="35px" src="⁨../../../../static/svg/library/right.svg">
					<span>学术信息数据库</span>
				</div>
				<div>
					<img height="30px" width="35px" src="⁨../../../../static/svg/library/right.svg">
					材料类型
				</div>
				<div class="category-list">
					<div class="category-list-box"><h5>书·杂志(250)</h5></div>
					<div class="category-list-box"><h5>论文·摘录(720)</h5></div>
					<div class="category-list-box"><h5>新闻(120)</h5></div>
					<div class="category-list-box"><h5>人物·企业(80)</h5></div>
					<div class="category-list-box"><h5>词典·事典·统计(90)</h5></div>
				</div>
				<div>
					<img height="30px" width="35px" src="⁨../../../../static/svg/library/right.svg">
					领域
				</div>
				<div class="category-field">
					<div class="category-field-box"><h5>综合(170)</h5></div>
					<div class="category-field-box"><h5>教育资料(110)</h5></div>
					<div class="category-field-box"><h5>医疗保健(200)</h5></div>
					<div class="category-field-box"><h5>经济商业(120)</h5></div>
					<div class="category-field-box"><h5>文学(130)</h5></div>
					<div class="category-field-box"><h5>政治法律(100)</h5></div>
					<div class="category-field-box"><h5>历史(120)</h5></div>
					<div class="category-field-box"><h5>就职信息(130)</h5></div>
					<div class="category-field-box"><h5>其他(40)</h5></div>
				</div>
			</div>
			<div class="info col-md-4 col-xs-12">
				<div class="info-head">
					<img height="30px" width="35px" src="⁨../../../../static/svg/library/left.svg">
					通知
				</div>
				<div class="info-list col-xs-12">
					<div class="info-list-box col-xs-12"><h5>关于2019年元旦图书馆开放安排的通知</h5></div>
					<div class="info-list-box"><h5>退笔成山未足珍，读书万卷始通神——CASHL管理学资源优惠活动开始了</h5></div>
					<div class="info-list-box"><h5>12 / 29 两条校图书馆临时休馆的通知</h5></div>
					<div class="info-list-box"><h5>12月图书馆规划展示相关的通知</h5></div>
				</div>
			</div>
		</div>

		<div class="ga-foot">
			<div class="foot-info col-md-6 col-xs-12">
				<h2>HZNU | 图书馆</h2>
				<span>>>>> 这里会有一个LOGO和学校名字</span>
				<span>©2018 HangZhou Normal UNIVERSITY LIBRARY All Rights Reserved.</span>
			</div>
			<div class="foot-search col-md-3" v-if="isWid">
				<span><b>情报检索</b></span>
				<span>轻松检索</span>
				<span>藏书检索</span>
				<span>学术信息数据库</span>
			</div>
			<div class="foot-client col-md-3" v-if="isWid">
				<span><b>客户服务</b></span>
				<span>文献管理</span>
				<span>远程访问服务</span>
			</div>
		</div>

	</div>
</template>

<script>
export default {
	name: 'Home',
	methods: {
		goTo: function (path) {
			this.$router.push(path)
		}
	},
	computed: {
		isWid: function () {
			if (document.body.clientWidth < 992) {
				return false
			} else {
				return true
			}
		}
	}
}
</script>

<style>

.home {
	padding-top: 45px;
	overflow-x: hidden;
	overflow-y: hidden;
}

.ctn-home {
	height: 100%;
	margin-top: 30px;
	margin-left: 10%;
	margin-right: 10%;
}

.head-home {
	padding: 8px;
	background-color: #caebea;
}

.head-home > span, .foot-info > span {
	font-size: 12px;
	color: gray;
}

/* 首页内容 */

.category, .info {
	display: flex;
	height: 100%;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	margin-bottom: 20px;
}

.category-list, .category-field {
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	text-align: center;
}

.info-list {
	display: flex;
	flex-direction: column;
}

.category-list-box, .category-field-box, .info-list-box {
	width: 100px;
	height: 100px;
	margin: 3px;
	display: flex;
	justify-content: center;
	margin-top: auto;
	margin-bottom: auto;
}

.category-list-box {

	border-color: lightblue;
	border-style: solid;
	border-width: 1px;
	background-color: #F0FFFF;
	text-align: center;
}

.category-field-box {
	border-color: lightblue;
	border-style: solid;
	border-width: 1px;
	background-color: #F0FFFF;
	text-align: center;
}

.info-list-box {
	background-color: white;
	text-align: left;
	padding: 10px;
	width: 100%;
	border-bottom: 1px solid grey;
}

.category-field-box, .category-list-box {
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 10px;
}

/* Footer */

.ga-foot {
	bottom: 0px;
	height: 150px;
	width: 100%;
	background-color: #caebea;
	display: flex;
	justify-content: center;
	padding-left: 15%;
	padding-right: 15%;
	margin-top: 100px;
}

.foot-info, .foot-search, .foot-client {
	margin: 5px;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding-left: 2%;
	padding-right: 2%;
	padding-top: 10px;
	padding-bottom: 30px;
}

.foot-info {
	justify-content: flex-end;
	flex-grow: 2;
}


.foot-search, .foot-client {
	flex-grow: 1;
}
.category-list-box:hover{
	border-color: #FF6347;
	background-color: #FFF5EE;
}
.category-field-box:hover{
	border-color: #FF6347;
	background-color: #FFF5EE;
}
h5:hover{
	color: #FF6347;
}

</style>