"use client";
import { Table } from "antd";
import React, { FC } from "react";

type Content = {
  title: string;
  btnCreateName?: string;
  columns?: { title: string; dataIndex: string; key: string }[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dataSource?: any[];
  onClick?: () => void;
  children?: React.ReactNode;
  childrenHeader?: React.ReactNode;
};

const Content: FC<Content> = (params: Content) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-lg font-medium">{params.title}</label>
      {params.children ? (
        params.children
      ) : (
        <>
          {params.childrenHeader}
          <Table dataSource={params.dataSource} columns={params.columns} />
        </>
      )}
    </div>
  );
};

export default Content;
