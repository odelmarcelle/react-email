import * as React from 'react';

type RootProps = React.ComponentPropsWithoutRef<"body">;
interface BodyProps extends RootProps {
}
declare const Body: React.FC<Readonly<BodyProps>>;

export { Body, BodyProps };
