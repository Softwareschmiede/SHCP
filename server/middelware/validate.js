var jwt = require('jsonwebtoken');
var Authorization = require('auth-header');

module.exports = function (req, res, next) {
    const authHeaderToken = req.get('authorization');

    console.log(authHeaderToken);

    if (!authHeaderToken) return res.status(401).send();

    const auth = Authorization.parse(authHeaderToken);

    jwt.verify(auth.token, process.env.JWT_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).send();
        }

        next();
    });
}