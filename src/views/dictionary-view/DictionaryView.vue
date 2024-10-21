<script setup lang="ts">
import { Button, Space, Table, Tag } from "ant-design-vue";
import { onMounted } from "vue";
import { dictionaryColumns } from "./dictionary.columns";
import { usePagination } from "@/composables/usePagination";
import { dictionaryApi } from "@/api/dictionaryApi";

const { loading, pagination, records, search } = usePagination(
  dictionaryApi.query
);

onMounted(() => {
  search();
});
</script>

<template>
  <div class="view-wrapper">
    <header class="view-header">
      <span class="view-title">Dictionary Management</span>
      <Button type="primary">+Add</Button>
    </header>

    <Table
      :columns="dictionaryColumns"
      :dataSource="records"
      size="middle"
      :pagination="pagination"
      :scroll="{ y: 500 }"
      :loading="loading"
    >
      <template #bodyCell="{ column, value }">
        <Tag
          v-if="column.dataIndex === 'enable'"
          :color="value ? 'blue' : 'red'"
          size="small"
          >{{ value ? "Enabled" : "Disabled" }}</Tag
        >
        <span v-else-if="column.dataIndex === 'description' && !value">
          --
        </span>
        <Space v-else-if="column.key === 'action'">
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
