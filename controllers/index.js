class Controller {
    static async register(req, res) {
        res.send("Ceritanya register udah selesai");
    }
    static async login(req, res) {
        res.send("Ini page buat login");
    };
};

module.exports = Controller;