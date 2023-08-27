import React, { useContext, useEffect, useState } from 'react';
import { gState } from '../../Context/Context';
import { getSingleUser } from '../../Services/user.service';

const UserSettings = () => {
  const { data } = useContext(gState);
  const [userSettings, setuserSettings] = useState(null);

  const { userData } = data;
  const { id } = userData;

  const getUserById = async (id) => {
    const user = await getSingleUser(id);
    setuserSettings(user);
  };

  useEffect(() => {
    getUserById(id);
  }, []);

  return (
    <div className="container">
      {userSettings && (
        <div className="card mt-2">
          <div className="card-header bg-dark text-white">
            <h5 className="card-title">User Settings</h5>
          </div>
          <div className="card-body">
            <div className="mb-3">
              <label className="form-label">Name:</label>
              <p className="card-text">{userSettings.firstName} {userSettings.lastName}</p>
            </div>
            <div className="mb-3">
              <label className="form-label">Email:</label>
              <p className="card-text">{userSettings.email}</p>
            </div>
            <div className="mb-3">
              <label className="form-label">Address:</label>
              <p className="card-text">{userSettings.address.address}, {userSettings.address.city}, {userSettings.address.state} - {userSettings.address.postalCode}</p>
            </div>
            <div className="mb-3">
              <label className="form-label">Phone:</label>
              <p className="card-text">{userSettings.phone}</p>
            </div>
            <div className="mb-3">
              <label className="form-label">Age:</label>
              <p className="card-text">{userSettings.age}</p>
            </div>
            <div className="mb-3">
              <label className="form-label">Gender:</label>
              <p className="card-text">{userSettings.gender}</p>
            </div>

            <div className="mb-3">
              <label className="form-label">Company:</label>
              <p className="card-text">{userSettings.company.name}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserSettings;