"use client";
import React, { useState } from "react";
import { Button, Menu } from "antd";
import MainMenu from "@/components/menu";
import { Table, Flex } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import Content from "@/components/content";
import ButtonAdd from "@/components/button_add";

const UserManagement = () => {
  const router = useRouter();

  const dataSource = [
    {
      key: "1",
      id: "1",
      username: "test",
      role: "role",
      roleModerator: "roleModerator",
      lastLogin: "lastLogin",
      password: "password",
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
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Role Moderator",
      dataIndex: "roleModerator",
      key: "roleModerator",
    },
    {
      title: "Last Login",
      dataIndex: "lastLogin",
      key: "lastLogin",
    },
    {
      title: "Password",
      dataIndex: "password",
      key: "password",
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
    router.push("/user_management/new");
  };

  return (
    <Content
      title="User Management"
      btnCreateName="Create User"
      columns={columns}
      dataSource={dataSource}
      onClick={onClickCreate}
      childrenHeader={
        <Flex justify="end">
          <ButtonAdd name="Create User" onClick={onClickCreate}></ButtonAdd>
        </Flex>
      }
    ></Content>
  );
};

export default UserManagement;
