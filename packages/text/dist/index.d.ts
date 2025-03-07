import * as React from 'react';

type RootProps = React.ComponentPropsWithoutRef<"p">;
interface TextProps extends RootProps {
}
declare const Text: React.ForwardRefExoticComponent<Readonly<TextProps> & React.RefAttributes<HTMLParagraphElement>>;

export { Text, TextProps };
