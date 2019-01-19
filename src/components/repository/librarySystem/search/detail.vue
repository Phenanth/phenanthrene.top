<!DOCTYPE html>
<template>
	<div class="search-detail">
		<div class="back col-md-offset-1 col-xs-offset-1" v-on:click="goTo('/library/search')">< 返回</div>
		<div class="book">
			<div>
				<img v-if="isWid" class="col-md-2 col-md-offset-2" src="../../../../assets/library/search/exp1.jpeg" v-on:click="goTo('/library/search_detail')">	
				<ul class="col-md-6 col-md-offset-0 col-xs-10 col-xs-offset-1">
					<li class="book_title" v-on:click="goTo('/library/search_detail')"><font>人性</font></li>
					<li>作 者 ：（美）戴尔·卡耐基著</li>
					<li>出版发行 : 北京：民主与建设出版社 , 2014.10</li>
					<li>ISBN号 ：978-7-5139-0450-6</li>
					<li>页 数 ： 251</li>
					<li>原书定价 : 35.00</li>
					<li>开本 : 24cm</li>
					<li>主题词 : 成功心理-通俗读物</li>
					<li>中图法分类号 : B848.4 ( 哲学、宗教->心理学->个性心理学（人格心理学）->信念、意志、行为 )</li>
					<li>内容提要: 本书汇集了卡耐基最激励人心的内容，包括“人性的弱点”与“人性的优点”等。这也是卡耐基流传甚广的励志讲稿，出版后获得了广大读者的欢迎，很多读者通过阅读和学习书中富有正能量的方法，不仅走出了人生困境，有的还成为知名的成功人士，对许多渴望通过自己的奋斗获得成功的普通人有激励意义。</li>
					<li>参考文献格式 : （美）戴尔·卡耐基著. 人性[M]. 北京：民主与建设出版社, 2014.10.</li>
				</ul>
			</div>
			<hr/>
			<!-- <div class="title">馆藏:</div> -->
			<table class="col-md-8 col-md-offset-2 col-xs-10 col-xs-offset-1" width="100%" border="0" align="center" cellpadding="5" cellspacing="0" id="item">
				<tbody>
					<tr class="greytext1">
					    <td>索书号</td>
					    <td>条码号</td>
					    <td>年卷期</td>
					    <td>校区—馆藏地</td>
					    <td>书刊状态</td>
					</tr>
					<tr class="whitetext">
					    <td width="10%">F632/1099 </td>
					    <td width="15%">NUAA2018042176</td>
					    <td width="10%">&nbsp; </td>
					    <td width="25%" title="仓前新书阅览室(五楼北)">仓前校区图书馆—仓前新书阅览室(五楼北)  &nbsp;&nbsp;&nbsp;</td>
					    <td width="20%"><font color="green">可借</font></td>
					</tr>
					<tr class="whitetext">
					    <td width="10%">F632/1099 </td>
					    <td width="15%">NUAA2018042177</td>
					    <td width="10%">&nbsp; </td>
					    <td width="25%" title="仓前新书阅览室(五楼北)">仓前校区图书馆—仓前新书阅览室(五楼北)  &nbsp;&nbsp;&nbsp;</td>
					    <td width="20%"><font color="green">可借</font></td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="recommend col-md-10 col-md-offset-1 col-xs-11">
			<div class="recommend_title"><font>相关书目推荐</font></div>
			<div class="recommend_component">
				<ul>
				<li>1.转变</li>
				<li>2.心态决定命运</li>
				<li>3.选择你的事业 做生不如做熟</li>
				<li>4.可以平凡但不能甘于平凡</li>
				<li>5.命运之上的风景</li>
				<li>6.奇迹也简单</li>
				<li>7.启迪人生的篇章</li>
				<li>8.清点生活</li>
				<li>9.清心</li>
				<li>10.人生从设定目标开始</li>
			</ul>
			</div>
		</div>
		<div class="foot">
			<div class="foot-info">
				<h2>HZNU | 图书馆</h2>
				<span>>>>> 这里会有一个LOGO和学校名字</span>
				<span>©2018 HangZhou Normal UNIVERSITY LIBRARY All Rights Reserved.</span>
			</div>
			<div v-if="isWid" class="foot-search">
				<span><b>情报检索</b></span>
				<span>轻松检索</span>
				<span>藏书检索</span>
				<span>学术信息数据库</span>
			</div>
			<div v-if="isWid" class="foot-client">
				<span><b>客户服务</b></span>
				<span>文献管理</span>
				<span>远程访问服务</span>
			</div>
		</div>	
	</div>			
</template>

<script>
	export default {
	name: 'Search-detail',
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
	html ,body{ 
		overflow-y: scroll;
	}
	.search-detail {
		margin-top: 70px;
		overflow-y: hidden;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.search-detail .back {
		font-size: 20px;
		cursor: pointer;
		align-self: flex-start;
	}
	.search-detail .back:hover {
		color: #5F9EA0;
	}
	.search-detail .book {
		list-style: none;
	}
	.search-detail .book img{
		margin-top: 10px;
		width: 15%;
	}
	.search-detail .book ul {
		text-align: left;
		display: inline-block;
		list-style: none;
		font-size: 18px;
		line-height: 40px;
		height: 100%;
	}
	.search-detail .book .book_title {
		font-size: 20px;
	}
	.search-detail font {
		font-size: 30px;
		font-weight: bolder;
	}
	.search-detail .book .title {
		font-size: 22px;
		font-weight: bolder;
		text-align: left;
		margin-left: 6%;
		margin-top: 50px;
	}
	.search-detail #item td {
		border-bottom:1px dashed #D9D9D9;
	}
	.search-detail #item font {
		font-size: 20px;
	}
	.search-detail #item tr:first-child td{
		background-color: #EAEAEA;
	}
	.search-detail #item tr:last-child td{
		border-bottom:1px solid #5F9EA0;
	}
	.search-detail #item {
		margin-top: 15px;
		height: 100px;
		line-height: 40px;
		border:1px solid #5F9EA0;
	}
	.search-detail .recommend {
		text-align: left;
		height: 70%;
		padding-left: 80px;
		margin-top: 20px;
	}
	.recommend_title {
		border-bottom: 2px solid #6495ED;
	}
	.recommend_component {
		border-top: 1px solid lightgray;
	}
	.recommend_component ul {
		padding-top: 20px;
		padding-left: 0px;
		display: inline-block;
		list-style: none;
		font-size: 20px;
		line-height: 40px;
		height: 100%;
	}
	.search-detail .foot-info > span {
		font-size: 12px;
		color: gray;
	}
	.search-detail .foot {
		height: 150px;
		width: 100%;
		background-color: #caebea;
		display: flex;
		justify-content: center;
		padding-left: 15%;
		padding-right: 15%;
	}

	.search-detail .foot-info, .search-detail .foot-search, .search-detail .foot-client {
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

	.search-detail .foot-info {
		justify-content: flex-end;
		flex-grow: 2;
	}


	.search-detail .foot-search, .search-detail .foot-client {
		flex-grow: 1;
	}
</style>