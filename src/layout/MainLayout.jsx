
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Shared/Navbar';

const MainLayout = () => {
    return (
        <div className="mx-w-7xl mx-auto">
            <Navbar />
            <Outlet />
        </div>
    );
};

export default MainLayout;