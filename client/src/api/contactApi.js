import API from "./axios"

export const sendContactMessage = async (data) => {
    const response = await API.post("/contact", data)
    return response.data
}