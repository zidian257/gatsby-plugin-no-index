

function writeFile(file, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, err => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}
