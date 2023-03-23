import React from "react";

import { Line, Img, Text } from "components";

type PortofolioDetailDetailsCreditcardProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{ neerajchinwan: string; language: string; zipcode: string }>;

const PortofolioDetailDetailsCreditcard: React.FC<
  PortofolioDetailDetailsCreditcardProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-start justify-start my-[8px] md:w-[100%] w-[92%]">
          <div className="flex flex-row items-start justify-between w-[100%]">
            <div className="bg-orange_50 flex items-center justify-start mt-[39px] rounded-[8px] w-[18%]">
              <div className="flex flex-row items-end justify-evenly w-[100%]">
                <div className="flex flex-col gap-[12px] h-[16px] items-center justify-start my-[13px] w-[16px]">
                  <Line className="bg-white_A700 h-[2px] rotate-[180deg] w-[100%]" />
                  <Line className="bg-white_A700 h-[2px] rotate-[180deg] w-[100%]" />
                </div>
                <Line className="bg-white_A700 h-[43px] w-[2px]" />
                <div className="h-[29px] md:h-[43px] mt-[14px] relative w-[31%]">
                  <Line className="absolute bg-white_A700 h-[2px] inset-[0] justify-center m-[auto] rotate-[180deg] w-[100%]" />
                  <Img
                    src="images/img_mobile.svg"
                    className="absolute h-[29px] inset-[0] justify-center m-[auto] w-[auto]"
                    alt="mobile"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-start self-stretch w-[auto]">
              <Img
                src="images/img_untitleddesign.png"
                className="h-[40px] md:h-[auto] object-cover w-[134px]"
                alt="untitleddesign"
              />
            </div>
          </div>
          <Text
            className="font-jetbrainsmono font-normal mt-[16px] not-italic text-left text-lime_800 w-[auto]"
            variant="body1"
          >
            {props?.neerajchinwan}
          </Text>
          <div className="flex flex-row gap-[12px] items-start justify-start mt-[2px] self-stretch w-[auto]">
            {!!props?.language ? (
              <Text
                className="font-jetbrainsmono not-italic text-deep_orange_100 text-left tracking-[-0.20px] w-[auto]"
                as="h1"
                variant="h1"
              >
                {props?.language}
              </Text>
            ) : null}
            <Text
              className="font-jetbrainsmono font-normal not-italic text-center text-lime_800 w-[auto]"
              variant="body1"
            >
              {props?.zipcode}
            </Text>
          </div>
          <Img
            src="images/img_visainclogo1.svg"
            className="h-[28px] md:ml-[0] ml-[204px] mt-[2px] w-[auto]"
            alt="visainclogoOne"
          />
        </div>
      </div>
    </>
  );
};

PortofolioDetailDetailsCreditcard.defaultProps = {
  neerajchinwan: "Neeraj Chinwan",
  zipcode: "9303",
};

export default PortofolioDetailDetailsCreditcard;
