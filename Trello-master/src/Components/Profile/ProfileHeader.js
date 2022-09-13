import styled, {css} from 'styled-components';
import {useDispatch} from 'react-redux';
import {Exist} from '../../store/reducers/LoginSlices';
import {KolonkaListAction} from '../../store/reducers/KolonkaListSlices';

let arr = [
    'Рабочие пространства',
    'Недавние ',
    'В Избранном',
    'Шаблоны',
    'создать'
];

function SearchProfile() {
    const dispatch = useDispatch();
    const searchChangeHandler = (e)=>{
        dispatch(KolonkaListAction.searchChange({
            value: e.target.value
        }))
    }

    return (
        <SeachBlock>
            <SeachInput type="text" placeholder='Search' onChange={searchChangeHandler} />
        </SeachBlock>
    )
}

const SeachBlock = styled.div`
    
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SeachInput = styled.input`
    background-color: #848788;
    outline: none;
    border: 1px solid #fff;
    border-radius: 5px;
    padding: 0.5rem 1.3rem;
    color: #fff;
    &:focus{
        background-color: #959799;
    }
    &::placeholder{
        color: #fff;
    } 
`;


function ProfileHeader() {
    const dispatch = useDispatch();
    const ExitProfile = ()=>{
        dispatch(Exist());
    }
    return (
        <ProfileHeaderCont>
            <ProfileUl>
                {
                    arr.map((elem, index) => {
                        if (index === 0) {
                            return <ProfileItem first={true} key={index}>{elem}</ProfileItem>
                        }
                        return <ProfileItem key={index}>{elem}</ProfileItem>
                    })
                }
            </ProfileUl>
            <ProfileHeaderRight>
                <SearchProfile />
                <ProfileExit onClick={ExitProfile}>Выйти</ProfileExit>
            </ProfileHeaderRight>
        </ProfileHeaderCont>
    )
}

export default ProfileHeader;


const ProfileHeaderRight = styled.div`
    display: flex;
`;

const ProfileExit = styled.button`
    color: #fff;
    background-color: green;
    border: 1px solid green;
    cursor: pointer;
    margin-left: 50px;
`;

const ProfileItem = styled.li`
    margin-left: 20px;
    
    padding: 8px 15px;
    border-radius: 6px;
    cursor: pointer;
    color: #fff;
    &:hover{
        background-color: #848788;
    }
    ${(props) => props.first && css`
        margin-left: 0;
    `}
`;

const ProfileUl = styled.ul`
    margin: 0;
    list-style: none;
    display: flex;
    
`;

const ProfileHeaderCont = styled.header`
    /* border: 1px solid red; */
    /* height: 50px; */
    background-color: #4F5355;
    padding: 5px 0;
    padding-right: 40px;
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
`;
