import { StylesType } from 'md-to-react-email';
import * as React from 'react';

interface MarkdownProps {
    children: string;
    markdownCustomStyles?: StylesType;
    markdownContainerStyles?: React.CSSProperties;
}
declare const Markdown: React.ForwardRefExoticComponent<MarkdownProps & React.RefAttributes<HTMLDivElement>>;

export { Markdown, MarkdownProps };
