import React from "react";

import { Img, Text, List } from "components";
import WebApplicationOneSelection from "components/WebApplicationOneSelection";
import WebApplicationOneSelection1 from "components/WebApplicationOneSelection1";

const WebApplicationOnePage: React.FC = () => {
  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] p-[100px] sm:px-[20px] md:px-[40px] w-[100%]">
        <div className="flex flex-col gap-[32px] items-center justify-start max-w-[792px] mb-[376px] w-[100%]">
          <div className="flex items-center justify-start self-stretch w-[auto]">
            <Img
              src="images/img_untitleddesign.png"
              className="h-[40px] md:h-[auto] object-cover w-[134px]"
              alt="untitleddesign"
            />
          </div>
          <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
            <div className="bg-white_A700 border-[1px] border-gray_100 border-solid flex items-start justify-center p-[32px] sm:px-[20px] rounded-[24px] w-[100%]">
              <div className="flex flex-col gap-[40px] items-start justify-start w-[100%]">
                <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                  <Text
                    className="font-medium text-gray_900 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Application Type
                  </Text>
                  <Text
                    className="font-normal not-italic text-bluegray_200 text-left w-[auto]"
                    variant="body2"
                  >
                    Before we start we have to make sure what kind of account
                    fits your needs.
                  </Text>
                </div>
                <List
                  className="sm:flex-col flex-row gap-[19px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start w-[100%]"
                  orientation="horizontal"
                >
                  <WebApplicationOneSelection
                    className="bg-white_A700 border-[1px] border-bluegray_50 border-solid flex flex-1 flex-col items-start justify-start p-[20px] rounded-[12px] w-[100%]"
                    descriptioninon="The account will be used for your personal finances"
                  />
                  <WebApplicationOneSelection
                    className="bg-white_A700 border-[1px] border-bluegray_50 border-solid flex flex-1 flex-col items-start justify-start p-[20px] rounded-[12px] w-[100%]"
                    descriptioninon="Individual in full ownership of a business"
                  />
                  <WebApplicationOneSelection1
                    className="bg-lime_50 border-[2px] border-solid border-yellow_900 flex flex-1 flex-col items-start justify-start p-[20px] rounded-[12px] w-[100%]"
                    descriptioninon="Applying as a corporation, LLC or partnership"
                  />
                </List>
                <Text
                  className="font-normal leading-[14.00px] md:max-w-[100%] max-w-[728px] not-italic text-bluegray_200 text-left"
                  variant="body6"
                ></Text>
              </div>
            </div>
            <div className="flex flex-row sm:gap-[40px] items-center justify-between px-[6px] w-[100%]">
              <Text
                className="font-normal not-italic text-bluegray_400 text-left w-[auto]"
                variant="body2"
              >
                Cancel
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

export default WebApplicationOnePage;
