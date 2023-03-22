import React from "react";
import Drawer from "rc-drawer";
import "rc-drawer/assets/index.css";

import { Img, Input } from "components";
import PortofolioDetailDetailsCreditcard from "components/PortofolioDetailDetailsCreditcard";
import PortofolioTabs from "components/PortofolioTabs";
import PortofolioDetailDetailsReadonlyform from "components/PortofolioDetailDetailsReadonlyform";

const PortofolioDetailDetailsDrawer = (props) => {
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
                      language="● ● ● ●   ● ● 1● ●   ● ● ● ●"
                      zipcode="9303"
                    />
                  </div>
                  <div className="flex flex-col font-inter gap-[20px] items-start justify-start w-[100%]">
                    <PortofolioTabs
                      className="flex flex-row items-start justify-start w-[100%]"
                      label="Transactions"
                      label1="Transactions"
                      labelOne="Transactions"
                      labelTwo="Transactions"
                    />
                    <Input
                      wrapClassName="bg-red-100 flex px-[16px] py-[12px] rounded-[12px] w-[100%]"
                      className="font-medium p-[0] placeholder:text-red_500 text-[13px] text-left text-red_500 w-[100%]"
                      name="duration"
                      placeholder="This account is 14 days past due"
                      prefix={
                        <Img
                          src="images/img_warning.svg"
                          className="mr-[10px] my-[auto]"
                          alt="warning"
                        />
                      }
                    ></Input>
                    <PortofolioDetailDetailsReadonlyform
                      className="flex flex-col items-start justify-start outline outline-[0.5px] outline-gray_100 py-[16px] rounded-[24px] w-[100%]"
                      status="Status"
                      status1="Status"
                      status2="Status"
                      status3="Status"
                      status4="Status"
                      status5="Status"
                      status6="Status"
                    />
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

export default PortofolioDetailDetailsDrawer;
