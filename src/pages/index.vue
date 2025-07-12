<script setup lang="ts">
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import CardBulletLists from "@/components/common/CardBulletLists.vue";
import {
  AcademicCapIcon,
  ArrowRightCircleIcon,
  BookOpenIcon,
} from "@heroicons/vue/24/outline";
import Button from "@/components/ui/button/Button.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const items = [
  "Browse available subjects and quizzes",
  "Take interactive quizzes and feedback",
  "View scores and performance history",
  "Track your learning progress over time",
];
</script>

<template>
  <DefaultLayout>
    <main
      class="flex flex-col items-center justify-center w-full px-4 min-h-screen"
    >
      <div class="max-w-3xl mx-auto text-center w-full">
        <!-- Hero Section -->
        <div class="mb-12">
          <div
            class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6 shadow-lg"
          >
            <BookOpenIcon class="h-10 w-10 text-white" />
          </div>
          <h1
            class="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6"
          >
            Welcome to QuizMaster
          </h1>
          <p class="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A comprehensive platform for students. Create engaging quizzes,
            track progress, and improve your knowledge.
          </p>
        </div>

        <!-- CardBulletLists Component -->
        <div class="mb-12">
          <CardBulletLists
            title="Student"
            description="Take quizzes and track your learning progress"
            :items="items"
            :icon="AcademicCapIcon"
          />
        </div>

        <!-- CTA Button -->
        <div class="space-y-4">
          <Button
            @click="router.push('/dashboard')"
            class="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold text-lg px-8 py-4 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            <ArrowRightCircleIcon class="h-6 w-6 mr-2" />
            Take a Quiz
          </Button>

          <div class="flex justify-center space-x-4 mt-6">
            <a
              href="/auth/admin/login"
              class="text-gray-400 hover:text-white transition-colors duration-200 underline"
            >
              Admin Login
            </a>
          </div>
        </div>
      </div>
    </main>
  </DefaultLayout>
</template>
