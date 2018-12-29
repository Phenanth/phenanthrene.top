<!DOCTYPE html>
<template>
<div class="userinfo-ga">
  <div class="main-ga">
    <div class="info-ga">
      <img src="../../../assets/GALogin/pic.jpeg" alt="个人照片">
      <div class="info-text">
        <div class="info-details"><b>username&nbsp; &nbsp;|&nbsp; &nbsp;</b> {{ userdata.user_id }}</div>
        <div class="info-details"><b>sex&nbsp; &nbsp;|&nbsp; &nbsp;</b> {{ userdata.user_sex }}</div>
        <div v-if="isVerified">
          <span class="label label-info">验证密钥</span>
          <div>{{ userdata.user_secret }}</div>
        </div>
      </div>
      
    </div>
    <div v-if="isVerified">
      <div class="alert alert-success" role="alert">
        <a href="#" class="alert-link">您已成功地完成双因子认证，请重新登陆进行验证。</a>
      </div>
      <button class="btn btn-default" v-on:click="doLogout()">退出登录</button>
      <button class="btn btn-default" v-on:click="doRemove()">关闭双因子验证</button>
    </div>
    <div class="verify" v-else>
      <div class="alert alert-warning" role="alert">
        <a class="alert-link">您已经关闭了双因子验证，请确认Google Authenticator上相应的验证器也已删除。</a>
      </div>
      <button class="btn btn-default" v-on:click="doLogout()">退出登录</button>
      <button class="btn btn-default" v-on:click="goTo('/GA-Login/verify-first')">进行双因子认证</button>
    </div>
  </div>
</div>
</template>
<script>
import api from '../../../api.js'
import store from '../../../store/index.js'
export default{
	name: 'Userinfo',
  data: function () {
    return {
      userdata: {
        user_id: '',
        user_sex: '',
        user_secret: ''
      }
    }
  },
	methods: {
		goTo: function (path) {
			this.$router.push(path)
		},
    doRemove: function () {
      let opt = {
        username: JSON.parse(store.getters.showTokenState).username
      }
      api.removeVerify(opt).then(({
        data
      }) => {
        if (data.info == 200) {
          let user = {
            username: JSON.parse(store.getters.showTokenState).username,
            token: JSON.parse(store.getters.showTokenState).token,
            verify: false
          }
          store.dispatch('updateToken', JSON.stringify(user))
          this.$router.go(0)
        } else {
          alert(data.message)
        }
      })
    },
    doLogout: function () {
      store.dispatch('removeToken')
      this.$router.go(0)
    }
	},
  computed: {
    isVerified: function () {
      if (this.userdata.user_secret) {
        return true
      } else {
        return false
      }
    }
  },
  mounted: function () {
    let opt = {
      username: JSON.parse(store.getters.showTokenState).username
    }
    api.getData(opt).then(({
      data
    }) => {
      if (data.info == 200) {
        // console.log(data)
        this.userdata.user_id = data.user_id
        this.userdata.user_sex = data.user_sex
        this.userdata.user_secret = data.user_secret
      } else {
        alert(data.message)
        logout()
      }
    })
  }
}
</script>
<style>

.userinfo-ga {
 
  background-color: white; 
 
}

.top {
  background-color: black;
  height: 55px;
  position: fixed;
  top:0px;
  left: 0px;
  width: 100%;
}

.top h3 {
  float: left;
  margin-top: 10px;
  margin-left: 30px;
  color: #0EA8A3;
  font-size: 25px;
}

.top img {
  margin-right: 60px;
  position: absolute;
  left: 91%;
  top: 30%;
  height: 25px;
  width: 25px;
  border: 0px;
}

.top input {
  float: right;
  color: #0EA8A3;
  width: 50px;
  background-color: black;
  border: 0px;
  height: 55px;
  width: 55px;
  font-size: 25px;
  font-weight: 550px;
  margin-right: 30px;
  cursor:pointer;
}

.top input:hover {
  color: white;
}

.main-ga {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  height: 100%;
  width: 100%;
  background-color: white;
}
/* .label{
  position: absolute;
  top: 15px;
  font-size: 20px;
  width: 160px;
  height: 50px;
  float: left;
  background-color: #0EA8A3;
  color: white;
}
.label h4{
  font-weight: 450;
  margin-top: 10px;
  margin-left: 30px;
} 
.arrow-left {
  position: absolute;
  left: 135px;
  top: 0px;
  font-size: 0;
  line-height: 0;
  border-width: 25px;
  border-color: white;
  border-left-width: 0;
  border-style: dashed;
  border-right-style: solid;
  border-top-color: transparent;
  border-bottom-color: transparent;
} */


.info-ga {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  font-size: 20px;
  margin-top: 70px;
  margin-bottom: 30px;
}

.info-ga > img {
  float:left;
  margin-top: 0px;
  border: 1px solid gray;
  height: 150px;
  width: 150px;
  border-radius:75px;

}

.info-ga ul{
  list-style: none;
  float: right;
  font-size: 30px;
  font-weight: 400;
  line-height: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.inf-ga ul li{
  text-align: right;
}

.info-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top:30px;
}
.info-details {
  margin:5px;
}
.info-text b {
   font-weight:bold;
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