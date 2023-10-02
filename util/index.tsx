
import { ReadonlyURLSearchParams } from 'next/navigation';

export const createUrl = (pathname: string, params: URLSearchParams | ReadonlyURLSearchParams) => {
    const paramsString = params.toString();
    const queryString = `${paramsString.length ? '?' : ''}${paramsString}`;
    return `${pathname}${queryString}`;
};

const CURRENCY_FORMATTER = new Intl.NumberFormat("vi-VN", {
    currency: "VND",
    style: "currency",
})

export function formatCurrency(number: number) {
    return CURRENCY_FORMATTER.format(number)
}


export async function dynamicBlurUrl(url: string) {

    ///_next/image?url=http%3A%2F%2Flocalhost%3A5000%2Fimages%2Fdieuxephoa_01.jpg&w=256&q=75 256w
    const base64str = await fetch(`http://localhost:3000/_next/image?url=${url}&w=16&q=60`).then(async (res) =>
        Buffer.from(await res.arrayBuffer()).toString('base64')
    )

    const blurSvg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 200'>
        <filter id='b' color-interpolation-filters='sRGB'>
            <feGaussianBlur stdDeviation='20'/>
                <feColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/>
                <feFlood x='0' y='0' width='100%' height='100%'/>
                <feComposite operator='out' in='s'/>
                <feComposite in2='SourceGraphic'/>
            <feGaussianBlur stdDeviation='20'/>
        </filter>

        <image width='100%' height='100%' x='0' y='0' preserveAspectRatio='none' style='filter: url(#b);' 
        href='data:image/webp;base64,${base64str.trim()}'/>
    </svg>`

    const toBase64 = (str: string) =>
        typeof window === 'undefined'
            ? Buffer.from(str).toString('base64')
            : window.btoa(str)

    return `data:image/svg+xml;base64,${toBase64(blurSvg)}`
}

export async function staticBlurUrl() {

    const blurSvg = `
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 200'>
        <filter id='b' color-interpolation-filters='sRGB'>
            <feGaussianBlur stdDeviation='20'/>
                <feColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/>
                <feFlood x='0' y='0' width='100%' height='100%'/>
                <feComposite operator='out' in='s'/>
                <feComposite in2='SourceGraphic'/>
            <feGaussianBlur stdDeviation='20'/>
        </filter>

        <react preserveAspectRatio='none' style='filter: url(#b);' width='100%' height='100%' x='0' y='0' />

    </svg>
    `

    const toBase64 = (str: string) =>
        typeof window === 'undefined'
            ? Buffer.from(str).toString('base64')
            : window.btoa(str)

    return `data:image/svg+xml;base64,${toBase64(blurSvg)}`
}