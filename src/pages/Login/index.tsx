import React from "react";

import { Text, Input, Button } from "components";

const LoginPage: React.FC = () => {
  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] p-[200px] sm:px-[20px] md:px-[40px] w-[100%]">
        <div className="flex flex-col gap-[32px] items-center justify-start mb-[170px] self-stretch w-[auto]">
          <div className="bg-yellow_900 h-[40px] rounded-[50%] w-[40px]"></div>
          <div className="bg-white_A700 border-[1px] border-gray_100 border-solid flex flex-col gap-[40px] items-center justify-center p-[32px] sm:px-[20px] rounded-[24px] w-[320px]">
            <Text
              className="font-medium text-gray_900 text-left w-[auto]"
              as="h6"
              variant="h6"
            >
              Login
            </Text>
            <div className="flex flex-col gap-[20px] items-center justify-start self-stretch w-[auto]">
              <div className="flex flex-col gap-[8px] items-start justify-start w-[272px]">
                <Text
                  className="font-normal not-italic text-bluegray_700 text-left w-[auto]"
                  variant="body3"
                >
                  Email
                </Text>
                <Input
                  wrapClassName="border-[1px] border-bluegray_50 border-solid px-[14px] py-[10px] rounded-[20px] w-[100%]"
                  className="font-normal not-italic p-[0] placeholder:text-bluegray_200 text-[14px] text-bluegray_200 text-left w-[100%]"
                  name="input"
                  placeholder="Placeholder"
                ></Input>
              </div>
              <div className="flex flex-col gap-[8px] items-start justify-start w-[272px]">
                <Text
                  className="font-normal not-italic text-bluegray_700 text-left w-[auto]"
                  variant="body3"
                >
                  Password
                </Text>
                <Input
                  wrapClassName="border-[1px] border-bluegray_50 border-solid px-[14px] py-[10px] rounded-[20px] w-[100%]"
                  className="font-normal not-italic p-[0] placeholder:text-bluegray_200 text-[14px] text-bluegray_200 text-left w-[100%]"
                  name="input_One"
                  placeholder="Placeholder"
                ></Input>
              </div>
              <Text
                className="font-normal not-italic text-bluegray_200 text-left w-[auto]"
                variant="body3"
              >
                Forgot password?
              </Text>
              <Button className="bg-yellow_900 cursor-pointer font-medium px-[16px] py-[10px] rounded-[20px] text-[14px] text-center text-white_A700 w-[100%]">
                Login
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
