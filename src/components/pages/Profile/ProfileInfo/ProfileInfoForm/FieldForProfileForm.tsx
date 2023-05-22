import s from './FieldForProfileForm.module.css'
import {ErrorMessage, Field} from "formik";
import React from "react";

type PropsType = {
    type: string
    name: string
    placeholder?: string
}

const FieldForProfileForm: React.FC<PropsType> = ({type, name, placeholder}) => {
    return(
        <div style={{display: 'flex'}}>
            <div className={s.formGroup}>
                <Field className={s.formField} type={type} name={name} placeholder={placeholder}/>
                {type === 'text' && <label htmlFor="term" className={s.formLabel}>{name}</label>}
            </div>
            {/*<Field type={type}*/}
            {/*       name={name}*/}
            {/*       placeholder={placeholder} />*/}
            <ErrorMessage name={name}
                          component="div" />
        </div>
    )
}

export default FieldForProfileForm;