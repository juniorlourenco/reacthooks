import React from 'react';

export const data = {
    number: 123,
    text: 'Context api...'
}

const DataContext = React.createContext(data);

export default DataContext;