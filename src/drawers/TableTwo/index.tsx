import React from "react";
import Drawer from "rc-drawer";
import "rc-drawer/assets/index.css";

import { Img, Text, Button } from "components";
import PortofolioTabs from "components/PortofolioTabs";
import WebApplicationTwoInput from "components/WebApplicationTwoInput";
import DashboardInput from "components/DashboardInput";

const TableTwoDrawer = (props) => {
  return (
    <>
      <Drawer placement="right" className="!w-[36%]" {...props}>
        <div>
          <div className="flex font-inter items-end justify-start mx-[auto] sm:pl-[20px] md:pl-[40px] pl-[934px] sm:w-[100%] md:w-[100%]">
            <div className="bg-white_A700 flex flex-col gap-[376px] md:gap-[40px] h-[1024px] md:h-[auto] items-center justify-between p-[32px] md:px-[20px] sm:w-[100%] w-[506px]">
              <div className="flex flex-col gap-[16px] items-center justify-start w-[100%]">
                <div className="flex items-start justify-start w-[100%]">
                  <Img
                    src="images/img_arrowright_gray_800.svg"
                    className="h-[24px] w-[24px]"
                    alt="arrowright"
                  />
                </div>
                <div className="flex flex-col gap-[32px] items-center justify-start w-[100%]">
                  <div className="flex flex-col gap-[24px] items-center justify-start self-stretch w-[auto]">
                    <Img
                      src="images/img_ellipse4.png"
                      className="h-[96px] md:h-[auto] rounded-[50%] w-[96px]"
                      alt="ellipseFour"
                    />
                    <div className="flex flex-col gap-[4px] items-center justify-start self-stretch w-[auto]">
                      <Text
                        className="font-medium text-center text-gray_900 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Tony Danza
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_200 text-center w-[auto]"
                        variant="body3"
                      >
                        Freemium
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[32px] items-center justify-start w-[100%]">
                    <PortofolioTabs
                      className="flex flex-row items-start justify-between w-[100%]"
                      label="Transactions"
                      label1="Transactions"
                      labelOne="Transactions"
                      labelTwo="Transactions"
                    />
                    <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                      <WebApplicationTwoInput
                        className="flex flex-col items-start justify-start w-[100%]"
                        emailEight="Name"
                      />
                      <WebApplicationTwoInput
                        className="flex flex-col items-start justify-start w-[100%]"
                        emailEight="Email"
                      />
                      <DashboardInput
                        className="flex flex-col items-start justify-start w-[100%]"
                        emailFive="Plan"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-[16px] items-center justify-end w-[100%]">
                <div className="flex items-center justify-center px-[16px] py-[10px] rounded-[8px] self-stretch w-[auto]">
                  <Text
                    className="font-medium text-gray_900 text-left w-[auto]"
                    variant="body2"
                  >
                    Cancel
                  </Text>
                </div>
                <Button className="bg-yellow_900 cursor-pointer font-medium min-w-[82px] px-[16px] py-[10px] rounded-[20px] text-[14px] text-center text-white_A700 w-[auto]">
                  Update
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default TableTwoDrawer;
