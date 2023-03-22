import React from "react";

import { Radio, Text } from "components";

type WebApplicationOneSelection1Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{ descriptioninon: string }>;

const WebApplicationOneSelection1: React.FC<
  WebApplicationOneSelection1Props
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[4px] items-start justify-start self-stretch w-[auto]">
          <Radio
            value="Business"
            className="font-inter font-medium text-[14px] text-gray_900 text-left"
            inputClassName="bg-white_A700_82 border-[4px] border-solid border-yellow_900_82 h-[16px] mr-[5px] w-[16px]"
            checked={false}
            name="label"
            label="Business"
            id="Business"
          ></Radio>
          <div className="flex items-start justify-start sm:pl-[20px] pl-[28px] self-stretch w-[auto]">
            <Text
              className="font-inter font-normal leading-[18.00px] md:max-w-[100%] max-w-[162px] not-italic text-bluegray_400 text-left"
              variant="body3"
            >
              {props?.descriptioninon}
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

WebApplicationOneSelection1.defaultProps = {
  descriptioninon: "Applying as a corporation, LLC or partnership",
};

export default WebApplicationOneSelection1;
