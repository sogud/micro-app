import {
  DrawerForm,
  ProForm,
  ProFormTextArea,
  ProFormSelect,
  ProFormText,
} from "@ant-design/pro-components";
import { Button, Form, message } from "antd";
import { useState, useEffect } from "react";

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export default (props) => {
  const { visible, onVisibleChange } = props;
  const [form] = Form.useForm();

  return (
    <DrawerForm
      form={form}
      visible={visible}
      onVisibleChange={onVisibleChange}
      trigger={<Button type="primary">创建</Button>}
      autoFocusFirstInput
      drawerProps={{
        destroyOnClose: true,
      }}
      submitTimeout={2000}
      onFinish={async (values) => {
        await waitTime(2000);
        console.log(values.name);
        message.success("提交成功");
        // 不返回不会关闭弹框
        return true;
      }}
    >
      <ProFormText
        name="name"
        width="md"
        label="名称"
        placeholder="请输入名称"
      />
      <ProFormSelect options={[]} width="md" name="type" label="类型" />
      <ProFormTextArea name="content" label="内容" />
    </DrawerForm>
  );
};
