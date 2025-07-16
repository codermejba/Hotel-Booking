const API_BASE_URL = import.meta.env.VITE_API_URL;

export const createBlogs = async (data) => {
  
   try {

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("content", data.content);
    formData.append("category", data.category);
   if (data.image && data.image[0]) {
        formData.append("image", data.image[0]);
    }

    
     const response = await fetch(`${API_BASE_URL}/blogs`, {
        method: "POST",
        body: formData
    });
    const result = await response.json();
    if (!response.ok) {
        throw new Error(result.message || "Failed to create blog");
    }
    return result;
   } catch (error) {
    return { error: true, message: error.message };
   }
};

export const getAllBlogs = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/blogs/all`);
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Failed to fetch blogs");
    return { success: true, data };
  } catch (err) {
    return { success: false, message: err.message };
  }
};
