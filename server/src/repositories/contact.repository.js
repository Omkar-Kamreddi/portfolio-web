const Contact = require("../models/Contact")

const saveContact = async (contactData) => {
    return await Contact.create(contactData)
}

const getContacts = async () => {
    return await Contact.find().sort({ createdAt: -1 })
}

module.exports = {
    saveContact,
    getContacts
}