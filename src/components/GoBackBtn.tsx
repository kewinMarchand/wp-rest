import React from 'react';
import {useNavigate} from "react-router-dom";

function GoBackBtn() {
    const navigate = useNavigate();

    function goBack() {
        navigate(-1)
    }

    return (
        <button
            onClick={goBack}
        >
            ⟵&nbsp;&nbsp;Retour
        </button>
    );
}


export { GoBackBtn };
