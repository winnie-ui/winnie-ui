import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  type PropsWithChildren,
  forwardRef,
} from "react";

import clsx from "clsx";

import "./page.css";

/* -------------------------------------------------------------------------------------------------
 * Page
 * -----------------------------------------------------------------------------------------------*/
type PageRef = ElementRef<"div">;
type PageComponentProps = ComponentPropsWithoutRef<"div">;
type PageProps = PageComponentProps;

const Page = forwardRef<PageRef, PropsWithChildren<PageProps>>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        {...props}
        className={clsx(className, "wui-page")}
        data-component="page"
        ref={ref}
      >
        {children}
      </div>
    );
  },
);

Page.displayName = "Page";

/* -------------------------------------------------------------------------------------------------
 * PageHeader
 * -----------------------------------------------------------------------------------------------*/
type PageHeaderRef = ElementRef<"header">;
type PageHeaderComponentProps = ComponentPropsWithoutRef<"header">;
type PageHeaderProps = PageHeaderComponentProps;

const PageHeader = forwardRef<
  PageHeaderRef,
  PropsWithChildren<PageHeaderProps>
>(({ children, className, ...props }, ref) => {
  return (
    <header
      {...props}
      className={clsx(className, "wui-page-header")}
      data-slot="header"
      ref={ref}
    >
      {children}
    </header>
  );
});

PageHeader.displayName = "PageHeader";

/* -------------------------------------------------------------------------------------------------
 * PageContent
 * -----------------------------------------------------------------------------------------------*/
type PageContentRef = ElementRef<"div">;
type PageContentComponentProps = ComponentPropsWithoutRef<"div">;
type PageContentProps = PageContentComponentProps;

const PageContent = forwardRef<
  PageContentRef,
  PropsWithChildren<PageContentProps>
>(({ children, className, ...props }, ref) => {
  return (
    <div
      {...props}
      className={clsx(className, "wui-page-content")}
      data-slot="content"
      ref={ref}
    >
      {children}
    </div>
  );
});

PageContent.displayName = "PageContent";

export { Page, PageHeader, PageContent };
export type { PageProps, PageHeaderProps, PageContentProps };
