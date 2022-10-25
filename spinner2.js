const spinnerArr = [ '\r|   ', '\r/   ', '\r-   ', '\r\\    ','\r|   ', '\r/   ', '\r-   ', '\r\\    ', '\r|   ' ];

function loadingTik() {
  process.stdout.write('hello from spinner2.js...  \rheyyy\n');
  let timer = 0;
  for (const i in spinnerArr) {
    setTimeout(() => {
      process.stdout.write(spinnerArr[i]);
      if (Number(i) === spinnerArr.length - 1) {
        console.log();
      }
    }, timer);
    timer += 200;
  }
}

loadingTik()