import React from 'react';

function Output(props){
	return(
		<>
			<form>
				<input className="out" value={props.otr}></input>
			</form>
		</>
	)
}

export default Output;