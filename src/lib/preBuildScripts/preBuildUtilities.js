const fs = require('fs');
const axios = require('axios').default;

module.exports.preBuildDevelopment = async() => {

    const siteName = `Jiaolong`;
 

    const API = `https://27l44m7v.api.sanity.io/v2022-03-07/data/query/production?query=*%5B_type+%3D%3D+%22website%22+%26%26+website_name+%3D%3D+%22${siteName}%22+%5D%5B0%5D`;

    const response = await axios.get(API);
    const data = response.data.result;

    fs.writeFileSync("./src/data/site-data.json", JSON.stringify(data))
}