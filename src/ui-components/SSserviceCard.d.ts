/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Service } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SSserviceCardOverridesProps = {
    SSserviceCard?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    Name29766901?: PrimitiveOverrideProps<FlexProps>;
    Name29766902?: PrimitiveOverrideProps<TextProps>;
    Type?: PrimitiveOverrideProps<TextProps>;
    "Frame 421"?: PrimitiveOverrideProps<FlexProps>;
    Button36772986?: PrimitiveOverrideProps<ButtonProps>;
    Button36672950?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 418"?: PrimitiveOverrideProps<FlexProps>;
    Button36462839?: PrimitiveOverrideProps<ButtonProps>;
    Button36462843?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type SSserviceCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    service?: Service;
} & {
    overrides?: SSserviceCardOverridesProps | undefined | null;
}>;
export default function SSserviceCard(props: SSserviceCardProps): React.ReactElement;
