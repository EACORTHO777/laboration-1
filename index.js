async function main() {
  const namn = process.argv[2];

  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();
  const rad = data.slip.advice;

  console.log(`Hi ${namn}, today's advice for you is: ${rad}`);
}

main();