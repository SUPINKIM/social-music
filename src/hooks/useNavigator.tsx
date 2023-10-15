import Home from '@/screens/home';
import Main from '@/screens/home/main';
import Login from '@/screens/login';
import MyPage from '@screens/my-page';

interface IRoute {
    name: string;
    component: () => React.JSX.Element;
    label?: string;
    position?: 'Bottom' | 'Top';
    iconName?: string;
    child?: boolean; // 메인 라우트에 등록될 필요 없는 경우
}

export const useNavigator = () => {
    const route: Array<IRoute> = [
        {
            name: 'Home',
            component: Home,
        },
        {
            name: 'Login',
            component: Login,
        },
        {
            name: 'Main',
            component: Main,
            label: 'Home',
            child: true,
            position: 'Bottom',
            iconName: 'home',
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
