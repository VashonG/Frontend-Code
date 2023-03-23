import React from "react";
import Drawer from "rc-drawer";
import "rc-drawer/assets/index.css";

import { Img, Text, List, Button } from "components";
import DealsFiveStepper from "components/DealsFiveStepper";
import PortofolioTabs from "components/PortofolioTabs";
import DealsThreeAccount from "components/DealsThreeAccount";
import DealsThreeAccount1 from "components/DealsThreeAccount1";
import PortofolioDetailDetailsReadonlyform from "components/PortofolioDetailDetailsReadonlyform";
import PortofolioDetailTransactionsRow from "components/PortofolioDetailTransactionsRow";
import PortofolioDetailTransactionsRow1 from "components/PortofolioDetailTransactionsRow1";
import PortofolioDetailTransactionsRow2 from "components/PortofolioDetailTransactionsRow2";
import DealsThreeBars from "components/DealsThreeBars";

const DealsSixDrawer = (props) => {
  return (
    <>
      <Drawer placement="right" className="!w-[50%]" {...props}>
        <div>
          <div className="flex font-inter items-end justify-start mx-[auto] sm:pl-[20px] md:pl-[40px] pl-[731px] sm:w-[100%] md:w-[100%]">
            <div className="bg-white_A700 flex h-[1538px] md:h-[auto] items-center justify-start max-w-[709px] p-[32px] md:px-[20px] w-[100%]">
              <div className="flex flex-col gap-[20px] items-center justify-start w-[100%]">
                <div className="flex items-start justify-start w-[100%]">
                  <Img
                    src="images/img_arrowright_gray_800.svg"
                    className="h-[24px] w-[24px]"
                    alt="arrowright"
                  />
                </div>
                <div className="flex flex-col gap-[48px] items-start justify-start w-[100%]">
                  <div className="flex sm:flex-col flex-row gap-[8px] items-center justify-between w-[100%]">
                    <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[auto]">
                      <div className="flex items-center justify-center self-stretch w-[auto]">
                        <Text
                          className="text-center text-gray_900 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Cazba LLC
                        </Text>
                      </div>
                      <div className="flex items-start justify-start self-stretch w-[auto]">
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-center w-[auto]"
                          variant="body3"
                        >
                          CCA202207405
                        </Text>
                      </div>
                    </div>
                    <DealsFiveStepper
                      className="flex sm:flex-1 flex-col items-center justify-start px-[4px] sm:w-[100%] w-[auto]"
                      pending="Pending"
                      sent="Sent"
                      underwriting="Underwriting"
                      needmoreinfo="Need more info."
                    />
                  </div>
                  <div className="flex flex-col gap-[32px] items-start justify-start w-[100%]">
                    <PortofolioTabs
                      className="flex flex-row flex-wrap items-start justify-start max-w-[677px] w-[100%]"
                      label="Business Info."
                      label1="Business Info."
                      labelOne="Business Info."
                      labelTwo="Business Info."
                    />
                    <div className="flex flex-col gap-[16px] items-start justify-start self-stretch md:w-[100%] w-[auto]">
                      <Text
                        className="font-semibold text-center text-gray_900 w-[auto]"
                        variant="body1"
                      >
                        Accounts
                      </Text>
                      <List
                        className="sm:flex-col flex-row gap-[16px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start max-w-[645px] w-[100%]"
                        orientation="horizontal"
                      >
                        <DealsThreeAccount
                          className="bg-lime_50 border-[2px] border-solid border-yellow_900 flex flex-1 flex-col items-start justify-start p-[16px] rounded-[12px] w-[100%]"
                          account="Account"
                          zipcode="3190"
                          savings="IRA"
                          three="$"
                          p13839="138.39"
                        />
                        <DealsThreeAccount1
                          className="bg-white_A700 border-[1px] border-bluegray_50 border-solid flex flex-1 flex-col items-start justify-start p-[16px] rounded-[12px] w-[100%]"
                          account="Account"
                          zipcode="4445"
                          savings="Savings"
                          five="$"
                          p13839="0.00"
                        />
                        <DealsThreeAccount1
                          className="bg-white_A700 border-[1px] border-bluegray_50 border-solid flex flex-1 flex-col items-start justify-start p-[16px] rounded-[12px] w-[100%]"
                          account="Account"
                          zipcode="7422"
                          savings="Checking"
                          five="$"
                          p13839="93.98"
                        />
                      </List>
                    </div>
                    <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                      <Text
                        className="font-semibold text-center text-gray_900 w-[auto]"
                        variant="body1"
                      >
                        Decision Data
                      </Text>
                      <PortofolioDetailDetailsReadonlyform className="flex flex-col items-start justify-start outline outline-[0.5px] outline-gray_100 py-[16px] rounded-[24px] w-[100%]" />
                    </div>
                    <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                      <Text
                        className="font-semibold text-center text-gray_900 w-[auto]"
                        variant="body1"
                      >
                        Transactions
                      </Text>
                      <List
                        className="flex-col md:gap-[20px] grid items-start w-[100%]"
                        orientation="vertical"
                      >
                        <div className="bg-white_A700 flex flex-1 sm:flex-col flex-row sm:gap-[40px] items-center justify-between my-[0] outline outline-[0.5px] outline-gray_100 sm:px-[20px] px-[24px] py-[16px] rounded-bl-[0] rounded-br-[0] rounded-tl-[24px] rounded-tr-[24px] w-[100%]">
                          <div className="flex flex-row gap-[50px] items-center justify-start self-stretch w-[auto]">
                            <div className="flex items-center justify-start w-[200px]">
                              <Text
                                className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                                variant="body2"
                              >
                                Description
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
                          <div className="flex flex-row gap-[50px] items-center justify-end self-stretch w-[auto]">
                            <div className="flex items-center justify-end w-[80px]">
                              <Text
                                className="font-normal not-italic text-bluegray_400 text-right w-[auto]"
                                variant="body2"
                              >
                                Amount
                              </Text>
                            </div>
                            <div className="flex items-center justify-end w-[80px]">
                              <Text
                                className="font-normal not-italic text-bluegray_400 text-right w-[auto]"
                                variant="body2"
                              >
                                Balance
                              </Text>
                            </div>
                          </div>
                        </div>
                        <PortofolioDetailTransactionsRow
                          className="bg-white_A700 flex flex-1 flex-row items-center justify-between my-[0] outline outline-[0.5px] outline-gray_100 p-[24px] sm:px-[20px] w-[100%]"
                          labelOne="Feb 28, 2023"
                          price="$0.05"
                          priceOne="$0.05"
                        />
                        <PortofolioDetailTransactionsRow1
                          className="bg-white_A700 flex flex-1 flex-row items-center justify-between my-[0] outline outline-[0.5px] outline-gray_100 p-[24px] sm:px-[20px] w-[100%]"
                          labelOne="Feb 28, 2023"
                          price="$0.05"
                          priceOne="$0.05"
                        />
                        <PortofolioDetailTransactionsRow2
                          className="bg-white_A700 flex flex-1 flex-row items-center justify-between my-[0] outline outline-[0.5px] outline-gray_100 p-[24px] sm:px-[20px] rounded-bl-[24px] rounded-br-[24px] rounded-tl-[0] rounded-tr-[0] w-[100%]"
                          label="Feb 28, 2023"
                          price="$0.05"
                          priceOne="$0.05"
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
                    <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                      <Text
                        className="font-semibold text-center text-gray_900 w-[auto]"
                        variant="body1"
                      >
                        Expenses by Category
                      </Text>
                      <DealsThreeBars
                        className="flex flex-col items-start justify-start max-w-[645px] w-[100%]"
                        atmcashwithdrawOne="ATM/Cash Withdrawals"
                        thirtyseven="37%"
                        fourteen="14%"
                        frameninetynineOne="Gasoline/Fuel"
                        eight="8%"
                        travel="Travel"
                        four="4%"
                        one="1%"
                      />
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

export default DealsSixDrawer;
