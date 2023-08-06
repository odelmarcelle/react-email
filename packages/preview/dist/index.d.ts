import * as React from 'react';

type RootProps = React.ComponentPropsWithoutRef<"div">;
interface PreviewProps extends RootProps {
    children: string | string[];
}
declare const Preview: React.ForwardRefExoticComponent<Readonly<PreviewProps> & React.RefAttributes<HTMLDivElement>>;

export { Preview, PreviewProps };
