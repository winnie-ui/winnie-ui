import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  type PropsWithChildren,
  forwardRef,
} from "react";

/* -------------------------------------------------------------------------------------------------
 * Page
 * -----------------------------------------------------------------------------------------------*/
type PageRef = ElementRef<"div">;
type PageComponentProps = ComponentPropsWithoutRef<"div">;
type PageProps = PageComponentProps;

const Page = forwardRef<PageRef, PropsWithChildren<PageProps>>(
  ({ children, ...props }, ref) => {
    return (
      <div {...props} data-component="page" ref={ref}>
        {children}
      </div>
    );
  },
);

Page.displayName = "Page";

export { Page };
