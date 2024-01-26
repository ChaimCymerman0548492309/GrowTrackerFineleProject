import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as Styles from './userPageStyle';
import { UserDemoDate } from '../../models/UserDemoDate';

const ViewUserPage = () => {
    const nav = useNavigate()

    const { id } = useParams();
    if (!id) {
        return <div>User ID not provided</div>;
    }
    // console.log(id);
    const userId = parseInt(id, 10);

    const user = UserDemoDate.find((user) => user._id === userId);

    if (!user) {
        return <div>User not found</div>;
    }

    return (
        <Styles.PageContainer>
            <Styles.UserInfoContainer>
                <Styles.UserInfoHeader>{user.name}</Styles.UserInfoHeader>
                <Styles.UserInfoContent>
                    <Styles.UserInfoRow>
                        <Styles.UserInfoLabel>Email:</Styles.UserInfoLabel>
                        <Styles.UserInfoValue>{user.email}</Styles.UserInfoValue>
                    </Styles.UserInfoRow>
                    <Styles.UserInfoRow>
                        <Styles.UserInfoLabel>Password:</Styles.UserInfoLabel>
                        <Styles.UserInfoValue>{user.password}</Styles.UserInfoValue>
                    </Styles.UserInfoRow>
                    <Styles.UserInfoRow>
                        <Styles.UserInfoLabel>User Type:</Styles.UserInfoLabel>
                        <Styles.UserInfoValue>{user.userType}</Styles.UserInfoValue>
                    </Styles.UserInfoRow>
                    <Styles.UserInfoRow>
                        <Styles.UserInfoLabel>Address:</Styles.UserInfoLabel>
                        <Styles.UserInfoValue>{`${user.address?.street}, ${user.address?.city}`}</Styles.UserInfoValue>
                    </Styles.UserInfoRow>
                    <Styles.UserInfoRow>
                        <Styles.UserInfoLabel>Payment Method:</Styles.UserInfoLabel>
                        <Styles.UserInfoValue>{`${user.paymentMethod?.type} - ${user.paymentMethod?.creditCardNumber}`}</Styles.UserInfoValue>
                    </Styles.UserInfoRow>
                    <Styles.UserInfoRow>
                        <Styles.UserInfoLabel>Bank Account:</Styles.UserInfoLabel>
                        <Styles.UserInfoValue>{`${user.bankAccount?.bankName} - ${user.bankAccount?.accountNumber}`}</Styles.UserInfoValue>
                    </Styles.UserInfoRow>
                    <Styles.UserInfoRow>
                        <Styles.UserInfoLabel>Contact Phone Number:</Styles.UserInfoLabel>
                        <Styles.UserInfoValue>{user.contactPhoneNumber}</Styles.UserInfoValue>
                    </Styles.UserInfoRow>
                </Styles.UserInfoContent>

                <Styles.EditButton>Edit</Styles.EditButton>
                <Styles.BackButton onClick={() => { nav('/AllUsersPage') }}
                >Back</Styles.BackButton>
            </Styles.UserInfoContainer>

        </Styles.PageContainer>
    );
};

export default ViewUserPage;
