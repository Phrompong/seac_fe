"use client";
import { Button, Flex, Table } from "antd";
import React, { FC } from "react";
import { PlusCircleOutlined } from "@ant-design/icons";

type Content = {
  title: string;
  btnCreateName: string;
  columns: { title: string; dataIndex: string; key: string }[];
  dataSource: any[];
  onClick?: () => void;
};

const Content: FC<Content> = (params: Content) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-lg font-medium">{params.title}</label>
      <Flex justify="end">
        <Button
          icon={<PlusCircleOutlined />}
          type="primary"
          style={{
            width: 120,
            backgroundColor: "hsl(342, 92%, 33%)",
            borderColor: "hsl(342, 92%, 33%)",
          }}
          variant="solid"
          onClick={params.onClick}
        >
          Create User
        </Button>
      </Flex>
      <Table dataSource={params.dataSource} columns={params.columns} />
    </div>
  );
};

export default Content;
