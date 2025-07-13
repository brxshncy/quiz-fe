<script lang="ts" setup>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ref } from "vue";
import { useRouter } from "vue-router";
import {
  UserIcon,
  LockClosedIcon,
  EnvelopeIcon,
} from "@heroicons/vue/24/outline";
import ButtonCta from "@/components/common/button/ButtonCta.vue";

const router = useRouter();

// Sign In Form
const signInEmail = ref("");
const signInPassword = ref("");
const signInError = ref("");
const signInLoading = ref(false);

// Sign Up Form
const signUpName = ref("");
const signUpEmail = ref("");
const signUpPassword = ref("");
const signUpConfirmPassword = ref("");
const signUpError = ref("");
const signUpLoading = ref(false);

const handleSignIn = async () => {
  if (!signInEmail.value || !signInPassword.value) {
    signInError.value = "Please fill in all fields";
    return;
  }

  signInLoading.value = true;
  signInError.value = "";

  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Mock authentication - replace with actual API call
    if (signInEmail.value && signInPassword.value) {
      // Store auth state in localStorage
      localStorage.setItem("auth_token", "mock-token-" + Date.now());
      localStorage.setItem(
        "user",
        JSON.stringify({
          id: "1",
          email: signInEmail.value,
          name: signInEmail.value.split("@")[0],
          role: "user",
        })
      );

      router.push("/dashboard");
    } else {
      signInError.value = "Invalid credentials";
    }
  } catch (error) {
    signInError.value = "Login failed. Please try again.";
  } finally {
    signInLoading.value = false;
  }
};

const handleSignUp = async () => {
  if (
    !signUpName.value ||
    !signUpEmail.value ||
    !signUpPassword.value ||
    !signUpConfirmPassword.value
  ) {
    signUpError.value = "Please fill in all fields";
    return;
  }

  if (signUpPassword.value !== signUpConfirmPassword.value) {
    signUpError.value = "Passwords do not match";
    return;
  }

  if (signUpPassword.value.length < 6) {
    signUpError.value = "Password must be at least 6 characters";
    return;
  }

  signUpLoading.value = true;
  signUpError.value = "";

  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Mock registration - replace with actual API call
    localStorage.setItem("auth_token", "mock-token-" + Date.now());
    localStorage.setItem(
      "user",
      JSON.stringify({
        id: "1",
        email: signUpEmail.value,
        name: signUpName.value,
        role: "user",
      })
    );

    router.push("/dashboard");
  } catch (error) {
    signUpError.value = "Registration failed. Please try again.";
  } finally {
    signUpLoading.value = false;
  }
};
</script>

<template>
  <DefaultLayout>
    <div
      class="flex flex-col w-full min-h-screen justify-center items-center p-4"
    >
      <div class="max-w-md w-full bg-gradient-card-border p-8 rounded-xl">
        <div class="text-center mb-8">
          <div class="bg-zinc-900 rounded-full p-3 w-16 h-16 mx-auto mb-4">
            <UserIcon class="w-10 h-10 text-white" />
          </div>
          <h1 class="text-2xl font-semibold text-white mb-2">
            Welcome to QuizMaster
          </h1>
          <p class="text-gray-400">Sign in or create an account to continue</p>
        </div>

        <Tabs default-value="sign-in" class="w-full">
          <TabsList class="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="sign-in">Sign In</TabsTrigger>
            <TabsTrigger value="sign-up">Sign Up</TabsTrigger>
          </TabsList>

          <!-- Sign In Form -->
          <TabsContent value="sign-in" class="space-y-4">
            <form @submit.prevent="handleSignIn">
              <div class="space-y-4">
                <div>
                  <label
                    for="signin-email"
                    class="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email Address
                  </label>
                  <div class="relative">
                    <EnvelopeIcon
                      class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                    />
                    <input
                      id="signin-email"
                      v-model="signInEmail"
                      type="email"
                      required
                      class="w-full pl-10 pr-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label
                    for="signin-password"
                    class="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Password
                  </label>
                  <div class="relative">
                    <LockClosedIcon
                      class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                    />
                    <input
                      id="signin-password"
                      v-model="signInPassword"
                      type="password"
                      required
                      class="w-full pl-10 pr-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your password"
                    />
                  </div>
                </div>

                <div
                  v-if="signInError"
                  class="text-red-400 text-sm text-center"
                >
                  {{ signInError }}
                </div>

                <ButtonCta
                  btnClass="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold text-lg py-3 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  btnLabel="Sign In"
                  :btnIcon="LockClosedIcon"
                  :btnAction="handleSignIn"
                  :disabled="signInLoading"
                />
              </div>
            </form>
          </TabsContent>

          <!-- Sign Up Form -->
          <TabsContent value="sign-up" class="space-y-4">
            <form @submit.prevent="handleSignUp">
              <div class="space-y-4">
                <div>
                  <label
                    for="signup-name"
                    class="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Full Name
                  </label>
                  <div class="relative">
                    <UserIcon
                      class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                    />
                    <input
                      id="signup-name"
                      v-model="signUpName"
                      type="text"
                      required
                      class="w-full pl-10 pr-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div>
                  <label
                    for="signup-email"
                    class="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email Address
                  </label>
                  <div class="relative">
                    <EnvelopeIcon
                      class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                    />
                    <input
                      id="signup-email"
                      v-model="signUpEmail"
                      type="email"
                      required
                      class="w-full pl-10 pr-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label
                    for="signup-password"
                    class="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Password
                  </label>
                  <div class="relative">
                    <LockClosedIcon
                      class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                    />
                    <input
                      id="signup-password"
                      v-model="signUpPassword"
                      type="password"
                      required
                      class="w-full pl-10 pr-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Create a password"
                    />
                  </div>
                </div>

                <div>
                  <label
                    for="signup-confirm-password"
                    class="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Confirm Password
                  </label>
                  <div class="relative">
                    <LockClosedIcon
                      class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                    />
                    <input
                      id="signup-confirm-password"
                      v-model="signUpConfirmPassword"
                      type="password"
                      required
                      class="w-full pl-10 pr-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Confirm your password"
                    />
                  </div>
                </div>

                <div
                  v-if="signUpError"
                  class="text-red-400 text-sm text-center"
                >
                  {{ signUpError }}
                </div>

                <ButtonCta
                  btnClass="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold text-lg py-3 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  btnLabel="Create Account"
                  :btnIcon="UserIcon"
                  :btnAction="handleSignUp"
                  :disabled="signUpLoading"
                />
              </div>
            </form>
          </TabsContent>
        </Tabs>

        <!-- Back to Home Link -->
        <div class="text-center mt-6">
          <router-link
            to="/"
            class="text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm"
          >
            ← Back to Home
          </router-link>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>
