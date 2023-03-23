import React from "react";

import { Text, List, Img } from "components";

type DashboardTableProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{
    labelTwo: string;
    labelThree: string;
    labelFour: string;
    labelFive: string;
    labelSix: string;
    ellipsethree: string;
    label: string;
    secondlabel: string;
    labelOne: string;
    price: string;
    priceOne: string;
    labelTwo1: string;
    ellipsethree1: string;
    label1: string;
    email: string;
    labelOne1: string;
    price1: string;
    priceOne1: string;
    labelTwo2: string;
    ellipsethree2: string;
    label2: string;
    email1: string;
    labelOne2: string;
    price2: string;
    priceOne2: string;
    labelTwo3: string;
    ellipsethree3: string;
    label3: string;
    email2: string;
    labelOne3: string;
    price3: string;
    priceOne3: string;
    ellipseone: string;
    labelTwo4: string;
    ellipsethree4: string;
    label4: string;
    email3: string;
    labelOne4: string;
    price4: string;
    priceOne4: string;
    ellipseone1: string;
    labelTwo5: string;
    ellipsethree5: string;
    label5: string;
    email4: string;
    labelOne5: string;
    price5: string;
    priceOne5: string;
    labelTwo6: string;
    ellipsethree6: string;
    label6: string;
    email5: string;
    labelOne6: string;
    price6: string;
    priceOne6: string;
    ellipseone2: string;
    labelTwo7: string;
    ellipsethree7: string;
    label7: string;
    email6: string;
    labelOne7: string;
    price7: string;
    priceOne7: string;
    ellipseone3: string;
    labelTwo8: string;
    ellipsethree8: string;
    language: string;
    email7: string;
    label8: string;
    price8: string;
    priceOne8: string;
    labelOne8: string;
  }>;

