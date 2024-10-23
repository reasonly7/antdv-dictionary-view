<script setup lang="ts">
import { Button, Space, Table, Tag } from "ant-design-vue";
import { onMounted, ref } from "vue";
import { tableColumns } from "./table.columns";
import { usePagination } from "@/composables/usePagination";
import { dictionaryApi } from "@/api/dictionaryApi";
import { SearchForm } from "@/components/search-form";
import { searchItems } from "./search.items";
import { FormModal } from "./form-modal";

const { loading, pagination, records, search, searchParams } = usePagination(
  dictionaryApi.query
);
const modalOpen = ref(false);

const searchHandler = (searchModel: Record<string, unknown>) => {
  Object.assign(searchParams.value, searchModel);
  search();
};

onMounted(() => {
  search();
});
</script>

<template>
  <div class="view-wrapper">
    <header class="view-header">
      <span class="view-title">Dictionary Management</span>
      <Button type="primary" @click="modalOpen = true">+Add</Button>
    </header>

    <Table
      :columns="tableColumns"
      :dataSource="records"
      size="middle"
      :pagination="pagination"
      :scroll="{ y: 500 }"
      :loading="loading"
      class="dictionary-table"
    >
      <template #title>
        <SearchForm
          :labelWidth="80"
          :items="searchItems"
          @search="searchHandler"
        ></SearchForm>
      </template>

      <template #bodyCell="{ column, value }">
        <Tag
          v-if="column.dataIndex === 'enable'"
          :color="value ? 'blue' : 'red'"
          size="small"
        >
          {{ value ? "Enabled" : "Disabled" }}
        </Tag>
        <span v-else-if="column.dataIndex === 'description' && !value">
          --
        </span>
        <Space v-else-if="column.key === 'action'">
          <Button size="small" type="link">Update</Button>
          <Button size="small" danger type="link">Del</Button>
        </Space>
      </template>
    </Table>
    <FormModal v-model:open="modalOpen" />
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
  .dictionary-table {
    :deep(.ant-table-title) {
      padding: 20px 0;
    }
  }
}
</style>
