exports.fetch = async function (req, res) {
  res.send("list product");
};

exports.insert = async function (req, res) {
  res.send("create product");
};

exports.update = async function (req, res) {
  res.send("update product");
};

exports.delete = async function (req, res) {
  res.send("delete product");
};
