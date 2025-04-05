<template>
  <n-card class="bg-white">
    <n-space vertical>
      <div>
        <n-space justify="space-between" align="center">
          <h3 class="text-base font-semibold m-0">{{ campaign.title }}</h3>
          <n-tag :type="getStatusType(campaign.status)">
            {{ formatStatus(campaign.status) }}
          </n-tag>
        </n-space>
      </div>

      <div class="my-2">
        <n-tag v-for="tag in campaign.tags" :key="tag" size="small" class="mr-1">
          {{ tag }}
        </n-tag>
      </div>

      <div class="my-4">
        <div class="flex justify-between mb-2 text-sm">
          <span>Campaign Progress</span>
          <span>{{ campaign.progress }}%</span>
        </div>
        <n-progress type="line" :percentage="campaign.progress" :height="8" :border-radius="4" />
      </div>

      <n-grid :cols="2" :x-gap="12">
        <n-grid-item v-for="(value, key) in campaign.stats" :key="key">
          <div class="flex flex-col my-2">
            <span class="text-base font-semibold text-indigo-600">{{ value }}</span>
            <span class="text-xs text-gray-600">{{ formatStatLabel(key) }}</span>
          </div>
        </n-grid-item>
      </n-grid>

      <div class="mt-4 text-xs text-gray-600 text-right"> Created on {{ campaign.createdAt }} </div>
    </n-space>
  </n-card>
</template>

<script setup>
  import { NCard, NSpace, NTag, NProgress, NGrid, NGridItem } from 'naive-ui';

  const props = defineProps({
    campaign: {
      type: Object,
      required: true,
    },
  });

  const getStatusType = (status) => {
    const types = {
      'in-progress': 'success',
      starting: 'warning',
      completed: 'info',
    };
    return types[status] || 'default';
  };

  const formatStatus = (status) => {
    return status
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  const formatStatLabel = (key) => {
    return key
      .split(/(?=[A-Z])/)
      .join(' ')
      .replace(/^\w/, (c) => c.toUpperCase());
  };
</script>

<style scoped></style>
