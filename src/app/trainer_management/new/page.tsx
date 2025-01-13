"use client";
import ContentAdd from "@/components/content_add";
import { Button, Form, Input, Radio, Switch } from "antd";
import { useRouter } from "next/navigation";
import React from "react";
import { SaveOutlined } from "@ant-design/icons";

type FieldType = {
  name: string;
  lastName: string;
  nickNameTH: string;
  nickNameEN: string;
  telephone: string;
  email: string;
  trainerType: string;
  contractType: string;
  maximumEventPerMonth: string;
  position: string;
  iCalendarLink: string;
  isActive: boolean;
};

const NewTrainer = () => {
  const router = useRouter();

  return (
    <ContentAdd
      title="Create Trainer"
      onClick={() => router.push("/trainer_management")}
    >
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

        <Form.Item<FieldType> label="LastName" name="lastName">
          <Input />
        </Form.Item>

        <Form.Item<FieldType> label="Nickname (TH)" name="nickNameTH">
          <Input />
        </Form.Item>

        <Form.Item<FieldType> label="Nickname (EN)" name="nickNameEN">
          <Input />
        </Form.Item>

        <Form.Item<FieldType> label="Telephone" name="telephone">
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Trainer Type"
          name="trainerType"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Contract Type"
          name="contractType"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Maximum Event Per Month"
          name="maximumEventPerMonth"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Position"
          name="position"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Radio.Group>
            <Radio value={1}>Trainer</Radio>
            <Radio value={2}>Moderator</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item<FieldType> label="iCalendar Link" name="iCalendarLink">
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
    </ContentAdd>
  );
};

export default NewTrainer;
