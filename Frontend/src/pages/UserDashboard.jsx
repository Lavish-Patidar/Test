import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../api/projectApi";

const UserDashboard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/user/profile`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        });
        setUserData(response.data);
      } catch (err) {
        console.error("Failed to fetch user data", err);
      }
    };
    fetchUserData();
  }, []);

  return (
    <div>
      <h2>User Dashboard</h2>
      {userData ? (
        <div>
          <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <p>Enrolled Courses: {userData.courses.join(", ")}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default UserDashboard;
