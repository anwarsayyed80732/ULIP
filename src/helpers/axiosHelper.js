import cookies from "js-cookie";

/**
 * A funtion that generates the header for api calls that require the jwt token
 * 
 * @returns {Object} An object that contains the config with the header to be used in axios
 */
export function generateAuthHeader() {
  const axiosConfig = {
    headers: {
      authorization: `Bearer ${cookies.get("auth")}`,
    },
  };

  return axiosConfig
}
