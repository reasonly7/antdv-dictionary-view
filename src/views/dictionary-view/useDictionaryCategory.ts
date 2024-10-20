import { reactive, ref } from "vue";
import { CategoryItem, dictionaryApi } from "@/api/dictionaryApi";
import { useToggle } from "@vueuse/core";
import { ColumnsType } from "ant-design-vue/es/table";

export const uesDictionaryCategory = () => {
  const [loading, loadingToggle] = useToggle(false);
  const list = ref<CategoryItem[]>([]);

  const refresh = async () => {
    loadingToggle(true);
    list.value = (await dictionaryApi.getCategories()) || [];
    loadingToggle(false);
  };

  return reactive({
    loading,
    list,
    refresh,
  });
};

export const categoryTableColumns: ColumnsType = [
  { title: "Category", dataIndex: "category" },
  { title: "Count", dataIndex: "count" },
  { title: "Actions", key: "action", width: 150, align: "center" },
];
