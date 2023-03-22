import React from "react";

import { Img } from "components";
import LoginOneLogin from "components/LoginOneLogin";

const LoginOnePage: React.FC = () => {
  return (
    <>
      <div className="bg-white_A700 flex font-inter items-center justify-start mx-[auto] p-[200px] sm:px-[20px] md:px-[40px] w-[100%]">
        <div className="flex flex-col gap-[32px] items-center justify-start mb-[170px] self-stretch w-[auto]">
          <div className="flex items-center justify-start self-stretch w-[auto]">
            <Img
              src="images/img_untitleddesign.png"
              className="h-[40px] md:h-[auto] object-cover w-[134px]"
              alt="untitleddesign"
            />
          </div>
          <LoginOneLogin
            className="bg-white_A700 border-[1px] border-gray_100 border-solid flex flex-col items-center justify-center p-[32px] sm:px-[20px] rounded-[24px] sm:w-[100%] w-[320px]"
            login="Login"
            emailTwo="Password"
            forgotpassword="Forgot password?"
            loginOne="Login"
          />
        </div>
      </div>
    </>
  );
};

export default LoginOnePage;
