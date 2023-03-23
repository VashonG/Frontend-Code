import React from "react";

import { Text, Button } from "components";

type WebApplicationElevenSecurecodeProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{
    securecode: string;
    seven: string;
    eight: string;
    zero: string;
    zeroOne: string;
    zeroTwo: string;
    zeroThree: string;
  }>;

const WebApplicationElevenSecurecode: React.FC<
  WebApplicationElevenSecurecodeProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="font-inter font-normal not-italic text-bluegray_700 text-left w-[auto]"
          variant="body3"
        >
          {props?.securecode}
        </Text>
        <div className="flex sm:flex-col flex-row gap-[8px] items-start justify-start self-stretch md:w-[100%] w-[auto]">
          <Button className="border-[1px] border-bluegray_50 border-solid cursor-pointer font-inter font-normal not-italic px-[14px] py-[10px] rounded-[20px] sm:text-[26px] md:text-[28px] text-[30px] text-center text-gray_900 w-[56px]">
            {props?.seven}
          </Button>
          <Button className="border-[1px] border-bluegray_50 border-solid cursor-pointer font-inter font-normal not-italic px-[14px] py-[10px] rounded-[20px] sm:text-[26px] md:text-[28px] text-[30px] text-center text-gray_900 w-[56px]">
            {props?.eight}
          </Button>
          <Button className="border-[1px] border-bluegray_50 border-solid cursor-pointer font-inter font-normal not-italic px-[14px] py-[10px] rounded-[20px] sm:text-[26px] md:text-[28px] text-[30px] text-center text-gray_300 w-[56px]">
            {props?.zero}
          </Button>
          <Button className="border-[1px] border-bluegray_50 border-solid cursor-pointer font-inter font-normal not-italic px-[14px] py-[10px] rounded-[20px] sm:text-[26px] md:text-[28px] text-[30px] text-bluegray_50 text-center w-[56px]">
            {props?.zeroOne}
          </Button>
          <Button className="border-[1px] border-bluegray_50 border-solid cursor-pointer font-inter font-normal not-italic px-[14px] py-[10px] rounded-[20px] sm:text-[26px] md:text-[28px] text-[30px] text-bluegray_50 text-center w-[56px]">
            {props?.zeroTwo}
          </Button>
          <Button className="border-[1px] border-bluegray_50 border-solid cursor-pointer font-inter font-normal not-italic px-[14px] py-[10px] rounded-[20px] sm:text-[26px] md:text-[28px] text-[30px] text-bluegray_50 text-center w-[56px]">
            {props?.zeroThree}
          </Button>
        </div>
      </div>
    </>
  );
};

WebApplicationElevenSecurecode.defaultProps = {
  securecode: "Secure Code",
  seven: "7",
  eight: "8",
  zero: "0",
  zeroOne: "0",
  zeroTwo: "0",
  zeroThree: "0",
};

export default WebApplicationElevenSecurecode;
