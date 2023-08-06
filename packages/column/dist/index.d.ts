import * as React from 'react';

type RootProps = React.ComponentPropsWithoutRef<"td">;
interface ColumnProps extends RootProps {
}
declare const Column: React.ForwardRefExoticComponent<Readonly<ColumnProps> & React.RefAttributes<HTMLTableDataCellElement>>;

export { Column, ColumnProps };
