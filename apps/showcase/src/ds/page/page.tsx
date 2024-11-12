import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  type PropsWithChildren,
  forwardRef,
} from "react";

import {
  Heading as AriaHeading,
  type HeadingProps as AriaHeadingProps,
} from "react-aria-components";

import clsx from "clsx";

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
      className={clsx(className, "wui-page__header")}
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
      className={clsx(className, "wui-page__content")}
      data-slot="content"
      ref={ref}
    >
      {children}
    </div>
  );
});

PageContent.displayName = "PageContent";

/* -------------------------------------------------------------------------------------------------
 * PageTitle
 * -----------------------------------------------------------------------------------------------*/
type PageTitleElement = ElementRef<typeof AriaHeading>;
type PageTitleProps = Omit<AriaHeadingProps, "level">;

const PageTitle = forwardRef<
  PageTitleElement,
  PropsWithChildren<PageTitleProps>
>(({ className, children, ...props }, ref) => {
  return (
    <AriaHeading
      {...props}
      className={clsx("wui-page__title", className)}
      ref={ref}
    >
      {children}
    </AriaHeading>
  );
});

export { Page, PageHeader, PageContent, PageTitle };
export type { PageProps, PageHeaderProps, PageContentProps, PageTitleProps };
