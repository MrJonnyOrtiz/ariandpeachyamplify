/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ServiceCreateFormInputValues = {
    name?: string;
    description?: string;
    type?: string;
    price?: number;
    image?: string;
};
export declare type ServiceCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
    price?: ValidationFunction<number>;
    image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ServiceCreateFormOverridesProps = {
    ServiceCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
    price?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ServiceCreateFormProps = React.PropsWithChildren<{
    overrides?: ServiceCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ServiceCreateFormInputValues) => ServiceCreateFormInputValues;
    onSuccess?: (fields: ServiceCreateFormInputValues) => void;
    onError?: (fields: ServiceCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ServiceCreateFormInputValues) => ServiceCreateFormInputValues;
    onValidate?: ServiceCreateFormValidationValues;
} & React.CSSProperties>;
export default function ServiceCreateForm(props: ServiceCreateFormProps): React.ReactElement;
