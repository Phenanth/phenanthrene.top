<!DOCTYPE html>
<template>
<div class="ensure" id="Borrow_Message">
	<div class="ctn-ensure" v-if="this.presentModule == 'borrow'">
		<h4 class="username">姓名：李明</h4>
		<h4 class="usernumber">卡号：201621043</h4>
		<h4 class="bookNum">可借阅数量：10本</h4>

		<h2 class="tip">您所要借阅的图书为：</h2>
		<table border="1px solid black">
			<tbody>
				<tr>
					<th abbr="借书事物编号">借书事物编号</th>
					<th abbr="题名">题名</th>
					<th abbr="备注">备注</th>
				</tr>
				<tr>
					<td class="Borrow_showId">101589591</td>
					<td class="Borrow_bookName">十万个为什么</td>
					<td class="Borrow_remarks">应还日期：<a>2018-12-1</a></td>
				</tr>
				<tr>
					<td class="Borrow_showId">101589500</td>
					<td class="Borrow_bookName">西游记</td>
					<td class="Borrow_remarks">应还日期：<a>2018-12-1</a></td>
				</tr>
				<tr>
					<td class="Borrow_showId">101589599</td>
					<td class="Borrow_bookName">百年孤独</td>
					<td class="Borrow_remarks">应还日期：<a>2018-12-1</a></td>
				</tr>
			</tbody>
		</table>
		<div class="ctl-buttons-lb">
			<input type="button" value="确认借阅" v-on:click="goTo(nextPath)">
			<input type="button" value="返回首页" v-on:click="goTo('/library')">
			<input type="button" value="重新选择" v-on:click="goTo(formerPath)">
		</div>
	</div>
	<div class="ctn-ensure" v-else-if="this.presentModule == 'return'">
		<h2 class="username">姓名：李明</h2>
		<h2 class="usernumber">卡号：201621043</h2>
		<h2 class="tip">您所要归还的书籍为：</h2>
		<table border="1px solid black">
			<tbody>
				<tr>
					<th abbr="借书事物编号">借书事物编号</th>
					<th abbr="题名">题名</th>
					<th abbr="备注">备注</th>
				</tr>
				<tr>
					<td class="Return_showId">101589591</td>
					<td class="Return_bookName">十万个为什么</td>
					<td class="Return_remarks">应还日期：<a>2018-12-1</a></td>
				</tr>
				<tr>
					<td class="Return_showId">101589500</td>
					<td class="Return_bookName">西游记</td>
					<td class="Return_remarks">应还日期：<a>2018-12-1</a></td>
				</tr>
				<tr>
					<td class="Return_showId">101589599</td>
					<td class="Return_bookName">百年孤独</td>
					<td class="Return_remarks">应还日期：<a>2018-12-1</a></td>
				</tr>
			</tbody>
		</table>
		<div class="ctl-buttons-lb">
			<input type="button" value="确认归还" v-on:click="goTo(nextPath)">
			<input type="button" value="退出" v-on:click="goTo('/library')">
		</div>
	</div>
	<div class="ctn-ensure" v-else="this.presentModule == 'fine'">
		<h2 class="username">姓名：李明</h2>
		<h2 class="usernumber">卡号：201621043</h2>
		<h2 class="tip" >您所需支付罚款的书籍：</h2>
		<table border="1px solid black">
			<tbody>
				<tr>
					<th abbr="超期事物编号">超期事物编号</th>
					<th abbr="题名">题名</th>
					<th abbr="备注">备注</th>
				</tr>
				<tr>
					<td class="Fined_showId">101589591</td>
					<td class="Fined_bookName">十万个为什么</td>
					<td class="Fined_remarks">超期天数：<a>30</a>天</td>
				</tr>
				<tr>
					<td class="Fined_showId">101589500</td>
					<td class="Fined_bookName">西游记</td>
					<td class="Fined_remarks">超期天数：<a>30</a>天</td>
				</tr>
				<tr>
					<td class="Fined_showId">101589599</td>
					<td class="Fined_bookName">百年孤独</td>
					<td class="Fined_remarks">超期天数：<a>30</a>天</td>
				</tr>
			</tbody>
		</table>
		<h2 class="tip"  id="Fined_Total">您所需支付的金额为：<a>9.00</a>元</h2>
		<div class="ctl-buttons-lb">
			<input type="button" value="确认支付" v-on:click="goTo(nextPath)">
			<input type="button" value="退出"  v-on:click="goTo('/library')">
		</div>
	</div>
</div>
</template>

<script>
export default {
	name: 'Ensure',
	data: function () {
		return {
			presentModule: '',
			formerPath: '',
			nextPath: ''
		}
	},
	methods: {
		goTo: function (path) {
			this.$router.push(path)
		}
	},
	mounted: function () {
		this.presentModule = this.$route.params.module
		this.formerPath = '/library/module/' + this.$route.params.module + '/tips'
		this.nextPath = '/library/module/' + this.$route.params.module + '/success'
	}
}
</script>
<style>

.ensure {
}

.ctn-ensure {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 20px;
}


/* #Borrow_Message {
	text-align: left;
	position:relative;
	left:12%;
	width:70%;
	margin:100px;
} */
.username,.bookNum,.usernumber {
	display : inline;
	margin-right:40px;
	font-size:30px;
	margin-left:1%;
}
#Borrow_Message input {
	max-width: 100px;
	width: 50%;
	margin-top:20px;
	margin-right:20px; 
	border:2px solid  #0EA8A3;     
	line-height: 30px;
	cursor: pointer;
	color: #0EA8A3;
	background:white;
} 
#Borrow_Message input:hover
{
	background-color:#0EA8A3;
	color:white;
}
#Borrow_Message table {
	margin-left:10px;
	width:800px;
	font-size: 15px;
}
#Borrow_Message tbody {
	border:1px solid lightgrey;
}
#Borrow_Message th {
	padding:15px;
	background-color: rgba(14,168,163,0.6);
}
#Borrow_Message tr {
	text-align:left;
	padding:15px;
}
#Borrow_Message td {
	padding:15px;
	
}
#Borrow_Message .Borrow_showId ,
#Borrow_Message .Return_showId,
#Borrow_Message .Fined_showId {
	width:18%;
}
#Borrow_Message .Borrow_bookName,
#Borrow_Message .Return_bookName,
#Borrow_Message .Fined_bookName {
  width:25%;
}
#Borrow_Message .tip{
}
#Borrow_Message #Fined_Total {
   float:left;
   display:inline;
}

.ctl-buttons-lb {
	display: flex;
	justify-content: center;
}

.ctl-buttons-lb > input {
	min-width: 80px;
}

</style>