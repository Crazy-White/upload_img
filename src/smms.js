const { sendPost } = require("./func");

// https://sm.ms

async function getRemoteURL(path, target) {
    const response = await sendPost(
        "https://sm.ms/api/v2/upload/",
        "smfile",
        path,
        {
            Authorization: "qk0WHwBx9NOcUWyMgqMo7o6YoMRAGHTX",
        }
    );
    if (!response.success) throw new Error(response.message);
    target.push(response.data.url);
    return response.data.url;
}

module.exports = getRemoteURL;
