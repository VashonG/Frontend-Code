import React from "react";

import DashboardMenu from "components/DashboardMenu";
import PortofolioTabs from "components/PortofolioTabs";
import { Text, Button } from "components";
import DashboardTable from "components/DashboardTable";

const TableOnePage: React.FC = () => {
  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row gap-[32px] items-center justify-between max-w-[1408px] mx-[auto] md:px-[20px] w-[100%]">
          <DashboardMenu className="bg-white_A700 flex flex-col h-[1024px] md:hidden justify-start outline outline-gray_100 w-[280px]" />
          <div className="flex flex-1 flex-col items-center justify-start w-[100%]">
            <header className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between w-[100%]">
              <PortofolioTabs
                className="flex sm:flex-1 flex-row items-start justify-between self-stretch sm:w-[100%] w-[auto]"
                label="Transactions"
                label1="Transactions"
                labelOne="Transactions"
                labelTwo="Transactions"
              />
              <ul className="flex sm:flex-col flex-row gap-[12px] sm:hidden items-start justify-end self-stretch w-[auto] common-row-list">
                <li className="sm:w-[100%] sm:my-[10px] w-[49%]">
                  <div className="flex items-start justify-start">
                    <a
                      className="border-[1px] border-bluegray_50 border-solid cursor-pointer font-normal not-italic px-[14px] py-[10px] rounded-[20px] text-[14px] text-bluegray_200 text-left w-[100%]"
                      href="javascript:"
                    >
                      Search
                    </a>
                  </div>
                </li>
                <li className="sm:w-[100%] sm:my-[10px]">
                  <Button className="bg-white_A700 border-[1px] border-bluegray_50 border-solid cursor-pointer font-medium px-[16px] py-[10px] rounded-[20px] text-[14px] text-center text-gray_900">
                    Filter
                  </Button>
                </li>
                <li className="sm:w-[100%] sm:my-[10px]">
                  <Button className="bg-white_A700 border-[1px] border-bluegray_50 border-solid cursor-pointer font-medium px-[16px] py-[10px] rounded-[20px] text-[14px] text-center text-gray_900">
                    Sort
                  </Button>
                </li>
                <li className="sm:w-[100%] sm:my-[10px]">
                  <Button className="bg-yellow_900 cursor-pointer font-medium px-[16px] py-[10px] rounded-[20px] text-[14px] text-center text-white_A700">
                    Add New
                  </Button>
                </li>
              </ul>
            </header>
            <DashboardTable
              className="flex flex-col items-start justify-start max-w-[1096px] mt-[20px] rounded-[24px] w-[100%]"
              labelTwo="Name"
              labelThree="Name"
              labelFour="Balance"
              labelFive="Balance"
              labelSix="Name"
            />
            <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between max-w-[1096px] mt-[2px] w-[100%]">
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
    </>
  );
};

export default TableOnePage;
