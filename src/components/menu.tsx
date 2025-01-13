"use client";
import React, { Children, useState } from "react";
import { Button, Menu, Layout } from "antd";
import { useRouter, usePathname } from "next/navigation";
import Icon, {
  ScheduleOutlined,
  PlusCircleOutlined,
  ContactsOutlined,
  ContainerOutlined,
  ShareAltOutlined,
  MailOutlined,
  InsertRowBelowOutlined,
  CodeSandboxOutlined,
  BookOutlined,
  StarOutlined,
  EnvironmentOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import WhiteLogo from "../../public/images/white_logo.png";
import Image from "next/image";

const { Header, Content, Footer, Sider } = Layout;

const MainMenu = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(true);

  const selectMenu = (pathname: string) => {
    switch (pathname) {
      case "/home":
        return ["0"];
      case "/create_schedule":
        return ["1"];
      case "/planner":
        return ["2"];
      case "/trainer_schedule":
        return ["3"];
      case "/schedule_logs":
        return ["4"];
      case "/export_report":
        return ["5"];
      case "/mail_management":
        return ["6"];
      case "/map_schedule":
        return ["7"];
      case "/moderator_management":
        return ["8"];
      case "/content_management":
        return ["9"];
      case "/trainer_management":
        return ["10"];
      case "/room_management":
        return ["11"];
      case "/user_management":
        return ["12"];
    }
  };

  const [defaultSelectKey, setDefaultSelectKey] = useState(
    selectMenu(pathname)
  );

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const items = [
    {
      key: "0",
      label: collapsed ? (
        ""
      ) : (
        <div className="flex justify-center items-center w-full">
          <Image src={WhiteLogo} alt="Logo" height={36}></Image>
        </div>
      ),
      icon: !collapsed ? (
        ""
      ) : (
        <div className="flex justify-center items-center w-full">
          <Image src={WhiteLogo} alt="Logo" height={36}></Image>
        </div>
      ),
      children: [
        {
          key: "0-0",
          label: "Home",
        },
        {
          key: "0-1",
          label: "Logout",
        },
      ],
    },
    {
      key: "1",
      label: "Create schedule",
      icon: <PlusCircleOutlined />,
    },
    {
      key: "2",
      label: "Planner",
      icon: <ScheduleOutlined />,
    },
    {
      key: "3",
      label: "Trainer schedule",
      icon: <ContactsOutlined />,
    },
    {
      key: "4",
      label: "Schedule logs",
      icon: <ContainerOutlined />,
    },
    {
      key: "5",
      label: "Export / Report",
      icon: <ShareAltOutlined />,
      children: [
        {
          key: "5-1",
          label: "Schedule",
          children: [
            { key: "5-1-1", label: "Schedule Export" },
            { key: "5-1-2", label: "Schedule Central Export" },
          ],
        },
        {
          key: "5-2",
          label: "Content Summary Report",
        },
        {
          key: "5-3",
          label: "Trainer Summary Report",
        },
        {
          key: "5-4",
          label: "Moderator Summary Report",
        },
        {
          key: "5-5",
          label: "Content Master",
        },
      ],
    },
    {
      key: "6",
      label: "Mail Management",
      icon: <MailOutlined />,
    },
    {
      key: "7",
      label: "Map Schedule",
      icon: <InsertRowBelowOutlined />,
    },
    {
      key: "8",
      label: "Moderator Management",
      icon: <CodeSandboxOutlined />,
    },
    {
      key: "9",
      label: "Content Management",
      icon: <BookOutlined />,
    },
    {
      key: "10",
      label: "Trainer Management",
      icon: <StarOutlined />,
    },
    {
      key: "11",
      label: "Room Management",
      icon: <EnvironmentOutlined />,
    },
    {
      key: "12",
      label: "User Management",
      icon: <TeamOutlined />,
    },
  ];

  const onSelectedMenu = (e: any) => {
    switch (e.key) {
      case "0-0":
        router.push("/home");
        break;
      case "0-1":
        router.push("/auth");
        break;

      case "8":
        router.push("/moderator_management");
        break;
      case "9":
        router.push("/content_management");
        break;
      case "10":
        router.push("/trainer_management");
        break;
      case "11":
        router.push("/room_management");
        break;
      case "12":
        router.push("/user_management");
        break;
    }
  };

  return (
    <Layout className="h-screen">
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <Menu
          onClick={onSelectedMenu}
          defaultSelectedKeys={defaultSelectKey}
          defaultOpenKeys={["sub1"]}
          mode="vertical"
          theme="dark"
          inlineCollapsed={collapsed}
          items={items}
        ></Menu>
      </Sider>
    </Layout>
  );
};

export default MainMenu;
