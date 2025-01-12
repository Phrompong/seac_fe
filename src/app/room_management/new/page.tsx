"use client";
import ContentAdd from "@/components/content_add";
import { Button, Form, Input, Switch } from "antd";
import { useRouter } from "next/navigation";
import React from "react";
import { SaveOutlined, ArrowLeftOutlined } from "@ant-design/icons";

type FieldType = {
  name: string;
  type: string;
  availableForContentFormat: string;
  instancyLocationId: string;
  instancyDisplayName: string;
  isActive: boolean;
};

const NewRoom = () => {
  const router = useRouter();

  return (
    <ContentAdd
      title="Create Room"
      onClick={() => router.push("/room_management")}
      children={
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          style={{ width: 700 }}
          size="middle"
        >
          <Form.Item<FieldType>
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item name="type" label="Type" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item
            name="availableForContentFormat"
            label="Available For Content Format"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="instancyLocationId" label="Instancy Location ID">
            <Input />
          </Form.Item>
          <Form.Item name="instancyDisplayName" label="Instancy Display Name">
            <Input />
          </Form.Item>
          <Form.Item
            name="isActive"
            label="Is Active"
            rules={[{ required: true }]}
          >
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
      }
    ></ContentAdd>
  );
};

export default NewRoom;
