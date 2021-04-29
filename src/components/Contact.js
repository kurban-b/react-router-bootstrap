import React from 'react';

function Contact() {
    return (
        <div className='col-12 contact'>
            <h3 className='title text-center mb-3'>Наше местоположение</h3>
            <div className="map">
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A08a8a633d11cc1646471bec32440752b88a8816bf021839294bbe674e1fd63e2&amp;source=constructor">
                </iframe>
            </div>
        </div>
    );
}

export default Contact;