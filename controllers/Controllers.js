const { esClient } = require("../config/esClient");

const helloWorld = () => res.send("Hello From ElasticSearch!");

const createProducts = async (req, res) => {
	try {
		const response = await esClient.index({
			index: "products",
			body: {
				id: req.body.id,
				name: req.body.name,
				price: req.body.price,
				description: req.body.description,
			},
		});
		console.log(response);
		res.send({ message: "Indexing Successful!", response });
	} catch (error) {
		res.send(error);
	}
};

const searchProducts = async (req, res) => {
	try {
		const searchText = req.query.text;
		const response = await esClient.search({
			index: "products",
			body: {
				query: {
					match: { name: searchText.trim() },
				},
			},
		});
		console.log(response.hits.hits);
		res.send(response.hits.hits);
	} catch (error) {
		res.send(error);
	}
};

const searchMultipleProducts = async (req, res) => {
	try {
		const searchText = req.query.text;
		const response = await esClient.search({
			index: "products",
			body: {
				query: {
					multi_match: {
						query: searchText.trim(),
						fuzziness: "auto",
						fields: ["name"],
					},
				},
			},
		});
		console.log(response);
		res.send(response);
	} catch (error) {
		res.send(error);
	}
};

const getAllProducts = async (req, res) => {
	try {
		const response = await esClient.search({
			index: "products",
			body: {
				query: { match_all: {} },
				//query: { match_all: { boost: 1.2 } },
			},
		});
		console.log(response.hits.hits);
		res.send(response.hits.hits);
	} catch (error) {
		res.send(error);
	}
};

module.exports = { helloWorld, createProducts, searchProducts, searchMultipleProducts, getAllProducts };
