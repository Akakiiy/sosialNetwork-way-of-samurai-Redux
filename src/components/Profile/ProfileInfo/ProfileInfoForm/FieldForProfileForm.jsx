import {ErrorMessage, Field} from "formik";
import React from "react";

const FieldForProfileForm = ({type, name, placeholder}) => {
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