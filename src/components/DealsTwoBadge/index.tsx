import React from "react";

import { Text } from "components";

type DealsTwoBadgeProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{ label: string }>;

const DealsTwoBadge: React.FC<DealsTwoBadgeProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-[8px] items-center justify-start self-stretch w-[auto]">
          <div className="bg-bluegray_200 h-[6px] rounded-[50%] w-[6px]"></div>
          <Text
            className="font-inter font-medium text-bluegray_700 text-left w-[auto]"
            variant="body3"
          >
            {props?.label}
          </Text>
        </div>
      </div>
    </>
  );
};

DealsTwoBadge.defaultProps = { label: "Underwriting" };

export default DealsTwoBadge;
