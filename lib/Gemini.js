// this does order shit

const Gem = require('gemini-exchange-api');
const gem = new Gem('xZTuAhCCNDS7UI8Org3m', '2GExbmDkjkF3ABTtZ3b2CPLBdsH3');



exports.Gemini = {

	order_status : (order_id) => {
			return new Promise((resolve, rej) => {
				gem.order_status(order_id, (err, res) => {
					resolve(res)
				})
			})
		},


	set_order : (symbol, amount, price, side, type) => {
		return new Promise((resolve, rej) => {
			gem.set_order(symbol, amount, price, side, type, (err, res) => {
				resolve(res)
			})
		})
	},

	active_order : () => {
		return new Promise((resolve, rej) => {
			gem.get_active_order((err, res) => {
				resolve(res)
			})
		})
	},

	cancel_order : (order_id) => {
		return new Promise((resolve, rej) => {
			gem.cancel_order(order_id, (err, res) => {
				resolve(res)
			})
		})
	}

}