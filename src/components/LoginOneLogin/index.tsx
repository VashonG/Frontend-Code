import React from "react";

import { Text, Input, Button } from "components";

type LoginOneLoginProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{
    login: string;
    email: string;
    emailTwo: string;
    forgotpassword: string;
    loginOne: string;
  }>;

const LoginOneLogin: React.FC<LoginOneLoginProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <Text
          className="font-inter font-medium text-gray_900 text-left w-[auto]"
          as="h6"
          variant="h6"
        >
          {props?.login}
        </Text>
        <div className="flex flex-col gap-[20px] items-center justify-start self-stretch w-[auto]">
          <div className="flex flex-col gap-[8px] items-start justify-start w-[272px]">
            <Text
              className="font-inter font-normal not-italic text-bluegray_700 text-left w-[auto]"
              variant="body3"
            >
              {props?.email}
            </Text>
            <Input
              wrapClassName="border-[1px] border-bluegray_50 border-solid px-[14px] py-[10px] rounded-[20px] w-[100%]"
              className="font-inter font-normal not-italic p-[0] placeholder:text-gray_900 text-[14px] text-gray_900 text-left w-[100%]"
              name="email_One"
              placeholder="vashon@kaped.io"
            ></Input>
          </div>
          <div className="flex flex-col gap-[8px] items-start justify-start w-[272px]">
            <Text
              className="font-inter font-normal not-italic text-bluegray_700 text-left w-[auto]"
              variant="body3"
            >
              {props?.emailTwo}
            </Text>
            <Input
              wrapClassName="border-[1px] border-bluegray_50 border-solid px-[14px] py-[10px] rounded-[20px] w-[100%]"
              className="font-inter font-normal not-italic p-[0] placeholder:text-bluegray_200 text-[14px] text-bluegray_200 text-left w-[100%]"
              name="input"
              placeholder="Placeholder"
            ></Input>
          </div>
          <Text
            className="font-inter font-normal not-italic text-bluegray_200 text-left w-[auto]"
            variant="body3"
          >
            {props?.forgotpassword}
          </Text>
          <Button className="bg-yellow_900 cursor-pointer font-inter font-medium px-[16px] py-[10px] rounded-[20px] text-[14px] text-center text-white_A700 w-[100%]">
            {props?.loginOne}
          </Button>
        </div>
      </div>
    </>
  );
};

LoginOneLogin.defaultProps = {
  login: "Login",
  email: "Email",
  emailTwo: "Password",
  forgotpassword: "Forgot password?",
  loginOne: "Login",
};

export default LoginOneLogin;
