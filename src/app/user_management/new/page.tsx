"use client";
import { Card, Flex } from "antd";
import { Form, Input, Select, Switch, Button } from "antd";
import { SaveOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import React from "react";
import { useRouter } from "next/navigation";

type FieldType = {
  username: string;
  role: string;
  roleModerator: string;
  isActive: boolean;
};

const { Option } = Select;

const NewUser = () => {
  const router = useRouter();

  return (
    <Flex gap="middle" vertical>
      <Flex gap="small">
        <ArrowLeftOutlined
          onClick={() => {
            router.push("/user_management");
          }}
        />
        <label className="text-lg font-medium">Create User</label>
      </Flex>
      <Card className="self-center">
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          style={{ width: 700 }}
          size="middle"
        >
          <Form.Item<FieldType>
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item name="role" label="Role" rules={[{ required: true }]}>
            <Select allowClear></Select>
          </Form.Item>

          <Form.Item
            name="roleModerator"
            label="Role Moderator"
            rules={[{ required: false }]}
          >
            <Select allowClear></Select>
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
      </Card>
    </Flex>
  );
};

export default NewUser;
