import React, { useState } from 'react';

import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';

//import  'moment/locale/es';
//moment.locale('es') //cambio el idioma de moment a español


const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')
const now = moment().minutes(0).second(0).add(1,'hours');
const end = now.clone().add(1, 'hours');


export const CalendarModal = () => {

    const [dateStart, setDateStart] = useState( now.toDate() );
    const [dateEnd, setDateEnd] = useState( end.toDate() );

    const [formValues, setFormValues] = useState({
        title: 'Evento',
        notes: '',
        start:now.toDate(),
        end: end.toDate()
    });

    const {notes, title} = formValues;

    const handleInputChange = ({target}) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }

    const closeModal = () => {
        console.log('Closing')
    }

    const handleStartDateChange = (e) => {
        setDateStart(e);
        setFormValues({
            ...formValues,
            start: e
        });
    }

    const handleEndDateChange = (e) => {
        setDateEnd(e);
        setFormValues({
            ...formValues,
            start: e
        });
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        console.log(formValues)
    }
    return (
        <Modal
            isOpen={true}
            //onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            className="modal"
            closeTimeoutMS={ 200 }
            overlayClassName="modal-fondo"
        >
            <h1> Nuevo evento </h1>
            <hr />
            <form
                onSubmit={ handleSubmitForm }
                className="container">

                <div className="form-group">
                    <label>Fecha y hora inicio</label>
                    <DateTimePicker
                        className="form-control"
                        onChange={handleStartDateChange}
                        value={ dateStart }
                    />
                </div>

                <div className="form-group">
                    <label>Fecha y hora fin</label>
                    <DateTimePicker
                        className="form-control"
                        onChange={handleEndDateChange}
                        minDate={ dateStart}
                        value={ dateEnd }
                    />
                </div>

                <hr />
                <div className="form-group">
                    <label>Titulo y notas</label>
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="Título del evento"
                        name="title"
                        value={title}
                        onChange={ handleInputChange }
                        autoComplete="off"
                    />
                    <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                </div>

                <div className="form-group">
                    <textarea 
                        type="text" 
                        className="form-control"
                        placeholder="Notas"
                        rows="5"
                        name="notes"
                        value={notes}
                        onChange={ handleInputChange }
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>

            </form>
        </Modal>
        
    )
}
