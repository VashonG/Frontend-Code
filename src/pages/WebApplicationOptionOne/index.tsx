import React from "react";

import { Img, Text, List, Line, Input } from "components";
import DashboardInput from "components/DashboardInput";
import WebApplicationTwoInput from "components/WebApplicationTwoInput";

const WebApplicationOptionOnePage: React.FC = () => {
  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] p-[100px] sm:px-[20px] md:px-[40px] w-[100%]">
        <div className="flex flex-col gap-[32px] items-center justify-start max-w-[720px] mb-[128px] w-[100%]">
          <div className="flex items-center justify-center w-[100%]">
            <Img
              src="images/img_untitleddesign.png"
              className="h-[40px] md:h-[auto] object-cover w-[134px]"
              alt="untitleddesign"
            />
          </div>
          <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
            <div className="bg-white_A700 border-[1px] border-gray_100 border-solid flex flex-col gap-[48px] items-start justify-center p-[32px] sm:px-[20px] rounded-[24px] w-[100%]">
              <div className="flex md:flex-col flex-row gap-[24px] items-center justify-start w-[100%]">
                <div className="flex flex-1 flex-col gap-[8px] items-start justify-start w-[100%]">
                  <Img
                    src="images/img_group3.svg"
                    className="h-[6px] w-[100%]"
                    alt="groupThree"
                  />
                  <Text
                    className="font-medium text-gray_800 text-left w-[auto]"
                    variant="body6"
                  >
                    Application type
                  </Text>
                </div>
                <List
                  className="md:flex-1 sm:flex-col flex-row gap-[24px] grid sm:grid-cols-1 grid-cols-4 md:w-[100%] w-[80%]"
                  orientation="horizontal"
                >
                  <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                    <Line className="bg-bluegray_50 h-[6px] rounded-[3px] w-[100%]" />
                    <Text
                      className="font-medium text-gray_800 text-left w-[auto]"
                      variant="body6"
                    >
                      Business Information
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                    <Line className="bg-bluegray_50 h-[6px] rounded-[3px] w-[100%]" />
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                      variant="body6"
                    >
                      Officer Information
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                    <Line className="bg-bluegray_50 h-[6px] rounded-[3px] w-[100%]" />
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                      variant="body6"
                    >
                      Phone Verification
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                    <Line className="bg-bluegray_50 h-[6px] rounded-[3px] w-[100%]" />
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                      variant="body6"
                    >
                      Beneficial Owners{" "}
                    </Text>
                  </div>
                </List>
              </div>
              <div className="flex flex-col gap-[32px] items-center justify-center w-[100%]">
                <div className="flex flex-col gap-[32px] items-center justify-start md:w-[100%] w-[92%]">
                  <div className="flex flex-col gap-[8px] items-start justify-start pb-[16px] w-[100%]">
                    <Text
                      className="font-medium text-gray_900 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Business Information
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                      variant="body2"
                    >
                      Before we get started, we need to collect some basic
                      information about your business.
                    </Text>
                  </div>
                  <div className="flex items-start justify-start w-[100%]">
                    <div className="flex md:flex-col flex-row gap-[20px] items-start justify-start w-[100%]">
                      <div className="flex flex-col gap-[2px] items-start justify-start w-[230px]">
                        <Text
                          className="font-medium text-bluegray_700 text-left w-[auto]"
                          variant="body2"
                        >
                          Identity
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_200 text-left w-[auto]"
                          variant="body3"
                        >
                          You cannot change these later
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col gap-[24px] items-start justify-start w-[100%]">
                        <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                          <DashboardInput
                            className="flex flex-col items-start justify-start w-[100%]"
                            emailFive="Entity Type"
                          />
                          <WebApplicationTwoInput
                            className="flex flex-col items-start justify-start w-[100%]"
                            emailEight="Legal Business Name"
                          />
                        </div>
                        <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                          <DashboardInput
                            className="flex flex-col items-start justify-start w-[100%]"
                            emailFive="Doing Business As (Optional)"
                          />
                          <DashboardInput
                            className="flex flex-col items-start justify-start w-[100%]"
                            emailFive="Industry"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <Img
                    src="images/img_frame143.svg"
                    className="h-[1px] w-[718px]"
                    alt="frame143"
                  />
                  <div className="flex items-start justify-start mt-[32px] w-[100%]">
                    <div className="flex md:flex-col flex-row gap-[20px] items-start justify-start w-[100%]">
                      <div className="flex flex-col gap-[2px] items-start justify-start w-[230px]">
                        <Text
                          className="font-medium text-bluegray_700 text-left w-[auto]"
                          variant="body2"
                        >
                          Physical Address
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_200 text-left w-[auto]"
                          variant="body3"
                        >
                          We only operate in the US
                        </Text>
                      </div>
                      <div className="flex flex-1 flex-col gap-[24px] items-start justify-start w-[100%]">
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
                              name="input_Five"
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
                      </div>
                    </div>
                  </div>
                  <Line className="bg-gray_100 h-[1px] mt-[32px] w-[100%]" />
                  <div className="flex items-start justify-start mt-[31px] w-[100%]">
                    <div className="flex md:flex-col flex-row gap-[20px] items-start justify-start w-[100%]">
                      <div className="flex flex-col gap-[2px] items-start justify-start w-[230px]">
                        <Text
                          className="font-medium text-bluegray_700 text-left w-[auto]"
                          variant="body2"
                        >
                          Additional information
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_200 text-left w-[auto]"
                          variant="body3"
                        >
                          You cannot change these later
                        </Text>
                      </div>
                      <div className="flex flex-1 items-start justify-start w-[100%]">
                        <div className="flex flex-col gap-[24px] items-start justify-start w-[100%]">
                          <DashboardInput
                            className="flex flex-col items-start justify-start w-[100%]"
                            emailFive="State of Incorporation"
                          />
                          <WebApplicationTwoInput
                            className="flex flex-col items-start justify-start w-[100%]"
                            emailEight="Business Website (Optional)"
                          />
                        </div>
                      </div>
                    </div>
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

export default WebApplicationOptionOnePage;
