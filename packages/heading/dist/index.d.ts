import * as React$1 from 'react';

type As<DefaultTag extends React.ElementType, T1 extends React.ElementType, T2 extends React.ElementType = T1, T3 extends React.ElementType = T1, T4 extends React.ElementType = T1, T5 extends React.ElementType = T1> = (React.ComponentPropsWithRef<DefaultTag> & {
    as?: DefaultTag;
}) | (React.ComponentPropsWithRef<T1> & {
    as: T1;
}) | (React.ComponentPropsWithRef<T2> & {
    as: T2;
}) | (React.ComponentPropsWithRef<T3> & {
    as: T3;
}) | (React.ComponentPropsWithRef<T4> & {
    as: T4;
}) | (React.ComponentPropsWithRef<T5> & {
    as: T5;
});

interface Margin {
    m?: string;
    mx?: string;
    my?: string;
    mt?: string;
    mr?: string;
    mb?: string;
    ml?: string;
}

interface HeadingOwnProps {
}
type HeadingAs = As<"h1", "h2", "h3", "h4", "h5", "h6">;
type HeadingProps = HeadingAs & HeadingOwnProps & Margin;
declare const Heading: React$1.ForwardRefExoticComponent<(Pick<Readonly<Pick<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, "key" | keyof React$1.HTMLAttributes<HTMLHeadingElement>> & {
    ref?: ((instance: HTMLHeadingElement | null) => void) | React$1.RefObject<HTMLHeadingElement> | null | undefined;
} & {
    as?: "h1" | undefined;
} & HeadingOwnProps & Margin>, "key" | keyof React$1.HTMLAttributes<HTMLHeadingElement> | "as" | keyof Margin> | Pick<Readonly<Pick<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, "key" | keyof React$1.HTMLAttributes<HTMLHeadingElement>> & {
    ref?: ((instance: HTMLHeadingElement | null) => void) | React$1.RefObject<HTMLHeadingElement> | null | undefined;
} & {
    as: "h2";
} & HeadingOwnProps & Margin>, "key" | keyof React$1.HTMLAttributes<HTMLHeadingElement> | "as" | keyof Margin> | Pick<Readonly<Pick<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, "key" | keyof React$1.HTMLAttributes<HTMLHeadingElement>> & {
    ref?: ((instance: HTMLHeadingElement | null) => void) | React$1.RefObject<HTMLHeadingElement> | null | undefined;
} & {
    as: "h3";
} & HeadingOwnProps & Margin>, "key" | keyof React$1.HTMLAttributes<HTMLHeadingElement> | "as" | keyof Margin> | Pick<Readonly<Pick<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, "key" | keyof React$1.HTMLAttributes<HTMLHeadingElement>> & {
    ref?: ((instance: HTMLHeadingElement | null) => void) | React$1.RefObject<HTMLHeadingElement> | null | undefined;
} & {
    as: "h4";
} & HeadingOwnProps & Margin>, "key" | keyof React$1.HTMLAttributes<HTMLHeadingElement> | "as" | keyof Margin> | Pick<Readonly<Pick<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, "key" | keyof React$1.HTMLAttributes<HTMLHeadingElement>> & {
    ref?: ((instance: HTMLHeadingElement | null) => void) | React$1.RefObject<HTMLHeadingElement> | null | undefined;
} & {
    as: "h5";
} & HeadingOwnProps & Margin>, "key" | keyof React$1.HTMLAttributes<HTMLHeadingElement> | "as" | keyof Margin> | Pick<Readonly<Pick<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, "key" | keyof React$1.HTMLAttributes<HTMLHeadingElement>> & {
    ref?: ((instance: HTMLHeadingElement | null) => void) | React$1.RefObject<HTMLHeadingElement> | null | undefined;
} & {
    as: "h6";
} & HeadingOwnProps & Margin>, "key" | keyof React$1.HTMLAttributes<HTMLHeadingElement> | "as" | keyof Margin>) & React$1.RefAttributes<HTMLHeadingElement>>;

export { Heading, HeadingAs, HeadingProps };
