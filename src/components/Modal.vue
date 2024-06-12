<!-- Modal.vue -->
<template>
  <div v-if="isVisible" class="modal-overlay" @click="close">
    <div class="modal-content" @click.stop>
      <button class="close-button" @click="close">×</button>
      <div class="modal-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    close() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.082);
  display: flex;
  z-index: 999;
  align-items: center;
  justify-content: center;
}
.modal-content {
  border: 1px solid var(--Light, #E7EEBE);
  background: var(--Plum, #3E1821);
  padding: 20px;
  border-radius: 1px;
  position: relative;
  width: 100%;
  margin: 20px;
  max-width: 500px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
}
.modal-body {
  margin-top: 20px;
}
</style>
