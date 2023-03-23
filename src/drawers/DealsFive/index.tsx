import React from "react";
import Drawer from "rc-drawer";
import "rc-drawer/assets/index.css";

import { Img, Text } from "components";
import DealsFiveStepper from "components/DealsFiveStepper";
import PortofolioTabs from "components/PortofolioTabs";
import PortofolioDetailDetailsReadonlyform from "components/PortofolioDetailDetailsReadonlyform";

const DealsFiveDrawer = (props) => {
  return (
    <>
      <Drawer placement="right" className="!w-[50%]" {...props}>
        <div>
          <div className="flex font-inter items-end justify-start mx-[auto] sm:pl-[20px] md:pl-[40px] pl-[731px] sm:w-[100%] md:w-[100%]">
            <div className="bg-white_A700 flex h-[1024px] md:h-[auto] items-center justify-start max-w-[709px] p-[32px] md:px-[20px] w-[100%]">
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
                  <div className="flex flex-col gap-[20px] items-start justify-start w-[100%]">
                    <PortofolioTabs
                      className="flex flex-row flex-wrap items-start justify-start max-w-[677px] w-[100%]"
                      label="Personal Info."
                      label1="Personal Info."
                      labelOne="Personal Info."
                      labelTwo="Personal Info."
                    />
                    <PortofolioDetailDetailsReadonlyform className="flex flex-col items-start justify-start outline outline-[0.5px] outline-gray_100 py-[16px] rounded-[24px] w-[100%]" />
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

export default DealsFiveDrawer;
