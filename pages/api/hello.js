async function sendServerCommand(serverUrl, apiKey, command) {
  const url = `${serverUrl}/v1/server/exec`;
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    key: apiKey,
  };
  const body = new URLSearchParams({ command: command });

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: body,
    });
    const data = await response.text();
    return data;
  } catch (error) {
    console.error("Error sending command:", error);
    throw error;
  }
}

// Example usage
const serverUrl = "http://194.233.75.221:4567"; // Replace with your server's URL
const apiKey = "bogor123"; // Replace with your API key

export default function handler(req, res) {

  

  const { username, payment_method } = req.body;

  const command = `give ${username} minecraft:coal 10`
 
  sendServerCommand(serverUrl, apiKey, command)
    .then((response) => console.log(response))
    .catch((error) => console.error(error));

  res.status(200).json({ command : "ok" });
}
