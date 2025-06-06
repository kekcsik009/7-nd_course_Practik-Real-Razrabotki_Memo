import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import Loading from './Loading'

const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useContext(AuthContext)

    if (isLoading) {
        return <Loading />
    }

    return user ? children : <Navigate to="/login" replace />
}

export default PrivateRoute
