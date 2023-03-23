import React from "react";

import { Text, Line, Img } from "components";

type DashboardGraph1lineProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{
    annualspend: string;
    thismonthThree: string;
    price: string;
    priceOne: string;
    mar12023One: string;
    mar312023One: string;
    marcounterOne: string;
    priceTwo: string;
  }>;

const DashboardGraph1line: React.FC<DashboardGraph1lineProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[4px] items-start justify-start self-stretch w-[auto]">
          <Text
            className="font-inter font-medium text-gray_900 text-left w-[auto]"
            variant="body2"
          >
            {props?.annualspend}
          </Text>
          <Text
            className="font-inter font-normal not-italic text-bluegray_200 text-left w-[auto]"
            variant="body3"
          >
            {props?.thismonthThree}
          </Text>
        </div>
        <div className="h-[153px] md:h-[158px] relative w-[100%]">
          <div className="absolute flex flex-col gap-[6px] h-[100%] inset-[0] items-start justify-center m-[auto] w-[99%]">
            <Text
              className="font-inter font-normal not-italic text-gray_900 text-left w-[auto]"
              variant="body6"
            >
              {props?.price}
            </Text>
            <div className="h-[106px] relative w-[100%]">
              <Text
                className="absolute bottom-[6%] font-inter font-normal h-[14px] left-[0] not-italic text-gray_900 text-left w-[auto]"
                variant="body6"
              >
                {props?.priceOne}
              </Text>
              <div className="absolute flex flex-col inset-[0] justify-center m-[auto] w-[100%]">
                <Line className="bg-gray_300 h-[1px] mt-[-NaNpx] mx-[auto] w-[100%] z-[1]" />
                <Img
                  src="images/img_vector1_yellow_900.svg"
                  className="h-[106px] mb-[auto] ml-[auto] mt-[-0.5px] w-[auto] z-[1]"
                  alt="vectorOne_One"
                />
              </div>
            </div>
            <div className="flex flex-col items-end justify-start w-[100%]">
              <Line className="bg-gray_300 h-[1px] w-[100%]" />
              <div className="flex flex-col gap-[6px] items-center justify-start md:w-[100%] w-[86%]">
                <div className="flex flex-row items-center justify-between w-[100%]">
                  <Line className="bg-gray_300 h-[5px] rotate-[-90deg] w-[1px]" />
                  <Line className="bg-gray_300 h-[5px] rotate-[-90deg] w-[1px]" />
                </div>
                <div className="flex flex-row items-center justify-between w-[100%]">
                  <Text
                    className="font-inter font-normal not-italic text-gray_900 text-left w-[auto]"
                    variant="body6"
                  >
                    {props?.mar12023One}
                  </Text>
                  <Text
                    className="font-inter font-normal not-italic text-gray_900 text-right w-[auto]"
                    variant="body6"
                  >
                    {props?.mar312023One}
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex flex-row items-start justify-evenly right-[0] top-[12%] w-[43%]">
            <div className="h-[106px] relative w-[10%]">
              <Line className="absolute bg-bluegray_400 h-[106px] inset-y-[0] left-[25%] my-[auto] w-[1px]" />
              <Img
                src="images/img_group.svg"
                className="absolute bottom-[30%] h-[15px] inset-x-[0] mx-[auto] w-[auto]"
                alt="group_One"
              />
            </div>
            <div className="bg-white_A700_e5 flex flex-row gap-[20px] items-start justify-between mb-[50px] mt-[30px] px-[8px] py-[6px] rounded-[8px] shadow-bs w-[117px]">
              <div className="flex flex-row gap-[8px] items-center justify-start self-stretch w-[auto]">
                <div className="bg-yellow_900 h-[10px] rounded-[50%] w-[10px]"></div>
                <Text
                  className="font-inter font-normal not-italic text-bluegray_700 text-right w-[auto]"
                  variant="body6"
                >
                  {props?.marcounterOne}
                </Text>
              </div>
              <Text
                className="font-inter font-normal not-italic text-gray_900 text-right w-[auto]"
                variant="body6"
              >
                {props?.priceTwo}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DashboardGraph1line.defaultProps = {
  annualspend: "Annual Spend",
  thismonthThree: "This month",
  price: "$5,274",
  priceOne: "$0",
  mar12023One: "Mar 1, 2023",
  mar312023One: "Mar 31, 2023",
  marcounterOne: "Mar 17",
  priceTwo: "$628",
};

export default DashboardGraph1line;
