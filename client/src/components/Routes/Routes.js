import React from 'react';
import routes from '../../routes/routes';
import routesHelper from '../../helpers/routes.helper';


function Routes() {
    return (
        <React.Fragment>
            {routes.map(route => routesHelper(route))}
        </React.Fragment>
    );
}

export default Routes;
