import React from "react";
import Drawer from "rc-drawer";
import "rc-drawer/assets/index.css";

import { Img, List, Text, Button } from "components";
import PortofolioDetailDetailsCreditcard from "components/PortofolioDetailDetailsCreditcard";
import PortofolioTabs from "components/PortofolioTabs";
import PortofolioDetailTransactionsRow from "components/PortofolioDetailTransactionsRow";
import PortofolioDetailTransactionsRow1 from "components/PortofolioDetailTransactionsRow1";
import PortofolioDetailTransactionsRow2 from "components/PortofolioDetailTransactionsRow2";

const PortofolioDetailTransactionsDrawer = (props) => {
  return (
    <>
      <Drawer placement="right" className="!w-[41%]" {...props}>
        <div>
          <div className="flex font-jetbrainsmono items-end justify-start mx-[auto] sm:pl-[20px] md:pl-[40px] pl-[850px] sm:w-[100%] md:w-[100%]">
            <div className="bg-white_A700 flex h-[1024px] md:h-[auto] items-center justify-start p-[32px] md:px-[20px] sm:w-[100%] w-[590px]">
              <div className="flex flex-col gap-[20px] items-center justify-start w-[100%]">
                <div className="flex items-start justify-start w-[100%]">
                  <Img
                    src="images/img_arrowright_gray_800.svg"
                    className="h-[24px] w-[24px]"
                    alt="arrowright"
                  />
                </div>
                <div className="flex flex-col gap-[48px] items-center justify-start w-[100%]">
                  <div className="flex items-center justify-start self-stretch w-[auto]">
                    <PortofolioDetailDetailsCreditcard
                      className="bg-lime_50 flex flex-col items-end justify-start p-[11px] rounded-[12px] shadow-bs1 w-[100%]"
                      neerajchinwan="Neeraj Chinwan"
                      language="images/img_.png"
                      zipcode="9303"
                    />
                  </div>
                  <div className="flex flex-col font-inter gap-[20px] items-start justify-start w-[100%]">
                    <PortofolioTabs
                      className="flex flex-row items-start justify-start w-[100%]"
                      label="Details"
                      label1="Details"
                      labelOne="Details"
                      labelTwo="Details"
                    />
                    <List
                      className="flex-col sm:gap-[20px] grid items-start w-[100%]"
                      orientation="vertical"
                    >
                      <div className="bg-white_A700 flex flex-1 sm:flex-col flex-row sm:gap-[40px] items-center justify-between my-[0] outline outline-[0.5px] outline-gray_100 sm:px-[20px] px-[24px] py-[16px] rounded-bl-[0] rounded-br-[0] rounded-tl-[24px] rounded-tr-[24px] w-[100%]">
                        <div className="flex flex-row gap-[50px] items-center justify-start self-stretch w-[auto]">
                          <div className="flex items-center justify-start w-[89px]">
                            <Text
                              className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                              variant="body2"
                            >
                              Type
                            </Text>
                          </div>
                          <div className="flex items-center justify-start w-[80px]">
                            <Text
                              className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                              variant="body2"
                            >
                              Date
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row gap-[50px] items-center justify-end sm:pr-[20px] pr-[24px] self-stretch w-[auto]">
                          <div className="flex items-center justify-end w-[80px]">
                            <Text
                              className="font-normal not-italic text-bluegray_400 text-right w-[auto]"
                              variant="body2"
                            >
                              Amount
                            </Text>
                          </div>
                          <div className="flex items-center justify-start w-[80px]">
                            <Text
                              className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                              variant="body2"
                            >
                              Status
                            </Text>
                          </div>
                        </div>
                      </div>
                      <PortofolioDetailTransactionsRow
                        className="bg-white_A700 flex flex-1 flex-row items-center justify-between my-[0] outline outline-[0.5px] outline-gray_100 p-[24px] sm:px-[20px] w-[100%]"
                        labelOne="Authorization"
                        price="$1.37"
                        priceOne="$1.37"
                      />
                      <PortofolioDetailTransactionsRow1
                        className="bg-white_A700 flex flex-1 flex-row items-center justify-between my-[0] outline outline-[0.5px] outline-gray_100 p-[24px] sm:px-[20px] w-[100%]"
                        labelOne="Authorization"
                        price="$6.33"
                        priceOne="$6.33"
                      />
                      <PortofolioDetailTransactionsRow1
                        className="bg-white_A700 flex flex-1 flex-row items-center justify-between my-[0] outline outline-[0.5px] outline-gray_100 p-[24px] sm:px-[20px] w-[100%]"
                        labelOne="Authorization"
                        price="$18.63"
                        priceOne="$18.63"
                      />
                      <PortofolioDetailTransactionsRow2
                        className="bg-white_A700 flex flex-1 flex-row items-center justify-between my-[0] outline outline-[0.5px] outline-gray_100 p-[24px] sm:px-[20px] rounded-bl-[24px] rounded-br-[24px] rounded-tl-[0] rounded-tr-[0] w-[100%]"
                        label="Authorization"
                        price="$7,39"
                        priceOne="$7,39"
                      />
                    </List>
                    <div className="flex flex-row gap-[279px] sm:gap-[40px] items-center justify-between w-[100%]">
                      <div className="flex items-start justify-start self-stretch w-[auto]">
                        <div className="flex items-start justify-start px-[12px] py-[10px] self-stretch w-[auto]">
                          <Text
                            className="font-normal not-italic text-bluegray_700 text-left w-[auto]"
                            variant="body2"
                          >
                            Viewing 21–40 of 273 results
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-row gap-[12px] items-start justify-end w-[100%]">
                        <Button className="bg-white_A700 border-[1px] border-bluegray_50 border-solid cursor-pointer font-medium min-w-[66px] px-[16px] py-[10px] rounded-[20px] text-[14px] text-center text-gray_900 w-[auto]">
                          Prev.
                        </Button>
                        <Button className="bg-white_A700 border-[1px] border-bluegray_50 border-solid cursor-pointer font-medium min-w-[64px] px-[16px] py-[10px] rounded-[20px] text-[14px] text-center text-gray_900 w-[auto]">
                          Next
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default PortofolioDetailTransactionsDrawer;
