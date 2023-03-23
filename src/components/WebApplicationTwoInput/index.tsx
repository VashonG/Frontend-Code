import React from "react";

import { Text, Input } from "components";

type WebApplicationTwoInputProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{ emailEight: string; inputFive: string; description: string }>;

const WebApplicationTwoInput: React.FC<WebApplicationTwoInputProps> = (
  props
) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="font-inter font-normal not-italic text-bluegray_700 text-left w-[auto]"
          variant="body3"
        >
          {props?.emailEight}
        </Text>
        {!!props?.inputFive ? (
          <Input
            value={props?.inputFive}
            wrapClassName="border-[1px] border-bluegray_50 border-solid px-[14px] py-[10px] rounded-[20px] w-[100%]"
            className="font-inter font-normal not-italic p-[0] placeholder:text-gray_900 text-[14px] text-gray_900 text-left w-[100%]"
            name="input_Five"
            placeholder="721-07-4426"
          ></Input>
        ) : null}
        {!!props?.description ? (
          <Text
            className="font-inter font-normal leading-[14.00px] md:max-w-[100%] max-w-[576px] not-italic text-bluegray_400 text-left"
            variant="body6"
          >
            {props?.description}
          </Text>
        ) : null}
      </div>
    </>
  );
};

WebApplicationTwoInput.defaultProps = { emailEight: "Social Security Number" };

export default WebApplicationTwoInput;
