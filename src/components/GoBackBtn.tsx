import React from 'react';
import {useNavigate} from "react-router-dom";

function GoBackBtn() {
    const navigate = useNavigate();
    return (
        <button
            onClick={() => navigate(-1)}
        >
            ⟵&nbsp;&nbsp;Retour
        </button>
    );
}


export { GoBackBtn };
