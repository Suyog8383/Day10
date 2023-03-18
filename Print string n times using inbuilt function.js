function printNTimes(name, count) {
  if (count < 1) return "";

  return name.repeat(count);
}
console.log("@SN ", printNTimes("suyog", 3));
