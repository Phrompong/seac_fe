"use client";
import Content from "@/components/content";
import { useRouter } from "next/navigation";
import React from "react";

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
    ></Content>
  );
};

export default TrainerManagement;
