import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

axios.defaults.baseURL = "https://66bf5a4342533c403145e81f.mockapi.io"

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI)=>{

    try {
        const data = await axios.get('/contacts')
        return data.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }

})

export const addContact = createAsyncThunk('contacts', async (newcontact,thunkAPI)=>{
    try {
        const data = await axios.post('/contacts', newcontact)
        return data.data
    } catch (error) {
        thunkAPI.rejectWithValue(error)
    }
})

export const deleteContact = createAsyncThunk('contacts/deleteContact', async(id, thunkAPI)=>{
    try {
        const data = await axios.delete(`contacts/${id}`)
        console.log(data);
        return data.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})