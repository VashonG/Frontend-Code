import React from "react";

const variantClasses = {
  h1: "font-normal text-[8px]",
  h2: "font-extrabold sm:text-[38px] md:text-[44px] text-[48px]",
  h3: "sm:text-[26px] md:text-[28px] text-[30px]",
  h4: "font-medium sm:text-[20px] md:text-[22px] text-[24px]",
  h5: "text-[20px]",
  h6: "text-[18px]",
  body1: "text-[16px]",
  body2: "text-[14px]",
  body3: "text-[13px]",
  body4: "font-bold text-[128px] sm:text-[48px] md:text-[48px]",
  body5: "text-[12px]",
  body6: "text-[11px]",
  body7: "font-normal text-[10px]",
} as const;

export type TextProps = Partial<{
  className: string;
  variant: keyof typeof variantClasses;
  as: React.ElementType;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className,
  variant,
  as,
  ...restProps
}) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
