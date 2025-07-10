<script setup lang="ts">
import { CheckCircleIcon } from "@heroicons/vue/24/outline";

defineProps<{
  title: string;
  description: string;
  items: string[];
  icon?: any;
}>();
</script>

<template>
  <div class="relative group">
    <!-- Background gradient -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl blur-sm opacity-50 group-hover:opacity-75 transition-opacity duration-300"
    ></div>

    <!-- Main card -->
    <div
      class="relative border border-zinc-700/50 rounded-2xl p-8 bg-zinc-800/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-zinc-600/50"
    >
      <div class="flex flex-col items-center text-white gap-4">
        <!-- Icon with gradient background -->
        <div
          class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg"
        >
          <component :is="icon" class="w-8 h-8 text-white" />
        </div>

        <!-- Title and Description -->
        <div class="text-center">
          <h2
            class="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-3"
          >
            {{ title }}
          </h2>
          <p class="text-gray-300 text-lg leading-relaxed max-w-md">
            {{ description }}
          </p>
        </div>
      </div>

      <!-- Bullet List with improved styling -->
      <ul class="flex flex-col gap-4 mt-8">
        <li
          v-for="(item, index) in items"
          :key="item"
          class="flex items-start gap-4 text-gray-200 group/item hover:text-white transition-colors duration-200"
          :style="{ animationDelay: `${index * 100}ms` }"
        >
          <div class="flex-shrink-0 mt-1">
            <CheckCircleIcon
              class="h-5 w-5 text-green-400 group-hover/item:text-green-300 transition-colors duration-200"
            />
          </div>
          <span
            class="text-gray-300 group-hover/item:text-white transition-colors duration-200 leading-relaxed"
          >
            {{ item }}
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
/* Add subtle animation for list items */
li {
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
  transform: translateY(20px);
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
