"use client";

import { cn } from "@/lib/tw";
import {
  IPaginationProps,
  NextButton,
  PageButton,
  Pagination as PaginationRoot,
  PrevButton,
} from "react-headless-pagination";
import { button } from "./button";
import ChevronLeftIcon from "./icons/chevron-left-icon";
import ChevronRightIcon from "./icons/chevron-right-icon";

export interface PaginationProps
  extends Omit<
      IPaginationProps,
      "edgePageCount" | "middlePagesSiblingCount" | "setCurrentPage"
    >,
    Partial<Pick<IPaginationProps, "setCurrentPage">> {}

export const Pagination = ({
  currentPage,
  className,
  setCurrentPage,
  totalPages,
  ...props
}: PaginationProps) => {
  const handleCurrentPageCHange: IPaginationProps["setCurrentPage"] = (
    pageIndex
  ) => {
    if (setCurrentPage) setCurrentPage(pageIndex);
  };

  return (
    <PaginationRoot
      {...props}
      currentPage={currentPage}
      totalPages={totalPages}
      edgePageCount={1}
      middlePagesSiblingCount={1}
      className={cn("flex items-center justify-start gap-2", className)}
      truncableClassName={button({
        variant: "ghost",
        size: "icon",
      })}
      setCurrentPage={handleCurrentPageCHange}
    >
      <PrevButton
        className={button({
          variant: "outline",
          size: "icon",
        })}
      >
        <ChevronLeftIcon className="text-neutral-grey-300 size-4" />
      </PrevButton>
      <div className="flex items-center justify-center gap-2 [&>li]:list-none">
        <PageButton
          activeClassName={button({
            variant: "default",
            size: "icon",
            className: "hover:text-primary-foreground",
          })}
          className={button({
            variant: "outline",
            size: "icon",
            className: "cursor-pointer",
          })}
        />
      </div>
      <NextButton
        className={button({
          variant: "outline",
          size: "icon",
        })}
      >
        <ChevronRightIcon className="text-neutral-grey-300 size-4" />
      </NextButton>
    </PaginationRoot>
  );
};
