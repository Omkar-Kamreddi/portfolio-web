const contactRepository = require("../repositories/contact.repository")

const createContactMessage = async (contactData) => {
    return await contactRepository.saveContact(contactData)
}

const fetchContacts = async () => {
    return await contactRepository.getContacts()
}

module.exports = {
    createContactMessage,
    fetchContacts
}