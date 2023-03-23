import React from "react";

import { Button, List, Text } from "components";

type PortofolioTabsProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{
    businessInfo: string;
    label: string;
    label1: string;
    labelOne: string;
    labelTwo: string;
  }>;

const PortofolioTabs: React.FC<PortofolioTabsProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Button className="bg-lime_50 cursor-pointer font-inter font-medium min-w-[126px] px-[16px] py-[10px] rounded-[20px] text-[14px] text-center text-yellow_900 w-[auto]">
          {props?.businessInfo}
        </Button>
        <List
          className="sm:flex-col flex-row gap-[16px] grid grid-cols-2 md:w-[100%] w-[39%]"
          orientation="horizontal"
        >
          <div className="flex items-start justify-start px-[16px] py-[10px] self-stretch w-[auto]">
            <Text
              className="font-inter font-medium text-bluegray_700 text-left w-[auto]"
              variant="body2"
            >
              {props?.labelTwo}
            </Text>
          </div>
          <div className="flex items-start justify-start px-[16px] py-[10px] self-stretch w-[auto]">
            <Text
              className="font-inter font-medium text-bluegray_700 text-left w-[auto]"
              variant="body2"
            >
              {props?.labelTwo}
            </Text>
          </div>
        </List>
        <div className="flex items-start justify-start px-[16px] py-[10px] self-stretch w-[auto]">
          <Text
            className="font-inter font-medium text-bluegray_700 text-left w-[auto]"
            variant="body2"
          >
            {props?.labelTwo}
          </Text>
        </div>
        <div className="flex items-start justify-start px-[16px] py-[10px] self-stretch w-[auto]">
          <Text
            className="font-inter font-medium text-bluegray_700 text-left w-[auto]"
            variant="body2"
          >
            {props?.labelTwo}
          </Text>
        </div>
      </div>
    </>
  );
};

PortofolioTabs.defaultProps = {
  label: "KYC",
  label1: "KYC",
  labelOne: "KYC",
  labelTwo: "KYC",
};

export default PortofolioTabs;
