import HeaderComponent from '@/components/layout/header';
import MainComponent from '@/components/layout/main';
import { SideBarComponent } from '@/components/layout/sidebar';

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <>
            <HeaderComponent />
            <MainComponent />
            <SideBarComponent />
        </>
    );
}
