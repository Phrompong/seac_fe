"use client";
import React, { useState } from "react";
import { Button, Menu } from "antd";
import MainMenu from "@/components/menu";
import { Table, Flex } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import Content from "@/components/content";

const UserManagement = () => {
  const router = useRouter();

  const dataSource = [
    {
      key: "1",
      id: "1",
      name: "test",
      type: "type",
      availableForContentFormat: "availableForContentFormat",
      instancyLocationId: "instancyLocationId",
      instancyDisplayName: "instancyDisplayName",
      active: "active",
      action: "action",
    },
  ];

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Available For Content Format",
      dataIndex: "availableForContentFormat",
      key: "availableForContentFormat",
    },
    {
      title: "Instancy Location ID",
      dataIndex: "instancyLocationId",
      key: "instancyLocationId",
    },
    {
      title: "Instancy Display Name",
      dataIndex: "instancyDisplayName",
      key: "instancyDisplayName",
    },
    {
      title: "Active",
      dataIndex: "active",
      key: "active",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
    },
  ];

  const onClickCreate = () => {
    router.push("/room_management/new");
  };

  return (
    <Content
      title="Room Management"
      btnCreateName="Create Room"
      columns={columns}
      dataSource={dataSource}
      onClick={onClickCreate}
    ></Content>
  );
};

export default UserManagement;
