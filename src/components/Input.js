import ReactDOM from 'react-dom/client';
import React, { useState, useEffect } from 'react';

import { RoundedImage } from "./Image";

export default class Input extends React.Component {
    class = "input";
    labelClass = "input__boxLabel";
    errorClass = "input__errorMessage";

    onFormInput = (event) => {
//        event.target.className = this.class;
//        event.target.labels[0].className = this.labelClass;
//        event.target.nextSibling.className = `${this.errorClass} invisible`;
        if(this.props.onInput)
            this.props.onInput(event.target);
    }

    onFormChange = (event) => {
//        event.target.className = this.class;
//        event.target.labels[0].className = this.labelClass;
//        event.target.nextSibling.className = `${this.errorClass} invisible`;
        if(this.props.onChange)
            this.props.onChange(event.target);
    }

    render(){
        return (
            <div className="input__box">
                { this.props.label && <label className={`${this.labelClass} ${this.props.error && this.props.error.hasError? "input__errorMessage" : ""}`} htmlFor={this.props.id}>{this.props.label}</label> }
                <input
                    id={this.props.id}
                    className={`${this.class} ${ this.props.error && this.props.error.hasError? "input--error" : ""}`}
                    name={this.props.name}
                    type={this.props.type}
                    placeholder={this.props.placeholder}
                    required={this.props.required}
                    disabled={this.props.disabled}
                    onInput={this.onFormInput}
                    onChange={this.onFormChange}
                />
                <span className={`${this.errorClass} ${this.props.error.hasError? "visible" : "invisible"}`}>{this.props.error.errorMessage}</span>
            </div>
        );
    }
}


export class IconedInput extends React.Component {
    class = "inputIcon__input";
    labelClass = "input__boxLabel";
    errorClass = "input__errorMessage";

    onFormInput = (event) => {
//        event.target.className = this.class;
//        event.target.labels[0].className = this.labelClass;
//        event.target.nextSibling.className = `${this.errorClass} invisible`;
        if(this.props.onInput)
            this.props.onInput(event.target);
    }

    onIconClick = (event) => {
        if(this.props.icon.onClick)
            this.props.icon.onClick(event.target);
    }

    onFormChange = (event) => {
//        event.target.className = this.class;
//        event.target.labels[0].className = this.labelClass;
//        event.target.nextSibling.className = `${this.errorClass} invisible`;
        if(this.props.onChange)
            this.props.onChange(event.target);
    }

    render(){
        return (
            <div className="input__box">
                <label className={`${this.labelClass} `} htmlFor={this.props.id}>{this.props.label}</label>
                <div className={`inputIcon__iconGroup ${this.props.error && this.props.error.hasError && "inputIcon__iconGroup--error"} ${this.props.style && this.props.style.border == "bottom-sm" && "inputIcon__iconGroup--bottomBorder-sm"} `}>
                    { this.props.custom && <span className="inputIcon__icon">{this.props.custom}</span> }
                    { this.props.logo && this.props.logo.src && <span className="inputIcon__logo"><RoundedImage src={this.props.logo.src}/></span> }
                    { this.props.logo && this.props.logo.text  && <span className="inputIcon__icon">{this.props.logo.text}</span> }
                    { this.props.icon && this.props.icon.position == "left" && <span className={`inputIcon__icon ${ this.props.icon.name }`} onClick={this.onIconClick}></span> }
                    { this.props.type == "select" &&
                        <select
                            id={this.props.id}
                            className={`${this.class} ${this.props.error && this.props.error.hasError? "input--error" : ""}`}
                            name={this.props.name}
                            required={this.props.required}
                            disabled={this.props.disabled}
                            onInput={this.onFormInput}
                            onBlur={this.onFormChange}
                        >
                        <option value="" className="input__option">CHOOSE {this.props.name.toUpperCase()} ...</option>
                        {
                            Object.entries(this.props.options).map(([key,value])=>{
                                return <option className="input__option" value={key} selected={value.name == this.props.selected}>{value.name.toUpperCase()}</option>
                            })
                        }
                        </select>
                    }
                    {  this.props.type != "select" &&
                        <input
                            id={this.props.id}
                            className="inputIcon__input"
                            name={this.props.name}
                            type={this.props.type}
                            placeholder={this.props.placeholder}
                            required={this.props.required}
                            disabled={this.props.disabled}
                            onInput={this.onFormInput}
                            onBlur={this.onFormChange}
                            min={this.min}
                            max={this.max}
                            step={this.step}
                        />
                    }
                    { this.props.icon && this.props.icon.position == "right" && <span className={`inputIcon__icon ${ this.props.icon.name }`} onClick={this.onIconClick}></span> }
                </div>
                { this.props.underLabel && <div className="input__underLabel">{ this.props.underLabel }</div> }
                { this.props.error && <span className={`${this.errorClass} ${this.props.error.hasError? "visible" : "invisible"}`}>{this.props.error.errorMessage}</span> }
            </div>
        );
    }
}


