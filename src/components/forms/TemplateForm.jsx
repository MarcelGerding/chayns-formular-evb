import React from 'react';

/**
 * Import the desired components
 */
import { Input } from 'tobit-chayns_components/react-chayns-input';
import { Checkbox } from 'tobit-chayns_components/react-chayns-checkbox'
import { SelectButton } from 'tobit-chayns_components/react-chayns-selectbutton';
import Textarea from 'tobit-chayns_components/react-chayns-textarea';

export default class TemplateForm extends React.Component {

    static propTypes = {
        submit: React.PropTypes.func.isRequired,
        hideButton: React.PropTypes.bool
    };

    constructor() {
        super();
        /**
         *  Set form properties as object.
         *  Use the component event handlers to update these properties.
         *  The properties will be validated by the components themselves.
         */
        this.form = {
            Vorname: null,
            Nachname: null,
            Email: null,
            Telefon: null,
            Addresse: null,
            Kennzeichen: 'Keine Angaben',
            radio: 'PKW',
            Anmerkung: 'Keine Anmerkung'
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    /**
     * This method will be called when the submit button gets clicked and checks whether all properties set in the state got a value.
     * You can add additional security checks here.
     * Remember that some elements (like inputs) have their own methods to highlight those errors (See their documentation for more information).
     * If yes, the method onValid will be called. If no, onInvalid will be called.
     */
    onSubmit() {
        this._submit.classList.add('button--disabled');
        location.reload();
        if (this.isValid())
            this.props.submit ? this.props.submit(this.form) : null;
    }

        valueRadio() {
        if (this.refs.r1.checked) this.setValue('radio', this.refs.r1.value)
        else if (this.refs.r2.checked) this.setValue('radio', this.refs.r2.value)
        else if (this.refs.r3.checked) this.setValue('radio', this.refs.r3.value)
        else if (this.refs.r4.checked) this.setValue('radio', this.refs.r4.value)

    }

    /**
     * Checks whether all required properties are set.
     * ( Strings are secured via the regExp on the input elements )
     */
    isValid() {
        let valid = true;
        Object.keys(this.form).forEach((key) => {
            if (this.form[key] === null)
                valid = false;
        });
        return valid;
    }

    /**
     * Adds a value to the form object. If the form is valid the button will get enabled in case it is not hidden.
     */
    setValue(key, value) {
        this.form[key] = value;
        if (this.isValid())
            this._submit.classList.remove('button--disabled');
    }

    render() {
        
        


        return (
            <div className ='content__card'>
                { /** here starts the custom form. add components and set the desired value to the form object*/}
                <div className='tapp__content'>
                    <h2 className="headline">Ihre Kontaktdaten</h2>
                <Input className='input' responsive='true' placeholder='*Vorname' type='text' id='Vorname' ref='Vorname' onKeyUp={value => { this.setValue('Vorname', value) } } />
                <Input className='input' responsive='true' placeholder='*Nachname' type='text' id='Nachname' ref='Nachname' onKeyUp={value => { this.setValue('Nachname', value) } } />
                <Input className='input' responsive='true' placeholder='*E-Mail-Addresse' regExp="[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[a-z]{2}|[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b" type='text' id='Email' ref='Email' onKeyUp={value => { this.setValue('Email', value) } } />
                <Input className='input' responsive='true' placeholder='*Telefon' regExp='^[0-9|+]*$' type='text' id='Telefon' ref='Telefon' onKeyUp={value => { this.setValue('Telefon', value) } } />
                <Input className='input' responsive='true' placeholder='*Addresse' type='text' id='Addresse' ref='Addresse' onKeyUp={value => { this.setValue('Addresse', value) } } />
                <Input className='input' type='text' responsive='true' placeholder='Kennzeichen des bisherigen KFZ' id='Kennzeichen' ref='Kennzeichen' onKeyUp={value => { this.setValue('Kennzeichen', value) } } />

                    <div className='tapp__hint'>
                          <div className='table'>
                            <div className='table__row'>
                                <div className='table__cell'>
                                    <span>
                                        <input type='radio' className='radio' name='rbutton' ref='r1' value='PKW' id='radio1w47653' onClick={() => { this.valueRadio() } } defaultChecked />
                                        <label htmlFor='radio1w47653'>
                                            <div className='input0'  >PKW
                    </div>
                                        </label>
                                    </span>
                                </div><div className='table__cell'>
                                    <span>
                                        <input type='radio' className='radio' name='rbutton' ref='r2' value='Motorrad' id='radio2w47653' onClick={() => { this.valueRadio() } } />
                                        <label htmlFor='radio2w47653'>
                                            <div className='input1' name='fehler' >Motorrad
                    </div>
                                        </label>
                                    </span>
                                </div>
                            </div>
                            <div className='table__row'>
                                <div className='table__cell'>
                                    <span>
                                        <input type='radio' className='radio' name='rbutton' ref='r3' value='LKW' id='radio3w47653' onClick={() => { this.valueRadio() } } />
                                        <label htmlFor='radio3w47653'>
                                            <div className='input2'>LKW
                    </div>
                                        </label>
                                    </span>
                                </div>
                                <div className='table__cell'>
                                    <span>
                                        <input type='radio' className='radio' name='rbutton' ref='r4' value='Sonstiges' id='radio4w47653' onClick={() => { this.valueRadio() } } />
                                        <label htmlFor='radio4w47653'>
                                            <div className='input3' >Sonstiges
                    </div></label></span></div></div></div>


                    </div>
                    <label htmlFor='Kennzeichen'>Anmerkung:
                    <Textarea autogrow onKeyUp={value => { this.setValue('Anmerkung', value.target.value) } } /></label>


                </div>

                { /** submit button calling the validate function */}
                <div style={{ width: '100%', textAlign: 'center', marginTop: '20px', display: this.props.hideButton ? 'none' : 'inherit' }}>
                    <div ref={ref => { this._submit = ref; } } className="button button--disabled" onClick={() => { this.onSubmit() } }>
                        Submit
                    </div>
                </div>
            </div>
        );
    }
}