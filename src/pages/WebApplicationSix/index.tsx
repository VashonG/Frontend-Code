import React from "react";

import { Img, List, Line, Text, Input, CheckBox } from "components";
import WebApplicationTwoInput from "components/WebApplicationTwoInput";
import DashboardInput from "components/DashboardInput";

const WebApplicationSixPage: React.FC = () => {
  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] p-[100px] sm:px-[20px] md:px-[40px] w-[100%]">
        <div className="flex flex-col gap-[32px] items-center justify-start max-w-[640px] mb-[92px] w-[100%]">
          <div className="flex items-center justify-center w-[100%]">
            <Img
              src="images/img_untitleddesign.png"
              className="h-[40px] md:h-[auto] object-cover w-[134px]"
              alt="untitleddesign"
            />
          </div>
          <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
            <div className="bg-white_A700 border-[1px] border-gray_100 border-solid flex flex-col gap-[48px] items-start justify-center p-[32px] sm:px-[20px] rounded-[24px] w-[100%]">
              <div className="flex sm:flex-col flex-row gap-[32px] items-center justify-start w-[100%]">
                <List
                  className="sm:flex-1 sm:flex-col flex-row gap-[32px] grid grid-cols-2 sm:w-[100%] w-[48%]"
                  orientation="horizontal"
                >
                  <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                    <div className="h-[6px] relative w-[100%]">
                      <Line className="bg-bluegray_50 h-[6px] m-[auto] rounded-[3px] w-[100%]" />
                      <Line className="absolute bg-yellow_900 h-[6px] inset-[0] justify-center m-[auto] rounded-[3px] w-[100%]" />
                    </div>
                    <Text
                      className="font-medium text-gray_800 text-left w-[auto]"
                      variant="body6"
                    >
                      Application type
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                    <div className="h-[6px] relative w-[100%]">
                      <Line className="bg-bluegray_50 h-[6px] m-[auto] rounded-[3px] w-[100%]" />
                      <Line className="absolute bg-yellow_900 h-[6px] inset-[0] justify-center m-[auto] rounded-[3px] w-[100%]" />
                    </div>
                    <Text
                      className="font-medium text-gray_800 text-left w-[auto]"
                      variant="body6"
                    >
                      Business Information
                    </Text>
                  </div>
                </List>
                <div className="flex flex-1 flex-col gap-[8px] items-start justify-start w-[100%]">
                  <div className="h-[6px] overflow-hidden relative w-[100%]">
                    <div className="w-full h-full absolute bg-bluegray_50 rounded-[3px]"></div>
                    <div
                      className="h-full absolute bg-yellow_900  rounded-[3px]"
                      style={{ width: "67%" }}
                    ></div>
                  </div>
                  <Text
                    className="font-medium text-gray_800 text-left w-[auto]"
                    variant="body6"
                  >
                    Officer Information
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-[8px] items-start justify-start w-[100%]">
                  <Line className="bg-bluegray_50 h-[6px] rounded-[3px] w-[100%]" />
                  <Text
                    className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                    variant="body6"
                  >
                    Beneficial Owners{" "}
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[20px] items-center justify-center w-[100%]">
                <div className="flex flex-col gap-[8px] items-start justify-start pb-[16px] w-[100%]">
                  <Text
                    className="font-medium text-gray_900 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Officer Information
                  </Text>
                  <Text
                    className="font-normal not-italic text-bluegray_200 text-left w-[auto]"
                    variant="body2"
                  >
                    Next, we will need information about one officer at the
                    business
                  </Text>
                </div>
                <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                  <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                    <WebApplicationTwoInput
                      className="flex flex-col items-start justify-start w-[100%]"
                      emailEight="Stree"
                    />
                    <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                      <Text
                        className="font-normal not-italic text-bluegray_700 text-left w-[auto]"
                        variant="body3"
                      >
                        Apartment, unit, suite, or floor # (Optional)
                      </Text>
                      <Input
                        wrapClassName="border-[1px] border-bluegray_50 border-solid flex h-[40px] px-[14px] py-[10px] rounded-[20px] w-[100%]"
                        className="p-[0] w-[100%]"
                        name="input_One"
                        placeholder=""
                      ></Input>
                    </div>
                  </div>
                  <div className="flex items-start justify-start w-[100%]">
                    <WebApplicationTwoInput
                      className="flex flex-col items-start justify-start w-[100%]"
                      emailEight="City"
                    />
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[24px] items-start justify-start w-[100%]">
                    <DashboardInput
                      className="flex flex-1 flex-col items-start justify-start w-[100%]"
                      emailFive="State"
                    />
                    <WebApplicationTwoInput
                      className="flex flex-1 flex-col items-start justify-start w-[100%]"
                      emailEight="Zip Code"
                    />
                  </div>
                  <div className="flex items-start justify-start self-stretch sm:w-[100%] w-[auto]">
                    <CheckBox
                      className="font-normal not-italic text-[14px] text-gray_900 text-left"
                      inputClassName="mr-[5px]"
                      name="checkbox"
                      id="checkbox"
                      label="This officer is also the business&#39;s primary point of contact"
                    ></CheckBox>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row sm:gap-[40px] items-center justify-between px-[6px] w-[100%]">
              <div className="h-[40px] relative w-[79px]">
                <Img
                  src="images/img_arrowleft.svg"
                  className="absolute h-[20px] inset-y-[0] left-[0] my-[auto] w-[20px]"
                  alt="arrowleft"
                />
                <div className="absolute flex h-[100%] inset-y-[0] items-center justify-center my-[auto] px-[16px] py-[10px] right-[0] rounded-[8px] self-stretch w-[auto]">
                  <Text
                    className="font-medium text-bluegray_400 text-left w-[auto]"
                    variant="body2"
                  >
                    Back
                  </Text>
                </div>
              </div>
              <div className="flex relative w-[78px]">
                <div className="flex items-center justify-center my-[auto] px-[16px] py-[10px] rounded-[8px] self-stretch w-[auto]">
                  <Text
                    className="font-medium text-gray_900 text-left w-[auto]"
                    variant="body2"
                  >
                    Next
                  </Text>
                </div>
                <Img
                  src="images/img_arrowright.svg"
                  className="h-[20px] ml-[-6px] my-[auto] w-[20px] z-[1]"
                  alt="arrowright"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebApplicationSixPage;
