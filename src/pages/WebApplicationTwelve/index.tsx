import React from "react";

import { Img, List, Line, Text, Button } from "components";

const WebApplicationTwelvePage: React.FC = () => {
  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] p-[100px] sm:px-[20px] md:px-[40px] w-[100%]">
        <div className="flex flex-col gap-[32px] items-center justify-start max-w-[640px] mb-[574px] w-[100%]">
          <div className="flex items-center justify-center w-[100%]">
            <Img
              src="images/img_untitleddesign.png"
              className="h-[40px] md:h-[auto] object-cover w-[134px]"
              alt="untitleddesign"
            />
          </div>
          <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
            <div className="bg-white_A700 border-[1px] border-gray_100 border-solid flex flex-col gap-[48px] items-start justify-center p-[32px] sm:px-[20px] rounded-[24px] w-[100%]">
              <List
                className="sm:flex-col flex-row gap-[32px] grid sm:grid-cols-1 grid-cols-4 justify-start w-[100%]"
                orientation="horizontal"
              >
                <div className="flex flex-1 flex-col gap-[8px] items-start justify-start w-[100%]">
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
                <div className="flex flex-1 flex-col gap-[8px] items-start justify-start w-[100%]">
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
                <div className="flex flex-1 flex-col gap-[8px] items-start justify-start w-[100%]">
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
                <div className="flex flex-1 flex-col gap-[8px] items-start justify-start w-[100%]">
                  <div className="h-[6px] relative w-[94%]">
                    <Line className="bg-bluegray_50 h-[6px] m-[auto] rounded-[3px] w-[100%]" />
                    <Line className="absolute bg-yellow_900 h-[6px] inset-[0] justify-center m-[auto] rounded-[3px] w-[100%]" />
                  </div>
                  <Text
                    className="font-medium text-gray_800 text-left w-[auto]"
                    variant="body6"
                  >
                    Beneficial Owners{" "}
                  </Text>
                </div>
              </List>
              <div className="flex flex-col gap-[20px] items-center justify-center w-[100%]">
                <div className="flex items-start justify-start pb-[16px] w-[100%]">
                  <Text
                    className="font-medium text-gray_900 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Confirm Application
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-[12px] items-start justify-start w-[100%]">
                  <div className="flex items-start justify-start pt-[2px] self-stretch w-[auto]">
                    <Img
                      src="images/img_file_white_a700.svg"
                      className="h-[16px] w-[16px]"
                      alt="file"
                    />
                  </div>
                  <Text
                    className="flex-1 font-normal leading-[20.00px] not-italic text-gray_900 text-left"
                    variant="body2"
                  >
                    <>
                      By providing the information above, I hereby certify, to
                      the best of my knowledge, that the information provided
                      above is complete and correct.
                      <br />I agree to the KAPED Privacy Policy, Consent to
                      Electronic Disclosures, Deposit Terms & Conditions, Client
                      Terms of Service.
                    </>
                  </Text>
                </div>
                <Text
                  className="font-normal leading-[14.00px] md:max-w-[100%] max-w-[576px] not-italic text-bluegray_200 text-left"
                  variant="body6"
                >
                  KAPED is a financial technology company and is not a bank.
                  Banking services provided by Blue Ridge Bank; Member FDIC.
                </Text>
              </div>
            </div>
            <div className="flex flex-row sm:gap-[40px] items-center justify-between pl-[6px] w-[100%]">
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
              <div className="flex items-center justify-start self-stretch w-[auto]">
                <Button className="bg-yellow_900 cursor-pointer font-medium min-w-[80px] px-[16px] py-[10px] rounded-[20px] text-[14px] text-center text-white_A700 w-[auto]">
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebApplicationTwelvePage;
