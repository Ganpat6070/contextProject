import React, { useContext } from 'react'
import { FirstName, LastName } from '../App'
const CompC = () => {
    const firstName = useContext(FirstName);
    const lastName = useContext(LastName);

  return (
    <div>
        {/* My name is {firstName} {lastName} */}
    </div>
  )
}

export default CompC