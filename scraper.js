const axios = require("axios");
const cheerio = require("cheerio");

axios
  .get("https://www.fifaindex.com/players/")
  .then((response) => {
    const $ = cheerio.load(response.data);

    $("tbody > tr[data-playerid]").each(async (i, element) => {
      const name = $(element).find('td[data-title="Name"] > a').text();
      const nationality = $(element)
        .find('td[data-title="Nationality"] > a')
        .attr("title");
      const club = $(element).find('td[data-title="Team"] > a').attr("title");
      const overallRating = $(element)
        .find('td[data-title="OVR / POT"] > span:nth-child(1)')
        .text();

      console.log({ name, nationality, club, overallRating });
    });
  })
  .catch((error) => {
    console.log(error);
  });
