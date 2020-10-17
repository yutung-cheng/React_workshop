import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID mWtoyEe076K13kzPxptZI1OOW0n52bl_OALhatr10RM"
  }
});
