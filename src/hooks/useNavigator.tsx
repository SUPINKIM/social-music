import Home from '@/screens/home';
import Login from '@/screens/login';
import MyPage from '@screens/my-page';

interface IRoute {
    name: string;
    component: () => React.JSX.Element;
    label?: string;
    position?: 'Bottom' | 'Top';
    iconName?: string;
}

export const useNavigator = () => {
    const route: Array<IRoute> = [
        {
            name: 'Home',
            component: Home,
            label: 'Home',
            position: 'Bottom',
            iconName: 'home',
        },
        {
            name: 'Login',
            component: Login,
        },
        {
            name: 'MyPage',
            component: MyPage,
            position: 'Bottom',
            iconName: 'account-circle',
            label: 'My',
        },
    ];

    return {
        route,
    };
};
