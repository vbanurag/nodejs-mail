import ejs from 'ejs';
import fs from 'fs';
import path from 'path';
import { sendingMail } from '../utils/utils';

let service = {};

const CONSTANTS = {
    'USER': 'src/server/template/followUpMail.ejs',
    'ADMIN': 'src/server/template/formMail.ejs'
}

const formMail = async (req, res) => {
    try {
        let { type } = req.query;
        let template = await prepareData(type);
        sendingMail({ html: template, to: req.body.email, subject: `Information to ${type}` });
        return res.status(200).send('Mail sent');
    } catch (err) {
        return res.status(400).send('Something went wrong');
    }
}

export const sendMail = async (type, data, recipient, subject) => {
    let template = await prepareData(type, data);
    sendingMail({ html: template, to: recipient, subject: subject ? subject : `Information to ${type}` });
}

const prepareData = (type, data) => {
    return new Promise(async (res, rej) => {
        const templatePath = fs.readFileSync(path.join(global.appRoot, CONSTANTS[type]), 'utf8');
        const html = await ejs.render(templatePath, data);
        res(html)
    })
}

export default service = {
    formMail,
};