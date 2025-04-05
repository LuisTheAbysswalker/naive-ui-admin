<template>
  <n-card>
    <div class="flex items-center justify-between mb-4">
      <div class="flex items-center gap-2">
        <n-icon size="20" class="text-gray-700">
          <Mail />
        </n-icon>
        <span class="font-medium">Email Campaign Status</span>
      </div>
      <n-tag type="success" size="small">Active</n-tag>
    </div>

    <div class="mb-4">
      <div class="flex justify-between text-sm mb-1">
        <span>Email Progress</span>
        <span>67%</span>
      </div>
      <n-progress type="line" :percentage="67" :height="8" color="#22C55E" />
    </div>

    <div class="space-y-3">
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-2">
          <n-icon size="18" class="text-gray-600">
            <PersonOutline />
          </n-icon>
          <span>Ready for Email</span>
        </div>
        <span class="font-medium">42</span>
      </div>
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-2">
          <n-icon size="18" class="text-gray-600">
            <SendOutline />
          </n-icon>
          <span>Emails Sent</span>
        </div>
        <span class="font-medium">42</span>
      </div>
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-2">
          <n-icon size="18" class="text-gray-600">
            <MailOpenOutline />
          </n-icon>
          <span>Opened</span>
        </div>
        <span class="font-medium">36</span>
      </div>
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-2">
          <n-icon size="18" class="text-gray-600">
            <ChatbubbleOutline />
          </n-icon>
          <span>Replied</span>
        </div>
        <span class="font-medium">28</span>
      </div>
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-2">
          <n-icon size="18" class="text-green-600">
            <ThumbsUpOutline />
          </n-icon>
          <span>Interested</span>
        </div>
        <span class="font-medium">21</span>
      </div>
    </div>

    <n-divider />

    <div class="bg-blue-50 p-4 rounded-lg">
      <div class="font-medium mb-3">Email Campaign Metrics</div>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <div class="text-sm text-gray-600">Open Rate</div>
          <div class="font-medium text-lg">85.7%</div>
        </div>
        <div>
          <div class="text-sm text-gray-600">Response Rate</div>
          <div class="font-medium text-lg">66.7%</div>
        </div>
        <div>
          <div class="text-sm text-gray-600">Interest Rate</div>
          <div class="font-medium text-lg">50.0%</div>
        </div>
        <div>
          <div class="text-sm text-gray-600">Follow-ups Sent</div>
          <div class="font-medium text-lg">14</div>
        </div>
      </div>
    </div>
  </n-card>
</template>

<script setup>
  import { NCard, NIcon, NProgress, NTag, NDivider } from 'naive-ui';
  import {
    Mail,
    PersonOutline,
    SendOutline,
    MailOpenOutline,
    ChatbubbleOutline,
    ThumbsUpOutline,
  } from '@vicons/ionicons5';
</script>