const DashboardTable: React.FC<DashboardTableProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="bg-white_A700 flex md:flex-col flex-row md:gap-[40px] items-center justify-between outline outline-[0.5px] outline-gray_100 sm:px-[20px] px-[24px] py-[16px] rounded-bl-[0] rounded-br-[0] rounded-tl-[24px] rounded-tr-[24px] w-[100%]">
          <div className="flex sm:flex-1 flex-row gap-[96px] items-center justify-start self-stretch sm:w-[100%] w-[auto]">
            <div className="flex items-center justify-start w-[200px]">
              <Text
                className="font-inter font-normal not-italic text-bluegray_400 text-left w-[auto]"
                variant="body2"
              >
                {props?.labelSix}
              </Text>
            </div>
            <div className="flex items-center justify-start w-[80px]">
              <Text
                className="font-inter font-normal not-italic text-bluegray_400 text-left w-[auto]"
                variant="body2"
              >
                {props?.labelSix}
              </Text>
            </div>
          </div>
          <div className="flex sm:flex-1 flex-row sm:gap-[40px] gap-[96px] items-center justify-end pr-[100px] sm:pr-[20px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
            <div className="flex items-center justify-end w-[80px]">
              {!!props?.labelFive ? (
                <Text
                  className="font-inter font-normal not-italic text-bluegray_400 text-right w-[auto]"
                  variant="body2"
                >
                  {props?.labelFive}
                </Text>
              ) : null}
            </div>
            <div className="flex items-center justify-end w-[80px]">
              {!!props?.labelFive ? (
                <Text
                  className="font-inter font-normal not-italic text-bluegray_400 text-right w-[auto]"
                  variant="body2"
                >
                  {props?.labelFive}
                </Text>
              ) : null}
            </div>
            <div className="flex items-center justify-start w-[80px]">
              <Text
                className="font-inter font-normal not-italic text-bluegray_400 text-left w-[auto]"
                variant="body2"
              >
                {props?.labelSix}
              </Text>
            </div>
          </div>
        </div>
        <List
          className="flex-col gap-[1px] grid items-center w-[100%]"
          orientation="vertical"
        >
          <div className="bg-white_A700 flex flex-1 md:flex-col flex-row md:gap-[40px] items-center justify-between outline outline-[0.5px] outline-gray_100 p-[24px] sm:px-[20px] w-[100%]">
            <div className="flex sm:flex-1 flex-row gap-[96px] items-center justify-start self-stretch sm:w-[100%] w-[auto]">
              <div className="flex flex-row gap-[16px] items-center justify-start w-[200px]">
                {!!props?.ellipsethree8 ? (
                  <Img
                    src={props?.ellipsethree8}
                    className="h-[40px] md:h-[auto] rounded-[50%] w-[40px]"
                    alt="ellipseThree"
                  />
                ) : null}
                <div className="flex flex-col gap-[4px] items-start justify-start self-stretch w-[auto]">
                  {!!props?.language ? (
                    <Text
                      className="font-inter font-medium text-gray_900 text-left w-[auto]"
                      variant="body2"
                    >
                      {props?.language}
                    </Text>
                  ) : null}
                  {!!props?.email7 ? (
                    <Text
                      className="font-inter font-normal not-italic text-bluegray_400 text-left w-[auto]"
                      variant="body3"
                    >
                      {props?.email7}
                    </Text>
                  ) : null}
                </div>
              </div>
              <div className="flex items-center justify-start w-[80px]">
                <Text
                  className="font-inter font-normal not-italic text-gray_900 text-left w-[auto]"
                  variant="body2"
                >
                  {props?.label8}
                </Text>
              </div>
            </div>
            <div className="flex sm:flex-1 flex-row sm:gap-[40px] gap-[96px] items-center justify-start pr-[100px] sm:pr-[20px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
              <div className="flex items-center justify-end w-[80px]">
                {!!props?.priceOne8 ? (
                  <Text
                    className="font-inter font-medium text-gray_900 text-right w-[auto]"
                    variant="body2"
                  >
                    {props?.priceOne8}
                  </Text>
                ) : null}
              </div>
              <div className="flex items-center justify-end w-[80px]">
                {!!props?.priceOne8 ? (
                  <Text
                    className="font-inter font-medium text-gray_900 text-right w-[auto]"
                    variant="body2"
                  >
                    {props?.priceOne8}
                  </Text>
                ) : null}
              </div>
              <div className="flex items-start justify-start w-[80px]">
                <div className="bg-green_50 flex items-start justify-start px-[8px] py-[3px] rounded-[11px] self-stretch w-[auto]">
                  <div className="flex flex-row gap-[8px] items-center justify-start self-stretch w-[auto]">
                    <div className="bg-green_300 h-[6px] rounded-[50%] w-[6px]"></div>
                    <Text
                      className="font-inter font-medium text-green_500 text-left w-[auto]"
                      variant="body3"
                    >
                      {props?.labelOne8}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white_A700 flex flex-1 md:flex-col flex-row md:gap-[40px] items-center justify-between outline outline-[0.5px] outline-gray_100 p-[24px] sm:px-[20px] w-[100%]">
            <div className="flex sm:flex-1 flex-row gap-[96px] items-center justify-start self-stretch sm:w-[100%] w-[auto]">
              <div className="flex flex-row gap-[16px] items-center justify-start w-[205px]">
                {!!props?.ellipsethree8 ? (
                  <Img
                    src={props?.ellipsethree8}
                    className="h-[40px] md:h-[auto] rounded-[50%] w-[40px]"
                    alt="ellipseThree"
                  />
                ) : null}
                <div className="flex flex-col gap-[4px] items-start justify-start self-stretch w-[auto]">
                  {!!props?.language ? (
                    <Text
                      className="font-inter font-medium text-gray_900 text-left w-[auto]"
                      variant="body2"
                    >
                      {props?.language}
                    </Text>
                  ) : null}
                  {!!props?.email7 ? (
                    <Text
                      className="font-inter font-normal not-italic text-bluegray_400 text-left w-[auto]"
                      variant="body3"
                    >
                      {props?.email7}
                    </Text>
                  ) : null}
                </div>
              </div>
              <div className="flex items-center justify-start w-[80px]">
                <Text
                  className="font-inter font-normal not-italic text-gray_900 text-left w-[auto]"
                  variant="body2"
                >
                  {props?.label8}
                </Text>
              </div>
            </div>
            <div className="flex sm:flex-1 flex-row sm:gap-[40px] gap-[96px] items-center justify-start pr-[100px] sm:pr-[20px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
              <div className="flex items-center justify-end w-[80px]">
                {!!props?.priceOne8 ? (
                  <Text
                    className="font-inter font-medium text-gray_900 text-right w-[auto]"
                    variant="body2"
                  >
                    {props?.priceOne8}
                  </Text>
                ) : null}
              </div>
              <div className="flex items-center justify-end w-[80px]">
                {!!props?.priceOne8 ? (
                  <Text
                    className="font-inter font-medium text-gray_900 text-right w-[auto]"
                    variant="body2"
                  >
                    {props?.priceOne8}
                  </Text>
                ) : null}
              </div>
              <div className="flex items-start justify-start w-[80px]">
                <div className="bg-green_50 flex items-start justify-start px-[8px] py-[3px] rounded-[11px] self-stretch w-[auto]">
                  <div className="flex flex-row gap-[8px] items-center justify-start self-stretch w-[auto]">
                    <div className="bg-green_300 h-[6px] rounded-[50%] w-[6px]"></div>
                    <Text
                      className="font-inter font-medium text-green_500 text-left w-[auto]"
                      variant="body3"
                    >
                      {props?.labelOne8}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray_51 flex flex-1 md:flex-col flex-row md:gap-[40px] items-center justify-between outline outline-[0.5px] outline-gray_100 p-[24px] sm:px-[20px] w-[100%]">
            <div className="flex sm:flex-1 flex-row gap-[96px] items-center justify-start self-stretch sm:w-[100%] w-[auto]">
              <div className="flex relative w-[55%]">
                <div className="flex flex-row gap-[16px] items-center justify-start ml-[undefinedpx] mr-[auto] my-[auto] w-[200px] z-[1]">
                  {!!props?.ellipsethree8 ? (
                    <Img
                      src={props?.ellipsethree8}
                      className="h-[40px] md:h-[auto] rounded-[50%] w-[40px]"
                      alt="ellipseThree"
                    />
                  ) : null}
                  <div className="flex flex-col gap-[4px] items-start justify-start self-stretch w-[auto]">
                    {!!props?.language ? (
                      <Text
                        className="font-inter font-medium text-gray_900 text-left w-[auto]"
                        variant="body2"
                      >
                        {props?.language}
                      </Text>
                    ) : null}
                    {!!props?.email7 ? (
                      <Text
                        className="font-inter font-normal not-italic text-bluegray_400 text-left w-[auto]"
                        variant="body3"
                      >
                        {props?.email7}
                      </Text>
                    ) : null}
                  </div>
                </div>
                <Img
                  src="images/img_lightbulb.svg"
                  className="h-[16px] ml-[-6px] my-[auto] w-[12px] z-[1]"
                  alt="lightbulb"
                />
              </div>
              <div className="flex items-center justify-start w-[80px]">
                <Text
                  className="font-inter font-normal not-italic text-gray_900 text-left w-[auto]"
                  variant="body2"
                >
                  {props?.label8}
                </Text>
              </div>
            </div>
            <div className="flex sm:flex-1 items-start justify-start self-stretch sm:w-[100%] w-[auto]">
              <div className="flex items-start justify-start self-stretch w-[auto]">
                <div className="flex flex-row gap-[96px] items-center justify-start self-stretch w-[auto]">
                  <div className="flex items-center justify-end w-[80px]">
                    {!!props?.priceOne8 ? (
                      <Text
                        className="font-inter font-medium text-gray_900 text-right w-[auto]"
                        variant="body2"
                      >
                        {props?.priceOne8}
                      </Text>
                    ) : null}
                  </div>
                  <div className="flex items-center justify-end w-[80px]">
                    {!!props?.priceOne8 ? (
                      <Text
                        className="font-inter font-medium text-gray_900 text-right w-[auto]"
                        variant="body2"
                      >
                        {props?.priceOne8}
                      </Text>
                    ) : null}
                  </div>
                  <div className="flex items-start justify-start w-[80px]">
                    <div className="bg-green_50 flex items-start justify-start px-[8px] py-[3px] rounded-[11px] self-stretch w-[auto]">
                      <div className="flex flex-row gap-[8px] items-center justify-start self-stretch w-[auto]">
                        <div className="bg-green_300 h-[6px] rounded-[50%] w-[6px]"></div>
                        <Text
                          className="font-inter font-medium text-green_500 text-left w-[auto]"
                          variant="body3"
                        >
                          {props?.labelOne8}
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white_A700 flex flex-1 md:flex-col flex-row md:gap-[40px] items-center justify-between outline outline-[0.5px] outline-gray_100 p-[24px] sm:px-[20px] w-[100%]">
            <div className="flex sm:flex-1 flex-row gap-[96px] items-center justify-start self-stretch sm:w-[100%] w-[auto]">
              <div className="flex flex-row gap-[16px] items-center justify-start w-[200px]">
                {!!props?.ellipsethree8 ? (
                  <Img
                    src={props?.ellipsethree8}
                    className="h-[40px] md:h-[auto] rounded-[50%] w-[40px]"
                    alt="ellipseThree"
                  />
                ) : null}
                <div className="flex flex-col gap-[4px] items-start justify-start self-stretch w-[auto]">
                  {!!props?.language ? (
                    <Text
                      className="font-inter font-medium text-gray_900 text-left w-[auto]"
                      variant="body2"
                    >
                      {props?.language}
                    </Text>
                  ) : null}
                  {!!props?.email7 ? (
                    <Text
                      className="font-inter font-normal not-italic text-bluegray_400 text-left w-[auto]"
                      variant="body3"
                    >
                      {props?.email7}
                    </Text>
                  ) : null}
                </div>
              </div>
              <div className="flex items-center justify-start w-[80px]">
                <Text
                  className="font-inter font-normal not-italic text-gray_900 text-left w-[auto]"
                  variant="body2"
                >
                  {props?.label8}
                </Text>
              </div>
            </div>
            <div className="flex sm:flex-1 flex-row sm:gap-[40px] gap-[96px] items-center justify-start pr-[100px] sm:pr-[20px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
              <div className="flex items-center justify-end w-[80px]">
                {!!props?.priceOne8 ? (
                  <Text
                    className="font-inter font-medium text-gray_900 text-right w-[auto]"
                    variant="body2"
                  >
                    {props?.priceOne8}
                  </Text>
                ) : null}
              </div>
              <div className="flex items-center justify-end w-[80px]">
                {!!props?.priceOne8 ? (
                  <Text
                    className="font-inter font-medium text-gray_900 text-right w-[auto]"
                    variant="body2"
                  >
                    {props?.priceOne8}
                  </Text>
                ) : null}
              </div>
              <div className="flex items-start justify-start w-[80px]">
                <div className="bg-red-100 flex items-start justify-start px-[8px] py-[3px] rounded-[11px] self-stretch w-[auto]">
                  <div className="flex flex-row gap-[8px] items-center justify-start self-stretch w-[auto]">
                    {!!props?.ellipseone2 ? (
                      <div className="bg-red_300 h-[6px] rounded-[50%] w-[6px]"></div>
                    ) : null}
                    {!!props?.labelTwo7 ? (
                      <Text
                        className="font-inter font-medium text-left text-red_500 w-[auto]"
                        variant="body3"
                      >
                        {props?.labelTwo7}
                      </Text>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white_A700 flex flex-1 md:flex-col flex-row md:gap-[40px] items-center justify-between outline outline-[0.5px] outline-gray_100 p-[24px] sm:px-[20px] w-[100%]">
            <div className="flex sm:flex-1 flex-row gap-[96px] items-center justify-start self-stretch sm:w-[100%] w-[auto]">
              <div className="flex flex-row gap-[16px] items-center justify-start w-[211px]">
                {!!props?.ellipsethree8 ? (
                  <Img
                    src={props?.ellipsethree8}
                    className="h-[40px] md:h-[auto] rounded-[50%] w-[40px]"
                    alt="ellipseThree"
                  />
                ) : null}
                <div className="flex flex-col gap-[4px] items-start justify-start self-stretch w-[auto]">
                  {!!props?.language ? (
                    <Text
                      className="font-inter font-medium text-gray_900 text-left w-[auto]"
                      variant="body2"
                    >
                      {props?.language}
                    </Text>
                  ) : null}
                  {!!props?.email7 ? (
                    <Text
                      className="font-inter font-normal not-italic text-bluegray_400 text-left w-[auto]"
                      variant="body3"
                    >
                      {props?.email7}
                    </Text>
                  ) : null}
                </div>
              </div>
              <div className="flex items-center justify-start w-[80px]">
                <Text
                  className="font-inter font-normal not-italic text-gray_900 text-left w-[auto]"
                  variant="body2"
                >
                  {props?.label8}
                </Text>
              </div>
            </div>
            <div className="flex sm:flex-1 flex-row sm:gap-[40px] gap-[96px] items-center justify-start pr-[100px] sm:pr-[20px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
              <div className="flex items-center justify-end w-[80px]">
                {!!props?.priceOne8 ? (
                  <Text
                    className="font-inter font-medium text-gray_900 text-right w-[auto]"
                    variant="body2"
                  >
                    {props?.priceOne8}
                  </Text>
                ) : null}
              </div>
              <div className="flex items-center justify-end w-[80px]">
                {!!props?.priceOne8 ? (
                  <Text
                    className="font-inter font-medium text-gray_900 text-right w-[auto]"
                    variant="body2"
                  >
                    {props?.priceOne8}
                  </Text>
                ) : null}
              </div>
              <div className="flex items-start justify-start w-[80px]">
                <div className="bg-orange_51 flex items-start justify-start px-[8px] py-[3px] rounded-[11px] self-stretch w-[auto]">
                  <div className="flex flex-row gap-[8px] items-center justify-start self-stretch w-[auto]">
                    {!!props?.ellipseone3 ? (
                      <div className="bg-orange_A200 h-[6px] rounded-[50%] w-[6px]"></div>
                    ) : null}
                    {!!props?.labelTwo8 ? (
                      <Text
                        className="font-inter font-medium text-left text-orange_800 w-[auto]"
                        variant="body3"
                      >
                        {props?.labelTwo8}
                      </Text>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white_A700 flex flex-1 md:flex-col flex-row md:gap-[40px] items-center justify-between outline outline-[0.5px] outline-gray_100 p-[24px] sm:px-[20px] w-[100%]">
            <div className="flex sm:flex-1 flex-row gap-[96px] items-center justify-start self-stretch sm:w-[100%] w-[auto]">
              <div className="flex flex-row gap-[16px] items-center justify-start w-[200px]">
                {!!props?.ellipsethree8 ? (
                  <Img
                    src={props?.ellipsethree8}
                    className="h-[40px] md:h-[auto] rounded-[50%] w-[40px]"
                    alt="ellipseThree"
                  />
                ) : null}
                <div className="flex flex-col gap-[4px] items-start justify-start self-stretch w-[auto]">
                  {!!props?.language ? (
                    <Text
                      className="font-inter font-medium text-gray_900 text-left w-[auto]"
                      variant="body2"
                    >
                      {props?.language}
                    </Text>
                  ) : null}
                  {!!props?.email7 ? (
                    <Text
                      className="font-inter font-normal not-italic text-bluegray_400 text-left w-[auto]"
                      variant="body3"
                    >
                      {props?.email7}
                    </Text>
                  ) : null}
                </div>
              </div>
              <div className="flex items-center justify-start w-[80px]">
                <Text
                  className="font-inter font-normal not-italic text-gray_900 text-left w-[auto]"
                  variant="body2"
                >
                  {props?.label8}
                </Text>
              </div>
            </div>
            <div className="flex sm:flex-1 flex-row sm:gap-[40px] gap-[96px] items-center justify-start pr-[100px] sm:pr-[20px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
              <div className="flex items-center justify-end w-[80px]">
                {!!props?.priceOne8 ? (
                  <Text
                    className="font-inter font-medium text-gray_900 text-right w-[auto]"
                    variant="body2"
                  >
                    {props?.priceOne8}
                  </Text>
                ) : null}
              </div>
              <div className="flex items-center justify-end w-[80px]">
                {!!props?.priceOne8 ? (
                  <Text
                    className="font-inter font-medium text-gray_900 text-right w-[auto]"
                    variant="body2"
                  >
                    {props?.priceOne8}
                  </Text>
                ) : null}
              </div>
              <div className="flex items-start justify-start w-[80px]">
                <div className="bg-green_50 flex items-start justify-start px-[8px] py-[3px] rounded-[11px] self-stretch w-[auto]">
                  <div className="flex flex-row gap-[8px] items-center justify-start self-stretch w-[auto]">
                    <div className="bg-green_300 h-[6px] rounded-[50%] w-[6px]"></div>
                    <Text
                      className="font-inter font-medium text-green_500 text-left w-[auto]"
                      variant="body3"
                    >
                      {props?.labelOne8}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white_A700 flex flex-1 md:flex-col flex-row md:gap-[40px] items-center justify-between outline outline-[0.5px] outline-gray_100 p-[24px] sm:px-[20px] w-[100%]">
            <div className="flex sm:flex-1 flex-row gap-[96px] items-center justify-start self-stretch sm:w-[100%] w-[auto]">
              <div className="flex flex-row gap-[16px] items-center justify-start w-[200px]">
                {!!props?.ellipsethree8 ? (
                  <Img
                    src={props?.ellipsethree8}
                    className="h-[40px] md:h-[auto] rounded-[50%] w-[40px]"
                    alt="ellipseThree"
                  />
                ) : null}
                <div className="flex flex-col gap-[4px] items-start justify-start self-stretch w-[auto]">
                  {!!props?.language ? (
                    <Text
                      className="font-inter font-medium text-gray_900 text-left w-[auto]"
                      variant="body2"
                    >
                      {props?.language}
                    </Text>
                  ) : null}
                  {!!props?.email7 ? (
                    <Text
                      className="font-inter font-normal not-italic text-bluegray_400 text-left w-[auto]"
                      variant="body3"
                    >
                      {props?.email7}
                    </Text>
                  ) : null}
                </div>
              </div>
              <div className="flex items-center justify-start w-[80px]">
                <Text
                  className="font-inter font-normal not-italic text-gray_900 text-left w-[auto]"
                  variant="body2"
                >
                  {props?.label8}
                </Text>
              </div>
            </div>
            <div className="flex sm:flex-1 flex-row sm:gap-[40px] gap-[96px] items-center justify-start pr-[100px] sm:pr-[20px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
              <div className="flex items-center justify-end w-[80px]">
                {!!props?.priceOne8 ? (
                  <Text
                    className="font-inter font-medium text-gray_900 text-right w-[auto]"
                    variant="body2"
                  >
                    {props?.priceOne8}
                  </Text>
                ) : null}
              </div>
              <div className="flex items-center justify-end w-[80px]">
                {!!props?.priceOne8 ? (
                  <Text
                    className="font-inter font-medium text-gray_900 text-right w-[auto]"
                    variant="body2"
                  >
                    {props?.priceOne8}
                  </Text>
                ) : null}
              </div>
              <div className="flex items-start justify-start w-[80px]">
                <div className="bg-red-100 flex items-start justify-start px-[8px] py-[3px] rounded-[11px] self-stretch w-[auto]">
                  <div className="flex flex-row gap-[8px] items-center justify-start self-stretch w-[auto]">
                    {!!props?.ellipseone2 ? (
                      <div className="bg-red_300 h-[6px] rounded-[50%] w-[6px]"></div>
                    ) : null}
                    {!!props?.labelTwo7 ? (
                      <Text
                        className="font-inter font-medium text-left text-red_500 w-[auto]"
                        variant="body3"
                      >
                        {props?.labelTwo7}
                      </Text>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white_A700 flex flex-1 md:flex-col flex-row md:gap-[40px] items-center justify-between outline outline-[0.5px] outline-gray_100 p-[24px] sm:px-[20px] w-[100%]">
            <div className="flex sm:flex-1 flex-row gap-[96px] items-center justify-start self-stretch sm:w-[100%] w-[auto]">
              <div className="flex flex-row gap-[16px] items-center justify-start w-[213px]">
                {!!props?.ellipsethree8 ? (
                  <Img
                    src={props?.ellipsethree8}
                    className="h-[40px] md:h-[auto] rounded-[50%] w-[40px]"
                    alt="ellipseThree"
                  />
                ) : null}
                <div className="flex flex-col gap-[4px] items-start justify-start self-stretch w-[auto]">
                  {!!props?.language ? (
                    <Text
                      className="font-inter font-medium text-gray_900 text-left w-[auto]"
                      variant="body2"
                    >
                      {props?.language}
                    </Text>
                  ) : null}
                  {!!props?.email7 ? (
                    <Text
                      className="font-inter font-normal not-italic text-bluegray_400 text-left w-[auto]"
                      variant="body3"
                    >
                      {props?.email7}
                    </Text>
                  ) : null}
                </div>
              </div>
              <div className="flex items-center justify-start w-[80px]">
                <Text
                  className="font-inter font-normal not-italic text-gray_900 text-left w-[auto]"
                  variant="body2"
                >
                  {props?.label8}
                </Text>
              </div>
            </div>
            <div className="flex sm:flex-1 flex-row sm:gap-[40px] gap-[96px] items-center justify-start pr-[100px] sm:pr-[20px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
              <div className="flex items-center justify-end w-[80px]">
                {!!props?.priceOne8 ? (
                  <Text
                    className="font-inter font-medium text-gray_900 text-right w-[auto]"
                    variant="body2"
                  >
                    {props?.priceOne8}
                  </Text>
                ) : null}
              </div>
              <div className="flex items-center justify-end w-[80px]">
                {!!props?.priceOne8 ? (
                  <Text
                    className="font-inter font-medium text-gray_900 text-right w-[auto]"
                    variant="body2"
                  >
                    {props?.priceOne8}
                  </Text>
                ) : null}
              </div>
              <div className="flex items-start justify-start w-[80px]">
                <div className="bg-orange_51 flex items-start justify-start px-[8px] py-[3px] rounded-[11px] self-stretch w-[auto]">
                  <div className="flex flex-row gap-[8px] items-center justify-start self-stretch w-[auto]">
                    {!!props?.ellipseone3 ? (
                      <div className="bg-orange_A200 h-[6px] rounded-[50%] w-[6px]"></div>
                    ) : null}
                    {!!props?.labelTwo8 ? (
                      <Text
                        className="font-inter font-medium text-left text-orange_800 w-[auto]"
                        variant="body3"
                      >
                        {props?.labelTwo8}
                      </Text>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white_A700 flex flex-1 md:flex-col flex-row md:gap-[40px] items-center justify-between outline outline-[0.5px] outline-gray_100 p-[24px] sm:px-[20px] rounded-bl-[24px] rounded-br-[24px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
            <div className="flex sm:flex-1 flex-row gap-[96px] items-center justify-start self-stretch sm:w-[100%] w-[auto]">
              <div className="flex flex-row gap-[16px] items-center justify-start w-[200px]">
                {!!props?.ellipsethree8 ? (
                  <Img
                    src={props?.ellipsethree8}
                    className="h-[40px] md:h-[auto] rounded-[50%] w-[40px]"
                    alt="ellipseThree"
                  />
                ) : null}
                <div className="flex flex-col gap-[4px] items-start justify-start self-stretch w-[auto]">
                  {!!props?.language ? (
                    <Text
                      className="font-inter font-medium text-gray_900 text-left w-[auto]"
                      variant="body2"
                    >
                      {props?.language}
                    </Text>
                  ) : null}
                  {!!props?.email7 ? (
                    <Text
                      className="font-inter font-normal not-italic text-bluegray_400 text-left w-[auto]"
                      variant="body3"
                    >
                      {props?.email7}
                    </Text>
                  ) : null}
                </div>
              </div>
              <div className="flex items-center justify-start w-[80px]">
                <Text
                  className="font-inter font-normal not-italic text-gray_900 text-left w-[auto]"
                  variant="body2"
                >
                  {props?.label8}
                </Text>
              </div>
            </div>
            <div className="flex sm:flex-1 flex-row sm:gap-[40px] gap-[96px] items-center justify-start pr-[100px] sm:pr-[20px] md:pr-[40px] self-stretch sm:w-[100%] w-[auto]">
              <div className="flex items-center justify-end w-[80px]">
                {!!props?.priceOne8 ? (
                  <Text
                    className="font-inter font-medium text-gray_900 text-right w-[auto]"
                    variant="body2"
                  >
                    {props?.priceOne8}
                  </Text>
                ) : null}
              </div>
              <div className="flex items-center justify-end w-[80px]">
                {!!props?.priceOne8 ? (
                  <Text
                    className="font-inter font-medium text-gray_900 text-right w-[auto]"
                    variant="body2"
                  >
                    {props?.priceOne8}
                  </Text>
                ) : null}
              </div>
              <div className="flex items-start justify-start w-[80px]">
                <div className="bg-green_50 flex items-start justify-start px-[8px] py-[3px] rounded-[11px] self-stretch w-[auto]">
                  <div className="flex flex-row gap-[8px] items-center justify-start self-stretch w-[auto]">
                    <div className="bg-green_300 h-[6px] rounded-[50%] w-[6px]"></div>
                    <Text
                      className="font-inter font-medium text-green_500 text-left w-[auto]"
                      variant="body3"
                    >
                      {props?.labelOne8}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </List>
      </div>
    </>
  );
};

DashboardTable.defaultProps = {
  labelTwo: "Status",
  labelThree: "Status",
  labelSix: "Status",
  labelOne: "Premium",
  labelTwo1: "Active",
  labelOne1: "Premium",
  labelTwo2: "Active",
  labelOne2: "Premium",
  labelTwo3: "Active",
  labelOne3: "Premium",
  labelOne4: "Premium",
  labelOne5: "Premium",
  labelTwo6: "Active",
  labelOne6: "Premium",
  labelOne7: "Premium",
  label8: "Premium",
  labelOne8: "Active",
};

export default DashboardTable;
