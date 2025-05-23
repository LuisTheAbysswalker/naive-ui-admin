<template>
  <div class="min-h-screen bg-gray-50 p-6">
    <!-- 头部导航 -->
    <div class="mb-6 flex items-center">
      <n-button quaternary @click="router.back()">
        <template #icon>
          <n-icon>
            <ArrowBack />
          </n-icon>
        </template>
        Back to Dashboard
      </n-button>
      <n-tag class="ml-4" type="success" size="small">Active</n-tag>
    </div>

    <!-- 标题区域 -->
    <div class="mb-8">
      <h1 class="text-2xl font-semibold mb-2">Summer Fashion Campaign</h1>
      <div class="text-gray-500 text-sm flex items-center gap-2">
        <span>Created on July 1, 2023</span>
        <span>•</span>
        <span>Campaign ID: CAM-2023-001</span>
      </div>
    </div>

    <!-- 三个卡片的网格布局 -->
    <n-grid :cols="3" :x-gap="16">
      <n-grid-item>
        <TikTokSourcing />
      </n-grid-item>

      <n-grid-item>
        <CampaignProgress />
      </n-grid-item>

      <n-grid-item>
        <EmailCampaignStatus />
      </n-grid-item>
    </n-grid>

    <!-- 响应列表 -->
    <n-card title="Influencer Responses" class="mt-6">
      <template #header-extra>
        <n-button secondary size="small">
          <template #icon>
            <n-icon>
              <Download />
            </n-icon>
          </template>
          Export
        </n-button>
      </template>

      <n-data-table
        :columns="columns"
        :data="responses"
        :pagination="{ pageSize: 10 }"
        :bordered="false"
      />
    </n-card>
  </div>
</template>

<script setup>
  import { h } from 'vue';
  import { useRouter } from 'vue-router';
  import { NButton, NCard, NDataTable, NGrid, NGridItem, NIcon, NTag } from 'naive-ui';
  import { ArrowBack, Download } from '@vicons/ionicons5';
  import CampaignProgress from './CampaignProgress.vue';
  import TikTokSourcing from './TikTokSourcing.vue';
  import EmailCampaignStatus from './EmailCampaignStatus.vue';

  const router = useRouter();

  const progressSteps = [
    { name: 'Searching', completed: true },
    { name: 'Analysis', completed: true },
    { name: 'Qualifying', completed: true },
    { name: 'Emailing', completed: true },
    { name: 'Follow-up', completed: false },
  ];

  const createColumns = () => {
    return [
      {
        title: 'Influencer',
        key: 'influencer',
        render(row) {
          return h('div', { class: 'flex items-center gap-3' }, [
            h('img', {
              src: row.avatar,
              class: 'w-8 h-8 rounded-full',
            }),
            h('div', [
              h('div', { class: 'font-medium' }, row.name),
              h('div', { class: 'text-xs text-gray-500' }, `@${row.handle}`),
            ]),
          ]);
        },
      },
      {
        title: 'Followers',
        key: 'followers',
        render(row) {
          return h('span', `${(row.followers / 1000).toFixed(1)}K`);
        },
      },
      {
        title: 'Email Status',
        key: 'emailStatus',
        render(row) {
          return h(
            NTag,
            {
              type: row.emailStatus === 'Replied' ? 'success' : 'warning',
              size: 'small',
            },
            { default: () => row.emailStatus }
          );
        },
      },
      {
        title: 'Email',
        key: 'email',
      },
      {
        title: 'Response Date',
        key: 'responseDate',
      },
    ];
  };

  const responses = [
    {
      name: 'Marcus Johnson',
      handle: 'marcusfashion',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus',
      followers: 122000,
      emailStatus: 'Replied',
      email: 'zhuangguoze@gmail.com',
      responseDate: 'Jul 2, 2023 - 10:35 AM',
    },
    {
      name: 'Sophie Anderson',
      handle: 'sophiestyle',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie',
      followers: 54200,
      emailStatus: 'Follow-up Sent',
      email: 'zhuangguoze@gmail.com',
      responseDate: '-',
    },
    // ... 可以添加更多数据
  ];

  const columns = createColumns();
</script>
