import React from "react";

import { Text, List } from "components";

const ColorsPage: React.FC = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-inter gap-[48px] items-center justify-start mx-[auto] pb-[64px] w-[100%]">
        <div className="bg-black_900 h-[8px] w-[100%]"></div>
        <div className="flex flex-col items-start justify-start max-w-[1284px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="flex flex-row gap-[12px] items-center justify-between max-w-[1284px] w-[100%]">
            <div className="flex flex-row gap-[12px] items-center justify-start self-stretch w-[auto]">
              <div className="bg-black_900 h-[32px] rounded-[50%] w-[32px]"></div>
              <Text
                className="font-medium text-black_900 text-left w-[auto]"
                variant="body2"
              >
                {"Joy --> Colors"}
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
            Colors
          </Text>
          <div className="flex flex-col md:gap-[40px] gap-[64px] items-start justify-start mt-[63px] self-stretch md:w-[100%] w-[auto]">
            <div className="md:h-[760px] h-[766px] relative md:w-[100%] w-[58%]">
              <div className="absolute flex h-[max-content] inset-[0] items-center justify-center m-[auto] w-[100%]">
                <List
                  className="flex-col md:gap-[40px] gap-[63px] grid items-center w-[100%]"
                  orientation="vertical"
                >
                  <div className="flex md:flex-1 flex-col gap-[16px] items-start justify-start my-[0] self-stretch md:w-[100%] w-[auto]">
                    <Text
                      className="font-semibold text-black_900 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Primary
                    </Text>
                    <div className="gap-[12px] grid sm:grid-cols-1 md:grid-cols-4 grid-cols-7 items-start justify-start self-stretch md:w-[100%] w-[auto]">
                      <div className="flex flex-col gap-[12px] items-start justify-start self-stretch w-[100%]">
                        <div className="bg-lime_50 h-[54px] w-[100%]"></div>
                        <div className="flex flex-col gap-[6px] items-start justify-start self-stretch w-[auto]">
                          <Text
                            className="font-medium text-black_900 text-left w-[auto]"
                            variant="body5"
                          >
                            Primary 100
                          </Text>
                          <Text
                            className="not-italic text-bluegray_400 text-left uppercase w-[auto]"
                            variant="body7"
                          >
                            #fbf4eb
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[12px] items-start justify-start self-stretch w-[100%]">
                        <div className="bg-orange_50 h-[54px] w-[100%]"></div>
                        <div className="flex flex-col gap-[6px] items-start justify-start self-stretch w-[auto]">
                          <Text
                            className="font-medium text-black_900 text-left w-[auto]"
                            variant="body5"
                          >
                            Primary 200
                          </Text>
                          <Text
                            className="not-italic text-bluegray_400 text-left uppercase w-[auto]"
                            variant="body7"
                          >
                            #f7e8d6
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[12px] items-start justify-start self-stretch w-[100%]">
                        <div className="bg-deep_orange_100 h-[54px] w-[100%]"></div>
                        <div className="flex flex-col gap-[6px] items-start justify-start self-stretch w-[auto]">
                          <Text
                            className="font-medium text-black_900 text-left w-[auto]"
                            variant="body5"
                          >
                            Primary 300
                          </Text>
                          <Text
                            className="not-italic text-bluegray_400 text-left uppercase w-[auto]"
                            variant="body7"
                          >
                            #f0d1ad
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[12px] items-start justify-start self-stretch w-[100%]">
                        <div className="bg-orange_300 h-[54px] w-[100%]"></div>
                        <div className="flex flex-col gap-[6px] items-start justify-start self-stretch w-[auto]">
                          <Text
                            className="font-medium text-black_900 text-left w-[auto]"
                            variant="body5"
                          >
                            Primary 400
                          </Text>
                          <Text
                            className="not-italic text-bluegray_400 text-left uppercase w-[auto]"
                            variant="body7"
                          >
                            #e1a35c
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[12px] items-start justify-start self-stretch w-[100%]">
                        <div className="bg-yellow_900 h-[54px] w-[100%]"></div>
                        <div className="flex flex-col gap-[6px] items-start justify-start self-stretch w-[auto]">
                          <Text
                            className="font-medium text-black_900 text-left w-[auto]"
                            variant="body5"
                          >
                            Primary 500
                          </Text>
                          <Text
                            className="not-italic text-bluegray_400 text-left uppercase w-[auto]"
                            variant="body7"
                          >
                            #D98C33
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[12px] items-start justify-start self-stretch w-[100%]">
                        <div className="bg-lime_800 h-[54px] w-[100%]"></div>
                        <div className="flex flex-col gap-[6px] items-start justify-start self-stretch w-[auto]">
                          <Text
                            className="font-medium text-black_900 text-left w-[auto]"
                            variant="body5"
                          >
                            Primary 600
                          </Text>
                          <Text
                            className="not-italic text-bluegray_400 text-left uppercase w-[auto]"
                            variant="body7"
                          >
                            #ae7029
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[12px] items-start justify-start self-stretch w-[100%]">
                        <div className="bg-gray_801 h-[54px] w-[100%]"></div>
                        <div className="flex flex-col gap-[6px] items-start justify-start self-stretch w-[auto]">
                          <Text
                            className="font-medium text-black_900 text-left w-[auto]"
                            variant="body5"
                          >
                            Primary 700
                          </Text>
                          <Text
                            className="not-italic text-bluegray_400 text-left uppercase w-[auto]"
                            variant="body7"
                          >
                            #573814
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[16px] items-start justify-start my-[0] self-stretch md:w-[100%] w-[auto]">
                    <Text
                      className="font-semibold text-black_900 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Red
                    </Text>
                    <div className="gap-[12px] grid sm:grid-cols-1 md:grid-cols-4 grid-cols-7 items-start justify-start self-stretch md:w-[100%] w-[auto]">
                      <div className="flex flex-col gap-[12px] items-start justify-start self-stretch w-[100%]">
                        <div className="bg-red-100 h-[54px] w-[100%]"></div>
                        <div className="flex flex-col gap-[6px] items-start justify-start self-stretch w-[auto]">
                          <Text
                            className="font-medium text-black_900 text-left w-[auto]"
                            variant="body5"
                          >
                            Red 100
                          </Text>
                          <Text
                            className="not-italic text-bluegray_400 text-left w-[auto]"
                            variant="body7"
                          >
                            #FFF5F5
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[12px] items-start justify-start self-stretch w-[100%]">
                        <div className="bg-deep_orange_50 h-[54px] w-[100%]"></div>
                        <div className="flex flex-col gap-[6px] items-start justify-start self-stretch w-[auto]">
                          <Text
                            className="font-medium text-black_900 text-left w-[auto]"
                            variant="body5"
                          >
                            Red 200
                          </Text>
                          <Text
                            className="not-italic text-bluegray_400 text-left w-[auto]"
                            variant="body7"
                          >
                            #FFE3E3
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[12px] items-start justify-start self-stretch w-[100%]">
                        <div className="bg-red_A100 h-[54px] w-[100%]"></div>
                        <div className="flex flex-col gap-[6px] items-start justify-start self-stretch w-[auto]">
                          <Text
                            className="font-medium text-black_900 text-left w-[auto]"
                            variant="body5"
                          >
                            Red 300
                          </Text>
                          <Text
                            className="not-italic text-bluegray_400 text-left w-[auto]"
                            variant="body7"
                          >
                            #FF8787
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[12px] items-start justify-start self-stretch w-[100%]">
                        <div className="bg-red_300 h-[54px] w-[100%]"></div>
                        <div className="flex flex-col gap-[6px] items-start justify-start self-stretch w-[auto]">
                          <Text
                            className="font-medium text-black_900 text-left w-[auto]"
                            variant="body5"
                          >
                            Red 400
                          </Text>
                          <Text
                            className="not-italic text-bluegray_400 text-left w-[auto]"
                            variant="body7"
                          >
                            #FF6B6B
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[12px] items-start justify-start self-stretch w-[100%]">
                        <div className="bg-red_A200 h-[54px] w-[100%]"></div>
                        <div className="flex flex-col gap-[6px] items-start justify-start self-stretch w-[auto]">
                          <Text
                            className="font-medium text-black_900 text-left w-[auto]"
                            variant="body5"
                          >
                            Red 500
                          </Text>
                          <Text
                            className="not-italic text-bluegray_400 text-left w-[auto]"
                            variant="body7"
                          >
                            #FA5252
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[12px] items-start justify-start self-stretch w-[100%]">
                        <div className="bg-red_500 h-[54px] w-[100%]"></div>
                        <div className="flex flex-col gap-[6px] items-start justify-start self-stretch w-[auto]">
                          <Text
                            className="font-medium text-black_900 text-left w-[auto]"
                            variant="body5"
                          >
                            Red 600
                          </Text>
                          <Text
                            className="not-italic text-bluegray_400 text-left w-[auto]"
                            variant="body7"
                          >
                            #F03E3E
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[12px] items-start justify-start self-stretch w-[100%]">
                        <div className="bg-red_800 h-[54px] w-[100%]"></div>
                        <div className="flex flex-col gap-[6px] items-start justify-start self-stretch w-[auto]">
                          <Text
                            className="font-medium text-black_900 text-left w-[auto]"
                            variant="body5"
                          >
                            Red 700
                          </Text>
                          <Text
                            className="not-italic text-bluegray_400 text-left w-[auto]"
                            variant="body7"
                          >
                            #C92A2A
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[16px] items-start justify-start my-[0] self-stretch md:w-[100%] w-[auto]">
                    <Text
                      className="font-semibold text-black_900 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Orange
                    </Text>
                    <div className="gap-[12px] grid sm:grid-cols-1 md:grid-cols-4 grid-cols-7 items-start justify-start self-stretch md:w-[100%] w-[auto]">
                      <div className="flex flex-col gap-[12px] items-start justify-start self-stretch w-[100%]">
                        <div className="bg-orange_51 h-[54px] w-[100%]"></div>
                        <div className="flex flex-col gap-[6px] items-start justify-start self-stretch w-[auto]">
                          <Text
                            className="font-medium text-black_900 text-left w-[auto]"
                            variant="body5"
                          >
                            Orange 100
                          </Text>
                          <Text
                            className="not-italic text-bluegray_400 text-left w-[auto]"
                            variant="body7"
                          >
                            #FFF4E6
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[12px] items-start justify-start self-stretch w-[100%]">
                        <div className="bg-yellow_100 h-[54px] w-[100%]"></div>
                        <div className="flex flex-col gap-[6px] items-start justify-start self-stretch w-[auto]">
                          <Text
                            className="font-medium text-black_900 text-left w-[auto]"
                            variant="body5"
                          >
                            Orange 200
                          </Text>
                          <Text
                            className="not-italic text-bluegray_400 text-left w-[auto]"
                            variant="body7"
                          >
                            #FFE8CC
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[12px] items-start justify-start self-stretch w-[100%]">
                        <div className="bg-orange_200 h-[54px] w-[100%]"></div>
                        <div className="flex flex-col gap-[6px] items-start justify-start self-stretch w-[auto]">
                          <Text
                            className="font-medium text-black_900 text-left w-[auto]"
                            variant="body5"
                          >
                            Orange 300
                          </Text>
                          <Text
                            className="not-italic text-bluegray_400 text-left w-[auto]"
                            variant="body7"
                          >
                            #FFC078
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[12px] items-start justify-start self-stretch w-[100%]">
                        <div className="bg-orange_A200 h-[54px] w-[100%]"></div>
                        <div className="flex flex-col gap-[6px] items-start justify-start self-stretch w-[auto]">
                          <Text
                            className="font-medium text-black_900 text-left w-[auto]"
                            variant="body5"
                          >
                            Orange 400
                          </Text>
                          <Text
                            className="not-italic text-bluegray_400 text-left w-[auto]"
                            variant="body7"
                          >
                            #FFA94D
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[12px] items-start justify-start self-stretch w-[100%]">
                        <div className="bg-orange_400 h-[54px] w-[100%]"></div>
                        <div className="flex flex-col gap-[6px] items-start justify-start self-stretch w-[auto]">
                          <Text
                            className="font-medium text-black_900 text-left w-[auto]"
                            variant="body5"
                          >
                            Orange 500
                          </Text>
                          <Text
                            className="not-italic text-bluegray_400 text-left w-[auto]"
                            variant="body7"
                          >
                            #FF922B
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[12px] items-start justify-start self-stretch w-[100%]">
                        <div className="bg-orange_800 h-[54px] w-[100%]"></div>
                        <div className="flex flex-col gap-[6px] items-start justify-start self-stretch w-[auto]">
                          <Text
                            className="font-medium text-black_900 text-left w-[auto]"
                            variant="body5"
                          >
                            Orange 600
                          </Text>
                          <Text
                            className="not-italic text-bluegray_400 text-left w-[auto]"
                            variant="body7"
                          >
                            #F76707
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[12px] items-start justify-start self-stretch w-[100%]">
                        <div className="bg-deep_orange_800 h-[54px] w-[100%]"></div>
                        <div className="flex flex-col gap-[6px] items-start justify-start self-stretch w-[auto]">
                          <Text
                            className="font-medium text-black_900 text-left w-[auto]"
                            variant="body5"
                          >
                            Orange 700
                          </Text>
                          <Text
                            className="not-italic text-bluegray_400 text-left w-[auto]"
                            variant="body7"
                          >
                            #D9480F
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[16px] items-start justify-start my-[0] self-stretch md:w-[100%] w-[auto]">
                    <Text
                      className="font-semibold text-black_900 text-left w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Green
                    </Text>
                    <div className="gap-[12px] grid sm:grid-cols-1 md:grid-cols-4 grid-cols-7 items-start justify-start self-stretch md:w-[100%] w-[auto]">
                      <div className="flex flex-col gap-[12px] items-start justify-start self-stretch w-[100%]">
                        <div className="bg-green_50 h-[54px] w-[100%]"></div>
                        <div className="flex flex-col gap-[6px] items-start justify-start self-stretch w-[auto]">
                          <Text
                            className="font-medium text-black_900 text-left w-[auto]"
                            variant="body5"
                          >
                            Green 100
                          </Text>
                          <Text
                            className="not-italic text-bluegray_400 text-left w-[auto]"
                            variant="body7"
                          >
                            #EBFBEE
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[12px] items-start justify-start self-stretch w-[100%]">
                        <div className="bg-light_green_100 h-[54px] w-[100%]"></div>
                        <div className="flex flex-col gap-[6px] items-start justify-start self-stretch w-[auto]">
                          <Text
                            className="font-medium text-black_900 text-left w-[auto]"
                            variant="body5"
                          >
                            Green 200
                          </Text>
                          <Text
                            className="not-italic text-bluegray_400 text-left w-[auto]"
                            variant="body7"
                          >
                            #D3F9D8
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[12px] items-start justify-start self-stretch w-[100%]">
                        <div className="bg-green_200 h-[54px] w-[100%]"></div>
                        <div className="flex flex-col gap-[6px] items-start justify-start self-stretch w-[auto]">
                          <Text
                            className="font-medium text-black_900 text-left w-[auto]"
                            variant="body5"
                          >
                            Green 300
                          </Text>
                          <Text
                            className="not-italic text-bluegray_400 text-left w-[auto]"
                            variant="body7"
                          >
                            #8CE99A
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[12px] items-start justify-start self-stretch w-[100%]">
                        <div className="bg-green_300 h-[54px] w-[100%]"></div>
                        <div className="flex flex-col gap-[6px] items-start justify-start self-stretch w-[auto]">
                          <Text
                            className="font-medium text-black_900 text-left w-[auto]"
                            variant="body5"
                          >
                            Green 400
                          </Text>
                          <Text
                            className="not-italic text-bluegray_400 text-left w-[auto]"
                            variant="body7"
                          >
                            #69DB7C
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[12px] items-start justify-start self-stretch w-[100%]">
                        <div className="bg-green_400 h-[54px] w-[100%]"></div>
                        <div className="flex flex-col gap-[6px] items-start justify-start self-stretch w-[auto]">
                          <Text
                            className="font-medium text-black_900 text-left w-[auto]"
                            variant="body5"
                          >
                            Green 500
                          </Text>
                          <Text
                            className="not-italic text-bluegray_400 text-left w-[auto]"
                            variant="body7"
                          >
                            #51CF66
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[12px] items-start justify-start self-stretch w-[100%]">
                        <div className="bg-green_500 h-[54px] w-[100%]"></div>
                        <div className="flex flex-col gap-[6px] items-start justify-start self-stretch w-[auto]">
                          <Text
                            className="font-medium text-black_900 text-left w-[auto]"
                            variant="body5"
                          >
                            Green 600
                          </Text>
                          <Text
                            className="not-italic text-bluegray_400 text-left w-[auto]"
                            variant="body7"
                          >
                            #37B24D
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[12px] items-start justify-start self-stretch w-[100%]">
                        <div className="bg-green_700 h-[54px] w-[100%]"></div>
                        <div className="flex flex-col gap-[6px] items-start justify-start self-stretch w-[auto]">
                          <Text
                            className="font-medium text-black_900 text-left w-[auto]"
                            variant="body5"
                          >
                            Green 700
                          </Text>
                          <Text
                            className="not-italic text-bluegray_400 text-left w-[auto]"
                            variant="body7"
                          >
                            #2B8A3E
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
              <div className="absolute bottom-[0] h-[732px] outline outline-[1px] outline-black_900 right-[28%] rounded-[4px] w-[15%]"></div>
            </div>
            <div className="flex flex-col gap-[16px] items-start justify-start self-stretch md:w-[100%] w-[auto]">
              <Text
                className="font-semibold text-black_900 text-left w-[auto]"
                as="h5"
                variant="h5"
              >
                Gray
              </Text>
              <List
                className="sm:flex-col flex-row gap-[12px] grid sm:grid-cols-1 grid-cols-12 md:grid-cols-6 justify-start self-stretch md:w-[100%] w-[auto]"
                orientation="horizontal"
              >
                <div className="flex flex-col gap-[12px] items-start justify-start self-stretch w-[auto]">
                  <div className="bg-white_A700 h-[54px] w-[100%]"></div>
                  <div className="flex flex-col gap-[6px] items-start justify-start self-stretch w-[auto]">
                    <Text
                      className="font-medium text-black_900 text-left w-[auto]"
                      variant="body5"
                    >
                      White
                    </Text>
                    <Text
                      className="not-italic text-bluegray_400 text-left w-[auto]"
                      variant="body7"
                    >
                      #FFFFFF
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[12px] items-start justify-start self-stretch w-[auto]">
                  <div className="bg-gray_51 h-[54px] w-[100%]"></div>
                  <div className="flex flex-col gap-[6px] items-start justify-start self-stretch w-[auto]">
                    <Text
                      className="font-medium text-black_900 text-left w-[auto]"
                      variant="body5"
                    >
                      Gray 000
                    </Text>
                    <Text
                      className="not-italic text-bluegray_400 text-left w-[auto]"
                      variant="body7"
                    >
                      #F8F9FA
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[12px] items-start justify-start self-stretch w-[auto]">
                  <div className="bg-gray_100 h-[54px] w-[100%]"></div>
                  <div className="flex flex-col gap-[6px] items-start justify-start self-stretch w-[auto]">
                    <Text
                      className="font-medium text-black_900 text-left w-[auto]"
                      variant="body5"
                    >
                      Gray 100
                    </Text>
                    <Text
                      className="not-italic text-bluegray_400 text-left w-[auto]"
                      variant="body7"
                    >
                      #F1F3F5
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[12px] items-start justify-start self-stretch w-[auto]">
                  <div className="bg-bluegray_50 h-[54px] w-[100%]"></div>
                  <div className="flex flex-col gap-[6px] items-start justify-start self-stretch w-[auto]">
                    <Text
                      className="font-medium text-black_900 text-left w-[auto]"
                      variant="body5"
                    >
                      Gray 200
                    </Text>
                    <Text
                      className="not-italic text-bluegray_400 text-left w-[auto]"
                      variant="body7"
                    >
                      #E9ECEF
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[12px] items-start justify-start self-stretch w-[auto]">
                  <div className="bg-gray_300 h-[54px] w-[100%]"></div>
                  <div className="flex flex-col gap-[6px] items-start justify-start self-stretch w-[auto]">
                    <Text
                      className="font-medium text-black_900 text-left w-[auto]"
                      variant="body5"
                    >
                      Gray 300
                    </Text>
                    <Text
                      className="not-italic text-bluegray_400 text-left w-[auto]"
                      variant="body7"
                    >
                      #DEE2E6
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[12px] items-start justify-start self-stretch w-[auto]">
                  <div className="bg-bluegray_100 h-[54px] w-[100%]"></div>
                  <div className="flex flex-col gap-[6px] items-start justify-start self-stretch w-[auto]">
                    <Text
                      className="font-medium text-black_900 text-left w-[auto]"
                      variant="body5"
                    >
                      Gray 400
                    </Text>
                    <Text
                      className="not-italic text-bluegray_400 text-left w-[auto]"
                      variant="body7"
                    >
                      #CED4DA
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[12px] items-start justify-start self-stretch w-[auto]">
                  <div className="bg-bluegray_200 h-[54px] w-[100%]"></div>
                  <div className="flex flex-col gap-[6px] items-start justify-start self-stretch w-[auto]">
                    <Text
                      className="font-medium text-black_900 text-left w-[auto]"
                      variant="body5"
                    >
                      Gray 500
                    </Text>
                    <Text
                      className="not-italic text-bluegray_400 text-left w-[auto]"
                      variant="body7"
                    >
                      #ADB5BD
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[12px] items-start justify-start self-stretch w-[auto]">
                  <div className="bg-bluegray_400 h-[54px] w-[100%]"></div>
                  <div className="flex flex-col gap-[6px] items-start justify-start self-stretch w-[auto]">
                    <Text
                      className="font-medium text-black_900 text-left w-[auto]"
                      variant="body5"
                    >
                      Gray 600
                    </Text>
                    <Text
                      className="not-italic text-bluegray_400 text-left w-[auto]"
                      variant="body7"
                    >
                      #868E96
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[12px] items-start justify-start self-stretch w-[auto]">
                  <div className="bg-bluegray_700 h-[54px] w-[100%]"></div>
                  <div className="flex flex-col gap-[6px] items-start justify-start self-stretch w-[auto]">
                    <Text
                      className="font-medium text-black_900 text-left w-[auto]"
                      variant="body5"
                    >
                      Gray 700
                    </Text>
                    <Text
                      className="not-italic text-bluegray_400 text-left w-[auto]"
                      variant="body7"
                    >
                      #495057
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[12px] items-start justify-start self-stretch w-[auto]">
                  <div className="bg-gray_800 h-[54px] w-[100%]"></div>
                  <div className="flex flex-col gap-[6px] items-start justify-start self-stretch w-[auto]">
                    <Text
                      className="font-medium text-black_900 text-left w-[auto]"
                      variant="body5"
                    >
                      Gray 800
                    </Text>
                    <Text
                      className="not-italic text-bluegray_400 text-left w-[auto]"
                      variant="body7"
                    >
                      #343A40
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[12px] items-start justify-start self-stretch w-[auto]">
                  <div className="bg-gray_900 h-[54px] w-[100%]"></div>
                  <div className="flex flex-col gap-[6px] items-start justify-start self-stretch w-[auto]">
                    <Text
                      className="font-medium text-black_900 text-left w-[auto]"
                      variant="body5"
                    >
                      Gray 900
                    </Text>
                    <Text
                      className="not-italic text-gray_900 text-left w-[auto]"
                      variant="body7"
                    >
                      #F8F9FA
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col gap-[12px] items-start justify-start self-stretch w-[auto]">
                  <div className="bg-black_900 h-[54px] w-[100%]"></div>
                  <div className="flex flex-col gap-[6px] items-start justify-start self-stretch w-[auto]">
                    <Text
                      className="font-medium text-black_900 text-left w-[auto]"
                      variant="body5"
                    >
                      Black
                    </Text>
                    <Text
                      className="not-italic text-gray_900 text-left w-[auto]"
                      variant="body7"
                    >
                      #000000
                    </Text>
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ColorsPage;
