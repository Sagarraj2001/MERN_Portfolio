const portfolioModel = require("../Model/PortfolioModel");

exports.message = async (req, res) => {
    try {
        const { email, message } = req.body;
        if (!email || !message) {
            return res.status(400).json({ error: "Email and message are required." });
        }

        const newData = new portfolioModel({ email, message });
        await newData.save();
        console.log(newData);
        return res.status(201).json({ message: "success" });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: err.message });
    }
};
