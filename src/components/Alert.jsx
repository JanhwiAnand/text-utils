import React from 'react'

function Alert(props) {
  const capitalize=(word)=>{
    const lower=word.toLowerCase();
    return lower.charAt(0).toUpperCase()+lower.slice(1);
  }
  // this is done so that the 1st letter of word success should be a capital letter
  return (
    
    props.alert && <div className="alert alert-success alert-dismissible fade show" role="alert">
  <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
  
</div>//here props.alert evaluates 1st, so if its null then ferther will not be evaluated due to && but when it will be true then evaluation will take place
    
  )
}

export default Alert
