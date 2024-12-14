import { MobileSelectOptionFieldProps } from '@/hooks/types';
import { useEffect, useState } from 'react';
import Select from 'react-select';

const MobileCodeSelectOptionField = ({name, id, onChange, previousOption, placeholder, className, required}:MobileSelectOptionFieldProps) => {
    const [options, setOptions] = useState([]);
    useEffect(() => {
        const fetchCountries = async () => {
            const response = await fetch('/countries/countries.json');
            if (response.ok) {
                const data = await response.json();
                setOptions(data);
            } else {
                console.error('Failed to fetch countries JSON');
            }
        };
        fetchCountries();
      }, []);
    
    const customStyles = {
        option: (provided:any, state:any) => ({
            ...provided,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            height: '100px !important',
            cursor: 'pointer'
        }),
        control: (provided: any, state:any) => ({
            ...provided,
            backgroundColor: 'transparent',
            borderColor: '#ECECEC',
            boxShadow: 'none',
            '&:hover': {
              borderColor: '#ECECEC',
            },
        }),

        indicatorSeparator: (provided: any) => ({
            display: 'none', // Hides the separator
        }),
        dropdownIndicator: (provided: any) => ({
            ...provided,
            color: 'black',
            marginLeft: '-5px'
        }),
        placeholder: (provided: any) => ({
            ...provided,
            color: className ? 'black' : '',
        }),
    };

    const selectOptions = options.map((option: any) => {
        return {
        value: option.phone_code,
        label: `${option.emoji} ${option.phone_code}`
        };
    });

    const formatOptionLabel = ({ label}:any) => {
        return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            {label}
        </div>
        );
    };

    const selectedOption = selectOptions.find((options: { value: any; }) => options.value === previousOption);
    return (
        <Select
            id={id}
            name={name}
            className={className}
            options={selectOptions}
            required={required}
            components={{
                Option: ({ innerProps, label, data }) => (
                <div {...innerProps} className="px-3">
                    {label}
                </div>
                ),
            }}
            styles={customStyles}
            value={selectedOption}
            placeholder={placeholder==""?'Select':placeholder}
            onChange={(selectedOption) => {
                if (selectedOption) {
                const selectedOptionValue = selectedOption.value;
                onChange(selectedOptionValue);
                } else {
                const selectedOptionValue = "";
                onChange(selectedOptionValue);
                }
            }}
            formatOptionLabel={formatOptionLabel}
        />
    );
};

export default MobileCodeSelectOptionField;
