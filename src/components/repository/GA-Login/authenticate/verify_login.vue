<!DOCTYPE html>
<template>
<div class="verifyLogin">
	<div class="alert alert-info" role="alert">请输入Google Authenticator中对应的六位双因子验证码。</div>
	<form class="text-verify">
		<div class="form-group">
			<label>验证码</label>
			<input id="verifyText" type="text" class="form-control" v-model="verifyCode" placeholder="六位验证码">
		</div>
	</form>
	<div class="ctl-verify">
		<button class="btn btn-default" v-on:click="goTo('/GA-Login/login')">返回</button>
		<button class="btn btn-default" v-on:click="doVerify()">进行验证</button>
	</div>
</div>
</template>

<script>
import api from '../../../../api.js'
import store from '../../../../store'
export default {
	name: 'Verify-First',
	data: function () {
		return {
			verifyCode: ''
		}
	},
	methods: {
		goTo: function ( path ) {
			this.$router.push(path)
		},
		doVerify: function () {
			if (this.verifyCode != '') {
				let opt = {
					username: JSON.parse(localStorage.getItem('token')).username,
					verifyCode: this.verifyCode
				}
				api.verify(opt).then(({
					data
				}) => {
					if (data.info == 200) {
						store.dispatch('removeAuth')
						this.$router.push('/GA-Login/userinfo')
						this.$router.go(0)
					} else {
						alert(data.message)
					}
				})
			} else {
				alert('Please input the verify code, length: 6.')
			}
		}
	}
}
</script>

<style>
.verifyLogin {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 140px;
}
	
#verifyText {
	width: 200px;
}
/* 
.form-group > label {
	float: left;
} */

.ctl-verify {
	width: 200px;
	display: flex;
	justify-content: space-between;
}

.btn-default {
  background-color: white ;
  color:#0EA8A3;
  border:2px solid #0EA8A3;
  font-weight:bold;
}
.btn-default:hover {
  background-color: white;
  color:#0c8a86;
  border:2px solid #0c8a86;
  font-weight:bold;
  cursor:pointer;
}
</style>