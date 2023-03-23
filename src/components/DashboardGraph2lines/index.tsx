import React from "react";

import { Text, Line, Img } from "components";

type DashboardGraph2linesProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{
    approvalsrejectOne: string;
    thismonthTwo: string;
    ten: string;
    zero: string;
    marcounter: string;
    approved: string;
    two: string;
    rejected: string;
    zeroOne: string;
    mar12023: string;
    mar312023: string;
  }>;

const DashboardGraph2lines: React.FC<DashboardGraph2linesProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex items-start justify-start w-[304px]">
          <div className="flex flex-col gap-[4px] items-start justify-start self-stretch w-[auto]">
            <Text
              className="font-inter font-medium text-gray_900 text-left w-[auto]"
              variant="body2"
            >
              {props?.approvalsrejectOne}
            </Text>
            <Text
              className="font-inter font-normal not-italic text-bluegray_200 text-left w-[auto]"
              variant="body3"
            >
              {props?.thismonthTwo}
            </Text>
          </div>
        </div>
        <div className="flex items-start justify-start self-stretch w-[auto]">
          <div className="flex flex-col gap-[7px] items-start justify-start w-[100%]">
            <Text
              className="font-inter font-normal not-italic text-gray_900 text-left w-[auto]"
              variant="body6"
            >
              {props?.ten}
            </Text>
            <div className="h-[106px] relative w-[100%]">
              <Text
                className="absolute bottom-[6%] font-inter font-normal left-[0] not-italic text-gray_900 text-left w-[auto]"
                variant="body6"
              >
                {props?.zero}
              </Text>
              <div className="absolute h-[106px] inset-[0] justify-center m-[auto] w-[100%]">
                <div className="h-[106px] md:h-[99px] m-[auto] w-[100%]">
                  <div className="absolute flex flex-col inset-x-[0] mx-[auto] top-[0] w-[100%]">
                    <Line className="bg-gray_300 h-[1px] mt-[-NaNpx] mx-[auto] w-[100%] z-[1]" />
                    <Img
                      src="images/img_vector1.svg"
                      className="h-[99px] mb-[auto] ml-[auto] mt-[-0.5px] w-[auto] z-[1]"
                      alt="vectorOne"
                    />
                  </div>
                  <Img
                    src="images/img_vector2.svg"
                    className="absolute bottom-[0] h-[26px] right-[0] w-[auto]"
                    alt="vectorTwo"
                  />
                </div>
                <div className="absolute flex flex-row h-[100%] inset-y-[0] items-start justify-center my-[auto] right-[19%] w-[43%]">
                  <div className="h-[106px] relative w-[10%]">
                    <Line className="absolute bg-bluegray_400 h-[106px] inset-y-[0] left-[25%] my-[auto] w-[1px]" />
                    <Img
                      src="images/img_group.svg"
                      className="absolute bottom-[9%] h-[15px] inset-x-[0] mx-[auto] w-[auto]"
                      alt="group"
                    />
                  </div>
                  <div className="bg-white_A700_e5 flex flex-col gap-[8px] items-start justify-start mb-[28px] mt-[8px] px-[8px] py-[6px] rounded-[8px] self-stretch shadow-bs w-[auto]">
                    <Text
                      className="font-inter font-normal not-italic text-bluegray_700 text-right w-[auto]"
                      variant="body6"
                    >
                      {props?.marcounter}
                    </Text>
                    <div className="flex flex-row gap-[20px] items-start justify-between w-[101px]">
                      <div className="flex flex-row gap-[8px] items-center justify-start self-stretch w-[auto]">
                        <div className="bg-green_400 h-[10px] rounded-[50%] w-[10px]"></div>
                        <Text
                          className="font-inter font-normal not-italic text-bluegray_700 text-right w-[auto]"
                          variant="body6"
                        >
                          {props?.approved}
                        </Text>
                      </div>
                      <Text
                        className="font-inter font-normal not-italic text-gray_900 text-right w-[auto]"
                        variant="body6"
                      >
                        {props?.two}
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[20px] items-start justify-between w-[101px]">
                      <div className="flex flex-row gap-[8px] items-center justify-start self-stretch w-[auto]">
                        <div className="bg-red_A200 h-[10px] rounded-[50%] w-[10px]"></div>
                        <Text
                          className="font-inter font-normal not-italic text-bluegray_700 text-right w-[auto]"
                          variant="body6"
                        >
                          {props?.rejected}
                        </Text>
                      </div>
                      <Text
                        className="font-inter font-normal not-italic text-gray_900 text-right w-[auto]"
                        variant="body6"
                      >
                        {props?.zeroOne}
                      </Text>
                    </div>
                  </div>
                </div>
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
                    {props?.mar12023}
                  </Text>
                  <Text
                    className="font-inter font-normal not-italic text-gray_900 text-right w-[auto]"
                    variant="body6"
                  >
                    {props?.mar312023}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DashboardGraph2lines.defaultProps = {
  approvalsrejectOne: "Approvals & Rejections",
  thismonthTwo: "This month",
  ten: "10",
  zero: "0",
  marcounter: "Mar 9",
  approved: "Approved",
  two: "2",
  rejected: "Rejected",
  zeroOne: "0",
  mar12023: "Mar 1, 2023",
  mar312023: "Mar 31, 2023",
};

export default DashboardGraph2lines;
