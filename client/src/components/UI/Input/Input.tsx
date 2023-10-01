import React from 'react'
import {motion} from 'framer-motion'

type Props = {
    placeHolder?: string;
    type?: string;
    name?: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
    required?: boolean;
}

const Input = (props: Props) => {
  return (
      <div className='flex flex-col gap-2 lg:w-[300px]'>
        <label htmlFor={props.name} className='text-sm'>{props.label}</label>
        <input
        className="p-2 outline-none border-2 bg-transparent border-primary rounded-lg"
        placeholder={props.placeHolder}
        type={props.type}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        autoComplete='off'
        required={props.required}
        
      />
      </div>
  )
}

export default Input