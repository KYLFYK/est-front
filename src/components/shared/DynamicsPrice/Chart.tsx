import React, {useEffect, useRef} from 'react';
import {LineChart, XAxis, CartesianGrid, Line, YAxis} from 'recharts';
import css from './Chart.module.scss'

interface Props {
    heightValue: number,
    language: "ru" | "cn"
    table:Array<{name:string,price:string}>   // name(x) price (y)
    divider:number
    currency?:boolean
    width?:number
    height?:number
}

export const Chart: React.FC<Props> = ({heightValue,language,table,divider,currency=false, width = 900,height=204}) => {

    let heightProps = useRef<any>(height)
    let widthProps = useRef<any>(width)

    useEffect(()=>{
        if(window !== undefined){
            if (window.innerWidth < 768) {
                heightProps.current = 375
            }

            if (window.innerWidth >= 320){
                widthProps.current = window.innerWidth * 0.805;
            }
            if (window.innerWidth >= 576){
                widthProps.current = window.innerWidth * 0.861;
            }
            if (window.innerWidth >= 768){
                widthProps.current = window.innerWidth * 0.409;
            }
            if (window.innerWidth >= 992){
                widthProps.current = window.innerWidth * 0.488;
            }
            if (window.innerWidth >= 1200){
                widthProps.current = window.innerWidth * 0.6275;
            }
            if (window.innerWidth >= 1400){
                widthProps.current = 960;
            }
        }

    },[height,width])


    const customTickX = ({ x, y, payload }: {x: number, y: number, payload: any}) => {
        const payloadText = [payload.value.split(' ', 1).toString(), payload.value.split(' ').slice(1).join(' ')]

        return (
            <svg x={width > 500? x-30 : x-10 } y={width > 500? y : y-10 } width="100" height="50" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                {
                    width > 500
                        ?<text x={0} y={0+15} fill="#1A4862" >{payload.value}</text>
                        :
                            <text  x={0+15} y={0+15} fill="#1A4862" >
                                <tspan x="0" dy=".6em">{payloadText[0]}</tspan>
                                <tspan x="0" dy="1.2em">{payloadText[1]}</tspan>
                            </text>

                }
            </svg>
        )
    }

    let offset = 40;

    const customTickY = ({ x, y, payload }: {x: number, y: number, payload: any}) => {
        return (
            <svg x={x-offset} y={y-11} width="100" height="50" viewBox="0 0 100 50" fill="#1A4862" xmlns="http://www.w3.org/2000/svg">
                {
                    language === 'cn'
                        ? <text x={0} y={0+15} fill="#1A4862">{new Intl.NumberFormat('ru-RU').format(payload.value)} CNY</text>
                        : <text x={0} y={0+15} fill="#1A4862">{new Intl.NumberFormat('ru-RU').format(payload.value)}</text>
                }
                {
                    currency && language !== 'cn'
                    && <svg width="39" height="9" viewBox="0 0 39 9" fill="none" xmlns="http://www.w3.org/2000/svg" x="0" y="7">
                        <path d="M36.1572 6.34473H34.3604V8H33.7646V6.34473H32.7686V5.83203H33.7646V5.10449H32.7686V4.59668H33.7646V0.890625H36.1865C36.9352 0.890625 37.5195 1.08105 37.9395 1.46191C38.3626 1.83952 38.5742 2.35384 38.5742 3.00488C38.5742 3.66895 38.3691 4.1849 37.959 4.55273C37.5488 4.91732 36.9629 5.10124 36.2012 5.10449H34.3604V5.83203H36.1572V6.34473ZM34.3604 4.59668H36.1865C36.7529 4.59668 37.1924 4.45996 37.5049 4.18652C37.8174 3.90983 37.9736 3.51921 37.9736 3.01465C37.9736 2.52637 37.8206 2.139 37.5146 1.85254C37.2119 1.56608 36.7936 1.41634 36.2598 1.40332H34.3604V4.59668Z" fill="#1A4862"/>
                    </svg>
                }
            </svg>
        )
    }

    // let divider = 5000;
    // if (language === 'cn') {
    //     divider = 500;
    // }
    const min = Math.min(...table.map((d) => +d.price));
    const max = Math.max(...table.map((d) => +d.price));

    const minY = min % divider < divider ? min - min % divider : min;
    const maxY = max % divider < divider ? max + divider - max % divider : max;
    const ticksY = 1 + (maxY - minY) / divider;

    return (
        <div style={{display:'grid',padding:'20px'}} >
            <LineChart
                width={width}
                height={height}
                className={css.chart}
                // data={window.innerWidth >= 1200 ? data : lowResolutionData}
                data={ table }
            >
                <XAxis  interval={0}  dataKey="name" padding={{ left: 30, right: 30 }} tick={customTickX} />
                <YAxis interval={0} domain={[minY, maxY]} tickCount={ticksY} tick={customTickY}/>
                <CartesianGrid stroke="#f2f2f2" strokeDasharray="1 0" />
                <Line
                    type="monotone"
                    dataKey="price"
                    stroke="#1A4862"
                    yAxisId={0}
                    dot={{ fill: '#1A4862', r: 3 }}
                    strokeWidth={2}
                />
            </LineChart>
        </div>
    )
}

