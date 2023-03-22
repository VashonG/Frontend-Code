import React from "react";

import { Text, List } from "components";

const TypographyPage: React.FC = () => {
  function handleNavigate() {
    window.location.href = "https://fonts.google.com/specimen/Inter";
  }

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inter items-center justify-start mx-[auto] pb-[498px] w-[100%]">
        <div className="bg-black_900 h-[8px] w-[100%]"></div>
        <div className="flex flex-col md:gap-[40px] gap-[64px] items-start justify-start max-w-[1284px] mt-[48px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="flex flex-row gap-[12px] items-center justify-between max-w-[1284px] w-[100%]">
            <div className="flex flex-row gap-[12px] items-center justify-start self-stretch w-[auto]">
              <div className="bg-black_900 h-[32px] rounded-[50%] w-[32px]"></div>
              <Text
                className="font-medium text-black_900 text-left w-[auto]"
                variant="body2"
              >
                {"Joy --> Typography"}
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
            className="text-black_900 text-left w-[auto]"
            as="h2"
            variant="h2"
          >
            Typography
          </Text>
        </div>
        <div className="flex flex-col md:gap-[40px] gap-[93px] items-start mt-[58px] sm:px-[20px] md:px-[40px] px-[54px] w-[100%]">
          <div className="h-[252px] md:h-[777px] relative md:w-[100%] w-[79%]">
            <div className="absolute flex md:flex-col flex-row gap-[120px] md:gap-[40px] h-[100%] inset-y-[0] items-center justify-between left-[1%] my-[auto] self-stretch w-[auto]">
              <List
                className="sm:flex-col flex-row gap-[120px] md:gap-[40px] grid sm:grid-cols-1 grid-cols-3 md:w-[100%] w-[54%]"
                orientation="horizontal"
              >
                <div className="flex flex-col gap-[32px] items-start justify-start self-stretch w-[auto]">
                  <Text
                    className="font-normal not-italic text-bluegray_200 text-left w-[auto]"
                    variant="body2"
                  >
                    Font Size
                  </Text>
                  <div className="flex flex-col gap-[24px] items-start justify-start self-stretch w-[auto]">
                    <Text
                      className="font-normal not-italic text-bluegray_200 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      18px
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_200 text-left w-[auto]"
                      variant="body1"
                    >
                      16px
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_200 text-left w-[auto]"
                      variant="body2"
                    >
                      14px
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_200 text-left w-[auto]"
                      variant="body3"
                    >
                      13px
                    </Text>
                    <Text
                      className="font-normal not-italic text-bluegray_200 text-left w-[auto]"
                      variant="body6"
                    >
                      11px
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[32px] items-start justify-start self-stretch w-[auto]">
                  <Text
                    className="font-normal not-italic text-bluegray_200 text-left w-[auto]"
                    variant="body2"
                  >
                    Regular (400)
                  </Text>
                  <div className="flex flex-col gap-[24px] items-start justify-start self-stretch w-[auto]">
                    <Text
                      className="font-normal not-italic text-black_900 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Text XL
                    </Text>
                    <Text
                      className="font-normal not-italic text-black_900 text-left w-[auto]"
                      variant="body1"
                    >
                      Text L
                    </Text>
                    <Text
                      className="font-normal not-italic text-black_900 text-left w-[auto]"
                      variant="body2"
                    >
                      Text
                    </Text>
                    <Text
                      className="font-normal not-italic text-black_900 text-left w-[auto]"
                      variant="body3"
                    >
                      Text S
                    </Text>
                    <Text
                      className="font-normal not-italic text-black_900 text-left w-[auto]"
                      variant="body6"
                    >
                      Text XS
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[32px] items-start justify-start self-stretch w-[auto]">
                  <Text
                    className="font-normal not-italic text-bluegray_200 text-left w-[auto]"
                    variant="body2"
                  >
                    Medium (500)
                  </Text>
                  <div className="flex flex-col gap-[24px] items-start justify-start self-stretch w-[auto]">
                    <Text
                      className="font-medium text-black_900 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Text XL
                    </Text>
                    <Text
                      className="font-medium text-black_900 text-left w-[auto]"
                      variant="body1"
                    >
                      Text L
                    </Text>
                    <Text
                      className="font-medium text-black_900 text-left w-[auto]"
                      variant="body2"
                    >
                      Text
                    </Text>
                    <Text
                      className="font-medium text-black_900 text-left w-[auto]"
                      variant="body3"
                    >
                      Text S
                    </Text>
                    <Text
                      className="font-medium text-black_900 text-left w-[auto]"
                      variant="body6"
                    >
                      Text XS
                    </Text>
                  </div>
                </div>
              </List>
              <div className="flex flex-col gap-[32px] items-start justify-start self-stretch w-[auto]">
                <Text
                  className="font-normal not-italic text-bluegray_200 text-left w-[auto]"
                  variant="body2"
                >
                  Semi Bold (600)
                </Text>
                <div className="flex flex-col gap-[24px] items-start justify-start self-stretch w-[auto]">
                  <Text
                    className="font-semibold text-black_900 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Text XL
                  </Text>
                  <Text
                    className="font-semibold text-black_900 text-left w-[auto]"
                    variant="body1"
                  >
                    Text L
                  </Text>
                  <Text
                    className="font-semibold text-black_900 text-left w-[auto]"
                    variant="body2"
                  >
                    Text
                  </Text>
                  <Text
                    className="font-semibold text-black_900 text-left w-[auto]"
                    variant="body3"
                  >
                    Text S
                  </Text>
                  <Text
                    className="font-semibold text-black_900 text-left w-[auto]"
                    variant="body6"
                  >
                    Text XS
                  </Text>
                </div>
              </div>
              <div className="flex flex-col gap-[32px] items-start justify-start self-stretch w-[auto]">
                <Text
                  className="font-normal not-italic text-bluegray_200 text-left w-[auto]"
                  variant="body2"
                >
                  Line Height
                </Text>
                <div className="flex flex-col gap-[24px] items-start justify-start self-stretch w-[auto]">
                  <Text
                    className="font-normal not-italic text-bluegray_200 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    28px
                  </Text>
                  <Text
                    className="font-normal not-italic text-bluegray_200 text-left w-[auto]"
                    variant="body1"
                  >
                    24px
                  </Text>
                  <Text
                    className="font-normal not-italic text-bluegray_200 text-left w-[auto]"
                    variant="body2"
                  >
                    20px
                  </Text>
                  <Text
                    className="font-normal not-italic text-bluegray_200 text-left w-[auto]"
                    variant="body3"
                  >
                    16px
                  </Text>
                  <Text
                    className="font-normal not-italic text-bluegray_200 text-left w-[auto]"
                    variant="body6"
                  >
                    14px
                  </Text>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[28%] h-[40px] inset-x-[0] mx-[auto] outline outline-[1px] outline-black_900 rounded-[4px] w-[100%]"></div>
          </div>
          <div className="flex flex-col md:gap-[40px] gap-[63px] items-start justify-start md:ml-[0] ml-[10px] md:w-[100%] w-[21%]">
            <Text
              className="text-black_900 text-left w-[auto]"
              as="h2"
              variant="h2"
            >
              Font
            </Text>
            <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[auto]">
              <Text
                className="font-normal not-italic text-black_900 text-left w-[auto]"
                as="h3"
                variant="h3"
              >
                Inter
              </Text>
              <Text
                className="common-pointer font-normal not-italic text-bluegray_200 text-left w-[auto]"
                variant="body2"
                onClick={handleNavigate}
              >
                https://fonts.google.com/specimen/Inter
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TypographyPage;
