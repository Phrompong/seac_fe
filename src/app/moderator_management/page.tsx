"use client";
import Content from "@/components/content";
import { DatePicker, Flex, Radio, Divider, Card, Calendar } from "antd";
import React, { useReducer, useState } from "react";
import dayjs from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek";
import { AudioOutlined, SmileOutlined, MailOutlined } from "@ant-design/icons";

dayjs.extend(isoWeek);

const RoomList = [
  {
    roomName: "Room 1",
    eventCount: 2,
  },

  {
    roomName: "Room 2",
    eventCount: 3,
  },

  {
    roomName: "Room 3",
    eventCount: 4,
  },
];

const Rooms = () => {
  return (
    <Flex vertical>
      {RoomList.map((room, index) => (
        <>
          <Divider style={{ borderColor: "#D3D3D3" }}>
            {room.roomName} (1)
          </Divider>
          <Card
            title={
              <Flex justify="space-between">
                <label>{room.roomName}</label>
                <label>1</label>
              </Flex>
            }
            bordered={false}
            style={{ width: 300 }}
            type="inner"
          >
            <Flex gap="small" vertical>
              <Flex gap="small">
                <AudioOutlined />
                <SmileOutlined />
                <MailOutlined />
                <label></label>
              </Flex>
            </Flex>
          </Card>
        </>
      ))}
    </Flex>
  );
};

const List = () => {
  return (
    <Flex>
      <Card
        title={
          <Flex justify="space-between">
            <label>xxx</label>
            <label>1</label>
          </Flex>
        }
        bordered={false}
        style={{ width: "100%" }}
        type="inner"
      >
        <Flex gap="small" vertical>
          <Flex gap="small">
            <AudioOutlined />
            <SmileOutlined />
            <MailOutlined />
            <label></label>
          </Flex>
        </Flex>
      </Card>
    </Flex>
  );
};

const CalendarMode = () => {
  return <Calendar />;
};

const renderMode = (mode: string) => {
  switch (mode) {
    case "rooms":
      return <Rooms />;
    case "list":
      return <List />;
    case "calendar":
      return <CalendarMode />;
    default:
      return null;
  }
};

const ModeratorManagement = () => {
  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case "date":
        return { picker: "date", format: "dddd, DD MMM YYYY" };
      case "week":
        return {
          picker: "week",
          format: (value: any) => {
            const weekNumber = dayjs(value).isoWeek();
            const year = dayjs(value).isoWeekYear();
            return `Week ${String(weekNumber).padStart(2, "0")} of ${year}`;
          },
        };
      case "month":
        return { picker: "month", format: "MMMM YYYY" };
      case "year":
        return { picker: "year", format: "YYYY" };
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    picker: "date",
    format: "dddd, DD MMM YYYY",
  });

  const [mode, setMode] = useState<string>("rooms");

  return (
    <Content title="Moderator Manager">
      <Flex gap="small" vertical>
        <Flex justify="flex-start" gap="large">
          <DatePicker
            style={{ width: "220px" }}
            format={state?.format}
            picker={state?.picker as any}
            defaultValue={dayjs()}
          />

          <Radio.Group
            block
            options={[
              { label: "Day", value: "date" },
              { label: "Week", value: "week" },
              { label: "Month", value: "month" },
              { label: "Year", value: "year" },
            ]}
            defaultValue={state?.picker}
            optionType="button"
            buttonStyle="solid"
            onChange={(e) => {
              dispatch({ type: e.target.value });
            }}
          />

          <Radio.Group
            block
            options={[
              { label: "Rooms", value: "rooms" },
              { label: "List", value: "list" },
              { label: "Calendar", value: "calendar" },
            ]}
            defaultValue={mode}
            optionType="button"
            buttonStyle="solid"
            onChange={(e) => setMode(e.target.value)}
          />
        </Flex>
        <Flex>
          <label>Something</label>
        </Flex>
        {renderMode(mode)}
      </Flex>
    </Content>
  );
};

export default ModeratorManagement;
