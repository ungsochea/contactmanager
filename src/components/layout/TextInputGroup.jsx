import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames'

const TextInputGroup= ({label,name,value,placeholder,type,onChange,error}) => {
  return (
    <div>
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input 
                type={type}
                className="is-invalid form-control form-control-lg"
                name={name}
                className={classnames('form-control form-control-lg',{'is-invalid':error})}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            {error&&
                 <div className="invalid-feedback">{error}</div>
            }
           
        </div>      
    </div>
  )
}

TextInputGroup.propTypes={
    label:propTypes.string.isRequired,
    name:propTypes.string.isRequired,
    placeholder:propTypes.string.isRequired,
    value:propTypes.string.isRequired,
    type:propTypes.string.isRequired,
    onChange:propTypes.func.isRequired,
}

TextInputGroup.defaultProps={
    type:'text'
}

export default TextInputGroup