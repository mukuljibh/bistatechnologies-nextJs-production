type FormValues = {
    name: string;
    email: string;
    companyName: string;
    message: string;
}

export type InputBoxProps = {
    id: keyof FormValues;
    label: string;
    placeholder: string
    css?: string
}