<template>
  <main>
    <AdvisoryPerformance />
    <ResultInNumbers />
  </main>
</template>

<script>
import AdvisoryPerformance from "@/components/AdvisoryPerformance.vue";
import ResultInNumbers from "@/components/ResultInNumbers.vue";
export default {
  name: "MainPage",
  components: {
    AdvisoryPerformance,
    ResultInNumbers,
  },
};
</script>

<style></style>
