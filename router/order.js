const express = require('express');
const fs = require('fs');

const { readFile } = require('fs/promises');
async function readThisFile(filePath) {
  try {
    const data = await readFile(filePath);
    console.log(data.toString());
  } catch (error) {
    console.error(`Got an error trying to read the file: {error.message}`);
 }
}

async function addGroceryItem(name, quantity, price) {
  try {
    const csvLine = `\n${name},${quantity},${price}`
    await fs.writeFile('groceries.json', { flag: 'a' });
  } catch (error) {
    console.error(`Got an error trying to write to a file: ${error.message}`);
  }
}

(async function () {
  await openFile();
  await addGroceryItem('eggs', 12, 1.50);
  await addGroceryItem('nutella', 1, 4);
})();
const router = express.Router();
const { getOrders,getOrderById } = require('../controllers/order');

router.get('/:orderId', getOrderById)
router.get('/', getOrders);
modules.exports = router;

