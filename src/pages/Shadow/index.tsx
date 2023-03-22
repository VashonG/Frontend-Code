import React from "react";

import { Text } from "components";

const ShadowPage: React.FC = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inter gap-[48px] items-center justify-start mx-[auto] pb-[770px] w-[100%]">
        <div className="bg-black_900 h-[8px] w-[100%]"></div>
        <div className="flex flex-col items-start justify-start max-w-[1284px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="flex flex-row gap-[12px] items-center justify-between max-w-[1284px] w-[100%]">
            <div className="flex flex-row gap-[12px] items-center justify-start self-stretch w-[auto]">
              <div className="bg-black_900 h-[32px] rounded-[50%] w-[32px]"></div>
              <Text
                className="font-medium text-black_900 text-left w-[auto]"
                variant="body2"
              >
                {"Joy --> Shadow"}
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
          <Text
            className="mt-[59px] text-black_900 text-left w-[auto]"
            as="h2"
            variant="h2"
          >
            Shadow
          </Text>
          <div className="bg-gray_51 flex flex-row gap-[20px] items-start justify-start mt-[63px] p-[32px] sm:px-[20px] rounded-[24px] self-stretch sm:w-[100%] w-[auto]">
            <div className="flex flex-col gap-[32px] items-center justify-start self-stretch w-[auto]">
              <div className="bg-white_A700 h-[144px] rounded-[12px] shadow-bs2 w-[144px]"></div>
              <Text
                className="font-normal not-italic text-black_900 text-left w-[auto]"
                variant="body2"
              >
                Shadow S
              </Text>
            </div>
            <div className="flex flex-col gap-[32px] items-center justify-start self-stretch w-[auto]">
              <div className="bg-white_A700 h-[144px] rounded-[12px] shadow-bs w-[144px]"></div>
              <Text
                className="font-normal not-italic text-black_900 text-left w-[auto]"
                variant="body2"
              >
                Shadow
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShadowPage;
