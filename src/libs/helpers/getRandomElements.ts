function getRandomElements(arr: any[], count: number): any[] {
  const tempArr = [...arr];
  const result: any[] = [];

  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * tempArr.length);
    result.push(tempArr[randomIndex]);
    tempArr.splice(randomIndex, 1);
  }

  return result;
}

export default getRandomElements;
