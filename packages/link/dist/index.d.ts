import * as React from 'react';

type RootProps = React.ComponentPropsWithoutRef<"a">;
interface LinkProps extends RootProps {
}
declare const Link: React.ForwardRefExoticComponent<Readonly<LinkProps> & React.RefAttributes<HTMLAnchorElement>>;

export { Link, LinkProps };
