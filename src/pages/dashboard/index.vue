<script setup lang="ts">
import DefaultLayout from "@/layouts/DefaultLayout.vue";
</script>

<template>
  <DefaultLayout>
    <main class="flex flex-col items-center justify-center w-full min-h-screen">
      <div
        class="max-w-3xl mx-auto text-center w-full bg-gradient-card-border p-4"
      >
        <div class="flex flex-col items-center justify-center">
          <h1 class="text-3xl font-bold">
            You need to register first, before taking the quiz.
          </h1>
        </div>
      </div>
    </main>
  </DefaultLayout>
</template>
