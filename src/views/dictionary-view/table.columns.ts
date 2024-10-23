import { ColumnsType } from "ant-design-vue/es/table";

export const tableColumns: ColumnsType = [
  { title: "Category", dataIndex: "category" },
  { title: "Key", dataIndex: "key" },
  { title: "Value", dataIndex: "value" },
  { title: "Enable", dataIndex: "enable" },
  { title: "Description", dataIndex: "description" },
  { title: "Actions", key: "action", width: 150, align: "center" },
];
