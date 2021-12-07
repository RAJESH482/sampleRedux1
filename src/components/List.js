import React from 'react'

function List() {
    const names=['Rajesh', 'Prem','Sandhya']
    const namelist = names.map(name => <h2>{name}</h2>)
    return (
        <div>
            {
                namelist
            }
        </div>
    )

}
export default List