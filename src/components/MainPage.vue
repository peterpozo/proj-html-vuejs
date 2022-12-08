<template>
  <main>
    <AdvisoryPerformance />
    <ResultInNumbers />
    <ExcellenceService />
    <TeamOfExperts />
  </main>
</template>

<script>
import AdvisoryPerformance from "@/components/AdvisoryPerformance.vue";
import ResultInNumbers from "@/components/ResultInNumbers.vue";
import ExcellenceService from "@/components/ExcellenceService.vue";
import TeamOfExperts from "@/components/TeamOfExperts.vue";
export default {
  name: "MainPage",
  components: {
    AdvisoryPerformance,
    ResultInNumbers,
    ExcellenceService,
    TeamOfExperts,
  },
};
</script>

<style></style>
