import React from "react";

import { Text } from "components";

const DesktopOnePage: React.FC = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inter gap-[199px] sm:gap-[40px] md:gap-[40px] justify-start mx-[auto] pb-[244px] w-[100%]">
        <div className="flex flex-col gap-[48px] items-center w-[100%]">
          <div className="bg-black_900 h-[8px] w-[100%]"></div>
          <div className="flex flex-row gap-[12px] items-center justify-between max-w-[1284px] mx-[auto] md:px-[20px] w-[100%]">
            <div className="flex flex-row gap-[12px] items-center justify-start self-stretch w-[auto]">
              <div className="bg-black_900 h-[32px] rounded-[50%] w-[32px]"></div>
              <Text
                className="font-bold text-black_900 text-left w-[auto]"
                variant="body2"
              >
                Joy
              </Text>
            </div>
            <div className="flex flex-col gap-[4px] items-end justify-start self-stretch w-[auto]">
              <Text
                className="font-bold text-black_900 text-left w-[auto]"
                variant="body2"
              >
                Jim Designs
              </Text>
              <Text
                className="font-normal not-italic text-bluegray_700 text-right w-[auto]"
                variant="body5"
              >
                jimdesigns.co
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:gap-[40px] gap-[96px] items-start justify-start md:ml-[0] ml-[180px] md:px-[20px] md:w-[100%] w-[44%]">
          <Text className="text-left text-yellow_900 w-[auto]" variant="body4">
            Kaped
          </Text>
          <div className="flex sm:flex-col flex-row gap-[180px] sm:gap-[40px] items-start justify-between self-stretch md:w-[100%] w-[auto]">
            <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[auto]">
              <div className="flex flex-col gap-[16px] items-start justify-start self-stretch w-[auto]">
                <Text
                  className="font-semibold text-bluegray_400 text-left w-[auto]"
                  variant="body1"
                >
                  OWNER
                </Text>
                <Text
                  className="font-semibold text-gray_900 text-left w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Vashon Gonzales
                </Text>
              </div>
              <Text
                className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                as="h5"
                variant="h5"
              >
                vashon@kaped.io
              </Text>
            </div>
            <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[auto]">
              <div className="flex flex-col gap-[16px] items-start justify-start self-stretch w-[auto]">
                <Text
                  className="font-semibold text-bluegray_400 text-left w-[auto]"
                  variant="body1"
                >
                  DESIGNER
                </Text>
                <Text
                  className="font-semibold text-gray_900 text-left w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Jim Designs
                </Text>
              </div>
              <Text
                className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                as="h5"
                variant="h5"
              >
                hello@jimdesigns.co
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopOnePage;
