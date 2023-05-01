/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { SSserviceCardProps } from "./SSserviceCard";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SSserviceCardCollectionOverridesProps = {
    SSserviceCardCollection?: PrimitiveOverrideProps<CollectionProps>;
    SSserviceCard?: SSserviceCardProps;
} & EscapeHatchProps;
export declare type SSserviceCardCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => SSserviceCardProps;
} & {
    overrides?: SSserviceCardCollectionOverridesProps | undefined | null;
}>;
export default function SSserviceCardCollection(props: SSserviceCardCollectionProps): React.ReactElement;
