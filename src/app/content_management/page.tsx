"use client";
import Content from "@/components/content";
import { useRouter } from "next/navigation";
import React from "react";

const ContentManagement = () => {
  const router = useRouter();

  const dataSource = [
    {
      id: "1",
      //   id: "1",
      //   code: "code",
      //   name: "name",
      //   outlineId: "outlineId",
      //   courseId: "courseId",
      //   courseTitle: "courseTitle",
      //   displayName: "displayName",
      //   originalName: "originalName",
      //   durationMin: "durationMin",
      //   paxMax: "paxMax",
      //   isInternal: "isInternal",
      //   isPrivilege: "isPrivilege",
      //   businessType: "businessType",
      //   learningType: "learningType",
      //   active: "active",
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
      title: "Code",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Outline ID",
      dataIndex: "outlineId",
      key: "outlineId",
    },
    {
      title: "Course ID",
      dataIndex: "courseId",
      key: "courseId",
    },
    {
      title: "Course Title",
      dataIndex: "courseTitle",
      key: "courseTitle",
    },
    {
      title: "Display Name",
      dataIndex: "displayName",
      key: "displayName",
    },
    {
      title: "Original Name",
      dataIndex: "originalName",
      key: "originalName",
    },
    {
      title: "Duration (Min)",
      dataIndex: "durationMin",
      key: "durationMin",
    },
    {
      title: "Pax. Max",
      dataIndex: "paxMax",
      key: "paxMax",
    },
    {
      title: "IsInternal",
      dataIndex: "isInternal",
      key: "isInternal",
    },
    {
      title: "IsPrivilege",
      dataIndex: "isPrivilege",
      key: "isPrivilege",
    },
    {
      title: "Business Type",
      dataIndex: "businessType",
      key: "businessType",
    },
    {
      title: "Learning Type",
      dataIndex: "learningType",
      key: "learningType",
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
    router.push("/content_management/new");
  };

  return (
    <Content
      title="Content Management"
      btnCreateName="Create Content"
      columns={columns}
      dataSource={dataSource}
      onClick={onClickCreate}
    ></Content>
  );
};

export default ContentManagement;
