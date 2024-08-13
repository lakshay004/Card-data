import axios, { AxiosResponse } from 'axios'
import React from 'react'



export const api = async () => {
    return await axios.get('https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas?page=1')
}
