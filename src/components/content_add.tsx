import { Card, Flex } from "antd";
import React, { FC } from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";

type FieldType = {
  title: string;
  children: React.ReactNode;
  onClick?: () => void;
};

const ContentAdd: FC<FieldType> = (props: FieldType) => {
  return (
    <Flex gap="middle" vertical>
      <Flex gap="small">
        <ArrowLeftOutlined onClick={props.onClick} />
        <label className="text-lg font-medium">{props.title}</label>
      </Flex>
      <Card className="self-center">{props.children}</Card>
    </Flex>
  );
};

export default ContentAdd;
