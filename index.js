import express from "express";
import axios from "axios";
import * as cheerio from "cheerio";

const app = express();
const PORT = 3000;

function convertToFlag(text) {
  const a = "a".charCodeAt(0);
  return text
    .toLowerCase()
    .split("")
    .map((ch) => {
      const code = ch.charCodeAt(0) - a;
      return String.fromCodePoint(0x1f1e6 + code);
    })
    .join("");
}

async function getCurrencies() {
  const { data: html } = await axios.get("https://www.tgju.org/currency", {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36",
    },
  });

  const $ = cheerio.load(html);
  const data = [];

  $("tr[data-market-nameslug]").each((i, el) => {
    const flagClass = $(el).find("th span.mini-flag").attr("class") || "";
    const match = flagClass.match(/flag-(\w+)/);
    const currencyFlag = match ? match[1] : "";

    const price = $(el).find("td.nf").first().text().trim().replace(/,/g, "");
    const currencyName = $(el).find("th").text().trim();

    if (price && currencyName) {
      data.push({
        tag: convertToFlag(currencyFlag),
        currency: currencyName,
        price: Math.round(parseFloat(price) / 10 * 100) / 100,
      });
    }
  });

  return data;
}

app.get("/currency", async (req, res) => {
  try {
    const result = await getCurrencies();
    res.json({
      status: 200,
      developer: "Ehsan Fazli @Devehsan",
      result,
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      error: err.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
