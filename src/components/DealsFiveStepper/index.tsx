import React from "react";

import { Img, Line, Text } from "components";

type DealsFiveStepperProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{
    pending: string;
    sent: string;
    underwriting: string;
    needmoreinfo: string;
  }>;

const DealsFiveStepper: React.FC<DealsFiveStepperProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[11px] items-center justify-start w-[100%]">
          <div className="flex flex-row h-[24px] md:h-[auto] items-center justify-start sm:w-[100%] w-[388px]">
            <div className="md:h-[16px] h-[24px] p-[4px] relative w-[24px]">
              <div className="absolute bg-yellow_900 h-[16px] inset-[0] justify-center m-[auto] rounded-[50%] w-[16px]"></div>
              <Img
                src="images/img_checkmark.svg"
                className="absolute h-[12px] inset-[0] justify-center m-[auto] w-[12px]"
                alt="checkmark"
              />
            </div>
            <Img
              src="images/img_group3.svg"
              className="h-[2px] w-[90px]"
              alt="frame188"
            />
            <Img
              src="images/img_location.svg"
              className="h-[24px] w-[24px]"
              alt="location"
            />
            <Img
              src="images/img_frame187.svg"
              className="h-[2px] w-[90px]"
              alt="frame187"
            />
            <Img
              src="images/img_stepicon.svg"
              className="h-[24px] w-[24px]"
              alt="stepicon"
            />
            <Line className="bg-gray_300 h-[2px] rounded-[1px] w-[24%]" />
            <Img
              src="images/img_stepicon.svg"
              className="h-[24px] w-[24px]"
              alt="stepicon_One"
            />
          </div>
          <div className="flex sm:flex-col flex-row sm:gap-[20px] items-start justify-start w-[100%]">
            <Text
              className="font-inter font-medium text-center text-gray_900 w-[auto]"
              variant="body6"
            >
              {props?.pending}
            </Text>
            <Text
              className="font-inter font-medium sm:ml-[0] ml-[80px] text-center text-yellow_900 w-[auto]"
              variant="body6"
            >
              {props?.sent}
            </Text>
            <Text
              className="font-inter font-normal sm:ml-[0] ml-[67px] not-italic text-bluegray_700 text-center w-[auto]"
              variant="body6"
            >
              {props?.underwriting}
            </Text>
            <Text
              className="font-inter font-normal sm:ml-[0] ml-[38px] not-italic text-bluegray_700 text-center w-[auto]"
              variant="body6"
            >
              {props?.needmoreinfo}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

DealsFiveStepper.defaultProps = {
  pending: "Pending",
  sent: "Sent",
  underwriting: "Underwriting",
  needmoreinfo: "Need more info.",
};

export default DealsFiveStepper;
