<!DOCTYPE html>
<template>
	<div class="about-wrapper">

		<div class="about-header">
			<p>About</p>
		</div>

		<div class="about-contents">
			<div class="about-content">
				<i class="fa fa-tag" aria-hidden="true"></i>
				<div>
					<p>Wanna see some of my posts?</p>
					<p class="about-underline">Check the 'Posts' tab.</p>
				</div>
			</div>
			<div class="about-content">
				<i class="fa fa-tag" aria-hidden="true"></i>
				<div>
					<p>Wanna see some project presents?</p>
					<p class="about-underline">Check the 'Repository' tab.</p>
				</div>
			</div>

			<div class="about-content">
				<i class="fa fa-git" aria-hidden="true"></i>
				<div>
					<p class="about-underline">Also, click the 'git' icon to see my github page.</p>
				</div>
			</div>
			<div class="about-content">
				<i class="fa fa-magic" aria-hidden="true"></i>
				<div>
					<p>Last, see if you can find something interesting on the page.</p>
					<p class="about-underline">Tips: The another icon on the nav bar.</p>
				</div>
			</div>
		</div>

	</div>

</template>
<script></script>
<style>

.about-header {
	color: black;
	font-weight: bold;
	font-size: 40px;
}

.about-contents {
	margin-top: 10px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	font-weight: bold;
	max-width: 55%;
}
.about-content {
	display: flex;
	margin-top: 10px;
	flex-direction: row;
	justify-content: center;
	color: rgb(135, 216, 205);
	padding: 10px 10px 0px 10px;
	background: black; 
	background:linear-gradient(-45deg, transparent 15px, black 0);

}

.about-content > div {
	margin-left: 20px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
}

.about-underline {
	background: linear-gradient(90deg, rgb(135, 216, 205) 66%, transparent 0) repeat-x; 
	background-size: .8em 1px; 
	background-position: .1em 1.2em;
}

.about-underline-white {
	background: linear-gradient(90deg, black 66%, transparent 0) repeat-x; 
	background-size: .8em 1px; 
	background-position: .1em 1.2em;
}

</style>