  <template>
  <!-- 登录页面设计
      1.表单
      2.验证
      3.登录实现,效果：loading
      4.状态信息的保存
      5.页面跳转
      6.reset
    -->
  <!-- <div>数量{{ userStore.count }}</div>
    <button @click="userStore.increat">count++</button> -->
  <el-form ref="ruleFormRef"
           :model="userForm"
           status-icon
           :rules="rules"
           class="demo-ruleForm">
    <el-form-item label="用户邮箱"
                  prop="email">
      <el-input v-model="userForm.email"
                autocomplete="off"
                placeholder="请输入你的邮箱"
                suffix-icon="Message" />
    </el-form-item>
    <el-form-item label="用户密码"
                  prop="password">
      <el-input type="password"
                v-model="userForm.password"
                autocomplete="off"
                placeholder="请输入你的密码"
                suffix-icon="Lock" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary"
                 @click="btnLogin">用户登录</el-button>
      <el-button @click="resetForm">重置</el-button>
    </el-form-item>
  </el-form>
  {{this.rou}}
</template>
    
  <script>
import { defineComponent } from 'vue';
import { userLogin } from '@/http/school.js';
import { mapActions, storeToRefs } from 'pinia';
import { useUserStore } from '../../store/user';
export default defineComponent({
  setup () {

  },
  data () {
    return {
      userForm: {
        email: '414090297@qq.com',
        password: '12345678',
        rou: "",
      },
      rules: {
        email: [
          { required: true, message: '请输入正确的电子邮箱', tirgger: 'blur' },
          { type: 'email', message: '电子邮箱格式错误', tirgger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入正确的用户密码', tirgger: 'blur' },
          { min: 8, message: '密码长度不得小于8', tirgger: 'blur' }
        ],
      },
    }
  },
  methods: {
    // 选项式
    getToken () {
      const userStore = useUserStore();
      return userStore.getToken;
    },

    ...mapActions(useUserStore, ['setToken', 'fillUserinfo']),
    btnLogin () {
      const that = this;
      const formEl = that.$refs.ruleFormRef//取ref对象
      // console.log(formEl);
      if (!formEl) return
      formEl.validate((valid) => {
        if (valid) {
          const res = userLogin(this.userForm)

          res.then(result => {

            //用户的状态 用户信息，用户是否登录的标志token='anc' isLogin：true
            //settoken
            //保存登录用户的信息
            //filluserinfo
            //调用状态pinia的辅助函数 mapActions
            //pinia 下次解决
            //跳转页面
            if (result.success) {
              const userinfo = result.data.userinfo;
              const userStore = useUserStore();
              console.log(that);
              that.setToken(userinfo.token)
              that.fillUserinfo(userinfo);
              this.rou = userStore.token;
              this.$router.push('/');
            }
            else {
              //      return false;
            }
          }).catch(err => {
            console.log(err)

          })
        }
        else {
          console.log(' error.submit')
          return false;
        }
      })

    },
    resetForm () {
      const formEl = this.$refs.ruleFormRef //取ref对象
      formEl.resetFields()
    },
  }
});
  </script>
    
  <style lang="scss" scoped></style>
