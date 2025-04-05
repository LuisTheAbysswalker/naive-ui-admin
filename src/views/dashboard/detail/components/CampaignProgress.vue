<template>
  <n-card title="Campaign Progress" class="mb-4">
    <n-space vertical>
      <!-- 总体进度 -->
      <div class="flex justify-between items-center text-sm">
        <span class="text-gray-600">Overall</span>
        <span class="font-medium">67%</span>
      </div>
      <n-progress type="line" :percentage="67" :height="8" :border-radius="4" />

      <!-- 进度时间线 -->
      <div class="mt-6">
        <div v-for="(step, index) in progressSteps" :key="index" class="relative">
          <!-- 连接线 -->
          <div
            v-if="index < progressSteps.length - 1"
            class="absolute left-[15px] top-[32px] w-[2px] h-[calc(100%-24px)]"
            :class="step.completed ? 'bg-green-500' : 'bg-gray-200'"
          ></div>

          <div class="flex gap-4">
            <!-- 状态图标 -->
            <div class="relative z-10">
              <div
                class="w-8 h-8 rounded-full flex items-center justify-center"
                :class="[
                  step.completed ? 'bg-green-500' : step.inProgress ? 'bg-blue-500' : 'bg-gray-200',
                ]"
              >
                <n-icon size="18" color="white">
                  <component :is="getStepIcon(step)" />
                </n-icon>
              </div>
            </div>

            <!-- 步骤内容 -->
            <div class="flex-1 mb-6">
              <div class="flex items-center gap-2">
                <span class="font-medium">{{ step.title }}</span>
                <n-tag size="small" :type="getStepTagType(step)">
                  {{ step.status }}
                </n-tag>
              </div>
              <p class="text-gray-500 text-sm mt-1">{{ step.description }}</p>
              <p class="text-gray-400 text-xs mt-1">{{ step.completedTime }}</p>
            </div>
          </div>
        </div>
      </div>
    </n-space>
  </n-card>
</template>

<script setup lang="ts">
  import { NCard, NSpace, NProgress, NIcon, NTag } from 'naive-ui';
  import {
    SearchOutline,
    FilterOutline,
    PersonOutline,
    MailOutline,
    SyncOutline,
  } from '@vicons/ionicons5';

  interface ProgressStep {
    title: string;
    status: 'Complete' | 'In Progress';
    description: string;
    completedTime: string;
    completed: boolean;
    inProgress: boolean;
  }

  const progressSteps: ProgressStep[] = [
    {
      title: 'Searching Profiles',
      status: 'Complete',
      description: 'Found 87 profiles matching hashtags',
      completedTime: 'Completed on Jul 1, 2023 - 09:15 AM',
      completed: true,
      inProgress: false,
    },
    {
      title: 'Analyzing Profiles (Round 1)',
      status: 'Complete',
      description: '65 profiles passed initial screening',
      completedTime: 'Completed on Jul 1, 2023 - 11:30 AM',
      completed: true,
      inProgress: false,
    },
    {
      title: 'Qualifying Profiles (Round 2)',
      status: 'Complete',
      description: '42 qualified profiles out of 65',
      completedTime: 'Completed on Jul 1, 2023 - 3:20 PM',
      completed: true,
      inProgress: false,
    },
    {
      title: 'Preparing Email Campaign',
      status: 'Complete',
      description: 'Templates created and personalized',
      completedTime: 'Completed on Jul 1, 2023 - 4:10 PM',
      completed: true,
      inProgress: false,
    },
    {
      title: 'Sending Emails',
      status: 'Complete',
      description: '42 emails sent to qualified influencers',
      completedTime: 'Completed on Jul 1, 2023 - 5:45 PM',
      completed: true,
      inProgress: false,
    },
    {
      title: 'Follow-ups & Response Tracking',
      status: 'In Progress',
      description: '28 responses received (67%), 14 follow-ups sent',
      completedTime: 'Started on Jul 2, 2023 - ongoing',
      completed: false,
      inProgress: true,
    },
  ];

  const getStepIcon = (step: ProgressStep) => {
    if (step.inProgress) return SyncOutline;
    switch (step.title) {
      case 'Searching Profiles':
        return SearchOutline;
      case 'Analyzing Profiles (Round 1)':
        return FilterOutline;
      case 'Qualifying Profiles (Round 2)':
        return PersonOutline;
      case 'Preparing Email Campaign':
      case 'Sending Emails':
        return MailOutline;
      default:
        return SyncOutline;
    }
  };

  const getStepTagType = (step: ProgressStep) => {
    return step.completed ? 'success' : step.inProgress ? 'info' : 'default';
  };
</script>
