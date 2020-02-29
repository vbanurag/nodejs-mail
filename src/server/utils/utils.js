import config from '../../config'

var mailgun = require('mailgun-js')({apiKey: config.mailgun.apiKey, domain: config.mailgun.domain});

export const sendingMail = ( params ) => {
        let data = {
            from : config.mailTo,
            to : params.to,
            subject : params.subject,
            html: params.html,
        };

        mailgun.messages().send(data, function (error, body) {
            console.log(body);
          });
};
