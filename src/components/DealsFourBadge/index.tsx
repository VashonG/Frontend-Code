import React from "react";

import { Text } from "components";

type DealsFourBadgeProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{ labelTwo: string }>;

const DealsFourBadge: React.FC<DealsFourBadgeProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-[8px] items-center justify-start self-stretch w-[auto]">
          <div className="bg-red_300 h-[6px] rounded-[50%] w-[6px]"></div>
          <Text
            className="font-inter font-medium text-left text-red_500 w-[auto]"
            variant="body3"
          >
            {props?.labelTwo}
          </Text>
        </div>
      </div>
    </>
  );
};

DealsFourBadge.defaultProps = { labelTwo: "Denied" };

export default DealsFourBadge;
