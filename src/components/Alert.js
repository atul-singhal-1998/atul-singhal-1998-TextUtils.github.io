import React from 'react'

export default function Alert(props) {
  return (
    props.alert && <div className="alert alert-success" role="alert">
        <div>
    {props.alert.msg}
    </div>
</div>
  )
}
