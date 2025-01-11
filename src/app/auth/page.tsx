"use client";
import React from "react";
import RedLogo from "../../../public/images/red_logo.png";
import Image from "next/image";
import { Card } from "antd";
import { Button, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

const Auth = () => {
  const router = useRouter();
  const [form] = Form.useForm();

  const onSubmit = (params: { username: string; password: string }) => {
    console.table(params);

    router.push("/home");
  };

  return (
    <div className="bg-login min-h-screen w-full bg-cover bg-center">
      <div className="flex justify-center pt-[100px]">
        <Card
          hoverable
          style={{ width: 270 }}
          cover={
            <Image
              alt="example"
              src={RedLogo}
              className="pl-[24px] pr-[24px]"
              style={{ marginBottom: 0 }}
            />
          }
        >
          <Card.Meta
            title="Scheduling System"
            style={{ textAlign: "center" }}
          />
          <Form
            form={form}
            name="horizontal_login"
            layout="vertical"
            onFinish={onSubmit}
            style={{ marginTop: 16, marginBottom: 0 }}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input prefix={<UserOutlined />} placeholder="Username" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item>
              <Button block type="primary" htmlType="submit">
                Log in
              </Button>
            </Form.Item>
          </Form>
          <Card.Meta />
        </Card>
      </div>
    </div>
  );
};

export default Auth;
