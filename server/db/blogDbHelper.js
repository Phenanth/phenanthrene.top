'use strict'

const Express = require('express');
const router = Express.Router();
const db = require('./connect.js');
const createToken = require('../middleware/createToken.js');
const checkToken = require('../middleware/checkToken.js');

// 加密
var crypto = require('crypto');
// 固定盐
var salt = "abcdefghijklmnopqrstuvwxyz";

// 生成双因子认证的密钥
var speakeasy = require('speakeasy')
// 生成二维码数据串
var QRCode = require('qrcode')

// 登录
const Login = (req, res) => {

	// md5加密法
	var md5 = crypto.createHash('md5');

	let validTime = '10s';
	let queryString = {
		sql: 'SELECT user_password, user_secret FROM blog_user WHERE user_id=?',
		values: [req.body.username],
		timeout: 40000
	};

	if (req.body.willStore) {
		validTime = '168h';
	}
	
	// console.log(req.body);

	// 获得md5的哈希结果
	md5.update(req.body.password);
	md5 = crypto.createHash('md5');

	db.query(queryString, function(error, results, fields) {

		if (error) {
			console.log(error);
		}
		
		if (results) {
			// 防止code: 'ER_NOT_SUPPORTED_AUTH_MODE'类型错误
			if (!results[0]) {
				// 用户不存在
				console.log('Operation: Login, State: 404, Message: User not existed.');
				res.json({
					info: 404,
					success: false,
					message: 'User not exists.'
				});
			} else {
				// 如果有匹配的用户
				md5.update(req.body.password + salt);
				if (md5.digest('hex') == results[0].user_password) {
					// 密码正确
					console.log('Operation: Login, State: 200');
					res.json({
						info: 200,
						success: true,
						user_secret: new Boolean(results[0].user_secret),
						token: createToken(req.body.username, validTime)
					});	
				} else {
					// 密码错误
					console.log('Operation: Login, State: 304, Message: Wrong password.');
					res.json({
						info: 304,
						success: false,
						message: 'Wrong password.'
					});
				}
			}
		} else {
			console.log('Operation: Login, State: 504, Message: Unknown DB Fault.');
			res.json({
				info: 504,
				success: false,
				message: 'Unknown DB Fault.'
			});
		}
	});

};

/*Register*/
const Register = (req, res) => {

	// md5加密法
	var md5 = crypto.createHash('md5');
	md5.update(req.body.password);
	md5 = crypto.createHash('md5');
	md5.update(req.body.password + salt);
	// 经过md5加密的密码
	req.body.password = md5.digest('hex');

	let validTime = '10s';
	let queryString = {
		sql: 'SELECT user_id FROM user WHERE user_id=?',
		values: [req.body.username],
		timeout: 40000
	};
	let queryStringInsert = {
		sql: 'INSERT INTO blog)user (`user_id`, `user_password`) VALUES (?)',
		values: [
			[req.body.username, req.body.password]
		],
		timeout: 40000
	};
	
	// console.log(req.body);

	db.query(queryString, function(error, results, fields) {

		if (error) {
			console.log(error);
		}
		
		if (results) {
			// 防止code: 'ER_NOT_SUPPORTED_AUTH_MODE'类型错误
			if (results[0]) {
				// 用户已注册
				console.log('Operation: Register, State: 404, Message: User already exists.');
				res.json({
					info: 404,
					success: false,
					message: 'The user you were trying to create already exists.'
				});
			} else {
				// 如果没有被注册将相关信息插入数据库
				db.query(queryStringInsert, function(error, results, fields) {
					if (error) {
						console.log(error);
					}
					res.json({
						info: 200,
						success: true
					});
				});
			}
		} else {
			console.log('Operation: Register, State: 504, Message: Unknown DB Fault.');
			res.json({
				info: 504,
				success: false,
				message: 'Unknown DB Fault.'
			});
		}
	});

};

// 获取用户信息，用于加载到用户信息页面
const GetUserData = (req, res) => {
	let queryString = {
		sql: 'SELECT user_id FROM blog_user WHERE user_id=?',
		values: [req.body.username],
		timeout: 40000
	};
	db.query(queryString, function(error, results, fields) {
		if (error) {
			console.log(error)
		}

		if (results) {
			if (results[0]) {
				res.json({
					info: 200,
					success: true,
					user_id: results[0].user_id
				});
			}
		}

	});
};

