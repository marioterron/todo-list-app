function checkApiKey(req,res,next) {

  const { api_key } = req.query

  if (api_key === '12345' ) next()
	else res.json( { "msg": "You need to specify a valid API key" } )
}

module.exports = checkApiKey
