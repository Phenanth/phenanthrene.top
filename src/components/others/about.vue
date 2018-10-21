<!DOCTYPE html>
<template>
	<div class="about-wrapper">

		<div class="about-title">
			<span>phenanthrene.top</span>
		</div>

		<div class="about-contents">
			<div class="about-content">
				<i class="fa fa-tag" aria-hidden="true"></i>
				<div>
					<p>Wanna see some of my posts?</p>
					<p class="about-underline">Check the 'Home-page' tab.</p>
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
.about-wrapper {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	padding: 30px;
}

.about-title {
	color: black;
	font-weight: bold;
	font-size: 50px;
}

.about-contents {
	margin-top: 30px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	font-weight: bold;
}
.about-content {
	display: flex;
	margin-top: 10px;
	flex-direction: row;
	justify-content: center;
	color: rgb(135, 216, 205);
	min-height: 80px;
	padding: 10px;
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

</style>