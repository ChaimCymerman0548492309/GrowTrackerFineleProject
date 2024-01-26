// import React from 'react';
import { UserDemoDate } from '../../models/UserDemoDate'
// import { Table, TableCell, TableHeader, TableRow } from './AllUsersStyle';
// import { ActionButton, LogoutButton } from '../../../global/layout/header/Heder.styles';
import * as Styles from './AllUsersStyle';
import { useNavigate } from 'react-router-dom';

const AllUsersPage = () => {
    const nav = useNavigate()
    return (
        <>

        <Styles.Table>
            
            <thead>
                <Styles.TableRow>
                    <Styles.TableHeader>Name</Styles.TableHeader>
                    <Styles.TableHeader>Email</Styles.TableHeader>
                    <Styles.TableHeader>Phone</Styles.TableHeader>
                    <Styles.TableHeader>Actions</Styles.TableHeader>
                    <Styles.TableHeader>User Type</Styles.TableHeader>

                </Styles.TableRow>
            </thead>
            <tbody>
                {UserDemoDate.map((user) => (
                    <Styles.TableRow key={user._id}>
                        <Styles.TableCell>{user.name}</Styles.TableCell>
                        <Styles.TableCell>{user.email}</Styles.TableCell>
                        <Styles.TableCell>{user.contactPhoneNumber}</Styles.TableCell>
                        <Styles.TableCell>
                            <Styles.ActionButton

                                onClick={() => {
                                    let id = user._id;
                                    nav(`/ViewUserPage/${id}`)
                                }}
                            >
                                View
                            </Styles.ActionButton>
                            <Styles.ActionButton
                                onClick={() => {
                                    nav(`/EditUserPage/${user._id}`)
                                }}                >
                                Edit
                            </Styles.ActionButton>
                        </Styles.TableCell>
                        <Styles.TableCell>{user.userType}</Styles.TableCell>
                    </Styles.TableRow>
                ))}
            </tbody>
        </Styles.Table>
        </>
    );
};

export default AllUsersPage;