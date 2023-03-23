import React from "react";

import { Text, Img } from "components";

type PortofolioDetailTransactionsRow1Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{
    label: string;
    email: string;
    labelOne: string;
    price: string;
    priceOne: string;
    ellipseone: string;
    labelTwo: string;
    warning: string;
  }>;

const PortofolioDetailTransactionsRow1: React.FC<
  PortofolioDetailTransactionsRow1Props
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-[96px] items-center justify-start self-stretch sm:w-[100%] w-[auto]">
          <div className="flex items-center justify-start w-[230px]">
            <div className="flex flex-col gap-[4px] items-start justify-start self-stretch w-[auto]">
              {!!props?.label ? (
                <Text
                  className="font-inter font-medium text-gray_900 text-left w-[auto]"
                  variant="body2"
                >
                  {props?.label}
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
          <div className="flex items-center justify-start w-[88px]">
            <Text
              className="font-inter font-normal not-italic text-gray_900 text-left w-[auto]"
              variant="body2"
            >
              {props?.labelOne}
            </Text>
          </div>
        </div>
        <div className="md:h-[22px] h-[24px] relative md:w-[100%] w-[51%]">
          <div className="absolute bottom-[0] flex flex-row sm:gap-[40px] gap-[96px] inset-x-[0] items-center justify-start mx-[auto] pr-[100px] sm:pr-[20px] md:pr-[40px] self-stretch w-[auto]">
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
                  {!!props?.labelTwo ? (
                    <Text
                      className="font-inter font-medium text-green_500 text-left w-[auto]"
                      variant="body3"
                    >
                      {props?.labelTwo}
                    </Text>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
          {!!props?.warning ? (
            <Img
              src={props?.warning}
              className="absolute h-[20px] right-[6%] top-[0] w-[20px]"
              alt="warning"
            />
          ) : null}
        </div>
      </div>
    </>
  );
};

PortofolioDetailTransactionsRow1.defaultProps = { labelOne: "Feb 28, 2023" };

export default PortofolioDetailTransactionsRow1;
