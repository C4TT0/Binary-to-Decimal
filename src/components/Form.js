import React from 'react';

function Form(props){

  const handleC = (event) => {
    event.preventDefault();
    props.cfx(event.currentTarget.inp.value);
  }

  return(
    <>
      <div className="form">
        <div className="innerForm"> 
          <form onSubmit={handleC}>
            <input name="inp" className="inp" placeholder="Type Binary Data here...." autoComplete="off" pattern="[0-1]+"></input>
            <button type="submit" className="btn">
              <i className="fas fa-exchange-alt"></i>Convert
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;