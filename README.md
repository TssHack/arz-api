# 💱 ARZ API

A lightweight and fast **REST API** to fetch real-time currency prices from [tgju.org](https://www.tgju.org/currency), built with **Node.js, Express, Axios, and Cheerio**.

---

## 🚀 Features
- Real-time currency prices  
- Automatic conversion from Rial to Toman  
- Country flag support via ISO codes  
- Clean and structured JSON response  
- Simple and extensible architecture  

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/username/currency-scraper-api.git
cd currency-scraper-api

# Install dependencies
npm install

# Run the server
npm start

# Run in development mode
npm run dev
```

By default, the server runs on port **3000**:

```
http://localhost:3000/
```

---

## 📡 Example Response

```json
{
  "status": 200,
  "developer": "Ehsan Fazli (@devehsan)",
  "result": [
    {
      "tag": "🇺🇸",
      "currency": "US Dollar",
      "price": 57650
    },
    {
      "tag": "🇪🇺",
      "currency": "Euro",
      "price": 61230
    }
  ]
}
```

---

## 👨‍💻 Developer
- **Name:** Ehsan Fazli  
- **Telegram:** [@devehsan](https://t.me/devehsan)  

---

## 📜 License
This project is licensed under the **MIT License**.
