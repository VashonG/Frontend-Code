import React from "react";

import { Img, Text } from "components";

type PortofolioDetailTransactionsRow2Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{
    ellipsethree: string;
    language: string;
    email: string;
    label: string;
    price: string;
    priceOne: string;
    ellipseone: string;
    labelOne: string;
  }>;

const PortofolioDetailTransactionsRow2: React.FC<
  PortofolioDetailTransactionsRow2Props
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-[96px] items-center justify-start self-stretch sm:w-[100%] w-[auto]">
          <div className="flex flex-row gap-[16px] items-center justify-start w-[200px]">
            {!!props?.ellipsethree ? (
              <Img
                src={props?.ellipsethree}
                className="h-[40px] md:h-[auto] rounded-[50%] w-[40px]"
                alt="ellipseThree"
              />
            ) : null}
            <div className="flex flex-col gap-[4px] items-start justify-start self-stretch w-[auto]">
              {!!props?.language ? (
                <Text
                  className="font-inter font-medium text-gray_900 text-left w-[auto]"
                  variant="body2"
                >
                  {props?.language}
                </Text>
              ) : null}
              {!!props?.email ? (
                <Text
                  className="font-inter font-normal not-italic text-bluegray_400 text-left w-[auto]"
                  variant="body3"
                >
                  {props?.email}
                </Text>
              ) : null}
            </div>
          </div>
          <div className="flex items-center justify-start w-[80px]">
            <Text
              className="font-inter font-normal not-italic text-gray_900 text-left w-[auto]"
              variant="body2"
            >
              {props?.label}
            </Text>
          </div>
        </div>
        <div className="flex flex-row sm:gap-[40px] gap-[96px] items-center justify-start pr-[100px] sm:pr-[20px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
          <div className="flex items-center justify-end w-[80px]">
            {!!props?.priceOne ? (
              <Text
                className="font-inter font-medium text-gray_900 text-right w-[auto]"
                variant="body2"
              >
                {props?.priceOne}
              </Text>
            ) : null}
          </div>
          <div className="flex items-center justify-end w-[80px]">
            {!!props?.priceOne ? (
              <Text
                className="font-inter font-medium text-gray_900 text-right w-[auto]"
                variant="body2"
              >
                {props?.priceOne}
              </Text>
            ) : null}
          </div>
          <div className="flex items-start justify-start w-[80px]">
            <div className="bg-green_50 flex items-start justify-start px-[8px] py-[3px] rounded-[11px] self-stretch w-[auto]">
              <div className="flex flex-row gap-[8px] items-center justify-start self-stretch w-[auto]">
                {!!props?.ellipseone ? (
                  <div className="bg-green_300 h-[6px] rounded-[50%] w-[6px]"></div>
                ) : null}
                {!!props?.labelOne ? (
                  <Text
                    className="font-inter font-medium text-green_500 text-left w-[auto]"
                    variant="body3"
                  >
                    {props?.labelOne}
                  </Text>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

PortofolioDetailTransactionsRow2.defaultProps = { label: "Premium" };

export default PortofolioDetailTransactionsRow2;
