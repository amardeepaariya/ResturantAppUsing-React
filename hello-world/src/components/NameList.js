import React from 'react';
import Person from './Person';

function NameList() {
        const persons = [
            {
                id: 1,
                name: 'Amardeep',
                age: 20,
                skill: 'spring'
            },
            {
                id: 2,
                name: 'Ruchi',
                age: 18,
                skill: 'java'
            },
            {
                id: 3,
                name: 'Deep',
                age: 22,
                skill: 'Hibernate'
            }
        ]
    const personList = persons.map(person => <Person key={Person.id} person={person} />)
    return <div>{personList}</div>
}

export default NameList;