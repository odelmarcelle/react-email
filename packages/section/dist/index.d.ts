import * as React from 'react';

type RootProps = React.ComponentPropsWithoutRef<"table">;
interface SectionProps extends RootProps {
}
declare const Section: React.ForwardRefExoticComponent<Readonly<SectionProps> & React.RefAttributes<HTMLTableElement>>;

export { Section, SectionProps };
