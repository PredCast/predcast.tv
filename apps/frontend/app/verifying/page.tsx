"use client";

import { Suspense, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

function VerifyingContent() {
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        const next = searchParams.get("next") || "/browse";
        router.replace(next);
    }, [router, searchParams]);

    return null;
}

export default function VerifyingPage() {
    return (
        <Suspense fallback={null}>
            <VerifyingContent />
        </Suspense>
    );
}
