import { FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/form-control';
import { Input } from '@chakra-ui/input';
import { useField } from 'formik';
import React, { InputHTMLAttributes } from 'react'

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    placeholder: string;
    name: string;
    type?: string
}

export const InputField: React.FC<InputFieldProps> = (props) => {
    const [field, { error }] = useField(props);
    return (
        <FormControl isInvalid={!!error} isRequired>
            <FormLabel htmlFor={field.name}>{props.label} </FormLabel>
            <Input {...field} id={field.name} placeholder={props.placeholder} type={props.type} />
            {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
        </FormControl>
    );
}