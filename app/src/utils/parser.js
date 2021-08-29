export const getBase64 = (file) => {
  return new Promise((resolve) => {
    let baseURL = '';
    // Make new FileReader
    let reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      baseURL = reader.result;
      resolve(baseURL);
    };
  });
};
