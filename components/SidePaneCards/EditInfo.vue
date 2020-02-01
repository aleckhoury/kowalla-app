<template>
  <CardContainer header-string="What are integrations?">
    <div class="integrationsInfo">
      <EditIntegrations />
      <span>Integrations empower you to add content from other tools you use in order to create more interesting Kowalla content.</span>
    </div>
  </CardContainer>
</template>

<script>
import CardContainer from './CardContainer';
import EditIntegrations from '../../svg/EditIntegrations';

export default {
  name: 'EditInfo',
  components: { CardContainer, EditIntegrations },
  methods: {
    getRoute(isProject, name) {
      return isProject ? `/project/${name}` : `/space/${name}`;
    },
    getPrefix(isProject) {
      return isProject ? '@' : '#';
    },
  },
};
</script>

<style scoped>
.integrationsInfo {
  text-align: center;
  padding: 1em;
  height: auto;
  font-weight: 500;
}
</style>
