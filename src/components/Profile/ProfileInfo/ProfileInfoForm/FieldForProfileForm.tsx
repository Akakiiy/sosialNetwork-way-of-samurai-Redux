import {ErrorMessage, Field} from "formik";
import React from "react";

type PropsType = {
    type: string
    name: string
    placeholder?: string
}

const FieldForProfileForm: React.FC<PropsType> = ({type, name, placeholder}) => {
    return(
        <div>
            <Field type={type}
                   name={name}
                   placeholder={placeholder} />
            <ErrorMessage name={name}
                          component="div" />
        </div>
    )
}

export default FieldForProfileForm;