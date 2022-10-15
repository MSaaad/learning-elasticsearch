const elasticsearch = require("elasticsearch");

const esClient = elasticsearch.Client({ host: "localhost:9200" });

module.exports = { esClient };
