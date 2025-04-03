<template>
  <div class="view-account py-6">
    <div class="flex items-center justify-center min-h-[calc(100vh-200px)]">
      <div class="w-full max-w-md">
        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
          <div class="bg-primary-600 px-6 py-4">
            <h2 class="text-xl font-bold text-white">Welcome Back</h2>
            <p class="text-primary-200 text-sm mt-1">Sign in to your email automation platform</p>
          </div>

          <n-form ref="formRef" size="large" :model="formInline" :rules="rules" class="px-6 py-8">
            <n-form-item path="username" label="Username">
              <n-input v-model:value="formInline.username" placeholder="Please enter your username">
                <template #prefix>
                  <n-icon size="18" color="#808695">
                    <PersonOutline />
                  </n-icon>
                </template>
              </n-input>
            </n-form-item>
            <n-form-item path="password" label="Password">
              <n-input
                v-model:value="formInline.password"
                type="password"
                showPasswordOn="click"
                placeholder="please enter your password"
              >
                <template #prefix>
                  <n-icon size="18" color="#808695">
                    <LockClosedOutline />
                  </n-icon>
                </template>
              </n-input>
            </n-form-item>
            <n-form-item>
              <n-button type="primary" @click="handleSubmit" size="large" :loading="loading" block>
                Sign in
              </n-button>
            </n-form-item>
          </n-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { reactive, ref } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { useUserStore } from '@/store/modules/user';
  import { useMessage } from 'naive-ui';
  import { ResultEnum } from '@/enums/httpEnum';
  import { PersonOutline, LockClosedOutline } from '@vicons/ionicons5';
  import { PageEnum } from '@/enums/pageEnum';
  interface FormState {
    username: string;
    password: string;
  }

  const formRef = ref();
  const message = useMessage();
  const loading = ref(false);
  const LOGIN_NAME = PageEnum.BASE_LOGIN_NAME;

  const formInline = reactive({
    username: '',
    password: '',
  });

  const rules = {
    username: { required: true, message: 'Please enter your username', trigger: 'blur' },
    password: { required: true, message: 'Please enter your password', trigger: 'blur' },
  };

  const userStore = useUserStore();

  const router = useRouter();
  const route = useRoute();

  const handleSubmit = (e) => {
    e.preventDefault();
    formRef.value.validate(async (errors) => {
      if (!errors) {
        const { username, password } = formInline;
        message.loading('Logging in...');
        loading.value = true;

        const params: FormState = {
          username,
          password,
        };

        try {
          const { code, message: msg } = await userStore.login(params);
          message.destroyAll();
          if (code == ResultEnum.SUCCESS) {
            const toPath = decodeURIComponent((route.query?.redirect || '/') as string);
            message.success('Login successful, redirecting to the dashboard');
            if (route.name === LOGIN_NAME) {
              router.replace('/');
            } else router.replace(toPath);
          } else {
            message.info(msg || 'login failed');
          }
        } finally {
          loading.value = false;
        }
      } else {
        message.error('Please fill in all information');
      }
    });
  };
</script>

<style lang="less" scoped></style>
