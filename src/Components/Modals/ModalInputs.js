import React, { useLayoutEffect, useRef } from "react";
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";

const handleKeyDown = (evt, handleIncreasingNumbersOnKeys, type) => {

  if (type === "text") {
    if (evt.which === 13 || evt.keyCode === 13) {
      evt.preventDefault();
    }
  } else if (type === "number") {
    const regex = new RegExp(/(^\d*$)|(Backspace|Tab|Delete|ArrowLeft|ArrowRight)/);
    //below is to allow floating numbers, decimals.
    // regex = new RegExp(/(^\d*\.?\d*$)|(Backspace|Tab|Delete|ArrowLeft|ArrowRight)/)
    ["e", "E", "+", "-", "."].includes(evt.key) && evt.preventDefault();
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 && charCode > 57)) {
      return false;
    }
    if (evt.keyCode === 13) { evt.preventDefault(); } // prevent user to copy pas
    if ((evt.which === 38 || evt.which === 40) && handleIncreasingNumbersOnKeys) {
      evt.preventDefault();
    }
    if (!evt.key.match(regex) && handleIncreasingNumbersOnKeys) evt.preventDefault();
  }
}

export const TextInput = ({
  label,
  maxLength,
  name = "",
  id,
  ClassName = "",
  setFocused,
  labelClassName = "",
  type = "text",
  value = "",
  handleChange,
  handleScrollingDisable,
  handleIncreasingNumbersOnKeys,
  smallLabel = "",
  disabled,
  onBlur,
  style,
  search,
  min = "0",
  max
}) => {
  const handleBlur = (e) => !e.target.value && setFocused("");
  const handleFocus = () => setFocused("focused");
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (ref.current) ref.current.style.setProperty("height", search ? "28px" : "45px", "important");
  }, []);
  return (
    <React.Fragment>
      {type === 'text' ?
        <textarea
          ref={ref}
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          onWheel={handleScrollingDisable}
          onKeyDown={(e) => handleKeyDown(e, handleIncreasingNumbersOnKeys, type)}
          onBlur={onBlur ? onBlur : handleBlur}
          onFocus={handleFocus}
          className={`${ClassName} ${disabled === true ? "notAllowed disabled-input" : ""}`}
          id={id}
          disabled={disabled}
          style={style ? style : {}}
          min={min}
          max={max}
          maxLength={maxLength}
        // required={type === "date" ? true : false}
        /> :
        <input
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          onWheel={handleScrollingDisable}
          onBlur={onBlur ? onBlur : handleBlur}
          onFocus={handleFocus}
          className={`${ClassName} ${disabled === true ? "notAllowed disabled-input" : ""}`}
          id={id}
          disabled={disabled}
          style={style ? style : {}}
          min={min}
          max={max}
          maxLength={maxLength}
          onKeyDown={(e) => type === "number" ? handleKeyDown(e, handleIncreasingNumbersOnKeys, type) : {}}
          required={(type === "date") || (type === "datetime-local") ? true : false}
        />}
      <label htmlFor={id} className={`${labelClassName} ${disabled ? "disabled-label" : ""}`}>
        {label}
      </label>
      {smallLabel && <small>{smallLabel}</small>}
    </React.Fragment>
  );
};

export const CheckBox = ({
  id,
  label,
  name,
  value,
  handleCheckChange = () => { },
  labelClass,
  checked,
  disabled,
  className = "",
}) => {
  return (
    <div style={disabled ? { opacity: "0.7" } : {}} className={`nkcheckbox ${className}`}>
      <input
        type="checkbox"
        className={`checkboxbtn pointer  ${disabled === true ? "notAllowed disabled-checkbox" : ""}`}
        id={id}
        name={name}
        value={value ? value : label}
        onChange={handleCheckChange}
        checked={checked}
      />
      <label htmlFor={id} className={`${labelClass} ${disabled ? "disabled-label" : ""}`} title={label}>
        {label}
      </label>
    </div>
  );
};

export const TextArea = ({
  label,
  id,
  ClassName = "",
  setFocused,
  labelClassName = "",
  smallLabel,
  value = "",
  placeHolder = "",
  maxLength,
  setStateValue = () => { },
}) => {
  const handleBlur = (e) => !e.target.value && setFocused("");
  const handleFocus = () => setFocused("focused");
  const handleChange = (e) => setStateValue(e.target.value);
  return (
    <React.Fragment>
      <textarea
        name=""
        onBlur={handleBlur}
        onFocus={handleFocus}
        onChange={handleChange}
        value={value}
        className={ClassName}
        id={id}
        placeholder={placeHolder}
        maxLength={maxLength}
      ></textarea>
      <label htmlFor={id} className={labelClassName}>
        {label}
      </label>
      {smallLabel && <small>{smallLabel}</small>}
    </React.Fragment>
  );
};

