//adding and removing destinations from store
import uuid from 'uuid';

const addDestination = ({
    continent = '',
    country = '',
    city = ''
} = {}) => ({
    type: 'ADD_DESTINATION',
    destination: {
        id: uuid(), 
        continent, country, city
    }
});

const removeDestination = ({ id } = {}) => ({
    type: 'REMOVE_BOOK',
    id
});

export default addDestination;