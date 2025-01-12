import React, { FC } from "react";
import { PlusCircleOutlined, RedoOutlined } from "@ant-design/icons";
import { Button } from "antd";

const ButtonAdd: FC<{ name: string; onClick: () => void }> = (param) => {
  return (
    <Button
      icon={<PlusCircleOutlined />}
      type="primary"
      style={{
        width: "auto",
        backgroundColor: "hsl(342, 92%, 33%)",
        borderColor: "hsl(342, 92%, 33%)",
      }}
      variant="solid"
      onClick={param.onClick}
    >
      {param.name}
    </Button>
  );
};

export default ButtonAdd;
