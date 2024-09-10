import axios from "axios";

export const uploadImg = async (selectedFile, resourceType, preset) => {
  const data = new FormData();
  data.append("file", selectedFile);
  data.append("upload_preset", preset);

  try {
    let cloudName = process.env.REACT_APP_CLOUDINARY_NAME;
    let api = `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`;
    const res = await axios.post(api, data);
    const { secure_url } = res.data;
    return secure_url;
  } catch (error) {
    console.log(error);
  }
};
