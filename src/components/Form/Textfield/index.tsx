import React from 'react';
import { Form } from 'semantic-ui-react';

interface IProps {
    label: string;
    placeHolder: string;
    error?: boolean;
    onChange?: (e: any) => void;
}

const TextInput = ({ label, placeHolder, error, onChange }: IProps) => (
    <Form.Input fluid label={label} placeholder={placeHolder} error={error} onChange={onChange} />
);

export default TextInput;
