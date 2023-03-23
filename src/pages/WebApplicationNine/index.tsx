import React from "react";

import { Img, List, Line, Text, Input } from "components";
import WebApplicationTwoInput from "components/WebApplicationTwoInput";
import DashboardInput from "components/DashboardInput";

const WebApplicationNinePage: React.FC = () => {
  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] p-[100px] sm:px-[20px] md:px-[40px] w-[100%]">
        <div className="flex flex-col gap-[32px] items-center justify-start max-w-[640px] mb-[10px] w-[100%]">
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
                  className="sm:flex-1 sm:flex-col flex-row gap-[32px] grid sm:grid-cols-1 grid-cols-3 sm:w-[100%] w-[74%]"
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
                    <div className="h-[6px] relative w-[94%]">
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
                  <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                    <div className="h-[6px] relative w-[94%]">
                      <Line className="bg-bluegray_50 h-[6px] m-[auto] rounded-[3px] w-[100%]" />
                      <Line className="absolute bg-yellow_900 h-[6px] inset-[0] justify-center m-[auto] rounded-[3px] w-[100%]" />
                    </div>
                    <Text
                      className="font-medium text-gray_800 text-left w-[auto]"
                      variant="body6"
                    >
                      Officer Information
                    </Text>
                  </div>
                </List>
                <div className="flex flex-1 flex-col gap-[8px] items-start justify-start w-[100%]">
                  <div className="h-[6px] overflow-hidden relative w-[94%]">
                    <div className="w-full h-full absolute bg-bluegray_50 rounded-[3px]"></div>
                    <div
                      className="h-full absolute bg-yellow_900  rounded-[3px]"
                      style={{ width: "36%" }}
                    ></div>
                  </div>
                  <Text
                    className="font-medium text-gray_800 text-left w-[auto]"
                    variant="body6"
                  >
                    Beneficial Owners{" "}
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[20px] items-center justify-center w-[100%]">
                <div className="flex items-start justify-start pb-[16px] w-[100%]">
                  <Text
                    className="font-medium text-gray_900 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Owner 1
                  </Text>
                </div>
                <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                  <div className="flex sm:flex-col flex-row gap-[24px] items-start justify-start w-[100%]">
                    <WebApplicationTwoInput
                      className="flex flex-1 flex-col items-start justify-start w-[100%]"
                      emailEight="First Name"
                    />
                    <WebApplicationTwoInput
                      className="flex flex-1 flex-col items-start justify-start w-[100%]"
                      emailEight="Last Name"
                    />
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[24px] items-start justify-start w-[100%]">
                    <div className="flex flex-1 items-start justify-start w-[100%]">
                      <WebApplicationTwoInput
                        className="flex flex-col items-start justify-start w-[100%]"
                        emailEight="Email"
                      />
                    </div>
                    <div className="flex flex-1 items-start justify-start w-[100%]">
                      <WebApplicationTwoInput
                        className="flex flex-col items-start justify-start w-[100%]"
                        emailEight="Mobile Phone"
                      />
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[24px] items-start justify-start w-[100%]">
                    <div className="flex flex-1 items-start justify-start w-[100%]">
                      <WebApplicationTwoInput
                        className="flex flex-col items-start justify-start w-[100%]"
                        emailEight="Date of Birth"
                      />
                    </div>
                    <div className="flex flex-1 items-start justify-start w-[100%]">
                      <DashboardInput
                        className="flex flex-col items-start justify-start w-[100%]"
                        emailFive="Nationality"
                      />
                    </div>
                  </div>
                  <div className="flex items-start justify-start w-[100%]">
                    <WebApplicationTwoInput
                      className="flex flex-col items-start justify-start w-[100%]"
                      emailEight="Social Security Number"
                      description="To verify the identity, we’ll need to know the officer&#39;s full Social Security number or Individual Taxpayer Identification Number."
                    />
                  </div>
                  <div className="flex items-start justify-start w-[100%]">
                    <WebApplicationTwoInput
                      className="flex flex-col items-start justify-start w-[100%]"
                      emailEight="Percentage"
                      inputFive="75"
                    />
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[24px] items-start justify-start w-[100%]">
                    <WebApplicationTwoInput
                      className="flex flex-1 flex-col items-start justify-start w-[100%]"
                      emailEight="Stree"
                    />
                    <div className="flex flex-1 flex-col gap-[8px] items-start justify-start w-[100%]">
                      <Text
                        className="font-normal not-italic text-bluegray_700 text-left w-[auto]"
                        variant="body3"
                      >
                        Apartment, unit, suite, or floor # (Optional)
                      </Text>
                      <Input
                        wrapClassName="border-[1px] border-bluegray_50 border-solid flex h-[40px] px-[14px] py-[10px] rounded-[20px] w-[100%]"
                        className="p-[0] w-[100%]"
                        name="input_Seven"
                        placeholder=""
                      ></Input>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[24px] items-start justify-start w-[100%]">
                    <DashboardInput
                      className="flex flex-1 flex-col items-start justify-start w-[100%]"
                      emailFive="Country"
                    />
                    <WebApplicationTwoInput
                      className="flex flex-1 flex-col items-start justify-start w-[100%]"
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

export default WebApplicationNinePage;
