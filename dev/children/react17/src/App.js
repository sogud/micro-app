import { useEffect, useRef, useState } from "react";
import { DownOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import type { ProColumns } from "@ant-design/pro-components";
import { ProTable, TableDropdown } from "@ant-design/pro-components";
import { Button, Popconfirm } from "antd";
import Create from "./create";
export default () => {
  const [temelateList, setTemelateList] = useState([]);
  const [record, setRecord] = useState(null);
  const [visible, setVisible] = useState(false);

  const hanldeDelete = async () => {};
  const onConfirm = async () => {
    return {};
  };
  const onInit = (actionBody) => {
    console.log("初始化onInit", actionBody);
  };

  // volvo 模板列表

  const columns = [
    {
      title: "ID",
      width: 80,
      dataIndex: "id",
      search: false,
    },
    {
      title: "名称",
      width: 80,
      dataIndex: "name",
      search: false,
    },
    {
      title: "类型",
      dataIndex: "type",
    },
    {
      title: "签名",
      dataIndex: "containers",
      align: "right",
      search: false,
    },
    {
      title: "短信内容",
      dataIndex: "content",
      align: "right",
      search: false,
    },
    {
      title: "状态",
      width: 80,
      dataIndex: "status",
      initialValue: "0",
      valueEnum: {
        0: { text: "全部" },
        1: { text: "关闭" },
      },
    },
    {
      title: "操作",
      width: 180,
      key: "option",
      valueType: "option",
      render: (_, record) => {
        return [
          <a
            key="link"
            onClick={() => {
              setVisible(true);
              setRecord({ ...record });
            }}
          >
            编辑
          </a>,
          <Popconfirm key="link2" title="确认删除吗?" onConfirm={hanldeDelete}>
            <a> 删除</a>
          </Popconfirm>,
        ];
      },
    },
  ];
  return (
    <>
      <ProTable
        columns={columns}
        params={{}}
        dataSource={temelateList}
        rowKey="id"
        pagination={{
          showQuickJumper: true,
        }}
        search={{
          defaultCollapsed: false,
          labelWidth: "auto",
          span: 4,
          optionRender: (searchConfig, formProps, dom) => [
            <Create
              key={"create"}
              visible={visible}
              onVisibleChange={(visible: boolean) => {
                setVisible(visible);
              }}
            />,
          ],
        }}
        dateFormatter="string"
        headerTitle=""
        toolBarRender={false}
      />
    </>
  );
};
