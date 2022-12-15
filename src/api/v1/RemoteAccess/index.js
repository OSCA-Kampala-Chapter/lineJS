#!/usr/bin/env node
import axios from "axios";

export const RemoteAccess = async () => {
  console.log("Here's some random data for you:");
  const randomDataUrl = "https://random-data-api.com/api/users/random_user";

  try {
    const response = await axios.get(randomDataUrl);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
