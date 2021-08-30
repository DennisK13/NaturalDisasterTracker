import React from 'react'

interface Props {
    
}

export const Option = ({category}:any) => {
    return (
        <option value={category.id}>{category.title}</option>
    )
}
