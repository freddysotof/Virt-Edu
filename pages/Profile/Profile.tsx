import React, { useEffect } from 'react';
import { FaCamera } from 'react-icons/fa';
import classes from './Profile.module.css';
import { FaEdit } from 'react-icons/fa';
import { Layout } from '../../layout/Layout';
import { ProfileLayout } from '../../layout/ProfileLayout';
import { useCheckAuth } from '../../hooks';
import { useRouter } from 'next/router';

type ProfileProps = {
  profilePicture: string;
  name: string;
  email: string;
  description: string;
  address: string;
  number: string;
  enrollment: string;
}

const Profile = (props: ProfileProps) => {

  const { status } = useCheckAuth();
  const router = useRouter();
  useEffect(() => {
    if (status !== 'authenticated')
      router.push('/Login/Login')
  }, [status])

  const {
    profilePicture,
    name,
    email,
    description,
    address,
    number,
    enrollment
  } = props;

  return (
    <ProfileLayout>
    <div className={classes.profileContainer}>
      
      <div className={classes.profileBox}>
      <img
      className={classes.profilePicture}
      src={profilePicture}
      alt="Profile"
      style={{
        width: "250px",
        height: "250px",
        borderRadius: "50%"
      }}
      />
      <button className={classes.AddPicture}>
        <FaCamera className={classes.AddPictureIcon}/> {}
      </button>
        <h2 className={classes.name}>{name}</h2>
        <p className={classes.email}>{email}</p>
        <div className={classes.editBox}>
          <h2>Basic Information</h2>
          <button className={classes.editButton}>
            <FaEdit className={classes.faEdit} />
            Edit
          </button>
        </div>
        <div className={classes.profileInfo}>
          <div className={classes.bio}>
            <h3 className={classes.title}>Bio</h3>
            <p className={classes.field}>{description}</p>
          </div>
          <div className={classes.address}>
            <h3 className={classes.title}>Address</h3>
            <p className={classes.field}>{address}</p>
          </div>
          <div className={classes.enrollment}>
            <h3 className={classes.title}>Enrollment</h3>
            <p className={classes.field}>{enrollment}</p>
          </div>
          <div className={classes.phone}>
            <h3 className={classes.title}>Phone</h3>
            <p className={classes.field}>{number}</p>
          </div>
        </div>
      </div>
    </div>
    </ProfileLayout>
  );
};

export default Profile;