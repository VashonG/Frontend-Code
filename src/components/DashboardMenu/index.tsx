import React from "react";

import { Img, Text } from "components";

type DashboardMenuProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const DashboardMenu: React.FC<DashboardMenuProps> = (props) => {
  return (
    <>
      <aside className={props.className}>
        <div className="flex flex-col gap-[48px] items-start justify-start w-[100%]">
          <div className="flex items-center justify-start sm:pl-[20px] pl-[40px] pt-[32px] self-stretch w-[auto]">
            <div className="flex items-center justify-start self-stretch w-[auto]">
              <Img
                src="images/img_untitleddesign.png"
                className="h-[40px] md:h-[auto] object-cover w-[134px]"
                alt="untitleddesign"
              />
            </div>
          </div>
          <div className="flex items-start justify-start self-stretch w-[auto]">
            <div className="flex flex-col gap-[24px] items-start justify-start sm:pl-[20px] md:pl-[40px] pl-[48px] self-stretch w-[auto]">
              <div className="flex flex-row gap-[12px] items-center justify-start ml-[auto] self-stretch w-[auto]">
                <Img
                  src="images/img_home.svg"
                  className="h-[24px] w-[24px]"
                  alt="home"
                />
                <Text
                  className="font-inter font-semibold text-left text-yellow_900 w-[auto]"
                  variant="body2"
                >
                  Home
                </Text>
              </div>
              <div className="flex flex-row gap-[12px] items-center justify-start ml-[auto] self-stretch w-[auto]">
                <Img
                  src="images/img_computer.svg"
                  className="h-[24px] w-[24px]"
                  alt="computer"
                />
                <Text
                  className="font-inter font-medium text-gray_800 text-left w-[auto]"
                  variant="body2"
                >
                  Developers
                </Text>
              </div>
              <div className="flex flex-row gap-[12px] items-center justify-start self-stretch w-[auto]">
                <Img
                  src="images/img_menu.svg"
                  className="h-[24px] w-[24px]"
                  alt="menu"
                />
                <Text
                  className="font-inter font-medium text-gray_800 text-left w-[auto]"
                  variant="body2"
                >
                  Developers
                </Text>
              </div>
              <div className="flex flex-row gap-[12px] items-center justify-start ml-[auto] self-stretch w-[auto]">
                <Img
                  src="images/img_trash.svg"
                  className="h-[24px] w-[24px]"
                  alt="trash"
                />
                <Text
                  className="font-inter font-medium text-gray_800 text-left w-[auto]"
                  variant="body2"
                >
                  Developers
                </Text>
              </div>
              <div className="flex flex-row gap-[12px] items-center justify-start ml-[auto] self-stretch w-[auto]">
                <Img
                  src="images/img_heroiconsoutlinewindow.svg"
                  className="h-[24px] w-[24px]"
                  alt="heroiconsoutlin"
                />
                <Text
                  className="font-inter font-medium text-gray_800 text-left w-[auto]"
                  variant="body2"
                >
                  Developers
                </Text>
              </div>
              <div className="flex flex-row gap-[12px] items-center justify-start ml-[auto] self-stretch w-[auto]">
                <Img
                  src="images/img_user.svg"
                  className="h-[24px] w-[24px]"
                  alt="user"
                />
                <Text
                  className="font-inter font-medium text-gray_800 text-left w-[auto]"
                  variant="body2"
                >
                  Developers
                </Text>
              </div>
              <div className="flex flex-row gap-[12px] items-center justify-start ml-[auto] self-stretch w-[auto]">
                <Img
                  src="images/img_file.svg"
                  className="h-[24px] w-[24px]"
                  alt="file"
                />
                <Text
                  className="font-inter font-medium text-gray_800 text-left w-[auto]"
                  variant="body2"
                >
                  Developers
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-[14px] items-center justify-between outline outline-gray_100 sm:px-[20px] px-[40px] py-[32px] w-[100%]">
          <div className="flex flex-row gap-[14px] items-center justify-start self-stretch w-[auto]">
            <Img
              src="images/img_ellipse2.png"
              className="h-[40px] md:h-[auto] rounded-[50%] w-[40px]"
              alt="ellipseTwo"
            />
            <div className="flex flex-col gap-[2px] items-start justify-start self-stretch w-[auto]">
              <Text
                className="font-inter font-medium text-gray_900 text-left w-[auto]"
                variant="body2"
              >
                Vashon G.
              </Text>
              <Text
                className="font-inter font-normal not-italic text-bluegray_200 text-left w-[auto]"
                variant="body3"
              >
                Partner
              </Text>
            </div>
          </div>
          <Img
            src="images/img_bag.svg"
            className="h-[24px] w-[24px]"
            alt="bag"
          />
        </div>
      </aside>
    </>
  );
};

DashboardMenu.defaultProps = {};

export default DashboardMenu;
