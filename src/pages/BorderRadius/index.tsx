import React from "react";

import { Text, List } from "components";

const BorderRadiusPage: React.FC = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inter gap-[48px] items-center justify-start mx-[auto] pb-[854px] w-[100%]">
        <div className="bg-black_900 h-[8px] w-[100%]"></div>
        <div className="flex flex-col items-start justify-start max-w-[1284px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="flex flex-row gap-[12px] items-center justify-between max-w-[1284px] w-[100%]">
            <div className="flex flex-row gap-[12px] items-center justify-start self-stretch w-[auto]">
              <div className="bg-black_900 h-[32px] rounded-[50%] w-[32px]"></div>
              <Text
                className="font-medium text-black_900 text-left w-[auto]"
                variant="body2"
              >
                {"Joy --> Border Radius"}
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
            className="mt-[58px] text-black_900 text-left w-[auto]"
            as="h2"
            variant="h2"
          >
            Border Radius
          </Text>
          <List
            className="sm:flex-col flex-row gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start mt-[64px] self-stretch md:w-[100%] w-[auto]"
            orientation="horizontal"
          >
            <div className="flex flex-col gap-[12px] items-center justify-start self-stretch w-[auto]">
              <div className="bg-red_A100 h-[144px] rounded-[6px] w-[144px]"></div>
              <Text
                className="font-normal not-italic text-black_900 text-left w-[auto]"
                variant="body2"
              >
                6px
              </Text>
            </div>
            <div className="flex flex-col gap-[12px] items-center justify-start self-stretch w-[auto]">
              <div className="bg-red_A100 h-[144px] rounded-[8px] w-[144px]"></div>
              <Text
                className="font-normal not-italic text-black_900 text-left w-[auto]"
                variant="body2"
              >
                8px
              </Text>
            </div>
            <div className="flex flex-col gap-[12px] items-center justify-start self-stretch w-[auto]">
              <div className="bg-red_A100 h-[144px] rounded-[12px] w-[144px]"></div>
              <Text
                className="font-normal not-italic text-black_900 text-left w-[auto]"
                variant="body2"
              >
                12px
              </Text>
            </div>
            <div className="flex flex-col gap-[12px] items-center justify-start self-stretch w-[auto]">
              <div className="bg-red_A100 h-[144px] rounded-[24px] w-[144px]"></div>
              <Text
                className="font-normal not-italic text-black_900 text-left w-[auto]"
                variant="body2"
              >
                24px
              </Text>
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

export default BorderRadiusPage;
