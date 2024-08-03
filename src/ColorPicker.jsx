import React, {useState} from 'react'

const ColorPicker = () => {
    const [color, setcolor] = useState("#FFFFFF")
    
    const handleColorChange = (event) =>{
        setcolor(event.target.value)
    }
  return (
    <div className='color-picker-container'>
        <h1>Color Picker</h1>
        <div className="color-display" style={{backgroundColor: color}}>
            <p>Selected Color : {color}</p>
        </div>
        <label htmlFor="">
            Select a color
        </label>
        <input type="color" name="" id="" value={color} onChange={handleColorChange} />
    </div>
  )
}

export default ColorPicker
