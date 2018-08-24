const { clearHash } = require('../services/cache');

module.exports  = async (req, res, next) => {
	await next();
	console.log('Clearing Cache');
	clearHash(req.user.id);
};