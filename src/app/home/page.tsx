"use client";
import React, { useState } from "react";
import { Col, Row } from "antd";
import { Card } from "antd";
import Image from "next/image";
import PlannerView from "../../../public/images/planner_view.jpg";
import TrainerSchedule from "../../../public/images/trainer_schedule.jpg";
import ContentManagement from "../../../public/images/content_management.jpg";
import TrainerManagement from "../../../public/images/trainer_management.jpg";
import RoomManagement from "../../../public/images/room_management.jpg";
import { Menu } from "antd";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  const menuList: { label: any; key: string }[] = [
    {
      label: <label className="sm:text:sm lg:text-xl">User Management</label>,
      key: "user_management",
    },
    {
      label: <label className="sm:text:sm lg:text-xl">Logout</label>,
      key: "logout",
    },
  ];

  const [current, setCurrent] = useState("");

  const onChangeMenu = (e: any) => {
    switch (e.key) {
      case "user-user_management":
        router.push("/user_management");
        break;
        break;
      case "logout":
        router.push("/auth");
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col gap-10 p-10 bg-[#f0f8ff] min-h-screen w-full bg-cover bg-center">
      <Menu
        onClick={onChangeMenu}
        selectedKeys={[current]}
        mode="horizontal"
        items={menuList}
        className="bg-[#f0f8ff] border-none flex justify-end"
      />
      <Row gutter={[10, 15]}>
        <Col xs={24} md={12} sm={12}>
          <Card
            hoverable
            cover={
              <Image
                alt="Planner View"
                src={PlannerView}
                style={{ marginBottom: 0 }}
              />
            }
          >
            <Card.Meta title="Planner View" />
          </Card>
        </Col>

        <Col xs={24} md={12} sm={12}>
          <Card
            hoverable
            cover={
              <Image
                alt="Trainer Schedule"
                src={TrainerSchedule}
                style={{ marginBottom: 0 }}
              />
            }
          >
            <Card.Meta title="Trainer Schedule" />
          </Card>
        </Col>

        <Col xs={24} md={6} sm={6}>
          <Card
            hoverable
            cover={
              <Image
                alt="Moderator Manager View"
                src={PlannerView}
                style={{ marginBottom: 0 }}
              />
            }
            onClick={() => router.push("/moderator_management")}
          >
            <Card.Meta title="Moderator Manager View" />
          </Card>
        </Col>

        <Col xs={24} md={6} sm={6}>
          <Card
            hoverable
            cover={
              <Image
                alt="example"
                src={ContentManagement}
                style={{ marginBottom: 0 }}
              />
            }
            onClick={() => router.push("/content_management")}
          >
            <Card.Meta title="Content Management" />
          </Card>
        </Col>

        <Col xs={24} md={6} sm={6}>
          <Card
            hoverable
            cover={
              <Image
                alt="Trainer/Mod Management"
                src={TrainerManagement}
                style={{ marginBottom: 0 }}
              />
            }
            onClick={() => router.push("/trainer_management")}
          >
            <Card.Meta title="Trainer/Mod Management" />
          </Card>
        </Col>

        <Col xs={24} md={6} sm={6}>
          <Card
            hoverable
            cover={
              <Image
                alt="Room Management"
                src={RoomManagement}
                style={{ marginBottom: 0 }}
              />
            }
            onClick={() => router.push("/room_management")}
          >
            <Card.Meta title="Room Management" />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
