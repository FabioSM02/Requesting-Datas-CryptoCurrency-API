const { json } = require("express");
const rp = require("request-promise");
require("dotenv/config");

module.exports = {
    async index(req, res) {
        const requestOptions = {
            method: "GET",
            uri: "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?",
            qs: {
                start: "1",
                limit: "51",
                aux: "cmc_rank",
            },
            headers: {
                "X-CMC_PRO_API_KEY": `${process.env.API_KEY_CMC}`,
            },
            json: true,
            gzip: true,
        };
        rp(requestOptions)
            .then((response) => {
                let data = response.data;
                let array = new Array();

                return res.status(200).json(data);
            })
            .catch((err) => {
                return res.status(400).json({ message: "Unexpected error" });
            });
    },
};