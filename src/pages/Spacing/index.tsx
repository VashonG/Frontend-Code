import React from "react";

import { Text, Line } from "components";

const SpacingPage: React.FC = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inter gap-[48px] items-center justify-start mx-[auto] pb-[526px] w-[100%]">
        <div className="bg-black_900 h-[8px] w-[100%]"></div>
        <div className="flex flex-col items-start justify-start max-w-[1284px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="flex flex-row gap-[12px] items-center justify-between max-w-[1284px] w-[100%]">
            <div className="flex flex-row gap-[12px] items-center justify-start self-stretch w-[auto]">
              <div className="bg-black_900 h-[32px] rounded-[50%] w-[32px]"></div>
              <Text
                className="font-medium text-black_900 text-left w-[auto]"
                variant="body2"
              >
                {"Joy --> Spacing"}
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
            className="mt-[63px] text-black_900 text-left w-[auto]"
            as="h2"
            variant="h2"
          >
            Spacing
          </Text>
          <div className="flex flex-col gap-[24px] items-start justify-start mt-[59px] self-stretch w-[auto]">
            <div className="flex flex-row gap-[20px] items-center justify-start self-stretch w-[auto]">
              <Text
                className="font-normal not-italic text-bluegray_200 text-left w-[auto]"
                variant="body2"
              >
                2px
              </Text>
              <Line className="bg-red_A100 h-[20px] w-[2px]" />
            </div>
            <div className="flex flex-row gap-[20px] items-center justify-start self-stretch w-[auto]">
              <Text
                className="font-normal not-italic text-bluegray_200 text-left w-[auto]"
                variant="body2"
              >
                4px
              </Text>
              <Line className="bg-red_A100 h-[20px] w-[4px]" />
            </div>
            <div className="flex flex-row gap-[20px] items-center justify-start self-stretch w-[auto]">
              <Text
                className="font-normal not-italic text-bluegray_200 text-left w-[auto]"
                variant="body2"
              >
                8px
              </Text>
              <div className="bg-red_A100 h-[20px] w-[11%]"></div>
            </div>
            <div className="flex flex-row gap-[20px] items-center justify-start self-stretch w-[auto]">
              <Text
                className="font-normal not-italic text-bluegray_200 text-left w-[auto]"
                variant="body2"
              >
                10px
              </Text>
              <div className="bg-red_A100 h-[20px] w-[13%]"></div>
            </div>
            <div className="flex flex-row gap-[20px] items-center justify-start self-stretch w-[auto]">
              <Text
                className="font-normal not-italic text-bluegray_200 text-left w-[auto]"
                variant="body2"
              >
                12px
              </Text>
              <div className="bg-red_A100 h-[20px] w-[15%]"></div>
            </div>
            <div className="flex flex-row gap-[20px] items-center justify-start self-stretch w-[auto]">
              <Text
                className="font-normal not-italic text-bluegray_200 text-left w-[auto]"
                variant="body2"
              >
                16px
              </Text>
              <div className="bg-red_A100 h-[20px] w-[19%]"></div>
            </div>
            <div className="flex flex-row gap-[20px] items-center justify-start self-stretch w-[auto]">
              <Text
                className="font-normal not-italic text-bluegray_200 text-left w-[auto]"
                variant="body2"
              >
                20px
              </Text>
              <div className="bg-red_A100 h-[20px] w-[20px]"></div>
            </div>
            <div className="flex flex-row gap-[20px] items-center justify-start self-stretch w-[auto]">
              <Text
                className="font-normal not-italic text-bluegray_200 text-left w-[auto]"
                variant="body2"
              >
                24px
              </Text>
              <div className="bg-red_A100 h-[20px] w-[26%]"></div>
            </div>
            <div className="flex flex-row gap-[20px] items-center justify-start self-stretch w-[auto]">
              <Text
                className="font-normal not-italic text-bluegray_200 text-left w-[auto]"
                variant="body2"
              >
                32px
              </Text>
              <div className="bg-red_A100 h-[20px] w-[32%]"></div>
            </div>
            <div className="flex flex-row gap-[20px] items-center justify-start self-stretch w-[auto]">
              <Text
                className="font-normal not-italic text-bluegray_200 text-left w-[auto]"
                variant="body2"
              >
                40px
              </Text>
              <div className="bg-red_A100 h-[20px] w-[37%]"></div>
            </div>
            <div className="flex flex-row gap-[20px] items-center justify-start self-stretch w-[auto]">
              <Text
                className="font-normal not-italic text-bluegray_200 text-left w-[auto]"
                variant="body2"
              >
                48px
              </Text>
              <div className="bg-red_A100 h-[20px] w-[41%]"></div>
            </div>
            <div className="flex flex-row gap-[20px] items-center justify-start self-stretch w-[auto]">
              <Text
                className="font-normal not-italic text-bluegray_200 text-left w-[auto]"
                variant="body2"
              >
                64px
              </Text>
              <div className="bg-red_A100 h-[20px] w-[48%]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpacingPage;