export class Select extends React.Component {
    class = "input";
    labelClass = "input__boxLabel";
    errorClass = "input__errorMessage";

    onFormInput = (event) => {
        event.target.className = this.class;
        event.target.labels[0].className = this.labelClass;
        event.target.nextSibling.className = `${this.errorClass} invisible`;

        if(this.props.onInput)
            this.props.onInput(event.target);
    }

    render(){
        return (
            <div className="input__box">
                <label className={`${this.labelClass} ${this.props.error && this.props.error.hasError? "input__errorMessage" : ""}`} htmlFor={this.props.id}>{this.props.label}</label>
                <select
                    id={this.props.id}
                    className={`${this.class} ${this.props.error && this.props.error.hasError? "input--error" : ""}`}
                    name={this.props.name}
                    required={this.props.required}
                    disabled={this.props.disabled}
                    onInput={this.onFormInput}
                >
                <option value="" className="input__option">CHOOSE {this.props.name.toUpperCase()} ...</option>
                {
                    Object.entries(this.props.options).map(([key,value])=>{
                        return <option className="input__option" value={key} selected={key == this.props.selected}>{value.name.toUpperCase()}</option>
                    })
                }
                </select>
                <span className={`${this.errorClass} ${this.props.error && this.props.error.hasError? "visible" : "invisible"}`}>{this.props.error && this.props.error.errorMessage}</span>
            </div>
        );
    }
}


export class CheckBoxInput extends React.Component {
    class = "input__check";

    onFormCheckInput = (event) => {
        event.target.className = this.class;
        event.target.parentNode.nextSibling.className = `${this.errorClass} invisible`;

        if(this.props.onInput)
            this.props.onInput(event.target);
    }

    render(){
        return (
            <div className="input__box">
                <div className="input__checkbox">
                    <input
                        id={this.props.id}
                        className={`${this.class} ${this.props.error && this.props.error.hasError? "input--error" : ""}`}
                        name={this.props.name}
                        type="checkbox"
                        placeholder={this.props.placeholder}
                        required={this.props.required}
                        disabled={this.props.disabled}
                        defaultChecked={this.props.checked}
                        onInput={this.onFormCheckInput}
                    />
                    { this.props.label && <label className="input__checkboxLabel" htmlFor={this.props.id}>{this.props.label}</label> }
                </div>
                <span className={`input__errorMessage ${this.props.error && this.props.error.hasError? "visible" : "invisible"}`}>{this.props.error && this.props.error.errorMessage}</span>
            </div>
        );
    }
}


export class ToggleInput extends React.Component {
    class = "input__toggle";

    onFormCheckInput = (event) => {
        event.target.className = this.class;
//        event.target.parentNode.nextSibling.className = `${this.errorClass} invisible`;

        if(this.props.onInput)
            this.props.onInput(event.target);
    }

    render(){
        return (
            <div className="input__box">
                <div className="input__toggleBox">
                    <label className="input__toggleSwitch">
                        <input
                            id={this.props.id}
                            className={this.class}
                            name={this.props.name}
                            type="checkbox"
                            required={this.props.required}
                            disabled={this.props.disabled}
                            defaultChecked={this.props.checked}
                            onInput={this.onFormCheckInput}
                        />
                        <span className="input__toggleSlider"></span>
                    </label>
                    { this.props.label && <label className="input__toggleLabel" htmlFor={this.props.id}>{this.props.label}</label> }
                </div>
                <span className={`input__errorMessage ${this.props.error && this.props.error.hasError? "visible" : "invisible"}`}>{this.props.error && this.props.error.errorMessage}</span>
            </div>
        );
    }
}


export class RadioInput extends React.Component {
    class = "input__radio";

    onFormCheckInput = (event) => {
        event.target.className = this.class;
        event.target.parentNode.nextSibling.className = `${this.errorClass} invisible`;

        if(this.props.onInput)
            this.props.onInput(event.target);
    }

