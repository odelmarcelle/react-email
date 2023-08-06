import * as React from 'react';

type RootProps = React.ComponentPropsWithoutRef<"head">;
interface HeadProps extends RootProps {
}
declare const Head: React.ForwardRefExoticComponent<Readonly<HeadProps> & React.RefAttributes<HTMLHeadElement>>;

export { Head, HeadProps };
