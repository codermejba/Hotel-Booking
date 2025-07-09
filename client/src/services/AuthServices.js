const API_BASE_URL = import.meta.env.VITE_API_URL;


export const loginUser = async (user) => {
  try {
    
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Failed to login user");
    }

    return result;
  } catch (error) {
    console.log(error);

    return { error: true, message: error.message };
  }
};

export const deleteAccount = async () => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));
  const id = user._id;

  if (!window.confirm("Are you sure you want to delete this account?")) return;

  try {
    const response = await fetch(`${API_BASE_URL}/api/delete`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.message || "Failed to delete user");
    }
    return result;
  } catch (error) {
    return { error: true, message: error.message };
  }
};
