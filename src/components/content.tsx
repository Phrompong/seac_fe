"use client";
import { Button, Flex, Table, Tag } from "antd";
import React, { FC } from "react";
import { PlusCircleOutlined, RedoOutlined } from "@ant-design/icons";

type Content = {
  title: string;
  btnCreateName: string;
  columns: { title: string; dataIndex: string; key: string }[];
  dataSource: any[];
  onClick?: () => void;
  childrenHeader?: React.ReactNode;
};

const Content: FC<Content> = (params: Content) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-lg font-medium">{params.title}</label>
      {params.childrenHeader}
      <Table dataSource={params.dataSource} columns={params.columns} />
    </div>
  );
};

export default Content;
