import React from "react";

import { Text } from "components";

type DealsThreeBadgeProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{ labelTwo: string }>;

const DealsThreeBadge: React.FC<DealsThreeBadgeProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-[8px] items-center justify-start self-stretch w-[auto]">
          <div className="bg-green_300 h-[6px] rounded-[50%] w-[6px]"></div>
          <Text
            className="font-inter font-medium text-green_500 text-left w-[auto]"
            variant="body3"
          >
            {props?.labelTwo}
          </Text>
        </div>
      </div>
    </>
  );
};

DealsThreeBadge.defaultProps = { labelTwo: "Card issued" };

export default DealsThreeBadge;
