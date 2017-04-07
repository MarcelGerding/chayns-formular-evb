import React from 'react';

/**
 * Import the desired form component in this class and display it inside the tapp content
 */
import TemplateForm  from './forms/TemplateForm.jsx';


export default class Content extends React.Component {
    constructor() {
        super();
        this.submitForm = this.submitForm.bind(this);
    }

    /**
     * This method calls the submit function of the form, which was provided as a prop.
     * It can be used as an alternative to the form button. Hide the form button with the prop hideButton set to true.
     */
    submitForm(){
        this.form.onSubmit();
    }

    /**
     * This function will be set as submit prop for the TemplateForm-element
     */
    onSubmit(supportObj) {
        console.log(supportObj)
        chayns.intercom.sendMessageToPage({
            text: supportObj.Vorname + ' ' + supportObj.Nachname + ' hat eine EVB Nummer angefordert.\nEmail: ' + supportObj.Email + '\nTelefon: ' + supportObj.Telefon + '.\nAddresse: ' + supportObj.Addresse + '\nKennzeichen des bisherigen KFZ: ' + supportObj.Kennzeichen + '\nFahrzeug: ' + supportObj.radio + '\nAnmerkung: ' + supportObj.Anmerkung
        });
        chayns.dialog.alert('', 'Sie haben erfolgreich eine EVB Nummer beantragt. Wir bearbeiten ihre Anfrage so schnell wie möglich');
    }

    render() {
        return (
            <div className="tapp__content content">
                <TemplateForm ref={ref => {this.form = ref}} submit={res => { this.onSubmit(res)}} />
            </div>
        );
    }
}