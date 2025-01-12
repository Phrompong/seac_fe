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
};

const Content: FC<Content> = (params: Content) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-lg font-medium">{params.title}</label>
      <Flex
        justify={
          params.title === "Trainer Management" ? "space-between" : "flex-end"
        }
        gap="small"
      >
        {/* ถ้าเป็น trainer ต้องมีปุ่มนี้ */}
        {params.title === "Trainer Management" && (
          <Flex justify="flex-start">
            <Tag color="blue" style={{ alignContent: "center" }}>
              Total Record Trainer/Mod
            </Tag>
            <label className="p-1">3</label>
          </Flex>
        )}
        <Flex gap="small">
          {/* ปุ่มที่ต้องมีบ้างหน้า */}
          {(() => {
            switch (params.title) {
              case "Trainer Management":
                return (
                  <Button
                    icon={<RedoOutlined />}
                    type="primary"
                    style={{
                      width: "auto",
                      backgroundColor: "white",
                      color: "black",
                    }}
                    variant="solid"
                    onClick={params.onClick}
                  >
                    Force Download All ICS
                  </Button>
                );
              default:
                break;
            }
          })()}
          {/* ปุ่มที่ต้องมีทุกหน้า */}
          <Button
            icon={<PlusCircleOutlined />}
            type="primary"
            style={{
              width: "auto",
              backgroundColor: "hsl(342, 92%, 33%)",
              borderColor: "hsl(342, 92%, 33%)",
            }}
            variant="solid"
            onClick={params.onClick}
          >
            {params.btnCreateName}
          </Button>
        </Flex>
      </Flex>
      <Table dataSource={params.dataSource} columns={params.columns} />
    </div>
  );
};

export default Content;
