<template>
  <div>
    <IntroductionSection/>
    <ModelSection/>
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
