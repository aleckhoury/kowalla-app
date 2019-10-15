<template>
  <div class="card is-paddingless">
    <div class="box">
      <div class="title">Select Integrations<sub>(4/4)</sub></div>
      <IntegrationCard v-for="(test, idx) in integrationList" :key="idx" :name="test.name" :description="test.description" />
    </div>
  </div>
</template>

<script>
import IntegrationCard from '../Forms/IntegrationCard';
export default {
  name: 'IntegrationList',
  components: { IntegrationCard }
};
</script>

<style scoped></style>
