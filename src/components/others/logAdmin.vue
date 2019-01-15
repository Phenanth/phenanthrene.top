<!DOCTYPE html>

<template>
	<div class="login-wrapper container-fluid">
		<div class="login-header">
			<span>Login</span>
		</div>
		<div class="login-content">
			<form class="col-md-3 col-sm-3">
				<div class="input-input form-group">
					<label>Login Code</label>
					<input id="verifyText" type="text" class="form-control" v-model="verifyCode" placeholder="Input login code (Google Authenticator)">
				</div>
				<!-- <div class="login-input form-group">
					<label for="input-user"><i class="fa fa-user fa-lg" aira-hiddin="ture"></i></label>
					
					<input class="form-control" name="first" type="text">
				</div>
				<div class="login-input form-group">
					<label for="input-pw"><i class="fa fa-unlock fa-lg" aira-hiddin="ture"></i></label>
					<input class="form-control" name="first" type="password">
				</div> -->
				<button type="button" class="btn btn-login" v-on:click="doBlogVerify()">Verify Identity</button>
			</form>
		</div>

		</div>
		
	</div>
</template>

<script>
import api from '../../api.js'
import store from '../../store'
export default {
	name: 'BlogLogin',
	data: function () {
		return {
			verifyCode: ''
		}
	},
	methods: {
		doBlogVerify: function () {
			if (this.verifyCode != '') {
				let opt = {
					username: '',
					verifyCode: this.verifyCode,
					first: false
				}
				api.blogDoVerify(opt).then(({
					data
				}) => {
					if (data.info == 200) {
						alert('Login Successed.')
						let userBlog = {
							token: data.token,
							username: data.username
						}
						store.dispatch('storeTokenBlog', JSON.stringify(userBlog))
						//this.$router.push('/posts')
						this.$router.go(0)
					} else {
						alert(data.message)
					}
				})
			} else {
				alert('Input verify code.')
			}
		}
	}
}	

</script>

<style>

.login-header > span {
	color: black;
	font-weight: bold;
	font-size: 50px;
}

.login-wrapper > span {
	font-size: 30px;
	font-weight: bold;
	align-self: flex-start;
}

.login-content {
	width: 100%;
	height: 100%;
	margin-top: 30px;
}

.login-content > form {
	color: rgb(135, 216, 205);
	background-color: black;
	background:linear-gradient(-45deg, transparent 15px, black 0);
}

.login-input {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	color: black;
	background-color: rgb(135, 216, 205);
}
.login-input:hover {
	color: white;
}

.form-control:focus {
	border-color: rgb(135, 216, 205);
	box-shadow: none;
}

.btn-login {
	margin: 5px 30px 15px 30px;
	color: black;
	font-weight: bold;
	background-color: rgb(135, 216, 205);
}

.btn-login:hover {
	color: white;
}


::-webkit-input-placeholder { /* WebKit browsers */
    color:    black;
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
    color:    black;
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
    color:    black;
}
:-ms-input-placeholder { /* Internet Explorer 10+ */
    color:    black;
}

</style>