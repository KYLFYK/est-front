import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ToggleButtonsWithIcons } from './ToggleButtonsWithIcons';
import {GridView} from "../../../icons/FinderPageIcon/GridView";
import {MapView} from "../../../icons/FinderPageIcon/MapView";
import {ZoomIn} from "../../../icons/MapControlsIcons/ZoomIn";
import {ZoomOut} from "../../../icons/MapControlsIcons/ZoomOut";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Components/ToggleButtonsWithIcons',
    component: ToggleButtonsWithIcons,
} as ComponentMeta<typeof ToggleButtonsWithIcons>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ToggleButtonsWithIcons> = () =>{
    const [view, setView] = useState('mapView')

    const toggleButtonOptions = [
        { icon: <GridView fill={view === 'gridView' ? '#96A2B5' : '#CAD1DA'}/>, onclick: () => setView('gridView') },
        { icon: <MapView fill={view === 'mapView' ? '#96A2B5' : '#CAD1DA'}/>, onclick: () => setView('mapView') },
    ]
    return(
        <div style={{margin:'10px'}}>
            <ToggleButtonsWithIcons items={toggleButtonOptions}  />
        </div>
        )
}

export const WithoutActiveElement = Template.bind({});

