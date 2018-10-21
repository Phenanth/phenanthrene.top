<!DOCTYPE html>

<template>
	<div class="login-wrapper">
		<span>Don't waste your time if you're not an ADMIN.</span>
		<span>There is no register page.</span>
		<div class="login-content">
			<form>
				<div class="login-input form-group">
					<label for="input-user"><i class="fa fa-user fa-lg" aira-hiddin="ture"></i></label>
					
					<input class="form-control" name="first" type="text">
				</div>
				<div class="login-input form-group">
					<label for="input-pw"><i class="fa fa-unlock fa-lg" aira-hiddin="ture"></i></label>
					<input class="form-control" name="first" type="text">
				</div>
				<button type="button" class="btn btn-login">Login</button>
			</form>
		</div>

		</div>
		
	</div>
</template>

<script></script>

<style>

.login-wrapper {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 30px;
}

.login-wrapper > span {
	font-size: 30px;
	font-weight: bold;
	align-self: flex-start;
}

.login-content {
	display: flex;
	margin-top: 50px;
	flex-direction: column;
	justify-content: center;
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
	width: 300px;
	margin: 30px;
}
.login-input:hover {
	color: white;
}

.form-control {
	color: black;
	background-color: rgb(135, 216, 205);
}
.form-control:focus {
	border-color: rgb(135, 216, 205);
	box-shadow: none;
}

.btn-login {
	margin-top: 30px;
	margin-bottom: 30px;
	width: 300px;
	color: black;
	font-weight: bold;
	background-color: rgb(135, 216, 205);
}

.btn-login:hover {
	color: white;
}


</style>