    render(){
        return (
            <div className="input__box">
                <div className="input__radioBox">
                    <input
                        id={this.props.id}
                        className={`${this.class} ${this.props.error && this.props.error.hasError? "input--error" : ""}`}
                        name={this.props.name}
                        type="radio"
                        placeholder={this.props.placeholder}
                        required={this.props.required}
                        disabled={this.props.disabled}
                        defaultChecked={this.props.checked}
                        onInput={this.onFormCheckInput}
                    />
                    { this.props.label && <label className="input__radioLabel" htmlFor={this.props.id}>{this.props.label}</label> }
                </div>
                <span className={`input__errorMessage ${this.props.error && this.props.error.hasError? "visible" : "invisible"}`}>{this.props.error && this.props.error.errorMessage}</span>
            </div>
        );
    }
}


export class SingleInput extends React.Component {
    class = "input input__verification";

    onFormInput = (event) => {
        event.target.className = this.class;

        if(event.target.value != "" && event.target.nextSibling)
            event.target.nextSibling.focus();

    }

    onKeyDown = (event) => {
        if(event.code == "Backspace" && event.target.value == "" && event.target.previousSibling){
            event.target.previousSibling.focus();
            event.target.previousSibling.setSelectionRange(1,1);
        }


        if(event.code == "ArrowLeft" && event.target.previousSibling){
            event.target.previousSibling.focus();
            event.target.previousSibling.setSelectionRange(1,1);
            event.preventDefault();
         }

        if(event.code == "ArrowRight" && event.target.nextSibling){
            event.target.nextSibling.focus();
            event.target.nextSibling.setSelectionRange(1,1);
            event.preventDefault();
        }
    }

    render(){
        return (
                <input
                    id={this.props.id}
                    className={`${this.class} ${this.props.error && this.props.error.hasError? "input--error" : ""}`}
                    name={this.props.name}
                    type={this.props.type}
                    maxLength="1"
                    minLength="1"
                    required={this.props.required}
                    disabled={this.props.disabled}
                    onInput={this.onFormInput}
                    onKeyDown={this.onKeyDown}
                />
        );
    }
}


export function FileUpload (props) {
//    const class = "input__fileUpload";
    const [files, setFiles] = useState([]);

    const handleFileChange = (event) => {
        const selectedFiles = event.target.files;
        if (selectedFiles && selectedFiles.length > 0) {
              const newFiles = Array.from(selectedFiles);
              setFiles((prevFiles) => [...prevFiles, ...newFiles]);
            }
      };

    const handleDrop = (event) => {
        event.stopPropagation();
        event.preventDefault();
        const droppedFiles = event.dataTransfer.files;
        if (droppedFiles.length > 0) {
          const newFiles = Array.from(droppedFiles);
          setFiles((prevFiles) => [...prevFiles, ...newFiles]);
        }
      };

    const handleRemoveFile = (index) => {
        setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));

      };

    useEffect(() => {
        props.onFilesSelected(files);

      }, [files, props.onFilesSelected]);


    const onFormInput = (event) => {
        event.target.className = this.class;

        if(event.target.value != "" && event.target.nextSibling)
            event.target.nextSibling.focus();

    }

    const onClick = (event) => {
        event.preventDefault();
        let id = document.getElementById(props.id);
        id.click();

    };

    return (
            <div>
            <div className="input__fileUpload" onDrop={handleDrop} onDragOver={(event) => event.preventDefault()} >
                <div className="input__fileUploadIcon fa fa-upload" onClick={onClick}></div>
                <div className="input__fileUploadTextBox" onClick={onClick}>
                    <label htmlFor={props.id}>Drag and drop here or click to upload {props.label}</label>
                    <p className="">{props.fileFormats}</p>
                </div>

                <div className="input__fileUploadTextBox--sm">Upload {props.label}</div>
                <button className="input__fileUploadTextButton" onClick={onClick}>Upload</button>

                <input
                    id={props.id}
                    hidden
                    onChange={handleFileChange}
                    accept={props.accept}
                    name={props.name}
                    type="file"
                    required={props.required}
                    disabled={props.disabled}

                />
            </div>

                {files.length > 0 && (
                      <div className="file-list">
                        <div className="file-list__container">
                          {files.map((file, index) => (
                            <div className="file-item" key={index}>
                              <div className="file-info">
                                <p>{file.name}</p>
                                {/* <p>{file.type}</p> */}
                              </div>
                              <div className="file-actions">
                                <div onClick={() => handleRemoveFile(index)}><span className="fa fa-remove"></span></div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                )}
            </div>
    );
}