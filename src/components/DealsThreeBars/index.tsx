import React from "react";

import { Text, Input, Button, Switch } from "components";

type DealsThreeBarsProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{
    atmcashwithdrawOne: string;
    thirtyseven: string;
    fourteen: string;
    frameninetynineOne: string;
    eight: string;
    travel: string;
    four: string;
    one: string;
  }>;

const DealsThreeBars: React.FC<DealsThreeBarsProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex items-center justify-between max-w-[645px] pr-[10px] w-[100%]">
          <div className="bg-lime_50 flex flex-row gap-[10px] items-start justify-start max-w-[645px] px-[10px] py-[6px] rounded-[8px] w-[100%]">
            <Text
              className="font-inter font-medium text-gray_900 text-left w-[auto]"
              variant="body2"
            >
              {props?.atmcashwithdrawOne}
            </Text>
            <Text
              className="font-inter font-medium text-gray_900 text-right w-[auto]"
              variant="body2"
            >
              {props?.thirtyseven}
            </Text>
          </div>
        </div>
        <div className="flex flex-row sm:gap-[40px] items-center justify-between max-w-[645px] pr-[10px] w-[100%]">
          <Input
            wrapClassName="bg-lime_50 px-[10px] py-[6px] rounded-[8px] w-[auto]"
            className="font-inter font-medium p-[0] placeholder:text-gray_900 text-[14px] text-gray_900 text-left w-[100%]"
            name="frameNinetyNine"
            placeholder="Credit Card Payments"
          ></Input>
          <Text
            className="font-inter font-medium text-gray_900 text-right w-[auto]"
            variant="body2"
          >
            {props?.fourteen}
          </Text>
        </div>
        <div className="flex flex-row sm:gap-[40px] items-center justify-between max-w-[645px] pr-[10px] w-[100%]">
          <Text
            className="bg-lime_50 font-inter font-medium px-[10px] py-[6px] rounded-[8px] text-gray_900 text-left w-[149px]"
            variant="body2"
          >
            {props?.frameninetynineOne}
          </Text>
          <Text
            className="font-inter font-medium text-gray_900 text-right w-[auto]"
            variant="body2"
          >
            {props?.eight}
          </Text>
        </div>
        <div className="flex flex-row sm:gap-[40px] items-center justify-between max-w-[645px] pr-[10px] w-[100%]">
          <Button className="bg-lime_50 cursor-pointer font-inter font-medium px-[10px] py-[6px] rounded-[8px] text-[14px] text-center text-gray_900 w-[70px]">
            {props?.travel}
          </Button>
          <Text
            className="font-inter font-medium text-gray_900 text-right w-[auto]"
            variant="body2"
          >
            {props?.four}
          </Text>
        </div>
        <div className="flex flex-row sm:gap-[40px] items-center justify-between max-w-[645px] pr-[10px] w-[100%]">
          <Switch
            onColor=""
            offColor=""
            onHandleColor=""
            offHandleColor=""
            value={false}
            className="gap-[10px] px-[10px] py-[6px] w-[41px]"
          />
          <Text
            className="font-inter font-medium text-gray_900 text-right w-[auto]"
            variant="body2"
          >
            {props?.one}
          </Text>
        </div>
      </div>
    </>
  );
};

DealsThreeBars.defaultProps = {
  atmcashwithdrawOne: "ATM/Cash Withdrawals",
  thirtyseven: "37%",
  fourteen: "14%",
  frameninetynineOne: "Gasoline/Fuel",
  eight: "8%",
  travel: "Travel",
  four: "4%",
  one: "1%",
};

export default DealsThreeBars;
