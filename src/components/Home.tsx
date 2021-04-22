import React, { useEffect } from 'react'
import * as d3 from "d3";



export default function Home() {

    const ref = React.useRef();

   
        const data = [12, 5, 6, 6, 9, 10];      
    
    useEffect(()=> {
        if (ref.current) {
                const svg = d3.select(ref.current!);

                // Bind D3 data
                const update = svg
                    .append('g')
                    .selectAll('text')
                    .data(data);

                // Enter new D3 elements
                update.enter()
                    .append('text')
                    .attr('x', (d, i) => i * 25)
                    .attr('y', 40)
                    .style('font-size', 24)
                    .text((d: number) => d);

                // Update existing D3 elements
                update
                    .attr('x', (d, i) => i * 40)
                    .text((d: number) => d);

                // Remove old D3 elements
                update.exit()
                    .remove();
            }
        },

    [ref.current])

    return (
        <svg
            className="d3-component"
            width={400}
            height={200}
            //@ts-ignore
            ref={ref!}
        />
    );
}
