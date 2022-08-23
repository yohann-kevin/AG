<template>
  <div>
    <IntroductionSection />
    <PresentationSection />
    <ModelSection />
  </div>
</template>

<script>
import IntroductionSection from "./section/IntroductionSection.vue";
import PresentationSection from "./section/PresentationSection.vue";
import ModelSection from "./section/ModelSection.vue";

export default {
  name: "HomePage",
  components: {
    IntroductionSection,
    PresentationSection,
    ModelSection
  },
  data: () => ({
   
  }),
}
</script>
