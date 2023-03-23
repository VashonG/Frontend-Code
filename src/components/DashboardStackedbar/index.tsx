import React from "react";

import { Text, Img, List, Line } from "components";

type DashboardStackedbarProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{
    totalapplicatioOne: string;
    thismonthOne: string;
    business: string;
    six: string;
    consumer: string;
    three: string;
    total: string;
    nine: string;
  }>;

const DashboardStackedbar: React.FC<DashboardStackedbarProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[4px] items-start justify-start self-stretch w-[auto]">
          <Text
            className="font-inter font-medium text-gray_900 text-left w-[auto]"
            variant="body2"
          >
            {props?.totalapplicatioOne}
          </Text>
          <Text
            className="font-inter font-normal not-italic text-bluegray_200 text-left w-[auto]"
            variant="body3"
          >
            {props?.thismonthOne}
          </Text>
        </div>
        <div className="flex flex-col gap-[32px] items-start justify-start w-[100%]">
          <Img
            src="images/img_frame103.svg"
            className="h-[14px] w-[100%]"
            alt="frame103"
          />
          <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
            <List
              className="flex-col gap-[8px] grid items-center w-[100%]"
              orientation="vertical"
            >
              <div className="flex flex-1 flex-row items-start justify-between w-[100%]">
                <div className="flex flex-row gap-[8px] items-center justify-start self-stretch w-[auto]">
                  <div className="bg-lime_800 h-[14px] rounded-[50%] w-[14px]"></div>
                  <Text
                    className="font-inter font-normal not-italic text-gray_900 text-left w-[auto]"
                    variant="body2"
                  >
                    {props?.business}
                  </Text>
                </div>
                <Text
                  className="font-inter font-medium text-gray_900 text-right w-[auto]"
                  variant="body2"
                >
                  {props?.six}
                </Text>
              </div>
              <Line className="self-center h-[1px] bg-gray_100 w-[100%]" />
              <div className="flex flex-1 flex-row items-start justify-between w-[100%]">
                <div className="flex flex-row gap-[8px] items-center justify-start self-stretch w-[auto]">
                  <div className="bg-orange_50 h-[14px] rounded-[50%] w-[14px]"></div>
                  <Text
                    className="font-inter font-normal not-italic text-gray_900 text-left w-[auto]"
                    variant="body2"
                  >
                    {props?.consumer}
                  </Text>
                </div>
                <Text
                  className="font-inter font-medium text-gray_900 text-right w-[auto]"
                  variant="body2"
                >
                  {props?.three}
                </Text>
              </div>
            </List>
            <div className="flex flex-row items-start justify-between w-[100%]">
              <div className="flex items-center justify-start self-stretch w-[auto]">
                <Text
                  className="font-inter font-normal not-italic text-gray_900 text-left w-[auto]"
                  variant="body2"
                >
                  {props?.total}
                </Text>
              </div>
              <Text
                className="font-inter font-medium text-gray_900 text-right w-[auto]"
                variant="body2"
              >
                {props?.nine}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DashboardStackedbar.defaultProps = {
  totalapplicatioOne: "Total Applications",
  thismonthOne: "This month",
  business: "Business",
  six: "6",
  consumer: "Consumer",
  three: "3",
  total: "Total",
  nine: "9",
};

export default DashboardStackedbar;
