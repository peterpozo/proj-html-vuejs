<template>
  <main>
    <AdvisoryPerformance />
    <ResultInNumbers />
    <ExcellenceService />
    <TeamOfExperts />
    <LatestNews />
    <KnowFirst />
    <GetTouch />
  </main>
</template>

<script>
import AdvisoryPerformance from "@/components/AdvisoryPerformance.vue";
import ResultInNumbers from "@/components/ResultInNumbers.vue";
import ExcellenceService from "@/components/ExcellenceService.vue";
import TeamOfExperts from "@/components/TeamOfExperts.vue";
import LatestNews from "@/components/LatestNews.vue";
import KnowFirst from "@/components/KnowFirst.vue";
import GetTouch from "@/components/GetTouch.vue";
export default {
  name: "MainPage",
  components: {
    AdvisoryPerformance,
    ResultInNumbers,
    ExcellenceService,
    TeamOfExperts,
    LatestNews,
    KnowFirst,
    GetTouch,
  },
};
</script>

<style></style>
