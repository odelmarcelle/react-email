import * as React from 'react';

type RootProps = React.ComponentPropsWithoutRef<"html">;
interface HtmlProps extends RootProps {
}
declare const Html: React.ForwardRefExoticComponent<Readonly<HtmlProps> & React.RefAttributes<HTMLHtmlElement>>;

export { Html, HtmlProps };
