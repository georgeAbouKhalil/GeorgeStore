import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

function generateUniqueId() {
  let id = uuidv4();
  while (localStorage.getItem(id)) {
    id = uuidv4();
  }
  return id;
}

export function register(user) {
  const storedUserData = JSON.parse(localStorage.getItem(user.email));

  if (!storedUserData) {
    user = {
      email: user.email,
      name: user.name,
      password: user.password,
      id: generateUniqueId(),
      cart: [],
    };

    localStorage.setItem(user.email, JSON.stringify(user));
    toast.success("User Successfully Created");
  } else {
    toast.error("User already exists");
  }
}

export function login(user) {
  const storedUserData = localStorage.getItem(user.email);

  if (storedUserData) {
    const parsedUserData = JSON.parse(storedUserData);

    if (
      parsedUserData.password === user.password &&
      parsedUserData.email === user.email
    ) {
      toast.success("Login successful");
      localStorage.setItem("currentUser", JSON.stringify(parsedUserData));
      window.location.href = "/home";
    } else {
      toast.error("Incorrect password");
    }
  } else {
    toast.error("User not found");
  }
}

export function getCurrentUser() {
  const user = localStorage.getItem("currentUser");
  return user ? JSON.parse(user) : null;
}

export function LogoutUser() {
  if (localStorage.getItem("currentUser")) {
    // If it exists, remove it
    localStorage.removeItem("currentUser");
    toast.success("logout Successfully");
  }
}
