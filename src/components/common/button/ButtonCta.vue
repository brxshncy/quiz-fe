<script lang="ts" setup>
defineProps<{
  btnLabel: string;
  btnIcon: any;
  btnAction: () => void;
  btnClass: string;
  disabled?: boolean;
}>();
</script>

<template>
  <Button
    @click="btnAction"
    :class="btnClass"
    class="flex items-center btn-block w-full justify-center p-3 cursor-pointer"
    :disabled="disabled"
  >
    <component :is="btnIcon" class="h-6 w-6 mr-2" />
    {{ btnLabel }}
  </Button>
</template>
