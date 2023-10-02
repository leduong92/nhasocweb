"use client"

import { createUrl } from "@/util";
import { urlParameters } from "@/util/constant";
import clsx from "clsx";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function PaginatedPage({ pageNumber }: { pageNumber: number }) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const active = searchParams.get(urlParameters.pageIndex) === `${pageNumber}`;

    const optionSearchParams = new URLSearchParams(searchParams.toString());
    optionSearchParams.set(urlParameters.pageIndex, `${pageNumber}`);

    const optionUrl = createUrl(pathname, optionSearchParams);

    return (
        <button
            onClick={() => {
                router.replace(optionUrl, { scroll: false });
            }}
            className={clsx('px-4 py-2 mx-1 rounded-full text-sm font-semibold ', {
                'underline underline-offset-4': active
            })}
        >
            {pageNumber}
        </button>
    );
}

export default PaginatedPage;