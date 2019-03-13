<template>
  <div class="modal-content" v-clicked-outside="closeModal">
    <div class="box">
      {{modalText}}
    </div>
  </div>
</template>
<script>
export default {
  name: "TestModal",
  props: {
    modalText: String,
  },
  methods: {
    closeModal() {
      console.log('closeModal');
      this.$parent.close();
    }
  },
  directives: {
    'clicked-outside': { // can probably make some boilerplate
      bind: function(el, binding, vNode) {
        // Provided expression must evaluate to a function.
        if (typeof binding.value !== 'function') {
        	const compName = vNode.context.name
          let warn = `[Vue-click-outside:] provided expression '${binding.expression}' is not a function, but has to be`
          if (compName) { warn += `Found in component '${compName}'` }

          console.warn(warn)
        }
        // Define Handler and cache it on the element
        const bubble = binding.modifiers.bubble
        const handler = (e) => {
          if (bubble || (!el.contains(e.target) && el !== e.target)) {
          	binding.value(e);
          }
        }
        el.__vueClickOutside__ = handler

        // add Event Listeners
        document.addEventListener('click', handler)
			},

      unbind: function(el, binding) {
        // Remove Event Listeners
        document.removeEventListener('click', el.__vueClickOutside__)
        el.__vueClickOutside__ = null

      }
    }
  }

}
</script>
<style lang="css" scoped>
.box {
    margin: 25px;
    max-width: 100%;
    text-align: center;
}
.modal-content {
    border-radius: 6px;
    margin: 0;
    color: #39C9A0;
    width: auto;
}
</style>
