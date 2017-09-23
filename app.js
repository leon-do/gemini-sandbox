const {Gemini} = require('./lib/Gemini.js')

const Trade = async () => {

	const orderStatus = await Gemini.order_status('76022952')
	console.log(orderStatus)

	/*
		btcusd || ethusd
		amount
		quote
		buy || sell
	*/
	const setOrder = await Gemini.set_order("btcusd", "2",   "802.7", "buy", "exchange limit")
	console.log(setOrder)

	const activeOrders = await Gemini.active_order()
	console.log(activeOrders)

	const cancelOrder = await Gemini.cancel_order(76022958)
	console.log(cancelOrder)

}

Trade()