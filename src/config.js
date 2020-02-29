module.exports = {
    // Node.js app
    port: process.env.PORT || 9000,

    // API Gateway
    api: {
      serverUrl:
        process.env.API_SERVER_URL ||
        `http://localhost:${process.env.PORT || 9000}`,
    },
  
      // Database
    databaseUrl: process.env.DATABASE_URL || "mongodb://anurag07:jobpanel07@ds247410.mlab.com:47410/job-panel",
  
    // Authentication
    auth: {
      jwt: { secret: process.env.JWT_SECRET || 'default' }
    },
    mailTo: 'no-reply@eventTest.com',
    mailgun: {
        sender: "xyz.c0 <no-reply@xyz.co>",
        apiKey: process.env.MAILGUN_API_KEY || '948c1163affc534ea1cc1f42b2cb4181-9dda225e-ee8640d3',
        domain: ( process.env.MAILGUN_DOMAIN || process.env.MAILGUN_SMTP_LOGIN || 'sandbox0898f44a33534baa8448aa91b525546a.mailgun.org'),
        overrideRecipients: (process.env.OVERRIDE_EMAIL == "true"),
        mailingList: [
        ]
    },
  };