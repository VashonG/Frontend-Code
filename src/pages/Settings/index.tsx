import React from "react";

import DashboardMenu from "components/DashboardMenu";
import PortofolioTabs from "components/PortofolioTabs";
import { Text, Line, Button } from "components";
import WebApplicationTwoInput from "components/WebApplicationTwoInput";
import DashboardInput from "components/DashboardInput";

const SettingsPage: React.FC = () => {
  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] w-[100%]">
        <div className="flex md:flex-col flex-row gap-[32px] items-start justify-between max-w-[1408px] mx-[auto] md:px-[20px] w-[100%]">
          <DashboardMenu className="bg-white_A700 flex flex-col h-[1024px] md:hidden justify-start outline outline-gray_100 w-[280px]" />
          <div className="flex flex-1 flex-col gap-[20px] items-start justify-start md:mt-[0] mt-[32px] w-[100%]">
            <PortofolioTabs
              className="flex flex-row items-start justify-start self-stretch sm:w-[100%] w-[auto]"
              label="Password"
              label1="Password"
              labelOne="Password"
              labelTwo="Password"
            />
            <div className="bg-white_A700 border-[1px] border-gray_100 border-solid flex flex-col items-start justify-start rounded-[24px] self-stretch md:w-[100%] w-[auto]">
              <div className="flex flex-col gap-[2px] items-start justify-start p-[32px] sm:px-[20px] self-stretch w-[auto]">
                <Text
                  className="font-medium text-gray_900 text-left w-[auto]"
                  variant="body1"
                >
                  Account details
                </Text>
                <Text
                  className="font-normal not-italic text-bluegray_200 text-left w-[auto]"
                  variant="body3"
                >
                  Update your account details
                </Text>
              </div>
              <Line className="bg-gray_100 h-[1px] w-[100%]" />
              <div className="flex md:flex-col flex-row gap-[188px] md:gap-[40px] items-start justify-start p-[32px] sm:px-[20px] w-[100%]">
                <div className="flex flex-1 flex-col gap-[2px] items-start justify-start w-[100%]">
                  <Text
                    className="font-medium text-bluegray_700 text-left w-[auto]"
                    variant="body2"
                  >
                    Profile
                  </Text>
                  <Text
                    className="font-normal not-italic text-bluegray_200 text-left w-[auto]"
                    variant="body3"
                  >
                    Update your name and email
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-[24px] items-start justify-start max-w-[667px] w-[100%]">
                  <WebApplicationTwoInput
                    className="flex flex-col items-start justify-start w-[100%]"
                    emailEight="Name"
                  />
                  <WebApplicationTwoInput
                    className="flex flex-col items-start justify-start w-[100%]"
                    emailEight="Email"
                  />
                </div>
              </div>
              <Line className="bg-gray_100 h-[1px] w-[100%]" />
              <div className="flex md:flex-col flex-row gap-[188px] md:gap-[40px] items-start justify-start p-[32px] sm:px-[20px] w-[100%]">
                <div className="flex flex-1 flex-col gap-[2px] items-start justify-start w-[100%]">
                  <Text
                    className="font-medium text-bluegray_700 text-left w-[auto]"
                    variant="body2"
                  >
                    Location
                  </Text>
                  <Text
                    className="font-normal not-italic text-bluegray_200 text-left w-[auto]"
                    variant="body3"
                  >
                    Update your Location
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-[24px] items-start justify-start max-w-[667px] w-[100%]">
                  <WebApplicationTwoInput
                    className="flex flex-col items-start justify-start w-[100%]"
                    emailEight="Country"
                  />
                  <WebApplicationTwoInput
                    className="flex flex-col items-start justify-start w-[100%]"
                    emailEight="City"
                  />
                </div>
              </div>
              <Line className="bg-gray_100 h-[1px] w-[100%]" />
              <div className="flex md:flex-col flex-row gap-[188px] md:gap-[40px] items-start justify-start p-[32px] sm:px-[20px] w-[100%]">
                <div className="flex flex-1 flex-col gap-[2px] items-start justify-start w-[100%]">
                  <Text
                    className="font-medium text-bluegray_700 text-left w-[auto]"
                    variant="body2"
                  >
                    Privacy
                  </Text>
                  <Text
                    className="font-normal not-italic text-bluegray_200 text-left w-[auto]"
                    variant="body3"
                  >
                    Update your visibility preference
                  </Text>
                </div>
                <DashboardInput
                  className="flex flex-1 flex-col items-start justify-start max-w-[667px] w-[100%]"
                  emailFive="Visibility"
                  thisisahelper="Only you can access your data"
                />
              </div>
              <div className="flex flex-row gap-[16px] items-center justify-end pb-[32px] sm:px-[20px] px-[32px] w-[100%]">
                <div className="flex items-center justify-center px-[16px] py-[10px] rounded-[8px] self-stretch w-[auto]">
                  <Text
                    className="font-medium text-gray_900 text-left w-[auto]"
                    variant="body2"
                  >
                    Cancel
                  </Text>
                </div>
                <Button className="bg-yellow_900 cursor-pointer font-medium min-w-[82px] px-[16px] py-[10px] rounded-[20px] text-[14px] text-center text-white_A700 w-[auto]">
                  Update
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsPage;
