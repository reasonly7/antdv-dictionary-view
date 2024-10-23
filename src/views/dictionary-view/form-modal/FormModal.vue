<script setup lang="ts">
import { Form, FormItem, Modal, Select } from "ant-design-vue";

const open = defineModel<boolean>("open", { required: true });

const setFormRef = (a: unknown) => {};
</script>

<template>
  <Modal v-model:open="open" title="Dictionary Create">
    <Form :ref="setFormRef">
      <FormItem name="category">
        <Select></Select>
      </FormItem>
    </Form>
  </Modal>
</template>

<style scoped lang="less"></style>
