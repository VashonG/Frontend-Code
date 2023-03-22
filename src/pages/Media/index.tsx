import React from "react";

import DashboardMenu from "components/DashboardMenu";
import { Input, Button } from "components";
import MediaMediacrad from "components/MediaMediacrad";

const MediaPage: React.FC = () => {
  const mediaMediacradPropList = [
    { rectangleeight: "images/img_rectangle8.png" },
    { rectangleeight: "images/img_rectangle8_142x259.png" },
    { rectangleeight: "images/img_rectangle8_1.png" },
    { rectangleeight: "images/img_rectangle8_2.png" },
    { rectangleeight: "images/img_rectangle8_3.png" },
    { rectangleeight: "images/img_rectangle8_4.png" },
    { rectangleeight: "images/img_rectangle8_5.png" },
    { rectangleeight: "images/img_rectangle8_6.png" },
    { rectangleeight: "images/img_rectangle8_7.png" },
    { rectangleeight: "images/img_rectangle8_8.png" },
    { rectangleeight: "images/img_rectangle8_9.png" },
    { rectangleeight: "images/img_rectangle8_10.png" },
    { rectangleeight: "images/img_rectangle8_11.png" },
    { rectangleeight: "images/img_rectangle8_12.png" },
    { rectangleeight: "images/img_rectangle8_13.png" },
    { rectangleeight: "images/img_rectangle8_14.png" },
  ];

  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-end mx-[auto] sm:pr-[20px] pr-[29px] w-[100%]">
        <div className="flex md:flex-col flex-row gap-[32px] items-start justify-between max-w-[1411px] mx-[auto] md:px-[20px] w-[100%]">
          <DashboardMenu className="bg-white_A700 flex flex-col h-[1024px] md:hidden justify-start mb-[104px] outline outline-gray_100 w-[280px]" />
          <div className="flex flex-1 flex-col gap-[20px] items-center justify-start md:mt-[0] mt-[32px] w-[100%]">
            <div className="flex md:flex-col flex-row md:gap-[40px] items-center justify-between max-w-[1096px] w-[100%]">
              <div className="flex sm:flex-1 items-start justify-start sm:w-[100%] w-[460px]">
                <Input
                  wrapClassName="border-[1px] border-bluegray_50 border-solid px-[14px] py-[10px] rounded-[20px] w-[100%]"
                  className="font-normal not-italic p-[0] placeholder:text-bluegray_200 text-[14px] text-bluegray_200 text-left w-[100%]"
                  name="input"
                  placeholder="Search"
                ></Input>
              </div>
              <div className="flex flex-row gap-[12px] items-start justify-end self-stretch w-[auto]">
                <Button className="bg-white_A700 border-[1px] border-bluegray_50 border-solid cursor-pointer font-medium min-w-[66px] px-[16px] py-[10px] rounded-[20px] text-[14px] text-center text-gray_900 w-[auto]">
                  Filter
                </Button>
                <Button className="bg-white_A700 border-[1px] border-bluegray_50 border-solid cursor-pointer font-medium min-w-[61px] px-[16px] py-[10px] rounded-[20px] text-[14px] text-center text-gray_900 w-[auto]">
                  Sort
                </Button>
                <Button className="bg-yellow_900 cursor-pointer font-medium min-w-[94px] px-[16px] py-[10px] rounded-[20px] text-[14px] text-center text-white_A700 w-[auto]">
                  Add New
                </Button>
              </div>
            </div>
            <div className="flex items-start justify-start self-stretch md:w-[100%] w-[auto]">
              <div className="gap-[17px] md:gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-[100%]">
                {mediaMediacradPropList.map((props, index) => (
                  <React.Fragment key={`MediaMediacrad${index}`}>
                    <MediaMediacrad
                      className="h-[244px] relative w-[100%]"
                      price="$1,200,000"
                      cosyapartmentinOne="Cosy apartment in town"
                      newyorkusa="New York, USA"
                      {...props}
                    />
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MediaPage;
