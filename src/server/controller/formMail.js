import service, {sendMail} from '../service/formMail';
import { addUser } from '../service/user';


let adminEmail = 'asharma.soccer@gmail.com'

export const sendMailController = (req, res) => {
    service.formMail(req,res)
}

export const user = async (req, res) => {
    try {
        let data = req.body
        let ret = await addUser(data);
        notifyMail('USER', data, data.email, 'Your data saved !!')
        notifyMail('ADMIN', data, adminEmail, 'New User Added !!')
        return res.send({
            message: 'done'
        })
    } catch (err) {
        console.log(err)
        return res.send('Something went wrong')
    }
}

const notifyMail = (type, data, recipient, subject) => {
    return sendMail(type, data, recipient, subject)
}