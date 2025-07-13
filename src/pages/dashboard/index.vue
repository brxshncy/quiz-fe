<route>
  {
    meta: {
      requiresAuth: true,
    }
  }
</route>

<script setup lang="ts">
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import {
  AcademicCapIcon,
  ChartBarIcon,
  ClockIcon,
  ArrowRightIcon,
  UserIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/vue/24/outline";
import ButtonCta from "@/components/common/button/ButtonCta.vue";

interface User {
  id: string;
  email: string;
  name: string;
  role: string;
}

const router = useRouter();
const user = ref<User | null>(null);

onMounted(() => {
  // Get user data from localStorage
  const userData = localStorage.getItem("user");
  if (userData) {
    try {
      user.value = JSON.parse(userData);
    } catch (error) {
      console.error("Failed to parse user data:", error);
      router.push("/auth/user/sign-in");
    }
  } else {
    router.push("/auth/user/sign-in");
  }
});

const handleLogout = () => {
  localStorage.removeItem("auth_token");
  localStorage.removeItem("user");
  router.push("/");
};

const availableQuizzes = [
  {
    id: 1,
    title: "JavaScript Fundamentals",
    subject: "Programming",
    duration: "30 min",
    questions: 20,
  },
  {
    id: 2,
    title: "Vue.js Basics",
    subject: "Frontend",
    duration: "45 min",
    questions: 25,
  },
  {
    id: 3,
    title: "CSS Grid & Flexbox",
    subject: "Styling",
    duration: "25 min",
    questions: 15,
  },
];

const startQuiz = (quizId: number) => {
  console.log("Starting quiz:", quizId);
  // TODO: Navigate to quiz page
};
</script>

<template>
  <DefaultLayout>
    <main class="min-h-screen p-6">
      <div class="max-w-6xl mx-auto">
        <!-- Header -->
        <div class="flex justify-between items-center mb-8">
          <div>
            <h1 class="text-3xl font-bold text-white mb-2">
              Welcome, {{ user?.name || "User" }}!
            </h1>
            <p class="text-gray-400">Ready to test your knowledge?</p>
          </div>
          <ButtonCta
            btnClass="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-lg"
            btnLabel="Logout"
            :btnIcon="ArrowLeftOnRectangleIcon"
            :btnAction="handleLogout"
          />
        </div>

        <!-- Stats Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div class="bg-gradient-card-border p-6 rounded-xl">
            <div class="flex items-center">
              <AcademicCapIcon class="w-8 h-8 text-blue-400 mr-4" />
              <div>
                <p class="text-gray-400 text-sm">Quizzes Taken</p>
                <p class="text-2xl font-bold text-white">12</p>
              </div>
            </div>
          </div>

          <div class="bg-gradient-card-border p-6 rounded-xl">
            <div class="flex items-center">
              <ChartBarIcon class="w-8 h-8 text-green-400 mr-4" />
              <div>
                <p class="text-gray-400 text-sm">Average Score</p>
                <p class="text-2xl font-bold text-white">85%</p>
              </div>
            </div>
          </div>

          <div class="bg-gradient-card-border p-6 rounded-xl">
            <div class="flex items-center">
              <ClockIcon class="w-8 h-8 text-purple-400 mr-4" />
              <div>
                <p class="text-gray-400 text-sm">Study Time</p>
                <p class="text-2xl font-bold text-white">8.5h</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Available Quizzes -->
        <div class="bg-gradient-card-border p-8 rounded-xl">
          <h2 class="text-2xl font-bold text-white mb-6">Available Quizzes</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              v-for="quiz in availableQuizzes"
              :key="quiz.id"
              class="bg-zinc-800/50 border border-zinc-700 rounded-lg p-6 hover:border-zinc-600 transition-colors duration-200"
            >
              <h3 class="text-lg font-semibold text-white mb-2">
                {{ quiz.title }}
              </h3>
              <p class="text-gray-400 text-sm mb-4">{{ quiz.subject }}</p>
              <div
                class="flex justify-between items-center text-sm text-gray-400 mb-4"
              >
                <span>{{ quiz.duration }}</span>
                <span>{{ quiz.questions }} questions</span>
              </div>
              <ButtonCta
                btnClass="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 rounded-lg"
                btnLabel="Start Quiz"
                :btnIcon="ArrowRightIcon"
                :btnAction="() => startQuiz(quiz.id)"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  </DefaultLayout>
</template>
