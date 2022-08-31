import React, {useEffect, useState} from 'react'
import {UserProfile} from '../../models/Profile'
import {UserServices} from '../../services/UserServices'
import {useParams} from 'react-router-dom'
import './profile.scss'


interface URLParams {
    id: string,
}
interface IState{
    loading: boolean,
    profile: UserProfile,
    errorMessage: string,
}
interface IProps{}

const Profile:React.FC<IProps> = () => {
    let {id} = useParams<URLParams | any>()

    let [state, setState] = useState<IState>({
        loading: false,
        profile: {} as UserProfile,
        errorMessage: '',
    })

    useEffect(() => {
        if (id) {
            setState({...state, loading: true})
            UserServices.getUserProfile(id).then((response)=>{
                setState({
                    ...state,
                    loading: false,
                    profile: response.data
                })
            }). catch((error) => {
                setState({
                    ...state,
                    loading: false,
                    errorMessage: error.message
                })
            })
        }
    }, [id])

    let {loading, profile, errorMessage} = state

    return (
        <div className='profileContainer'>Profile
            {
                Object.keys(profile).length > 0 &&
                <div>
                    <ul>
                        <li>{profile.get_username}</li>
                        <li>{profile.get_full_name}</li>
                        <li>{profile.bio}</li>
                    </ul>
                </div>
            }
        </div>
    )
}

export default Profile
