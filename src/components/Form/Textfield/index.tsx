import React from 'react';
import { Form } from 'semantic-ui-react';

interface IProps {
    label: string;
    placeHolder: string;
    error?: boolean;
}

const TextInput = ({ label, placeHolder, error }: IProps) => (
    <Form.Input fluid label={label} placeholder={placeHolder} error={error} />
);

export default TextInput;
