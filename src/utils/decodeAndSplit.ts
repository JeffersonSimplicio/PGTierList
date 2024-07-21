export function decodeAndSplit(code: string) {
   const decodedCode = decodeURIComponent(code);
   const resultArray = decodedCode.split('&');
   return resultArray;
}