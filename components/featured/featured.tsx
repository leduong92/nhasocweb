//"use client"
import { IProduct } from '@/util/constant';
import React from 'react'
import Link from 'next/link';
import GridTileImage from '../grid/tile';

const Featured = ({ products }: { products: IProduct[] }) => {

    // const { state, dispatch } = useStore();
    // const basket = state.basket;

    // const listRef = useRef<HTMLDivElement | null>(null);

    // const [slideNumber, setSlideNumber] = useState<number>(0);
    // const [currentSlide, setCurrentSlide] = useState<number>(0);

    // const handleClick = (direction: string) => {
    //     let distance = listRef.current?.offsetWidth as number;

    //     let windownWidth = window.innerWidth as number;

    //     let numberOfSlide = 0;

    //     if (windownWidth < 425) {
    //         numberOfSlide = products.length
    //     } else if (windownWidth > 425 && windownWidth < 850) {
    //         numberOfSlide = products.length - 2
    //     } else if (windownWidth > 851 && windownWidth < 1179) {
    //         numberOfSlide = products.length - 3
    //     } else if (windownWidth > 1180) {
    //         numberOfSlide = products.length - 4
    //     }

    //     if (direction === "left") {
    //         setSlideNumber((prev) => prev - 1)
    //         setCurrentSlide(currentSlide + distance);

    //         if (slideNumber <= 0) {
    //             setSlideNumber(numberOfSlide)
    //             setCurrentSlide(-distance * numberOfSlide);
    //             return;
    //         }
    //     }

    //     if (direction === "right") {
    //         if (slideNumber >= numberOfSlide) {
    //             setSlideNumber(0)
    //             setCurrentSlide(0);
    //             return;
    //         }
    //         setSlideNumber((prev) => prev + 1)
    //         setCurrentSlide(-distance * (slideNumber + 1));
    //     }
    // }

    return (
        <div className='py-3 overflow-hidden'>

            <div className='container'>
                <h1 className='font-bold text-3xl py-3'>Sản phẩm nổi bật</h1>
            </div>

            <div className='w-full overflow-x-auto pb-6 pt-1'>
                {/* animate-carousel */}
                <ul className='flex  animate-carousel gap-4'>
                    {products.map((p, idx) => (
                        <li
                            key={p.id}
                            className="relative aspect-square h-[30vh] max-h-[275px] w-1/3 max-w-[275px] flex-none md:w-1/3"
                        >
                            <Link href={`/product-detail/${p.id}`}>
                                <GridTileImage
                                    alt={p.metaTitle}
                                    label={{
                                        title: p.metaTitle,
                                        amount: p.originalPrice,
                                        currencyCode: 'vi-VN'
                                    }}
                                    src={`${process.env.BASE_IMAGE_URL}${p.productImages[0]?.url}`}
                                    fill
                                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Featured

