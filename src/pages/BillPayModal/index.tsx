import React from "react";

import { List, Text, Img, Button } from "components";

const BillPayModalPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray_902 flex font-inter items-center justify-center mx-[auto] p-[80px] sm:px-[20px] md:px-[40px] w-[100%]">
        <List
          className="sm:flex-col flex-row gap-[36px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-start max-w-[1280px] mb-[238px] mt-[235px] mx-[auto] self-stretch w-[100%]"
          orientation="horizontal"
        >
          <div className="flex flex-col gap-[20px] items-end justify-start w-[293px]">
            <div className="bg-white_A700 border-[1px] border-gray_100 border-solid flex flex-col gap-[20px] items-center justify-center p-[32px] sm:px-[20px] rounded-[24px] w-[100%]">
              <div className="flex items-start justify-between w-[100%]">
                <div className="flex flex-col gap-[4px] items-center justify-start self-stretch w-[auto]">
                  <Text
                    className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                    variant="body2"
                  >
                    Bill Due
                  </Text>
                  <Text
                    className="font-medium text-gray_900 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  ></Text>
                </div>
              </div>
              <div className="flex items-start justify-start w-[100%]">
                <div className="flex flex-col gap-[-1px] items-start justify-start w-[100%]">
                  <div className="border-[1px] border-bluegray_50 border-solid flex items-center justify-start px-[14px] py-[10px] rounded-bl-[0] rounded-br-[0] rounded-tl-[20px] rounded-tr-[20px] w-[100%]">
                    <Img
                      src="images/img__10x114.png"
                      className="h-[10px] md:h-[auto] object-cover w-[114px]"
                      alt="Eight"
                    />
                  </div>
                  <div className="flex flex-row gap-[-1px] items-start justify-start w-[100%]">
                    <Text
                      className="border-[1px] border-bluegray_50 border-solid flex-1 font-normal not-italic px-[14px] py-[10px] rounded-bl-[20px] rounded-br-[0] rounded-tl-[0] rounded-tr-[0] text-bluegray_200 text-left w-[100%]"
                      variant="body2"
                    >
                      MM / YY
                    </Text>
                    <Text
                      className="border-[1px] border-bluegray_50 border-solid flex-1 font-normal not-italic px-[14px] py-[10px] rounded-bl-[0] rounded-br-[20px] rounded-tl-[0] rounded-tr-[0] text-bluegray_200 text-left w-[100%]"
                      variant="body2"
                    >
                      CVC
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[12px] items-center justify-start w-[100%]">
                <Button className="bg-deep_orange_100 cursor-pointer font-medium px-[16px] py-[10px] rounded-[20px] text-[14px] text-center text-lime_50 w-[100%]">
                  Pay Bill
                </Button>
                <Text
                  className="font-normal not-italic text-bluegray_200 text-left w-[auto]"
                  variant="body6"
                ></Text>
              </div>
            </div>
            <Button className="bg-yellow_900 cursor-pointer font-medium min-w-[73px] sm:px-[20px] px-[24px] py-[10px] rounded-[20px] text-[14px] text-center text-white_A700 w-[auto]">
              Pay
            </Button>
          </div>
          <div className="flex flex-col gap-[20px] items-end justify-start w-[293px]">
            <div className="bg-white_A700 border-[1px] border-gray_100 border-solid flex flex-col gap-[20px] items-center justify-center p-[32px] sm:px-[20px] rounded-[24px] w-[100%]">
              <div className="flex items-start justify-between w-[100%]">
                <div className="flex flex-col gap-[4px] items-center justify-start self-stretch w-[auto]">
                  <Text
                    className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                    variant="body2"
                  >
                    Bill Due
                  </Text>
                  <Text
                    className="font-medium text-gray_900 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  ></Text>
                </div>
              </div>
              <div className="flex items-start justify-start w-[100%]">
                <div className="flex flex-col gap-[-1px] items-start justify-start w-[100%]">
                  <div className="border-[1px] border-bluegray_50 border-solid flex flex-row gap-[18px] items-center justify-start px-[14px] py-[10px] rounded-bl-[0] rounded-br-[0] rounded-tl-[20px] rounded-tr-[20px] w-[100%]">
                    <Img
                      src="images/img__10x114.png"
                      className="h-[10px] md:h-[auto] object-cover w-[114px]"
                      alt="Nine"
                    />
                    <Text
                      className="font-normal not-italic text-gray_900 text-left w-[auto]"
                      variant="body2"
                    >
                      6723
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[-1px] items-start justify-start w-[100%]">
                    <Text
                      className="border-[1px] border-bluegray_50 border-solid flex-1 font-normal not-italic px-[14px] py-[10px] rounded-bl-[20px] rounded-br-[0] rounded-tl-[0] rounded-tr-[0] text-gray_900 text-left w-[100%]"
                      variant="body2"
                    >
                      03 / 23
                    </Text>
                    <Text
                      className="border-[1px] border-bluegray_50 border-solid flex-1 font-normal not-italic px-[14px] py-[10px] rounded-bl-[0] rounded-br-[20px] rounded-tl-[0] rounded-tr-[0] text-gray_900 text-left w-[100%]"
                      variant="body2"
                    >
                      123
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[12px] items-center justify-start w-[100%]">
                <div className="bg-yellow_900 flex items-center justify-center px-[16px] py-[8px] rounded-[20px] w-[100%]">
                  <Img
                    src="images/img_heroiconsoutli.svg"
                    className="h-[24px] w-[24px]"
                    alt="heroiconsoutli"
                  />
                </div>
                <Text
                  className="font-normal not-italic text-bluegray_200 text-left w-[auto]"
                  variant="body6"
                ></Text>
              </div>
            </div>
            <Button className="bg-yellow_900 cursor-pointer font-medium min-w-[73px] sm:px-[20px] px-[24px] py-[10px] rounded-[20px] text-[14px] text-center text-white_A700 w-[auto]">
              Pay
            </Button>
          </div>
          <div className="flex flex-col gap-[20px] items-end justify-start w-[293px]">
            <div className="bg-white_A700 border-[1px] border-gray_100 border-solid flex flex-col gap-[20px] items-center justify-center p-[32px] sm:px-[20px] rounded-[24px] w-[100%]">
              <div className="flex items-start justify-between w-[100%]">
                <div className="flex flex-col gap-[4px] items-center justify-start self-stretch w-[auto]">
                  <Text
                    className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                    variant="body2"
                  >
                    Bill Due
                  </Text>
                  <Text
                    className="font-medium text-gray_900 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  ></Text>
                </div>
              </div>
              <div className="flex flex-col gap-[8px] items-start justify-start self-stretch w-[auto]">
                <div className="border-[1px] border-red_A200 border-solid flex flex-col gap-[-1px] items-start justify-start rounded-[20px] w-[229px]">
                  <div className="border-[1px] border-bluegray_50 border-solid flex flex-row gap-[18px] items-center justify-start px-[14px] py-[10px] rounded-bl-[0] rounded-br-[0] rounded-tl-[20px] rounded-tr-[20px] w-[100%]">
                    <Img
                      src="images/img__10x114.png"
                      className="h-[10px] md:h-[auto] object-cover w-[114px]"
                      alt="Ten"
                    />
                    <Text
                      className="font-normal not-italic text-gray_900 text-left w-[auto]"
                      variant="body2"
                    >
                      6723
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[-1px] items-start justify-start w-[100%]">
                    <Text
                      className="border-[1px] border-bluegray_50 border-solid flex-1 font-normal not-italic px-[14px] py-[10px] rounded-bl-[20px] rounded-br-[0] rounded-tl-[0] rounded-tr-[0] text-gray_900 text-left w-[100%]"
                      variant="body2"
                    >
                      03 / 23
                    </Text>
                    <Text
                      className="border-[1px] border-bluegray_50 border-solid flex-1 font-normal not-italic px-[14px] py-[10px] rounded-bl-[0] rounded-br-[20px] rounded-tl-[0] rounded-tr-[0] text-gray_900 text-left w-[100%]"
                      variant="body2"
                    >
                      123
                    </Text>
                  </div>
                </div>
                <Text
                  className="font-normal not-italic text-center text-red_A200 w-[auto]"
                  variant="body6"
                >
                  Your card number is incorrect.
                </Text>
              </div>
              <div className="flex flex-col gap-[12px] items-center justify-start w-[100%]">
                <Button className="bg-deep_orange_100 cursor-pointer font-medium px-[16px] py-[10px] rounded-[20px] text-[14px] text-center text-lime_50 w-[100%]">
                  Pay Bill
                </Button>
                <Text
                  className="font-normal not-italic text-bluegray_200 text-left w-[auto]"
                  variant="body6"
                ></Text>
              </div>
            </div>
            <Button className="bg-yellow_900 cursor-pointer font-medium min-w-[73px] sm:px-[20px] px-[24px] py-[10px] rounded-[20px] text-[14px] text-center text-white_A700 w-[auto]">
              Pay
            </Button>
          </div>
          <div className="flex flex-col gap-[20px] items-end justify-start w-[293px]">
            <div className="bg-white_A700 border-[1px] border-gray_100 border-solid flex flex-col gap-[20px] items-center justify-center p-[32px] sm:px-[20px] rounded-[24px] w-[100%]">
              <div className="flex items-start justify-between w-[100%]">
                <div className="flex flex-col gap-[4px] items-center justify-start self-stretch w-[auto]">
                  <Text
                    className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                    variant="body2"
                  >
                    Bill Due
                  </Text>
                  <Text
                    className="font-medium text-gray_900 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  ></Text>
                </div>
              </div>
              <div className="flex items-start justify-start w-[100%]">
                <div className="flex flex-col gap-[-1px] items-start justify-start w-[100%]">
                  <div className="border-[1px] border-bluegray_50 border-solid flex flex-row gap-[18px] items-center justify-start px-[14px] py-[10px] rounded-bl-[0] rounded-br-[0] rounded-tl-[20px] rounded-tr-[20px] w-[100%]">
                    <Img
                      src="images/img__10x114.png"
                      className="h-[10px] md:h-[auto] object-cover w-[114px]"
                      alt="Eleven"
                    />
                    <Text
                      className="font-normal not-italic text-gray_900 text-left w-[auto]"
                      variant="body2"
                    >
                      6724
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[-1px] items-start justify-start w-[100%]">
                    <Text
                      className="border-[1px] border-bluegray_50 border-solid flex-1 font-normal not-italic px-[14px] py-[10px] rounded-bl-[20px] rounded-br-[0] rounded-tl-[0] rounded-tr-[0] text-gray_900 text-left w-[100%]"
                      variant="body2"
                    >
                      03 / 23
                    </Text>
                    <Text
                      className="border-[1px] border-bluegray_50 border-solid flex-1 font-normal not-italic px-[14px] py-[10px] rounded-bl-[0] rounded-br-[20px] rounded-tl-[0] rounded-tr-[0] text-gray_900 text-left w-[100%]"
                      variant="body2"
                    >
                      123
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[12px] items-center justify-start w-[100%]">
                <Button className="bg-yellow_900 cursor-pointer font-medium px-[16px] py-[10px] rounded-[20px] text-[14px] text-center text-white_A700 w-[100%]">
                  Pay Bill
                </Button>
                <Text
                  className="font-normal not-italic text-bluegray_200 text-left w-[auto]"
                  variant="body6"
                ></Text>
              </div>
            </div>
            <Button className="bg-yellow_900 cursor-pointer font-medium min-w-[73px] sm:px-[20px] px-[24px] py-[10px] rounded-[20px] text-[14px] text-center text-white_A700 w-[auto]">
              Pay
            </Button>
          </div>
        </List>
      </div>
    </>
  );
};

export default BillPayModalPage;
