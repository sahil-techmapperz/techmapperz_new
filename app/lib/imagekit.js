import ImageKit from 'imagekit';

let imagekit = null;

if (process.env.ImagekitpublicKey && process.env.ImagekitprivateKey && process.env.ImagekiturlEndpoint) {
  imagekit = new ImageKit({
    publicKey: process.env.ImagekitpublicKey,
    privateKey: process.env.ImagekitprivateKey,
    urlEndpoint: `https://ik.imagekit.io/${process.env.ImagekiturlEndpoint}`,
  });
}

export const uploadFile = async (fileBuffer, fileName) => {
  try {
    if (!imagekit) {
      console.warn('ImageKit not configured. File upload skipped.');
      return null;
    }
    const response = await imagekit.upload({
      file: fileBuffer,
      fileName: fileName,
      folder: '/uploads',
    });
    return response.url;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default imagekit;

