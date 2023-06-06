import { css } from "styled-components"

export const breakpoints = [
    {
        point: 'lg',
        media: 1368 
    },
    {
        point:'blg',
        media: 1200
    },
    {
        point: 'md',
        media: 1024 
    },
    {
        point: 'sm',
        media: 768
    }
]

export const responsive = (prop, callback)=>{
    if(prop){
        return breakpoints.map((breakpoint)=>{
            if(prop[breakpoint.point]){

                return css`
                    @media(max-width: ${breakpoint.media}px){
                        ${callback(breakpoint)}
                    }
                `;
            }
        });
    };
} ;