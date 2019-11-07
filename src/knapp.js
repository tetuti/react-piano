import React, { useState } from 'react'

const audioContext = new AudioContext

const createOscillator = (freq) => {
	const oscillator = audioContext.createOscillator()
	oscillator.frequency.value = freq
	oscillator.type = 'sine'
	oscillator.connect(audioContext.destination)
	return oscillator
}

const Knapp = ({color, note, freq}) => {
	const [currentOscillator, setCurrentOscillator] = useState(null)

	const start = () => {
		const osc = createOscillator(freq)
		osc.start()
		setCurrentOscillator(osc)
	}

	const stop = async() => {
		currentOscillator.stop()
		currentOscillator.disconnect()
		setCurrentOscillator(null)
	}
	return (
		<div 
			className='button'
			style = {{

				backgroundColor: color
			}}
			onTouchStart = {start}
			onTouchEnd = {stop}
			onMouseDown = {start}
			onMouseUp = {stop}
			/>
	)
}

export default Knapp
