import styled from 'styled-components';
import TodoList from './TodoList';
import ProfileHeader from './ProfileHeader';

import Modal from './Modal/Modal';
import { useSelector } from 'react-redux';




function Profile() {
    const isModal = useSelector(state=>state.listItem.isModal);

    return (
        <ProfileBlock>
            {
                isModal && <Modal />
            }
            <ProfileHeader />
            <TodoList />
        </ProfileBlock>
    )
}
export default Profile;

const ProfileBlock = styled.div`
    background-position: 0% 0%;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
    overflow: auto;
    position: relative;
`;

