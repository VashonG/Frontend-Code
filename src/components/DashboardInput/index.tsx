import React from "react";

import { Text, SelectBox, Img } from "components";

type DashboardInputProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{ emailFive: string; thisisahelper: string }>;

const DashboardInput: React.FC<DashboardInputProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        {!!props?.emailFive ? (
          <Text
            className="font-inter font-normal not-italic text-bluegray_700 text-left w-[auto]"
            variant="body3"
          >
            {props?.emailFive}
          </Text>
        ) : null}
        <SelectBox
          className="bg-white_A700 border-[1px] border-bluegray_50 border-solid font-inter font-medium px-[14px] py-[10px] rounded-[20px] text-[14px] text-gray_900 text-left w-[100%]"
          placeholderClassName="text-gray_900"
          name="input_Three"
          placeholder="Private"
          isSearchable={false}
          isMulti={false}
          indicator={
            <Img
              src="images/img_arrowdown.svg"
              className="h-[20px] w-[20px]"
              alt="arrow_down"
            />
          }
        ></SelectBox>
        {!!props?.thisisahelper ? (
          <Text
            className="font-inter font-normal not-italic text-bluegray_400 text-left w-[auto]"
            variant="body6"
          >
            {props?.thisisahelper}
          </Text>
        ) : null}
      </div>
    </>
  );
};

DashboardInput.defaultProps = {};

export default DashboardInput;
