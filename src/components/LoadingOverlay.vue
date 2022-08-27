<template>
    <div class="vld-parent">
        <loading :active="data.isLoading" 
        :can-cancel="false" 
        :is-full-page="data.fullPage"></loading>
    </div>
</template>


<script setup lang="ts">
    // Import component
    import Loading from 'vue3-loading-overlay';
    // Import stylesheet
    import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';

    import { storeLoading } from '@/stores/loading-overlay.ts'
    const data = storeLoading()
</script>