export const InputField = ({
  handleBlur = () => { },
  handleFocus = () => { },
  handleChange = () => { },
  handleScrollingDisable = () => { },
  handleIncreasingNumbersOnKeys,
  id = "",
  ClassName = "",
  label = "",
  name = "",
  value = "",
  type = "text",
  placeHolder = "",
  disabled,
  min = "0",
  maxLength,
  max,
  login,
  style,
  readOnly,
  textArea,
  step,
  filterModal,
  deleteField,
  onClickDelete
}) => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (ref.current) {
      if (textArea) {
        ref.current.style.setProperty("height", "38px", "important");
      } else if (!login) {
        ref.current.style.setProperty("height", "45px", "important");
      }
    }

  }, []);

  return (
    <div >
      {type === 'text' ?
       <div className="text-field-position"> <textarea
          ref={ref}
          type={type}
          name={name}
          style={style}
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={`${ClassName} ${disabled === true ? "notAllowed disabled-input" : ""}`}
          onWheel={handleScrollingDisable}
          id={id}
          min={min}
          maxLength={maxLength}
          disabled={disabled}
          readOnly={readOnly}
          onChange={handleChange}
          placeholder={placeHolder}
          // required={type === "date" ? true ? true : false : false}
          onKeyDown={(e) => handleKeyDown(e, handleIncreasingNumbersOnKeys, type)}
        />
          {deleteField ? <span class="removeClick" onClick={onClickDelete}>&times;</span> : null}
        </div> :
        <input
          type={type}
          name={name}
          style={style}
          value={value}
          step={step}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onWheel={handleScrollingDisable}
          className={`${ClassName} ${disabled === true ? "notAllowed disabled-input" : ""}`}
          id={id}
          min={min}
          readOnly={readOnly}
          max={max}
          maxLength={maxLength}
          disabled={disabled}
          onChange={handleChange}
          placeholder={placeHolder}
          required={(type === "date") || (type === "datetime-local") && !filterModal ? true : false}
          onKeyDown={(e) => handleKeyDown(e, handleIncreasingNumbersOnKeys, type)}
        />}

      {label && (
        <label htmlFor={id} className={`animlable ${disabled ? "disabled-label" : ""}`}>
          {label}
        </label>
      )}
    </div>
  );
};

export const TextAreaInput = ({
  handleBlur,
  handleFocus,
  handleChange,
  id,
  ClassName,
  label,
  name = "",
  value = "",
  smallLabel,
  disabled = false
}) => {

  return (
    <>
      <textarea
        name={name}
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`${ClassName} ${disabled === true ? "notAllowed disabled-input" : ""}`}
        id={id}
        onChange={handleChange}
        disabled={disabled}
        maxLength={250}
      ></textarea>
      <label htmlFor={id} className={`animlable ${disabled ? "disabled-label" : ""}`}>
        {label}
      </label>
      {smallLabel && <small>{smallLabel}</small>}
    </>
  );
};

export const DateTimePicker = ({
  className,
  label,
  name = "",
  value = "",
  disabled = false,
  placeholder,
  isValidDate,
  handleChange,
  id,
  dateFormat,
  timeFormat,
  viewMode,
  renderInput
}) => {
  let inputProps = {
    placeholder: placeholder,
    className: `${className} form-control custfield`,
  };
  return (
    <>
      <Datetime
        value={value}
        inputProps={inputProps}
        onChange={handleChange}
        isValidDate={isValidDate}
        dateFormat={dateFormat}
        timeFormat={timeFormat}
        viewMode={viewMode}
        // renderInput={renderInput}
        renderInput={(props) => {
          return <input {...props} value={(value) ? props.value : ''} />
        }}
      />
      <label htmlFor={id} className={`animlable ${disabled ? "disabled-label" : ""}`}>
        {label}
      </label>
    </>
  );
};

export const Radio = ({
  value,
  checked,
  name,
  label
}) => {
  return (
    <>
      <input type="radio" value={value} checked={checked} name={name} />
      <span className="listTn">{label}</span>
    </>
  )
}


export const DropDownField = ({
  id,
  label,
  name,
  value,
  onChange = () => { },
  disabled,
  className = "",
  dropDownData = [],
  errorMsg,
  removePleaseSelect
}) => {
  return (
    <div style={disabled ? { opacity: "0.7" } : {}}>
      <select
        onChange={onChange}
        value={value}
        className={`form-control custfield ${disabled ? "disabled-input" : ""}`}
        id={id}
        name={name}
        disabled={disabled}
      >
        {!removePleaseSelect && <option value="">Please Select</option>}
        {
          dropDownData?.length ?
            dropDownData.map((data, index) => {
              return <option key={data.value+index} value={data.value} >{data.label}</option>
            })
            : null
        }
      </select>
      <label htmlFor="sprov" className={`animlable ${disabled ? "disabled-label" : ""}`}>
        {label}
      </label>
      <span className="fieldError">{errorMsg}</span>
    </div>
  );
};


export const Accordion = ({
  index,
  name,
  changeVisibility,
  mainContent,
  className
}) => {
  return (
    <div id="main">
      <div class={`container ${className}`}>
        <div class="accordion" id="addPermissionGroup">
            <div class="card">
              <div class="card-header" onClick={changeVisibility} id={`addPermissionGrouphead${index + 1}`}>
                <a href="#" class="btn btn-header-link" data-toggle="collapse" data-target={`#addPermissionGroup${index + 1}`}
                  aria-expanded="true" aria-controls={`addPermissionGroup${index + 1}`}>{name}</a>
              </div>
              <div id={`addPermissionGroup${index + 1}`} class={`collapse ${index === 0 ? 'show' : ''}`} aria-labelledby={`addPermissionGrouphead${index + 1}`} data-parent="#addPermissionGroup">
                <div class="card-body p-4">
                {mainContent}
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};