"use client";
import React from "react";
import { Tag } from "antd";
import { Flex } from "antd";
import { useRouter } from "next/navigation";
import Content from "@/components/content";
import ButtonAdd from "@/components/button_add";

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
      childrenHeader={
        <Flex justify="space-between">
          <Flex>
            <Tag color="blue" style={{ alignContent: "center" }}>
              Latest Record
            </Tag>
            <label>-</label>
          </Flex>
          <ButtonAdd name="Create Room" onClick={onClickCreate}></ButtonAdd>
        </Flex>
      }
    ></Content>
  );
};

export default UserManagement;
