import React from 'react';
import Typography from "../../components/shared/Typography/Typography";
import css from './Footer.module.scss'

const date = new Date()
const year = date.getFullYear()

const FooterCopyRight = () => {
    return (
        <div style={{display:'flex',alignItems:"center"}}>
            <svg width="13" height="13" xmlns="http://www.w3.org/2000/svg">

                <g>
                    <title>background</title>
                    <rect fill="none" id="canvas_background" height="15" width="15" y="-1" x="-1"/>
                </g>
                <g>
                    <title>Layer 1</title>
                    <path stroke="null" id="svg_1" fill="white" d="m8.75,7.34375c0,0.79167 -0.22917,1.39844 -0.6875,1.82031c-0.45312,0.42188 -1.09635,0.63282 -1.92969,0.63282c-0.83333,0 -1.49739,-0.27605 -1.99219,-0.82813c-0.48958,-0.55729 -0.73437,-1.30469 -0.73437,-2.24219l0,-0.88281c0,-0.90625 0.2474,-1.63542 0.74219,-2.1875c0.5,-0.55729 1.16146,-0.83594 1.98437,-0.83594c0.84896,0 1.4974,0.21615 1.94531,0.64844c0.45313,0.42708 0.67969,1.02865 0.67969,1.80469l-1.21875,0c0,-0.5 -0.11979,-0.85677 -0.35937,-1.07032c-0.23959,-0.21874 -0.58854,-0.32812 -1.04688,-0.32812c-0.47916,0 -0.85416,0.17708 -1.125,0.53125c-0.26562,0.35417 -0.39843,0.83854 -0.39843,1.45313l0,0.91406c0,0.61458 0.13541,1.09635 0.40624,1.44531c0.27084,0.34896 0.64323,0.52344 1.11719,0.52344c0.46354,0 0.8125,-0.10417 1.04688,-0.3125c0.23437,-0.21354 0.35156,-0.57552 0.35156,-1.08594l1.21875,0zm2.0781,-1.03906c0,-0.86459 -0.1953,-1.66667 -0.5859,-2.40625c-0.39064,-0.74479 -0.94272,-1.33854 -1.65626,-1.78125c-0.71354,-0.44792 -1.49479,-0.67188 -2.34375,-0.67188c-0.82813,0 -1.59896,0.21354 -2.3125,0.64063c-0.70834,0.42708 -1.26563,1.01562 -1.67188,1.76562c-0.40625,0.75 -0.60937,1.56771 -0.60937,2.45313c0,0.88541 0.20052,1.70312 0.60156,2.45312c0.40625,0.75 0.96354,1.34379 1.67188,1.78129c0.71354,0.4323 1.48697,0.6484 2.32031,0.6484c0.83333,0 1.60677,-0.2214 2.32031,-0.6641c0.71875,-0.4427 1.27604,-1.03902 1.6719,-1.78902c0.3958,-0.75 0.5937,-1.5599 0.5937,-2.42969zm-10.13279,0c0,-1.05209 0.24219,-2.02865 0.72657,-2.92969c0.48958,-0.90104 1.16406,-1.60938 2.02343,-2.125c0.86459,-0.52083 1.79688,-0.78125 2.79688,-0.78125c1,0 1.92969,0.26042 2.78906,0.78125c0.85937,0.51562 1.53125,1.22396 2.01565,2.125c0.4896,0.90104 0.7343,1.8776 0.7343,2.92969c0,1.05208 -0.2447,2.02864 -0.7343,2.92969c-0.4844,0.90102 -1.15367,1.61462 -2.00784,2.14062c-0.85416,0.5208 -1.78646,0.7812 -2.79687,0.7812c-1.00521,0 -1.9375,-0.2604 -2.79688,-0.7812c-0.85416,-0.5208 -1.52604,-1.2318 -2.01562,-2.13281c-0.48959,-0.90104 -0.73438,-1.88021 -0.73438,-2.9375z"/>
                </g>
            </svg>
            <Typography color={"secondary"} className={css.marginL_5}>
                {year} ООО «Estatum»
            </Typography>
        </div>

    );
};

export default FooterCopyRight;