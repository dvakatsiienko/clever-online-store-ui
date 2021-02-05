/* Core */
import { useState } from 'react';

export const useForm = <T = Record<'string', 'string'>>(initialState: T) => {
    const [ inputs, setInputs ] = useState(initialState);

    const handleChange: React.FormEventHandler<
        HTMLInputElement | HTMLTextAreaElement
    > = e => {
        const { name, type } = e.currentTarget;
        let value = e.currentTarget.value as unknown;

        if (type === 'number') {
            value = Number(value);
        }

        if (type === 'file') {
            // @ts-ignore
            value = e.currentTarget.files[0];
        }

        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const resetForm = () => {
        setInputs(initialState);
    };

    const clearForm = () => {
        const blankState = Object.entries(inputs).map(([ key ]) => [ key, '' ]);

        setInputs(Object.fromEntries(blankState));
    };

    return {
        inputs,
        handleChange,
        resetForm,
        clearForm,
    };
};
