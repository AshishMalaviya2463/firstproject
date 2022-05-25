import React from 'react'

export default function Math() {
    function sum(a , b) {
        return a + b;
    }function sub(a , b) {
        return a - b;
    }function mul(a , b) {
        return a + b;
    }function div(a , b) {
        return a / b;
    }
  return (
    <div>
      <ol>
          <li>sum : {sum(3,4)}</li>
          <li>substraction : {sub(3,4)}</li>
          <li>multplcaion : {mul(3,4)}</li>
          <li>division : {div(3,4)}</li>
      </ol>
    </div>
  )
}
