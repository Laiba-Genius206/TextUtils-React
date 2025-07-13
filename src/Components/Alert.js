import React from 'react';

export default function Alert(props) {
    const capitalize = (word) => {
        if (typeof word !== "string" || word.length === 0) return "";
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() ; 

}
  return (
    props.alert && ( 
       <div className={`alert alert-${props.alert.type} alert-dismissible fade show role="alert"`}>
          <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
      </div>
    )
  );
}

// oldest code
// const capitlaize = (word) => {
//         const lower = word.toLowerCase();
//         return lower.charAt(0).toUpperCase + lower.slice(1); 

//     }