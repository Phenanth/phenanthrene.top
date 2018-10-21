<!DOCTYPE html>

<template>
	<div class="login-wrapper">

		<div class="login-content">
			<form>
				<div class="login-input form-group">
					<label for="input-user"><i class="fa fa-user fa-lg" aira-hiddin="ture"></i></label>
					
					<input class="form-control" name="first" type="text" placeholder="Admin ID">
				</div>
				<div class="login-input form-group">
					<label for="input-pw"><i class="fa fa-unlock fa-lg" aira-hiddin="ture"></i></label>
					<input class="form-control" name="first" type="text" placeholder="Admin PW">
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
}

.login-content {
	display: flex;
	margin-top: 120px;
	flex-direction: column;
	justify-content: center;
}

.login-input {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 300px;
	margin: 30px;

}

.btn-login {
	margin-top: 30px;
	width: 300px;
	color: rgb(135, 216, 205);
	font-weight: bold;
	background-color: black;
}

.btn-login:hover {
	color: white;
}


</style>