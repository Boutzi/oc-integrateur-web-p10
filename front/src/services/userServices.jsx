export const userLogin = async (payload) => {
  let response = await fetch("http://localhost:3001/api/v1/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: payload,
  });

  if (!response.ok) {
    const error = await response.json();
    if (response.status === 400) {
      return { error: "Invalid username or password." };
    } else {
      throw new Error(error.message || "Network response was not ok");
    }
  }
  const data = await response.json();
  return data;
};

export const fetchUser = async (token) => {
  const response = await fetch("http://localhost:3001/api/v1/user/profile", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
    },
  })
  const data = await response.json()
  return data.body
}

export const changeUsername = async (payload, token) => {
  let response = await fetch("http://localhost:3001/api/v1/user/profile", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization" : `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  })
  if (!response.ok) {
    throw new Error("Network response was not ok")
  }
  const data = await response.json()
  return data
}
