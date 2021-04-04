import React, { useEffect, useState } from 'react'
import ItemCard from '../../components/ItemCard/ItemCard';
import axios from 'axios'




const CardList = () => {
    const [itemList, setItemList] = useState([])

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/users/delete/${id}`)
            const response = await axios.get('http://localhost:8000/items/showitems')
            console.log('response', response.data)
            setItemList(response.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        const fetchdata = async () => {

            try {
                const response = await axios.get('http://localhost:8000/items/showitems')
                console.log('response', response.data)
                setItemList(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchdata()
    }, [])

    console.log(itemList)
    return (
        <ul style={{ listStyleType: "none" }} className="card-item-list">
            {itemList?.map(card => <ItemCard handleDelete={() => handleDelete(card._id)} card={card} />)}
        </ul>
    );
};
export default CardList




