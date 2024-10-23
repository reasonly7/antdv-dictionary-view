import { FormInstance } from "ant-design-vue";
import { reactive, ref, VNodeRef } from "vue";

export const useForm = <T extends { [key: string]: unknown }>(
  initModel = {} as T
) => {
  const model = reactive(initModel);
  const formRef = ref<VNodeRef>();

  const setFormRef = (instance: VNodeRef | undefined) => {
    formRef.value = instance;
  };

  return {
    model,
    setFormRef,
    formRef,
  };
};
