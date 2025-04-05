<template>
  <n-card>
    <div class="flex items-center justify-between mb-4">
      <div class="flex items-center gap-2">
        <n-icon size="20" class="text-gray-700">
          <TikTokIcon />
        </n-icon>
        <span class="font-medium">TikTok Sourcing</span>
      </div>
      <n-tag type="success" size="small">Complete</n-tag>
    </div>

    <div class="mb-4">
      <div class="flex justify-between text-sm mb-1">
        <span>Sourcing Progress</span>
        <span>100%</span>
      </div>
      <n-progress type="line" :percentage="100" :height="8" color="#22C55E" />
    </div>

    <div class="space-y-3">
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-2">
          <n-icon size="18" class="text-gray-600">
            <Search />
          </n-icon>
          <span>Total Profiles Found</span>
        </div>
        <span class="font-medium">87</span>
      </div>
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-2">
          <n-icon size="18" class="text-gray-600">
            <FilterOutline />
          </n-icon>
          <span>Initial Analysis (Round 1)</span>
        </div>
        <span class="font-medium">65</span>
      </div>
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-2">
          <n-icon size="18" class="text-green-600">
            <CheckmarkCircle />
          </n-icon>
          <span>Qualified (Round 2)</span>
        </div>
        <span class="font-medium">42</span>
      </div>
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-2">
          <n-icon size="18" class="text-red-500">
            <CloseCircle />
          </n-icon>
          <span>Disqualified</span>
        </div>
        <span class="font-medium">45</span>
      </div>
    </div>

    <n-divider />

    <div class="space-y-2">
      <div class="font-medium mb-2">Qualification Criteria</div>
      <div class="flex items-center gap-2 text-sm text-gray-600">
        <n-icon color="#22c55e" size="16">
          <CheckmarkOutline />
        </n-icon>
        <span>Minimum 10K followers</span>
      </div>
      <div class="flex items-center gap-2 text-sm text-gray-600">
        <n-icon color="#22c55e" size="16">
          <CheckmarkOutline />
        </n-icon>
        <span>Active in last 30 days</span>
      </div>
      <div class="flex items-center gap-2 text-sm text-gray-600">
        <n-icon color="#22c55e" size="16">
          <CheckmarkOutline />
        </n-icon>
        <span>Engagement rate > 3%</span>
      </div>
      <div class="flex items-center gap-2 text-sm text-gray-600">
        <n-icon color="#22c55e" size="16">
          <CheckmarkOutline />
        </n-icon>
        <span>Public contact email available</span>
      </div>
    </div>
  </n-card>
</template>

<script setup>
  import { h } from 'vue';
  import { NCard, NIcon, NProgress, NTag, NDivider } from 'naive-ui';
  import {
    Search,
    FilterOutline,
    CheckmarkCircle,
    CloseCircle,
    CheckmarkOutline,
  } from '@vicons/ionicons5';

  // TikTok icon component
  const TikTokIcon = () =>
    h(
      'svg',
      {
        viewBox: '0 0 24 24',
        fill: 'currentColor',
        height: '1em',
        width: '1em',
      },
      [
        h('path', {
          d: 'M16.6 5.82s.51.5 0 0A4.278 4.278 0 015.43 5.5C4.71 4.74 4.2 3.78 4 2.75V2.5H7.14v16.19a3.43 3.43 0 01-3.42 3.42 3.43 3.43 0 01-3.42-3.42A3.43 3.43 0 013.72 15a3.44 3.44 0 011.71.45V12.3a6.3 6.3 0 00-1.71-.24 6.12 6.12 0 00-6.12 6.12 6.12 6.12 0 006.12 6.12 6.12 6.12 0 006.12-6.12V11.69a7.54 7.54 0 004.77 1.74V10.2a4.57 4.57 0 01-2.75-.9v-3.48a4.27 4.27 0 004.74 0v-3.48z',
        }),
      ]
    );
</script>
