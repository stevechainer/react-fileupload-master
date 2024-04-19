const fs = require("fs");
const path = require("path");
const IncomingForm = require("formidable").IncomingForm;
const { v4: uuidv4 } = require("uuid"); // Import UUID generator

module.exports = function upload(req, res) {

  var form = new IncomingForm();
  let filePath;

  form.on("file", (field, file) => {
    // Generate a unique filename using UUID and the original file extension
    const fileExt = path.extname(file.name);
    const uniqueFilename = uuidv4() + fileExt;

    // Specify the directory where you want to save the uploaded file
    const uploadDir = path.join(__dirname, "upload");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }

    // Specify the file path where the uploaded file will be saved
    filePath = path.join(uploadDir, uniqueFilename);
    fs.renameSync(file.path, filePath);

    // res.json({ success: true, path: filePath });

    console.log("File saved:", filePath);
  });

  form.on("end", () => {
    console.log("============end");
    res.json({ success: true, path: filePath });
    console.log("============end=============");
  });

  form.parse(req);
};