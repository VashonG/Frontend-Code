import React from "react";

import { Img, Text } from "components";

type MediaMediacradProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{
    rectangleeight: string;
    price: string;
    cosyapartmentinOne: string;
    newyorkusa: string;
  }>;

const MediaMediacrad: React.FC<MediaMediacradProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute bg-white_A700 border-[1px] border-gray_100 border-solid flex flex-1 h-[100%] inset-[0] items-center justify-start m-[auto] rounded-[24px] w-[100%]">
          <Img
            src={props?.rectangleeight}
            className="h-[142px] md:h-[auto] object-cover rounded-bl-[0] rounded-br-[0] rounded-tl-[24px] rounded-tr-[24px] w-[100%]"
            alt="rectangleEight"
          />
        </div>
        <div className="absolute bottom-[0] flex flex-col gap-[8px] inset-x-[0] items-start justify-end mx-[auto] p-[16px] md:w-[100%] w-[262px]">
          <Text
            className="font-inter font-medium text-left text-yellow_900 w-[auto]"
            variant="body2"
          >
            {props?.price}
          </Text>
          <div className="flex flex-col gap-[4px] items-start justify-start self-stretch w-[auto]">
            <Text
              className="font-inter font-medium text-gray_900 text-left w-[auto]"
              variant="body2"
            >
              {props?.cosyapartmentinOne}
            </Text>
            <div className="flex items-center justify-start self-stretch w-[auto]">
              <Text
                className="font-inter font-normal not-italic text-bluegray_400 text-left w-[auto]"
                variant="body3"
              >
                {props?.newyorkusa}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

MediaMediacrad.defaultProps = {
  rectangleeight: "images/img_rectangle8.png",
  price: "$1,200,000",
  cosyapartmentinOne: "Cosy apartment in town",
  newyorkusa: "New York, USA",
};

export default MediaMediacrad;
