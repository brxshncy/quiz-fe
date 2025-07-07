<script setup lang="ts">
import DefaultLayout from "@/layouts/DefaultLayout.vue";
</script>

<template>
  <DefaultLayout>
    <div class="text-center">
      <h1 class="text-4xl font-bold text-gray-900 mb-8">
        Welcome to Your Quiz App
      </h1>
      <p class="text-lg text-gray-600 mb-8">
        This is your home page using file-based routing!
      </p>
      <div class="space-x-4">
        <a
          href="/auth/admin/login"
          class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          Admin Login
        </a>
      </div>
    </div>
  </DefaultLayout>
</template>
