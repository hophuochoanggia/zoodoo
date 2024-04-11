import { IFormInputs } from "@/components/Form/HiringForm";

export function sendMail(data: any) {
  const apiEndpoint = "/api/contact";

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  return fetch(apiEndpoint, requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error.message
      );
    });
}

export const sendMailHiring = async (data: IFormInputs) => {
  const apiEndpoint = "/api/contact";
  // cv is a file, so we need to use FormData
  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("email", data.email);
  formData.append("mobile", data.mobile);
  formData.append("position", data.position);
  formData.append("cv", data.cv);
  const requestOptions = {
    method: "POST",
    body: formData,
  };

  console.log("data", data);
  return fetch(apiEndpoint, requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error.message
      );
    });
};
