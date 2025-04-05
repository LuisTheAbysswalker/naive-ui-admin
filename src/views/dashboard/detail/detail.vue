<template>
  <div class="console">
    <CampaignDetail />
  </div>
</template>
<script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import { CampaignDetail } from './components/index';

  const loading = ref(true);

  onMounted(async () => {
    loading.value = false;
  });
</script>

<style lang="less" scoped></style>
