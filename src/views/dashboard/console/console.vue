<template>
  <div class="console">
    <CampaignDashboard />
  </div>
</template>
<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import { CampaignDashboard } from './components/index';

  const loading = ref(true);

  onMounted(async () => {
    loading.value = false;
  });
</script>

<style lang="less" scoped></style>
