<script setup lang="ts">
import { Button, Space, Table, Tag } from "ant-design-vue";
import { onMounted } from "vue";
import {
  categoryTableColumns,
  uesDictionaryCategory,
} from "./useDictionaryCategory";

const category = uesDictionaryCategory();

onMounted(() => {
  category.refresh();
});
</script>

<template>
  <div class="view-wrapper">
    <header class="view-header">
      <span class="view-title">Dictionary Management</span>
      <Button type="primary">+Add</Button>
    </header>

    <Table
      :columns="categoryTableColumns"
      :dataSource="category.list"
      :pagination="false"
      size="middle"
    >
      <template #bodyCell="{ value, column }">
        <Button type="link" v-if="column.dataIndex === 'category'">
          {{ value }}
        </Button>
        <Tag v-if="column.dataIndex === 'count'">{{ value }}</Tag>
        <Space v-if="column.key === 'action'">
          <Button size="small" type="link">Update</Button>
          <Button size="small" danger type="link">Del</Button>
        </Space>
      </template>
    </Table>
  </div>
</template>

<style scoped lang="less">
.view-wrapper {
  padding: 20px;
  .view-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    .view-title {
      font-weight: bold;
      font-size: 1.25rem;
    }
  }
}
</style>
