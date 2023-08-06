import * as React from 'react';

type RootProps = React.ComponentPropsWithoutRef<"img">;
interface ImgProps extends RootProps {
}
declare const Img: React.ForwardRefExoticComponent<Readonly<ImgProps> & React.RefAttributes<HTMLImageElement>>;

export { Img, ImgProps };
