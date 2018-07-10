import React from 'react';
import {Scene, Actions, Drawer, Modal, Stack, Lightbox} from "react-native-router-flux"

import Test1 from '../container/test1/index.js';
import Test2 from '../container/test2/index.js';
import TabBar from '../container/tabBar/index.js';
import DrawerComp from '../components/DrawerComp/index';

export const scenes = Actions.create(
    <Scene key="root">
        <Modal key="modal" hideNavBar>
            <Lightbox key="lightbox" hideNavBar={true}>
                <Stack key="init" back>
                    <Drawer
                        key={'Drawer'}
                        hideNavBar={true}
                        contentComponent={DrawerComp}
                        drawerWidth={200}
                        drawerPosition={'left'}>
                        <Scene key="tabBar" back={false} component={TabBar}
                               hideNavBar />
                        <Scene key="test1" initial component={Test1}
                               hideNavBar />
                        <Scene key="test2" component={Test2}
                               hideNavBar />
                    </Drawer>

                </Stack>
            </Lightbox>
        </Modal>
    </Scene>
);