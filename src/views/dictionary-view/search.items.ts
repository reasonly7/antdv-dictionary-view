import { SearchFormItem } from "@/components/search-form";
import { Select } from "ant-design-vue";
import { h } from "vue";

export const searchItems: SearchFormItem[] = [
  { label: "Category", name: "category" },
  { label: "Key", name: "key" },
  { label: "Value", name: "value" },
  {
    label: "Enable",
    name: "enable",
    component: h(Select, {
      options: [
        { label: "Enabled", value: 1 },
        { label: "Disabled", value: 0 },
      ],
    }),
  },
  { label: "Desc", name: "description" },
];
