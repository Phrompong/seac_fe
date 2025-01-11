"use client";
import React, { useState } from "react";
import { Button, Menu } from "antd";
import MainMenu from "@/components/menu";
import { Table, Flex } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

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

  return (
    <div className="flex flex-col gap-2">
      <label className="text-lg font-medium">User Mangement</label>
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
          onClick={() => {
            router.push("/user_management/new");
          }}
        >
          Create User
        </Button>
      </Flex>
      <Table dataSource={dataSource} columns={columns} />;
    </div>
  );
};

export default UserManagement;
