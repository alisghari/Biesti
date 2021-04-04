import axios from 'axios'
import React, { useState } from 'react'

const AddItem = () => {
    const [itemList, setItemList] = useState([])
    const [state, setState] = useState({ title: "", price: "", image: "" })
    const handleChange = (event) => {
        const { value, name } = event.target
        setState({ ...state, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        var requestOptions = {
            method: 'POST',
            body: state,
            redirect: 'follow'
        };

        axios.post("http://localhost:8000/items/add", requestOptions.body)
            .then(response => response.json())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        setState({ title: "", price: "", image: "" })
    }
    console.log({ state })
    console.log({ itemList })
    const { title, price, image } = state
    const [imagee,setImagee] = useState("")
    const uploadImage =async e=>{
        const files = e.target.files
        const data = new FormData()
        data.append('file',files[0])
        data.append('upload_preset','biesti')

        const res = await fetch("https://api.cloudinary.com/v1_1/biesti/image/upload",{
            method:'POST',
            body:data
        })
const file = await res.json()
console.log(file)
setImagee(file.secure_url)

    }
    return (
        <form className="form">
            <label >Titre :</label>
            <input className='form-control' value={title} name="title" onChange={handleChange} />
            <label >Price :</label>
            <input className='form-control' value={price} name="price" type="number" onChange={handleChange} />
            <label >Image :</label>
            <input className='form-control' value={image} name="image"  onChange={handleChange} />
            <button className="btn btn-primary" onClick={handleSubmit}> Submit</button>
        </form>
    )
}
export default AddItem