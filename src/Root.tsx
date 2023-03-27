import { Router } from './routes/router';

import { SideBar } from './shared/components/SideBar/sideBar';

export const Root = () => {
    return (
        <div style={{ display: 'flex', gap: '7rem', backgroundColor: '#fff' }}>
            <SideBar />
            <Router />
        </div>
    );
};
