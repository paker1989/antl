const dataArray = Array(20).fill(12);

const getDelay = (index) => {
  const i = index + (dataArray.length % 4);
  const delay = (i % 4) * 100 + Math.floor(i / 4) * 100 + 200;
  console.log(delay);
};

const getDelayOverride = (i) => {
  //  0, 1, 2 ,3   100, 200, 300, 400
  // 4, 5, 6, 7: 200, 300, 400, 500
  const delay = Math.floor((i / 4)) * 100 + 100 * (i % 4);
  console.log(delay + ':  ' + i);
}

dataArray.forEach((e, i) => getDelayOverride(i));
