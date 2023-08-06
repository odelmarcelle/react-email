import * as React from 'react';

type RootProps = React.ComponentPropsWithoutRef<"hr">;
interface HrProps extends RootProps {
}
declare const Hr: React.ForwardRefExoticComponent<Readonly<HrProps> & React.RefAttributes<HTMLHRElement>>;

export { Hr, HrProps };
