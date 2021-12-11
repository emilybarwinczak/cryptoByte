const mongoose = require('mongoose')

const savedCoinSchema = new mongoose.Schema(
	{
		rank: {
			type: String,
		},
		symbol: {
			type: String,
		},
		supply: {
			type: String,
		},
        maxSupply: {
            type: String,
        },
        marketCapUsd: {
            type: String,
        },
        volumeUsd24Hr: {
            type: String,
        },
        priceUsd: {
            type: String,
        },
        changePercent24Hr: {
            type: String,
        },
        vwap24Hr: {
            type: String
        }
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Saved', savedCoinSchema)