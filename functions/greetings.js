/*===================================================
            ./functions/greetings.js
======================================================*/
exports.handler = async function (event, context) {
	return {
		statusCode: 200,
		body: 'Greetings Netlify Serverless Functions!',
	};
};
