import React from 'react'

const Song = () => {

	const notes = [
		{ color: 'red', note: 'C', freq: 261.63 },
		{ color: 'purple', note: 'D', freq: 293.66 },
		{ color: 'yellow', note: 'E', freq: 329.63 },
		{ color: 'pink', note: 'F', freq: 349.23 },
		{ color: 'skyblue', note: 'G', freq: 392.00  },
		{ color: 'orange', note: 'A', freq: 440.00  },
		{ color: 'green', note: 'B', freq: 493.88  },
		{ color: 'blue', note: 'CM', freq: 523.25  },
	]
	const song = 'CCCDEEDEFG'
	const notesFromSong = [...song.split('')]
	return (
		<div>
		{notesFromSong.map(note => {
			const {color} = notes.find(n => n.note === note)
			return (
				<bold style = {{ color: color }}>{note}</bold>
			)
		})}
		</div>
	)
}

export default Song
