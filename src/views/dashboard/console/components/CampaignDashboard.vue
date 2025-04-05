<template>
  <div class="p-6">
    <!-- 头部 -->
    <div>
      <n-space vertical>
        <div>
          <n-space justify="space-between" align="center">
            <div>
              <h1 class="text-2xl font-semibold m-0">Campaign Dashboard</h1>
              <p class="text-gray-600 text-sm mt-1 mb-0">Manage your influencer campaigns</p>
            </div>
            <n-button type="primary" @click="handleNewCampaign"> + New Campaign </n-button>
          </n-space>
        </div>

        <!-- 统计卡片 -->
        <n-grid :x-gap="12" :cols="4">
          <n-grid-item v-for="stat in statistics" :key="stat.title">
            <n-card class="bg-white">
              <n-space align="center">
                <div
                  class="w-[44px] h-[52px] rounded-lg flex items-center justify-center"
                  :style="{ backgroundColor: stat.iconBg }"
                >
                  <n-icon :component="stat.icon" :color="stat.color" size="20" depth="1" />
                </div>
                <div>
                  <div class="text-sm text-gray-600">{{ stat.title }}</div>
                  <CountTo :startVal="1" :endVal="stat.value" class="text-3xl" />
                </div>
              </n-space>
            </n-card>
          </n-grid-item>
        </n-grid>
      </n-space>
    </div>

    <!-- 活动列表 -->
    <div class="mt-6">
      <n-space vertical>
        <div>
          <n-space justify="space-between" align="center">
            <h2 class="text-lg font-semibold m-0">Active Campaigns</h2>
            <n-select
              v-model:value="sortBy"
              :options="sortOptions"
              size="small"
              placeholder="Sort by"
            />
          </n-space>
        </div>

        <n-grid :x-gap="12" :cols="3">
          <n-grid-item v-for="campaign in campaigns" :key="campaign.id">
            <CampaignCard :campaign="campaign" />
          </n-grid-item>
        </n-grid>
      </n-space>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { NSpace, NButton, NGrid, NGridItem, NCard, NIcon, NSelect } from 'naive-ui';
  import { Megaphone, People, Mail, ArrowUndo } from '@vicons/ionicons5';
  import CampaignCard from './CampaignCard.vue';
  import { CountTo } from '@/components/CountTo/index';
  const statistics = [
    {
      title: 'Active Campaigns',
      value: 3,
      icon: Megaphone,
      color: '#4F46E5',
      iconBg: '#E0E7FF',
    },
    {
      title: 'Qualified Influencers',
      value: 120,
      icon: People,
      color: '#16A34A',
      iconBg: '#DCFCE7',
    },
    {
      title: 'Emails Sent',
      value: 113,
      icon: Mail,
      color: '#2563EB',
      iconBg: '#DBEAFE',
    },
    {
      title: 'Interested',
      value: 57,
      icon: ArrowUndo,
      color: '#D97706',
      iconBg: '#FEF3C7',
    },
  ];

  const sortBy = ref('newest');
  const sortOptions = [
    { label: 'Newest', value: 'newest' },
    { label: 'Oldest', value: 'oldest' },
    { label: 'Progress', value: 'progress' },
  ];

  const campaigns = ref([
    {
      id: 1,
      title: 'Summer Fashion Campaign',
      status: 'in-progress',
      tags: ['fashion', 'summer', 'beachwear'],
      progress: 60,
      stats: {
        profilesFound: 87,
        qualified: 42,
        emailsSent: 35,
        replies: 12,
      },
      createdAt: 'July 1, 2023',
    },
    {
      id: 2,
      title: 'Summer Fashion Campaign',
      status: 'starting',
      tags: ['fashion', 'summer', 'beachwear'],
      progress: 60,
      stats: {
        profilesFound: 87,
        qualified: 42,
        emailsSent: 35,
        replies: 12,
      },
      createdAt: 'July 1, 2023',
    },
  ]);

  const handleNewCampaign = () => {
    // 处理新建活动逻辑
  };
</script>

<style scoped></style>
