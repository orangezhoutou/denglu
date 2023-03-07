<template>
  <div class="denglu">
    <div class="cont">
      <h1 class="title">系统登录</h1>
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item prop="username">
          <el-input prefix-icon="el-icon-user" v-model="ruleForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input prefix-icon="el-icon-lock" type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="code" class="box">
          <el-input v-model="ruleForm.code" maxlength="4" prefix-icon="el-icon-thumb"></el-input>
          <img class="imgcode" :src="code_src" @click="change_src" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";

export default {
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("验证码不能为空"));
      } else {
        callback();
      }
    };
    var validateUsername = (rule, value, callback) => {
      // console.log(value);
      let reg = /^[^0-9]\w{5,12}$/;
      if (!reg.test(value)) {
        callback(new Error("账号输入有误"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      let reg = /^[^0-9]\w{5,12}$/;
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (!reg.test(value)) {
        callback(new Error("密码格式错误"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: "",
        password: "",
        code: ""
      },
      rules: {
        username: [{ validator: validateUsername, trigger: "blur" }],
        password: [{ validator: validatePass, trigger: "blur" }],
        code: [{ validator: checkAge, trigger: "blur" }]
      },
      code_src: "",
      uuid: "",
      timeer: 0
    };
  },
  created() {
    this.fn();
    this.timeer = setInterval(() => {
      this.fn();
    }, 60000);
  },
  beforeDestroy() {
    clearInterval(this.timeer);
  },
  methods: {
    fn() {
      let uuid = uuidv4();
      this.uuid = uuid;
      this.code_src = `https://www.chengzier.cn:8000/api/generateimagecode?uuid=${uuid}`;
    },
    change_src() {
      this.fn();
    },
    submitForm(formName) {//提交按钮
      this.$refs[formName].validate(valid => {
        if (valid) {
          //去发送请求
          this.$http({
            url:"api/supersignin",
            method:'POST',
            data: `username=${this.ruleForm.username}&password=${this.ruleForm.password}&uuid=${this.uuid}&text=${this.ruleForm.code}`
        }).then(res => {
          this.$message({
            message:res.data.msg, 
            type:"success" 
        });
          this.$router.push('/')
          console.log(res);
        }).catch(err => {
            
        })
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {//重置按钮
      this.$refs[formName].resetFields(); 
    }
  }
};
</script>
<style lang="less" scoped>
.denglu .el-form-item__content {
  margin: 0 !important;
}
.denglu .el-input input {
  background-color: transparent;
  border: none;
  height: 47px;
  color: #fff;
}
.denglu .box .el-form-item__content {
  display: flex;
}
</style>
<style lang="less" scoped>
.denglu {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #2d3a4b;
  background-image: url(../../assets/R-C.jpg);
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.denglu .cont {
  width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.denglu .cont .title {
  font-size: 26px;
  color: #eee;
  margin: 0 auto 40px auto;
  text-align: center;
  font-weight: 700;
}
.denglu .el-input {
  background-color: rgba(0, 0, 0, 0.1);
  border: 1px solid hsla(0, 0%, 100%, 0.1);
  border-radius: 5px;
}
.denglu .imgcode {
  display: block;
  height: 46px;
  cursor: pointer;
}
</style>