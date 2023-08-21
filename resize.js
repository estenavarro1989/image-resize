const Jimp = require("jimp");
const fs = require("fs");
const path = require("path");

const INPUT_PATH = "./input";
const OUTPUT_PATH = "./output";

const resizeImage = async (file) => {
    const largeImage = await Jimp.read(`${INPUT_PATH}/${file}`);
    const resizeImage = `${OUTPUT_PATH}/${file.split('.').slice(0, -1).join('.')}.jpg`;

    await largeImage.resize(Jimp.AUTO, 749).writeAsync(resizeImage);
}

const main = async () => {
    const files = await fs.promises.readdir(INPUT_PATH);
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        await resizeImage(file)
    }
}

main();