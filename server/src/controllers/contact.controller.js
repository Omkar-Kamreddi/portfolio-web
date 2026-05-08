const contactService = require("../services/contact.service")

const createContact = async (req, res) => {

    try {

        const savedMessage =
            await contactService.createContactMessage(req.body)

        res.status(201).json({
            success: true,
            message: "Message sent successfully",
            data: savedMessage
        })

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        })

    }

}

const getContacts = async (req, res) => {

    try {

        const contacts =
            await contactService.fetchContacts()

        res.status(200).json({
            success: true,
            count: contacts.length,
            data: contacts
        })

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        })

    }

}

module.exports = {
    createContact,
    getContacts
}