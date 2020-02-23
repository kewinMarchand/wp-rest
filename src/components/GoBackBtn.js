import React from 'react';

// Router
import { withRouter } from "react-router";

// Ui
import { Button } from '@material-ui/core';

// Exemple de composant de Material-ui
function GoBackBtn(props) {
    return (
        <Button
            color={"inherit"}
            variant={"outlined"}
            onClick={() => props.history.goBack()}
        >
            ⟵&nbsp;&nbsp;Retour
        </Button>
    );
}

const ComponentWithRouter = withRouter(GoBackBtn);

export { ComponentWithRouter as GoBackBtn };
