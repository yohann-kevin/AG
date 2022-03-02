<template>
  <div>
    <IntroductionSection/>
    <ModelSection/>
    <div style="min-height:100vh"></div>
  </div>
</template>

<script>
import IntroductionSection from "./section/IntroductionSection.vue";
import ModelSection from "./section/ModelSection.vue";

export default {
  name: "HomePage",
  components: {
    IntroductionSection,
    ModelSection
  },
  data: () => ({
   
  }),
}
</script>
