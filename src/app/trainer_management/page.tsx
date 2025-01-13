"use client";
import Content from "@/components/content";
import { Button, Flex, Tag } from "antd";
import { useRouter } from "next/navigation";
import React from "react";
import { RedoOutlined } from "@ant-design/icons";
import ButtonAdd from "@/components/button_add";

const TrainerManagement = () => {
  const router = useRouter();

  const dataSource = [
    {
      id: 1,
      name: "John Doe",
      nicknameTH: "John",
      nicknameEN: "Doe",
      telephone: "0812345678",
      email: "",
      trainerType: "Personal Trainer",
      contractType: "Contract",
      maxEventPerMonth: 10,
      isTrainer: true,
      active: true,
      action: "Edit",
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
      title: "Nickname (TH)",
      dataIndex: "nicknameTH",
      key: "nicknameTH",
    },
    {
      title: "Nickname (EN)",
      dataIndex: "nicknameEN",
      key: "nicknameEN",
    },
    {
      title: "Telephone",
      dataIndex: "telephone",
      key: "telephone",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Trainer Type",
      dataIndex: "trainerType",
      key: "trainerType",
    },
    {
      title: "Contract Type",
      dataIndex: "contractType",
      key: "contractType",
    },
    {
      title: "Max. Event / Month",
      dataIndex: "maxEventPerMonth",
      key: "maxEventPerMonth",
    },
    {
      title: "isTrainer",
      dataIndex: "isTrainer",
      key: "isTrainer",
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
    router.push("/trainer_management/new");
  };

  return (
    <Content
      title="Trainer Management"
      btnCreateName="Create Trainer/Mod"
      columns={columns}
      dataSource={dataSource}
      onClick={onClickCreate}
      childrenHeader={
        <Flex justify="space-between" gap="small">
          <Flex>
            <Tag color="blue" style={{ alignContent: "center" }}>
              Total Record Trainer/Mod
            </Tag>
            <label className="p-1">3</label>
          </Flex>

          <Flex gap="small">
            <Button
              icon={<RedoOutlined />}
              type="primary"
              style={{
                width: "auto",
                backgroundColor: "white",
                color: "black",
              }}
              variant="solid"
            >
              Force Download All ICS
            </Button>

            <ButtonAdd
              name="Create Trainer/Mod"
              onClick={onClickCreate}
            ></ButtonAdd>
          </Flex>
        </Flex>
      }
    ></Content>
  );
};

export default TrainerManagement;
