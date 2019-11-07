import React from 'react'
import Knapp from './knapp'

const Knappar = () => {

	const listaMedKnappar = [
		{ color: 'red', note: 'C', freq: 261.63 },
		{ color: 'purple', note: 'D', freq: 293.66 },
		{ color: 'yellow', note: 'E', freq: 329.63 },
		{ color: 'pink', note: 'F', freq: 349.23 },
		{ color: 'skyblue', note: 'G', freq: 392.00  },
		{ color: 'orange', note: 'A', freq: 440.00  },
		{ color: 'green', note: 'B', freq: 493.88  },
		{ color: 'blue', note: 'CM', freq: 523.25  },

	]
	return (
		<>
			{listaMedKnappar.map(knapp => (
				<Knapp key = {knapp.note} {...knapp} />
			))}
		</>
	)
}

export default Knappar
