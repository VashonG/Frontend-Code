import React from "react";

import { Text, Img } from "components";

const OnboardingPage: React.FC = () => {
  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] p-[200px] sm:px-[20px] md:px-[40px] w-[100%]">
        <div className="flex flex-col gap-[32px] items-center justify-start mb-[190px] self-stretch w-[auto]">
          <div className="bg-yellow_900 h-[40px] rounded-[50%] w-[40px]"></div>
          <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[auto]">
            <div className="bg-white_A700 border-[1px] border-gray_100 border-solid flex flex-col gap-[40px] items-center justify-center sm:px-[20px] px-[22px] py-[32px] rounded-[24px] w-[320px]">
              <Text
                className="font-medium text-gray_900 text-left w-[auto]"
                as="h5"
                variant="h5"
              >
                Choose your plan
              </Text>
              <div className="flex flex-col gap-[10px] items-start justify-start w-[100%]">
                <div className="flex flex-row items-center justify-between p-[10px] w-[100%]">
                  <div className="flex flex-row gap-[16px] items-center justify-start self-stretch w-[auto]">
                    <div className="bg-gray_300 h-[32px] rounded-[50%] w-[32px]"></div>
                    <div className="flex flex-col items-start justify-center self-stretch w-[auto]">
                      <Text
                        className="font-medium text-gray_900 text-left w-[auto]"
                        variant="body2"
                      >
                        Freemium
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body6"
                      >
                        $0 / month
                      </Text>
                    </div>
                  </div>
                  <Img
                    src="images/img_arrowright_bluegray_200.svg"
                    className="h-[24px] w-[24px]"
                    alt="arrowright"
                  />
                </div>
                <div className="md:h-[54px] h-[56px] relative w-[100%]">
                  <div className="absolute flex flex-row inset-x-[0] items-center justify-between mx-[auto] outline outline-[1px] outline-yellow_900 p-[10px] rounded-[26px] top-[0] w-[276px]">
                    <div className="flex flex-row gap-[16px] items-center justify-start self-stretch w-[auto]">
                      <div className="bg-bluegray_400 h-[32px] rounded-[50%] w-[32px]"></div>
                      <div className="flex flex-col items-start justify-center self-stretch w-[auto]">
                        <Text
                          className="font-medium text-gray_900 text-left w-[auto]"
                          variant="body2"
                        >
                          Premium
                        </Text>
                        <Text
                          className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                          variant="body6"
                        >
                          $65 / month
                        </Text>
                      </div>
                    </div>
                    <Img
                      src="images/img_arrowright_bluegray_200.svg"
                      className="h-[24px] w-[24px]"
                      alt="arrowright_One"
                    />
                  </div>
                  <Img
                    src="images/img_group_black_900.svg"
                    className="absolute bottom-[0] h-[15px] right-[29%] w-[auto]"
                    alt="group"
                  />
                </div>
                <div className="flex flex-row items-center justify-between p-[10px] w-[100%]">
                  <div className="flex flex-row gap-[16px] items-center justify-start self-stretch w-[auto]">
                    <div className="bg-black_900 h-[32px] rounded-[50%] w-[32px]"></div>
                    <div className="flex flex-col items-start justify-center self-stretch w-[auto]">
                      <Text
                        className="font-medium text-gray_900 text-left w-[auto]"
                        variant="body2"
                      >
                        Entreprise
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body6"
                      >
                        $495 / month
                      </Text>
                    </div>
                  </div>
                  <Img
                    src="images/img_arrowright_bluegray_200.svg"
                    className="h-[24px] w-[24px]"
                    alt="arrowright_Two"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between px-[6px] w-[320px]">
              <Text
                className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                variant="body2"
              >
                Back
              </Text>
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
                  alt="arrowright_Three"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OnboardingPage;
