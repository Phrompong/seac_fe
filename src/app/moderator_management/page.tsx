"use client";
import Content from "@/components/content";
import { DatePicker, Flex, Radio } from "antd";
import React, { useReducer, useState } from "react";
import dayjs from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek";

dayjs.extend(isoWeek);

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

  const [selectPicker, setSelectPicker] = useState<any>("date");

  return (
    <Content title="Moderator Manager">
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
          defaultValue="Day"
          optionType="button"
          buttonStyle="solid"
        />
      </Flex>
    </Content>
  );
};

export default ModeratorManagement;
