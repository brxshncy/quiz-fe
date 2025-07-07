<script setup lang="ts">
import AuthLayout from "@/layouts/AuthLayout.vue";
import { UsersIcon } from "@heroicons/vue/24/outline";
</script>

<template>
  <AuthLayout>
    <div class="text-gray-400 text-md flex flex-col items-center px-2 py-2">
      <div class="flex flex-col items-center space-y-4">
        <div class="bg-zinc-900 rounded-full p-3">
          <UsersIcon class="w-10 h-10 text-white" />
        </div>
        <h1 class="text-2xl font-semibold text-white">Admininstrator</h1>
      </div>
    </div>
  </AuthLayout>
</template>