// update user set user_secret=null where user_id='alice';
const SendVerify = (req, res) => {

	var secret = speakeasy.generateSecret({length: 20});

	let queryString = {
		sql: 'UPDATE blog_user SET user_secret_temp=? WHERE user_id=?',
		values: [
			[secret.base32],
			[req.body.username]
		],
		timeout: 40000
	};

	db.query(queryString, function (error, results, fields) {

		if (error) {
			console.log(error)
		}

		// 返回密钥串的二维码串用于显示
		QRCode.toDataURL(secret.otpauth_url, function (err, image_data) {
		
			if (err) {
				console.log(err)
			}
			
			res.json({
				image: image_data
			});

		});

	})

};

// 验证六位验证码
const BlogVerify = (req, res) => {

	var verifyCode = req.body.verifyCode
	var validTime = '24h'

	let queryString = {
		sql: 'SELECT user_id, user_secret FROM blog_user WHERE user_id=?',
		values: 'miotokyo',
		//values: [req.body.username],
		timeout: 40000
	}

	// 防止用户验证到一半结束验证导致数据库返回错误信息，添加一个temp表用于临时创建使用
	if (req.body.first) {
		queryString.sql = 'SELECT user_secret_temp FROM blog_user WHERE user_id=?'
	}
	
	db.query(queryString, function (error, results, fields) {

		if (error) {
			console.log(error)
		}

		if (results) {
			if (results[0]) {
				var secret = ''

				// 分为初次验证与登陆验证两种情况
				if (req.body.first) {
					secret = results[0].user_secret_temp
				} else {
					secret = results[0].user_secret
				}

				// 根据用户密钥服务器生成正确的六位验证码
				var token = speakeasy.totp({
					secret: secret,
					encoding: 'base32'
				});

				//console.log(secret, token)

				// 确认用户验证码是否正确
				if (verifyCode == token) {
					if (req.body.first) {
						let queryString2 = {
							sql: 'UPDATE user SET user_secret=? WHERE user_id=?',
							values: [[secret], [req.body.username]],
							timeout: 40000
						};
						db.query(queryString2, function (error, results, fields) {
							if (error) {
								console.log(error)
							}
						})
						queryString2 = {
							sql: 'UPDATE user SET user_secret_temp=null WHERE user_id=?',
							values: [req.body.username],
							timeout: 40000
						};
						db.query(queryString2, function (error, results, fields) {
							if (error) {
								console.log(error)
							}
						})
						console.log('Operation: Verify, State: 200');
					} else {
						console.log('Operation: Verify, State: 200');
					}
					res.json({
						info: 200,
						success: true,
						username: results[0].user_id,
						token: createToken(results[0].user_id, validTime)
					});
				} else {
					console.log('Operation: Verify, State: 304, Message: Wrong Verify Code.');
					res.json({
						info: 304,
						success: false,
						message: 'Wrong Verify Code.'
					});
				}
			}
		} else {
			console.log('Operation: Verify, State: 504, Message: Unknown DB Fault.');
			res.json({
				info: 504,
				success: false,
				message: 'Unknown DB Fault.'
			});
		}

	});

};

// 删除双因子认证
const RemoveVerify = (req, res) => {
	let queryString = {
		sql: 'UPDATE blog_user SET user_secret=null WHERE user_id=?',
		values: [req.body.username],
		timeout: 40000
	};

	db.query(queryString, function(error, results, fields) {

		if (error) {
			console.log(error)
		}

		if (results) {
			console.log('Operation: Remove Verify, State: 200');
			res.json({
				info: 200,
				success: true
			})
		} else {
			console.log('Operation: Remove Verify, State: 504, Message: Unknown DB Fault.');
			res.json({
				info: 504,
				success: false,
				message: 'Unknown DB Fault'
			})
		}
	})
}

// 将模块挂载到服务器路由上，方便前端调用
module.exports = (router) => {

	router.post('/blog/login', Login);

	router.post('/blog/register', Register);

	router.post('/blog/getUserData', GetUserData);

	router.post('/blog/sendVerify', SendVerify);

	router.post('/blog/verify', BlogVerify);

	router.post('/blog/removeverify', RemoveVerify);

}
