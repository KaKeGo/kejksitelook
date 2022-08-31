import axios from 'axios'

export class UserServices {
    private static serverUrl: string = 'https://kejk.herokuapp.com/'

    public static getUserProfile(slug: string){
        let dataUrl: string = `${this.serverUrl}accounts/profile/${slug}`
        return axios.get(dataUrl)
    }
}

export default UserServices
