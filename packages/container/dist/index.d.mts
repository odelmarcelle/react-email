import * as React from 'react';

type RootProps = React.ComponentPropsWithoutRef<"table">;
interface ContainerProps extends RootProps {
}
declare const Container: React.ForwardRefExoticComponent<Readonly<ContainerProps> & React.RefAttributes<HTMLTableElement>>;

export { Container, ContainerProps };
