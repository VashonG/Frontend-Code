import React from "react";

import DashboardMenu from "components/DashboardMenu";
import { Text, Img } from "components";
import DashboardInput from "components/DashboardInput";
import DashboardMetrics from "components/DashboardMetrics";
import DashboardStackedbar from "components/DashboardStackedbar";
import DashboardGraph2lines from "components/DashboardGraph2lines";
import DashboardGraph1line from "components/DashboardGraph1line";
import DashboardTable from "components/DashboardTable";

const DashboardPage: React.FC = () => {
  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row gap-[34px] items-center justify-between max-w-[1408px] mx-[auto] md:px-[20px] w-[100%]">
          <DashboardMenu className="bg-white_A700 flex flex-col h-[1235px] md:hidden justify-start outline outline-gray_100 w-[278px]" />
          <div className="flex flex-1 flex-col gap-[20px] items-center justify-start w-[100%]">
            <div className="flex flex-row md:gap-[40px] items-center justify-between max-w-[1096px] w-[100%]">
              <Text
                className="font-semibold text-black_900 text-left w-[auto]"
                as="h6"
                variant="h6"
              >
                Your overview
              </Text>
              <DashboardInput className="flex sm:flex-1 flex-col items-start justify-start sm:w-[100%] w-[134px]" />
            </div>
            <div className="flex flex-col gap-[20px] items-start justify-start self-stretch md:w-[100%] w-[auto]">
              <DashboardMetrics
                className="bg-white_A700 flex flex-col items-start justify-start max-w-[1096px] outline outline-[0.5px] outline-gray_100 p-[24px] sm:px-[20px] rounded-[24px] w-[100%]"
                wallet="Wallet"
                thismonth="This month"
                eight="8"
                badge="+28%"
                totalcards="Total Cards"
                six="6"
                badge1="-19%"
                activecards="Active Cards"
                two="2"
                badge2="+6%"
                suspendedcards="Suspended Cards"
                price="$236"
                badge3="+6%"
                totalcommissionOne="Total Commission"
              />
              <div className="flex md:flex-col flex-row gap-[20px] items-start justify-start self-stretch md:w-[100%] w-[auto]">
                <DashboardStackedbar
                  className="bg-white_A700 flex flex-col h-[273px] md:h-[auto] items-start justify-start outline outline-[0.5px] outline-gray_100 p-[24px] sm:px-[20px] rounded-[24px] sm:w-[100%] w-[352px]"
                  totalapplicatioOne="Total Applications"
                  thismonthOne="This month"
                  business="Business"
                  six="6"
                  consumer="Consumer"
                  three="3"
                  total="Total"
                  nine="9"
                />
                <DashboardGraph2lines
                  className="bg-white_A700 flex flex-col items-start justify-start outline outline-[0.5px] outline-gray_100 p-[24px] sm:px-[20px] rounded-[24px] sm:w-[100%] w-[352px]"
                  approvalsrejectOne="Approvals & Rejections"
                  thismonthTwo="This month"
                  ten="10"
                  zero="0"
                  marcounter="Mar 9"
                  approved="Approved"
                  two="2"
                  rejected="Rejected"
                  zeroOne="0"
                  mar12023="Mar 1, 2023"
                  mar312023="Mar 31, 2023"
                />
                <DashboardGraph1line
                  className="bg-white_A700 flex flex-col items-start justify-start outline outline-[0.5px] outline-gray_100 p-[24px] sm:px-[20px] rounded-[24px] sm:w-[100%] w-[352px]"
                  annualspend="Annual Spend"
                  thismonthThree="This month"
                  price="$5,274"
                  priceOne="$0"
                  mar12023One="Mar 1, 2023"
                  mar312023One="Mar 31, 2023"
                  marcounterOne="Mar 17"
                  priceTwo="$628"
                />
              </div>
              <div className="flex flex-col gap-[8px] items-start justify-start self-stretch md:w-[100%] w-[auto]">
                <div className="flex flex-row md:gap-[40px] items-center justify-between max-w-[1096px] w-[100%]">
                  <Text
                    className="font-medium text-gray_900 text-left w-[auto]"
                    variant="body2"
                  >
                    Credit Applications
                  </Text>
                  <div className="flex relative w-[91px]">
                    <div className="flex items-center justify-center my-[auto] px-[16px] py-[10px] rounded-[8px] self-stretch w-[auto]">
                      <Text
                        className="font-medium text-gray_900 text-left w-[auto]"
                        variant="body2"
                      >
                        See all
                      </Text>
                    </div>
                    <Img
                      src="images/img_arrowright.svg"
                      className="h-[20px] ml-[-6px] my-[auto] w-[20px] z-[1]"
                      alt="arrowright"
                    />
                  </div>
                </div>
                <DashboardTable
                  className="flex flex-col items-start justify-start max-w-[1096px] rounded-[24px] w-[100%]"
                  labelTwo="Name"
                  labelThree="Name"
                  labelFour="Balance"
                  labelFive="Balance"
                  labelSix="Name"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
