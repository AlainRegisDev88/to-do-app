import {useLocation} from 'react-router-dom'

const HomePage = () => {
    const location = useLocation()
    const { message, name } = location.state || {}



    return ( 
        <p><strong>{message}, Hello {name}</strong></p>
     );
}
 
export default HomePage;