"use client";
import ContentAdd from "@/components/content_add";
import { Button, Form, Input, Switch } from "antd";
import { useRouter } from "next/navigation";
import React from "react";
import { SaveOutlined } from "@ant-design/icons";

const NewContent = () => {
  const router = useRouter();

  return (
    <ContentAdd
      title="Create Content"
      onClick={() => router.push("/content_management")}
    >
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        style={{ width: 700 }}
        size="middle"
      >
        <Form.Item
          label="Code"
          name="code"
          rules={[{ required: true, message: "Please input code!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Outline ID" name="outlineId">
          <Input />
        </Form.Item>
        <Form.Item label="Course ID" name="courseId">
          <Input />
        </Form.Item>
        <Form.Item label="Course Title" name="courseTitle">
          <Input />
        </Form.Item>
        <Form.Item
          label="Display Name"
          name="displayName"
          rules={[{ required: true, message: "Please input display name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Original Name"
          name="originalName"
          rules={[{ required: true, message: "Please input original name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Duration Min"
          name="durationMin"
          rules={[{ required: true, message: "Please input duration min!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Pax Max"
          name="paxMax"
          rules={[{ required: true, message: "Please input pax max!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Business Type"
          name="businessType"
          rules={[{ required: true, message: "Please input business type!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Learning Type"
          name="learningType"
          rules={[{ required: true, message: "Please input learning type!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Trainer" name="trainer">
          <Input />
        </Form.Item>

        <Form.Item label="Content Format" name="contentFormat">
          <Input />
        </Form.Item>

        <Form.Item label="Is Active" name="isActive">
          <Switch checked={true} />
        </Form.Item>

        <Form.Item label="Is Privilege" name="isPrivilege">
          <Switch checked={true} />
        </Form.Item>

        <Form.Item label="Is Internal" name="isInternal">
          <Switch checked={true} />
        </Form.Item>

        <div className="text-right">
          <Button
            type="primary"
            htmlType="submit"
            icon={<SaveOutlined />}
            disabled={true}
          >
            Submit
          </Button>
        </div>
      </Form>
    </ContentAdd>
  );
};

export default NewContent;
