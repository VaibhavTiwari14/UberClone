import axios from "axios";

export const logout = async () => {
    const token = localStorage.getItem('token')
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/logout`,
      {
        Headers: {
            Authorization: `Bearer ${token}`,
        }
      },
      {
        withCredentials: true,
      }
    );

    if (response.data.clearLocalStorage) {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    }

    return response.data;
  } catch (error) {
    console.error("Logout error:", error);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    throw error;
  }
};
