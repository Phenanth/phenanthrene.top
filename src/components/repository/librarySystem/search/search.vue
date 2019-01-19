<!DOCTYPE html>
<template>
<div class="search">
	<div>
		<div class="left col-md-3 col-md-offset-0 col-xs-4 col-xs-offset-4">
			<div class="title">缩小检索范围</div>
			<div class="classify">
				<div>分类：</div>
				<ul>
					<li>・<font>哲学、宗教</font>(88)</li>
					<li>・<font>文学</font>(32)</li>
					<li>・<font>社会科学总论</font>(25)</li>
					<li>・<font>经济</font>(9)</li>
					<li>・<font>艺术</font>(6)</li>
					<li>・<font>历史、地理</font>(5)</li>
					<li>・<font>语言、文字</font>(3)</li>
					<li>・<font>工业技术</font>(2)</li>
					<li>・<font>政治、法律</font>(1)</li>
					<li>・<font>军事</font>(1)</li>
					<li>・<font>自然科学总论</font>(1)</li>
					<li>・<font>生物科学</font>(1)</li>
					<li>・<font>交通运输</font>(1)</li>
					<li>・<font>农业科学</font>(1)</li>
					<li>・<font>医药、卫生</font>(1)</li>
				</ul><br>
				<div>文献类型：</div>
				<ul>
					<li>・<font>中文图书</font>(154)</li>
					<li>・<font>西文图书</font>(5)</li>
					<li>・<font>录像资料</font>(1)</li>
				</ul><br>
				<div>作者：</div>
				<ul>
					<li>・<font>周国平</font>(164)</li>
					<li>・<font>严军</font>(118)</li>
					<li>・<font>法布尔</font>(109)</li>
					<li>・<font>沈从文</font>(80)</li>
					<li>・<font>冯友兰</font>(64)</li>
				</ul>
			</div>
		</div>
		<div class="right col-md-8 col-md-offset-0 col-xs-5 col-xs-offset-3">
			<div class="result">
				<div>共有<font>49826</font>条搜索结果</div><br>
				<div>关键字:<font>人性</font></div><br>
				<ul>
					<li class="book">
						<input name="Book" type="checkbox" value="1" />
						<img v-if="isWid" src="../../../../assets/library/search/exp1.jpeg" v-on:click="goTo('/search_detail')">
						<ul>
							<li class="book_title" v-on:click="goTo('/library/search-detail')">《<font>人性</font>》</li>
							<li>作  者 : （美）戴尔·卡耐基著</li>
							<li>出版日期 : 2014.10 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;页  数 : 251</li>
							<li>简  介 : 本书汇集了卡耐基最激励人心的内容，包括“<font>人性</font>的弱点”与“<font>人性</font>的优点”等。这也是卡耐基流传甚广的励志讲稿，出版后获得了广大读者的欢迎，很多读者通过阅读和学习书中富有正能量的方法，不仅...</li>
							<li>ISBN : 978-7-5139-0450-6</li>
							<li>分  类 : 哲学、宗教->心理学->个性心理学（人格心理学）->信念、意志、行为</li>
						</ul>
					</li>
					<li class="book">
						<input name="Book" type="checkbox" value="2" />
						<img v-if="isWid" src="../../../../assets/library/search/exp3.jpeg" v-on:click="goTo('/library/search_detail')">
						<ul>
							<li class="book_title" v-on:click="goTo('/library/search-detail')">《<font>人性</font>》</li>
							<li>作  者 : （美）戴尔·卡耐基著</li>
							<li>出版日期 : 2017.02 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;页  数 : 432</li>
							<li>简  介 : 本书一能让人克服畏惧，建立自信，使内心强大;二能让人读懂人性，学会良好的人际沟通技巧;三能让人学会运用<font>人性</font>的弱点与优点，成为一个能办事、受欢迎的人。...</li>
							<li>ISBN : 978-7-5502-8998-7</li>
							<li>分  类 : 哲学、宗教->心理学->个性心理学（人格心理学）->信念、意志、行为</li>
						</ul>
					</li>
					<li class="book">
						<input name="Book" type="checkbox" value="3" />
						<img v-if="isWid" src="../../../../assets/library/search/exp4.jpeg" v-on:click="goTo('/library/search_detail')">
						<ul>
							<li class="book_title" v-on:click="goTo('/library/search-detail')">《<font>人性</font>论》</li>
							<li>作  者 : 张宽政著</li>
							<li>出版日期 : 2013.01 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;页  数 : 215</li>
							<li>简  介 : 本书讲述科学认识人性当以人与动物的区别为基点，作为人的属性可分善恶，劳动是人的第一特征，“一切社会关系的总和”是<font>人性</font>善恶的种子。...</li>
							<li>ISBN : 978-7-5120-0640-9</li>
							<li>分  类 : 哲学、宗教->伦理学(道德哲学)->伦理学理论与方法论->伦理学流派及其研究</li>
						</ul>
					</li>
					<li class="book">
						<input name="Book" type="checkbox" value="4" />
						<img v-if="isWid" src="../../../../assets/library/search/exp5.jpeg" v-on:click="goTo('/library/search_detail')">
						<ul>
							<li class="book_title" v-on:click="goTo('/library/search-detail')">《<font>人性</font>的烛光》</li>
							<li>作  者 : 陈忠武著</li>
							<li>出版日期 : 2004.05 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;页  数 : 414</li>
							<li>简  介 : 本书是一本寻<font>人性</font>生长和<font>人性</font>路径选择的善书，追问了人之为人的本质所在。书中汲取了古今中外无数哲人的思想精华，反映了作者个人生活、阅读、观察、思考的心路历程。...</li>
							<li>ISBN : 7-222-04071-4</li>
							<li>分  类 : 哲学、宗教->伦理学(道德哲学)</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<div class="page col-xs-8 col-xs-offset-0">
		<div v-on:click="goTo('/library/search')">1</div>
		<div v-on:click="goTo('/library/search')">2</div>
		<div v-on:click="goTo('/library/search')">3</div>
		<div v-on:click="goTo('/library/search')">4</div>
		<div v-on:click="goTo('/library/search')">5</div>
		<div v-on:click="goTo('/library/search')">6</div>
		<div v-on:click="goTo('/library/search')">7</div>
		&nbsp;&nbsp;...&nbsp;&nbsp;
		<div class="next_page" v-on:click="goTo('/library/search')">下一页</div>
		<input type="text" class="form-control" placeholder="页码">
		<button class="btn btn-default" type="button" v-on:click="goTo('/library/search')">go</button>
	</div>
	
	<div class="foot-sc">
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
	name: 'Search',
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
	}
	.search {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		overflow-y: hidden;
	}
	.search .left {
		/*position: absolute;*/
		border: 1px solid #0EA8A3;
		height: 970px;
		padding: 0px;
		/*width: 300px;*/
		margin-top: 70px;
	}
	.search .left .title {
		height: 48px;
		background-color: #0EA8A3;
		color: white;
		text-align: left;
		padding: 10px;
		font-weight: bolder;
		font-size: 21px;
	}
	.search .left .classify {
		text-align: left;
		padding: 15px;
		font-size: 16px;
	}
	.search .left .classify div {
		font-weight: bolder;
		height: 30px;
		margin-bottom: 10px;
		border-bottom:1px solid lightgray;
	}
	.search .left .classify ul {
		line-height: 28px;
		list-style: none;
		padding-left: 0px;
	}
	.search .left .classify ul li{
		cursor: pointer;
	}
	.search font {
		color: #5F9EA0;
	}
	.search .right font {
		color: red;
	}
	.search .right {
		text-align: left;
		margin-top: 70px;
	}
	.search .right .result {
		margin-left: 30px;
		font-size: 20px;
	}
	.search .right .result .book {
		display: flex;
		align-items: center;
		padding-top: 20px;
		list-style: none;
		width: 100%;
		border-bottom:1px solid lightgray;
	}
	.search .right .result .book input {
		position: relative;
		background-color: white;
		cursor: pointer;
	}
	.search .result .book img{
		margin: 20px;
		margin-top: 5px;
		flex: left;
		cursor: pointer;
	}
	.search .result .book ul {
		display: inline-block;
		list-style: none;
		font-size: 16px;
		line-height: 40px;
		height: 100%;
		width: 780px;
	}
	.search .book_title {
		font-size: 20px;
		cursor: pointer;
	}
	.search .book_title:hover{
		color: #708090;
	}
	.search .page {
		padding-top: 30px;
		text-align: center;
		margin-bottom: 20px;
	}
	.search .page div {
		cursor: pointer;
		display: inline-block;
		width: 35px;
		height: 35px;
		padding-top: 4px;
		border:1px solid #5F9EA0;
		text-align: center;
		font-size: 18px;
	}
	.search .page div:first-child {
		background-color: #5F9EA0;
		color: white;
	}
	.search .page .next_page {
		width: 105px;
		height: 35px;
	}
	.search .page input{
		margin-left: 40px;
		height: 35px;
		max-width: 100px;
		width: 40%;
		display: inline-block;
	}
	.search .page button{
		margin-left: 10px;
	}
	.search .page button:hover{
		background-color: #5F9EA0;
		color: white;
	}
	.search .page div:hover{
		background-color: #5F9EA0;
		color: white;
	}
	.search .foot-info > span {
		font-size: 12px;
		color: gray;
	}
	.search .foot-sc {
		height: 150px;
		width: 100%;
		background-color: #caebea;
		display: flex;
		justify-content: center;
		padding-left: 15%;
		padding-right: 15%;
	}

	.search .foot-info, .search  .foot-search,.search .foot-client {
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

	.search .foot-info {
		justify-content: flex-end;
		flex-grow: 2;
	}


	.search .foot-search,.search .foot-client {
		flex-grow: 1;
	}
</style>