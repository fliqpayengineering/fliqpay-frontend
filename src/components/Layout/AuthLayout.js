import React from "react";
import NavigationBar from "../../components/NavigationBar";

export default function AuthLayout({
  title,
  subtitle,
  icon,
  sideImage,
  columnSize = "3/5",
  innerColumnSize = "sm",
  children
}) {
  // Calculate column size for the side image
  const getSideColumnSize = () => {
    const splitColumnSize = columnSize.split("/");
    return `${splitColumnSize[1] - splitColumnSize[0]}/${splitColumnSize[1]}`;
  };

  return (
    <div>
      <NavigationBar />
      <div className="flex w-full">
        <div
          className={`w-${columnSize} bg-white flex flex-col items-center justify-center text-sm text-primarydark pb-8`}
        >
          <div className={`flex flex-col w-${innerColumnSize}`}>
            <div className="flex flex-col items-center my-8 font-medium text-center">
              {icon && <img src={icon} className="my-8" />}
              <h1 className="text-4xl text-secondary">{title}</h1>
              <p className="text-base font-normal text-primarydark my-1">
                {subtitle}
              </p>
            </div>
            <div className="w-full my-4">{children}</div>
          </div>
        </div>
        <div
          className={`w-${getSideColumnSize()} bg-blue-100 h-screen fixed right-0 top-0 z-20`}
        >
          <img src={sideImage} className="object-cover h-full w-full" />
        </div>
      </div>
    </div>
  );
}
