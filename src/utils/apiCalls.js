import axios from "axios";

export async function getAPI(endPoint, token) {
  const url = `http://192.168.235.237:5000/api${endPoint}`;
  try {
    let result = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`, // Include the token in the Authorization header
      },
    });
    return result.data;
  } catch (e) {
    console.log(e, "get error");
  }
}
export async function postAPI(endPoint, formData, token) {
  try {
    const url = `http://192.168.235.237:5000/api${endPoint}`;

    let result = await axios.post(url, formData, {
      headers: {
        Authorization: `Bearer ${token}`, // Include the token in the Authorization header
      },
    });
    return result.data;
  } catch (e) {
    console.log("post error");
  }
}
export async function patchAPI(endPoint, formData, token) {
  const url = `http://192.168.235.237:5000/api${endPoint}`;

  try {
    let result = await axios.patch(url, formData, {
      headers: {
        Authorization: `Bearer ${token}`, // Include the token in the Authorization header
      },
    });
    return result.data;
  } catch (e) {
    console.log(e, "patch error");
  }
}
export async function deleteAPI(url, id) {
  try {
    let result = await axios.delete(`${url}?id=${id}`);
    return result;
  } catch (e) {
    console.log(e, "delete error");
  }
}
