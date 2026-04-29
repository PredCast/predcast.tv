module.exports = {

"[project]/apps/frontend/lib/utils.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$5$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/tailwind-merge@3.5.0/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$tailwind$2d$merge$40$3$2e$5$2e$0$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$clsx$40$2$2e$1$2e$1$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}}),
"[project]/apps/frontend/components/ui/button.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$2$2e$4_$40$types$2b$react$40$19$2e$2$2e$14_react$40$19$2e$2$2e$4$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@radix-ui+react-slot@1.2.4_@types+react@19.2.14_react@19.2.4/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$class$2d$variance$2d$authority$40$0$2e$7$2e$1$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
            destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$radix$2d$ui$2b$react$2d$slot$40$1$2e$2$2e$4_$40$types$2b$react$40$19$2e$2$2e$14_react$40$19$2e$2$2e$4$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/apps/frontend/components/ui/button.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/apps/frontend/components/Header.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Header": (()=>Header)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$38$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$38$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/framer-motion@12.38.0_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/compass.js [app-ssr] (ecmascript) <export default as Compass>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/trophy.js [app-ssr] (ecmascript) <export default as Trophy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tv$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TvIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/tv.js [app-ssr] (ecmascript) <export default as TvIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$DynamicContext$2f$useDynamicContext$2f$useDynamicContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/context/DynamicContext/useDynamicContext/useDynamicContext.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$DynamicConnectButton$2f$DynamicConnectButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@dynamic-labs+sdk-react-core@4.73.2_@dynamic-labs-wallet+forward-mpc-client@0.3.0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40/node_modules/@dynamic-labs/sdk-react-core/src/lib/components/DynamicConnectButton/DynamicConnectButton.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function Header() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { primaryWallet, handleLogOut } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$context$2f$DynamicContext$2f$useDynamicContext$2f$useDynamicContext$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDynamicContext"])();
    const connected = Boolean(primaryWallet?.address);
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const dropdownVariants = {
        hidden: {
            opacity: 0,
            height: 0
        },
        visible: {
            opacity: 1,
            height: "auto"
        },
        exit: {
            opacity: 0,
            height: 0
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm border-b border-white/10 bg-gradient-to-b from-black/20 to-transparent shadow-lg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-6 py-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "flex items-center gap-4 cursor-pointer",
                            onClick: ()=>router.push("/"),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/Logo_FINAL.svg",
                                    alt: "ChilizTV Logo",
                                    width: 40,
                                    height: 40,
                                    className: "rounded-full shadow-lg transition-transform hover:scale-105"
                                }, void 0, false, {
                                    fileName: "[project]/apps/frontend/components/Header.tsx",
                                    lineNumber: 31,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-white text-[24px] uppercase tracking-wider",
                                    children: "ChilizTV"
                                }, void 0, false, {
                                    fileName: "[project]/apps/frontend/components/Header.tsx",
                                    lineNumber: 38,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/frontend/components/Header.tsx",
                            lineNumber: 30,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "hidden md:flex flex-row gap-[38px] items-center text-[16px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "flex items-center gap-2 text-white/70 hover:text-white transition-colors cursor-pointer",
                                    onClick: ()=>router.push("/browse"),
                                    tabIndex: 0,
                                    onKeyDown: (e)=>{
                                        if (e.key === "Enter" || e.key === " ") {
                                            router.push("/browse");
                                        }
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__["Compass"], {}, void 0, false, {
                                            fileName: "[project]/apps/frontend/components/Header.tsx",
                                            lineNumber: 55,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white/70 hover:text-white transition-colors cursor-pointer",
                                            children: "Discover"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/frontend/components/Header.tsx",
                                            lineNumber: 56,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/frontend/components/Header.tsx",
                                    lineNumber: 45,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "flex items-center gap-2 text-white/70 hover:text-white transition-colors cursor-pointer",
                                    onClick: ()=>router.push("/live"),
                                    tabIndex: 0,
                                    onKeyDown: (e)=>{
                                        if (e.key === "Enter" || e.key === " ") {
                                            router.push("/live");
                                        }
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tv$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TvIcon$3e$__["TvIcon"], {}, void 0, false, {
                                            fileName: "[project]/apps/frontend/components/Header.tsx",
                                            lineNumber: 70,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white/70 hover:text-white transition-colors cursor-pointer",
                                            children: "Browse Matches"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/frontend/components/Header.tsx",
                                            lineNumber: 71,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/frontend/components/Header.tsx",
                                    lineNumber: 60,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "flex items-center gap-2 text-white/70 hover:text-white transition-colors cursor-pointer",
                                    onClick: ()=>router.push("/leaderboard"),
                                    tabIndex: 0,
                                    onKeyDown: (e)=>{
                                        if (e.key === "Enter" || e.key === " ") {
                                            router.push("/leaderboard");
                                        }
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trophy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trophy$3e$__["Trophy"], {}, void 0, false, {
                                            fileName: "[project]/apps/frontend/components/Header.tsx",
                                            lineNumber: 85,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white/70 hover:text-white transition-colors cursor-pointer",
                                            children: "Leaderboard"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/frontend/components/Header.tsx",
                                            lineNumber: 86,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/frontend/components/Header.tsx",
                                    lineNumber: 75,
                                    columnNumber: 25
                                }, this),
                                connected && // Balance in USD
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "flex items-center gap-2 text-white/70 hover:text-white transition-colors cursor-pointer",
                                    onClick: ()=>router.push("/dashboard"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {}, void 0, false, {
                                            fileName: "[project]/apps/frontend/components/Header.tsx",
                                            lineNumber: 93,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-white/70 hover:text-white transition-colors cursor-pointer",
                                            children: "Profile"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/frontend/components/Header.tsx",
                                            lineNumber: 94,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/frontend/components/Header.tsx",
                                    lineNumber: 92,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/frontend/components/Header.tsx",
                            lineNumber: 44,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "md:hidden text-white",
                            onClick: ()=>setMenuOpen((prev)=>!prev),
                            children: menuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                size: 28
                            }, void 0, false, {
                                fileName: "[project]/apps/frontend/components/Header.tsx",
                                lineNumber: 103,
                                columnNumber: 37
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                size: 28
                            }, void 0, false, {
                                fileName: "[project]/apps/frontend/components/Header.tsx",
                                lineNumber: 103,
                                columnNumber: 55
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/frontend/components/Header.tsx",
                            lineNumber: 102,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex items-center gap-4",
                            children: !connected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$DynamicConnectButton$2f$DynamicConnectButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicConnectButton"], {
                                buttonClassName: "bg-primary hover:bg-primary/90 text-white font-bold rounded-lg px-6 py-2 transition-all duration-300",
                                children: "Connect Wallet"
                            }, void 0, false, {
                                fileName: "[project]/apps/frontend/components/Header.tsx",
                                lineNumber: 109,
                                columnNumber: 33
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/30 rounded-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-2 h-2 bg-green-500 rounded-full animate-pulse"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/frontend/components/Header.tsx",
                                                lineNumber: 115,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-white text-sm font-medium",
                                                children: [
                                                    primaryWallet?.address?.slice(0, 6),
                                                    "...",
                                                    primaryWallet?.address?.slice(-4)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/frontend/components/Header.tsx",
                                                lineNumber: 116,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/frontend/components/Header.tsx",
                                        lineNumber: 114,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: ()=>handleLogOut?.(),
                                        className: "bg-primary hover:bg-primary/90 text-white font-bold rounded-lg px-6 transition-all duration-300",
                                        children: "Disconnect"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/frontend/components/Header.tsx",
                                        lineNumber: 120,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/frontend/components/Header.tsx",
                                lineNumber: 113,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/frontend/components/Header.tsx",
                            lineNumber: 107,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/frontend/components/Header.tsx",
                    lineNumber: 28,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$38$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    children: menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$38$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: "hidden",
                        animate: "visible",
                        exit: "exit",
                        variants: dropdownVariants,
                        transition: {
                            duration: 0.25
                        },
                        className: "md:hidden overflow-hidden flex flex-col gap-4 mt-4 text-white text-base",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    router.push("/browse");
                                    setMenuOpen(false);
                                },
                                className: "text-white/80 hover:text-white text-left",
                                children: "Discover"
                            }, void 0, false, {
                                fileName: "[project]/apps/frontend/components/Header.tsx",
                                lineNumber: 142,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    router.push("/live");
                                    setMenuOpen(false);
                                },
                                className: "text-white/80 hover:text-white text-left",
                                children: "Live Matches"
                            }, void 0, false, {
                                fileName: "[project]/apps/frontend/components/Header.tsx",
                                lineNumber: 151,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    router.push("/leaderboard");
                                    setMenuOpen(false);
                                },
                                className: "text-white/80 hover:text-white text-left",
                                children: "Leaderboard"
                            }, void 0, false, {
                                fileName: "[project]/apps/frontend/components/Header.tsx",
                                lineNumber: 160,
                                columnNumber: 29
                            }, this),
                            connected && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>{
                                    router.push("/dashboard");
                                    setMenuOpen(false);
                                },
                                className: "text-white/80 hover:text-white text-left",
                                children: "Dashboard"
                            }, void 0, false, {
                                fileName: "[project]/apps/frontend/components/Header.tsx",
                                lineNumber: 170,
                                columnNumber: 33
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t border-white/10 pt-4 flex flex-col gap-3",
                                children: !connected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$dynamic$2d$labs$2b$sdk$2d$react$2d$core$40$4$2e$73$2e$2_$40$dynamic$2d$labs$2d$wallet$2b$forward$2d$mpc$2d$client$40$0$2e$3$2e$0_buffe_40c3b6b25f2c2dab6d59a9b0239bbb40$2f$node_modules$2f40$dynamic$2d$labs$2f$sdk$2d$react$2d$core$2f$src$2f$lib$2f$components$2f$DynamicConnectButton$2f$DynamicConnectButton$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DynamicConnectButton"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                        onClick: ()=>setMenuOpen(false),
                                        className: "bg-primary hover:bg-primary/90 text-white font-bold rounded-lg px-6 transition-all duration-300",
                                        children: "Connect Wallet"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/frontend/components/Header.tsx",
                                        lineNumber: 183,
                                        columnNumber: 41
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/apps/frontend/components/Header.tsx",
                                    lineNumber: 182,
                                    columnNumber: 41
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/30 rounded-lg justify-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-2 h-2 bg-green-500 rounded-full animate-pulse"
                                                }, void 0, false, {
                                                    fileName: "[project]/apps/frontend/components/Header.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 45
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-white text-sm font-medium",
                                                    children: [
                                                        primaryWallet?.address?.slice(0, 6),
                                                        "...",
                                                        primaryWallet?.address?.slice(-4)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/apps/frontend/components/Header.tsx",
                                                    lineNumber: 194,
                                                    columnNumber: 45
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/apps/frontend/components/Header.tsx",
                                            lineNumber: 192,
                                            columnNumber: 41
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            onClick: ()=>{
                                                handleLogOut?.();
                                                setMenuOpen(false);
                                            },
                                            className: "bg-primary hover:bg-primary/90 text-white font-bold rounded-lg px-6 transition-all duration-300",
                                            children: "Disconnect"
                                        }, void 0, false, {
                                            fileName: "[project]/apps/frontend/components/Header.tsx",
                                            lineNumber: 198,
                                            columnNumber: 41
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/frontend/components/Header.tsx",
                                    lineNumber: 191,
                                    columnNumber: 37
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/frontend/components/Header.tsx",
                                lineNumber: 180,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/frontend/components/Header.tsx",
                        lineNumber: 134,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/apps/frontend/components/Header.tsx",
                    lineNumber: 132,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/frontend/components/Header.tsx",
            lineNumber: 27,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/frontend/components/Header.tsx",
        lineNumber: 26,
        columnNumber: 9
    }, this);
}
}}),
"[project]/apps/frontend/components/Footer.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Footer": (()=>Footer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/facebook.js [app-ssr] (ecmascript) <export default as Facebook>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/twitter.js [app-ssr] (ecmascript) <export default as Twitter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/youtube.js [app-ssr] (ecmascript) <export default as Youtube>");
"use client";
;
;
;
;
function Footer() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-black/90 text-white border-t border-white/10 backdrop-blur-md px-6 py-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-sm",
                style: {
                    fontFamily: 'Lexend, sans-serif'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: "/Logo_FINAL.svg",
                                alt: "ChilizTV",
                                width: 36,
                                height: 36,
                                className: "rounded-full"
                            }, void 0, false, {
                                fileName: "[project]/apps/frontend/components/Footer.tsx",
                                lineNumber: 16,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-white text-[18px] uppercase tracking-wider font-semibold",
                                children: "ChilizTV"
                            }, void 0, false, {
                                fileName: "[project]/apps/frontend/components/Footer.tsx",
                                lineNumber: 17,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/frontend/components/Footer.tsx",
                        lineNumber: 15,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-6 justify-center text-white/70 text-[14px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hover:text-white cursor-pointer transition",
                                onClick: ()=>router.push("/"),
                                children: "Home"
                            }, void 0, false, {
                                fileName: "[project]/apps/frontend/components/Footer.tsx",
                                lineNumber: 22,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hover:text-white cursor-pointer transition",
                                onClick: ()=>router.push("/live"),
                                children: "Live Matches"
                            }, void 0, false, {
                                fileName: "[project]/apps/frontend/components/Footer.tsx",
                                lineNumber: 23,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "hover:text-white cursor-pointer transition",
                                onClick: ()=>router.push("/dashboard"),
                                children: "Dashboard"
                            }, void 0, false, {
                                fileName: "[project]/apps/frontend/components/Footer.tsx",
                                lineNumber: 24,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/frontend/components/Footer.tsx",
                        lineNumber: 21,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://twitter.com",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "hover:text-primary transition",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/apps/frontend/components/Footer.tsx",
                                    lineNumber: 32,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/frontend/components/Footer.tsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://facebook.com",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "hover:text-primary transition",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__["Facebook"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/apps/frontend/components/Footer.tsx",
                                    lineNumber: 35,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/frontend/components/Footer.tsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://youtube.com",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "hover:text-primary transition",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__["Youtube"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/apps/frontend/components/Footer.tsx",
                                    lineNumber: 38,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/apps/frontend/components/Footer.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/frontend/components/Footer.tsx",
                        lineNumber: 30,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/frontend/components/Footer.tsx",
                lineNumber: 12,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center text-white/50 text-xs mt-8",
                children: [
                    "© ",
                    new Date().getFullYear(),
                    " ChilizTV. All rights reserved."
                ]
            }, void 0, true, {
                fileName: "[project]/apps/frontend/components/Footer.tsx",
                lineNumber: 44,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/frontend/components/Footer.tsx",
        lineNumber: 11,
        columnNumber: 9
    }, this);
}
}}),
"[project]/apps/frontend/lib/api/error.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ApiError": (()=>ApiError),
    "ApiErrorCode": (()=>ApiErrorCode),
    "handleApiError": (()=>handleApiError)
});
var ApiErrorCode = /*#__PURE__*/ function(ApiErrorCode) {
    ApiErrorCode["UNAUTHORIZED"] = "UNAUTHORIZED";
    ApiErrorCode["FORBIDDEN"] = "FORBIDDEN";
    ApiErrorCode["NOT_FOUND"] = "NOT_FOUND";
    ApiErrorCode["RATE_LIMIT"] = "RATE_LIMIT";
    ApiErrorCode["VALIDATION_ERROR"] = "VALIDATION_ERROR";
    ApiErrorCode["SERVER_ERROR"] = "SERVER_ERROR";
    ApiErrorCode["NETWORK_ERROR"] = "NETWORK_ERROR";
    ApiErrorCode["UNKNOWN"] = "UNKNOWN";
    return ApiErrorCode;
}({});
class ApiError extends Error {
    code;
    statusCode;
    details;
    constructor(code, message, statusCode, details){
        super(message), this.code = code, this.statusCode = statusCode, this.details = details;
        this.name = 'ApiError';
        Object.setPrototypeOf(this, ApiError.prototype);
    }
}
function handleApiError(error) {
    if (!error.response) {
        return new ApiError("NETWORK_ERROR", 'Network error occurred. Please check your connection.', undefined, error);
    }
    const status = error.response.status;
    const responseData = error.response.data;
    const message = responseData?.message || responseData?.error || error.message;
    switch(status){
        case 401:
            return new ApiError("UNAUTHORIZED", message, status, responseData);
        case 403:
            return new ApiError("FORBIDDEN", message, status, responseData);
        case 404:
            return new ApiError("NOT_FOUND", message, status, responseData);
        case 429:
            return new ApiError("RATE_LIMIT", 'Too many requests. Please try again later.', status, responseData);
        case 422:
        case 400:
            return new ApiError("VALIDATION_ERROR", message, status, responseData);
        case 500:
        case 502:
        case 503:
        case 504:
            return new ApiError("SERVER_ERROR", 'Server error occurred. Please try again later.', status, responseData);
        default:
            return new ApiError("UNKNOWN", message, status, responseData);
    }
}
}}),
"[project]/packages/domain/src/shared/errors/DomainError.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DomainError": (()=>DomainError)
});
class DomainError extends Error {
    code;
    statusCode;
    details;
    constructor(message, code, statusCode = 500, details){
        super(message), this.code = code, this.statusCode = statusCode, this.details = details;
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
    toJSON() {
        return {
            code: this.code,
            message: this.message,
            ...this.details ? {
                details: this.details
            } : {}
        };
    }
}
}}),
"[project]/packages/domain/src/shared/errors/ValidationError.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ValidationError": (()=>ValidationError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$DomainError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/DomainError.ts [app-ssr] (ecmascript)");
;
class ValidationError extends __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$DomainError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DomainError"] {
    constructor(message, details){
        super(message, 'VALIDATION_ERROR', 400, details);
    }
}
}}),
"[project]/packages/domain/src/shared/errors/NotFoundError.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "NotFoundError": (()=>NotFoundError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$DomainError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/DomainError.ts [app-ssr] (ecmascript)");
;
class NotFoundError extends __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$DomainError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DomainError"] {
    constructor(resource, identifier){
        super(`${resource} with identifier '${identifier}' not found`, 'NOT_FOUND', 404, {
            resource,
            identifier
        });
    }
}
}}),
"[project]/packages/domain/src/shared/errors/UnauthorizedError.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "UnauthorizedError": (()=>UnauthorizedError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$DomainError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/DomainError.ts [app-ssr] (ecmascript)");
;
class UnauthorizedError extends __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$DomainError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DomainError"] {
    constructor(message = 'Unauthorized'){
        super(message, 'UNAUTHORIZED', 401);
    }
}
}}),
"[project]/packages/domain/src/shared/errors/ConflictError.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ConflictError": (()=>ConflictError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$DomainError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/DomainError.ts [app-ssr] (ecmascript)");
;
class ConflictError extends __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$DomainError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DomainError"] {
    constructor(message, details){
        super(message, 'CONFLICT', 409, details);
    }
}
}}),
"[project]/packages/domain/src/shared/errors/BusinessRuleError.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "BusinessRuleError": (()=>BusinessRuleError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$DomainError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/DomainError.ts [app-ssr] (ecmascript)");
;
class BusinessRuleError extends __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$DomainError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DomainError"] {
    constructor(message, details){
        super(message, 'BUSINESS_RULE_VIOLATION', 422, details);
    }
}
}}),
"[project]/packages/domain/src/shared/errors/index.ts [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$DomainError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/DomainError.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/ValidationError.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$NotFoundError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/NotFoundError.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$UnauthorizedError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/UnauthorizedError.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$ConflictError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/ConflictError.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$BusinessRuleError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/BusinessRuleError.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
}}),
"[project]/packages/domain/src/shared/errors/index.ts [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$DomainError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/DomainError.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/ValidationError.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$NotFoundError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/NotFoundError.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$UnauthorizedError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/UnauthorizedError.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$ConflictError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/ConflictError.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$BusinessRuleError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/BusinessRuleError.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/index.ts [app-ssr] (ecmascript) <locals>");
}}),
"[project]/packages/domain/src/shared/tokens.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "TOKENS": (()=>TOKENS)
});
const TOKENS = {
    // Repositories
    IMatchRepository: Symbol.for('IMatchRepository'),
    IPredictionRepository: Symbol.for('IPredictionRepository'),
    IChatRepository: Symbol.for('IChatRepository'),
    IStreamRepository: Symbol.for('IStreamRepository'),
    IStreamWalletRepository: Symbol.for('IStreamWalletRepository'),
    IWaitlistRepository: Symbol.for('IWaitlistRepository'),
    IFollowRepository: Symbol.for('IFollowRepository'),
    IFanTokenRepository: Symbol.for('IFanTokenRepository'),
    // Ports — external services
    IFootballApiService: Symbol.for('IFootballApiService'),
    IBlockchainService: Symbol.for('IBlockchainService'),
    ISchedulerService: Symbol.for('ISchedulerService'),
    IStreamingService: Symbol.for('IStreamingService'),
    // Ports — config
    IAuthConfig: Symbol.for('IAuthConfig'),
    INetworkConfig: Symbol.for('INetworkConfig'),
    ILogger: Symbol.for('ILogger'),
    // Ports — cross-domain
    ISubscriptionChecker: Symbol.for('ISubscriptionChecker')
};
}}),
"[project]/packages/domain/src/shared/ports/ILogger.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
}}),
"[project]/packages/domain/src/shared/ports/IAuthConfig.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
}}),
"[project]/packages/domain/src/shared/ports/INetworkConfig.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
}}),
"[project]/packages/domain/src/shared/ports/ISchedulerService.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
}}),
"[project]/packages/domain/src/shared/ports/ISubscriptionChecker.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
}}),
"[project]/packages/domain/src/shared/ports/IFootballApiService.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
}}),
"[project]/packages/domain/src/shared/ports/IBlockchainService.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
}}),
"[project]/packages/domain/src/matches/entities/Match.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Match": (()=>Match)
});
class Match {
    props;
    constructor(props){
        this.props = props;
    }
    static create(props) {
        const now = new Date();
        return new Match({
            ...props,
            createdAt: now,
            updatedAt: now
        });
    }
    static reconstitute(props) {
        return new Match(props);
    }
    isLive() {
        return [
            '1H',
            '2H',
            'HT'
        ].includes(this.props.status);
    }
    isUpcoming() {
        return this.props.status === 'NS' && this.props.matchDate > new Date();
    }
    isFinished() {
        return this.props.status === 'FT';
    }
    updateScore(homeScore, awayScore) {
        this.props.homeScore = homeScore;
        this.props.awayScore = awayScore;
        this.props.updatedAt = new Date();
    }
    updateStatus(status) {
        this.props.status = status;
        this.props.updatedAt = new Date();
    }
    getId() {
        return this.props.id;
    }
    getLeagueId() {
        return this.props.leagueId;
    }
    getStatus() {
        return this.props.status;
    }
    getMatchDate() {
        return this.props.matchDate;
    }
    getHomeScore() {
        return this.props.homeScore;
    }
    getAwayScore() {
        return this.props.awayScore;
    }
    getBettingContractAddress() {
        return this.props.bettingContractAddress;
    }
    toJSON() {
        return {
            id: this.props.id,
            apiFootballId: this.props.apiFootballId,
            homeTeam: {
                id: this.props.homeTeamId,
                name: this.props.homeTeamName,
                logo: this.props.homeTeamLogo
            },
            awayTeam: {
                id: this.props.awayTeamId,
                name: this.props.awayTeamName,
                logo: this.props.awayTeamLogo
            },
            league: {
                id: this.props.leagueId,
                name: this.props.leagueName,
                logo: this.props.leagueLogo
            },
            season: this.props.season,
            status: this.props.status,
            matchDate: this.props.matchDate,
            venue: this.props.venue,
            score: this.props.homeScore !== undefined && this.props.awayScore !== undefined ? {
                home: this.props.homeScore,
                away: this.props.awayScore
            } : null,
            odds: this.props.odds,
            bettingContractAddress: this.props.bettingContractAddress,
            createdAt: this.props.createdAt,
            updatedAt: this.props.updatedAt
        };
    }
}
}}),
"[project]/packages/domain/src/matches/repositories/IMatchRepository.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
}}),
"[project]/packages/domain/src/matches/value-objects/MatchFetchWindow.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "MatchFetchWindow": (()=>MatchFetchWindow)
});
class MatchFetchWindow {
    static FETCH_DAYS_AHEAD = 7;
    static CLEANUP_HOURS_AFTER = 24;
    static fetchFrom(now) {
        const from = new Date(now);
        from.setDate(from.getDate() - 1);
        return from;
    }
    static fetchTo(now) {
        const to = new Date(now);
        to.setDate(to.getDate() + MatchFetchWindow.FETCH_DAYS_AHEAD);
        return to;
    }
    static cleanupBefore(now) {
        const before = new Date(now);
        before.setHours(before.getHours() - MatchFetchWindow.CLEANUP_HOURS_AFTER);
        return before;
    }
}
}}),
"[project]/packages/domain/src/predictions/value-objects/PredictionStatus.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "PredictionStatus": (()=>PredictionStatus)
});
var PredictionStatus = /*#__PURE__*/ function(PredictionStatus) {
    PredictionStatus["PENDING"] = "PENDING";
    PredictionStatus["IN_PROGRESS"] = "IN_PROGRESS";
    PredictionStatus["WON"] = "WON";
    PredictionStatus["LOST"] = "LOST";
    PredictionStatus["CANCELLED"] = "CANCELLED";
    return PredictionStatus;
}({});
}}),
"[project]/packages/domain/src/predictions/entities/Prediction.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Prediction": (()=>Prediction)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$predictions$2f$value$2d$objects$2f$PredictionStatus$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/predictions/value-objects/PredictionStatus.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/ValidationError.ts [app-ssr] (ecmascript)");
;
;
class Prediction {
    props;
    constructor(props){
        this.props = props;
    }
    static create(props) {
        const now = new Date();
        if (!props.userId || !props.walletAddress) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValidationError"]('User ID and wallet address are required');
        }
        if (!props.matchId || !props.matchName) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValidationError"]('Match ID and name are required');
        }
        if (props.matchStartTime < now) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValidationError"]('Cannot place prediction on past matches');
        }
        return new Prediction({
            ...props,
            placedAt: now,
            createdAt: now,
            updatedAt: now
        });
    }
    static reconstitute(props) {
        return new Prediction(props);
    }
    settle(actualResult, isWin) {
        if (this.props.status !== __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$predictions$2f$value$2d$objects$2f$PredictionStatus$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PredictionStatus"].PENDING && this.props.status !== __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$predictions$2f$value$2d$objects$2f$PredictionStatus$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PredictionStatus"].IN_PROGRESS) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValidationError"]('Can only settle pending or in-progress predictions');
        }
        this.props.actualResult = actualResult;
        this.props.status = isWin ? __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$predictions$2f$value$2d$objects$2f$PredictionStatus$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PredictionStatus"].WON : __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$predictions$2f$value$2d$objects$2f$PredictionStatus$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PredictionStatus"].LOST;
        this.props.settledAt = new Date();
        this.props.updatedAt = new Date();
    }
    cancel() {
        if (this.props.status !== __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$predictions$2f$value$2d$objects$2f$PredictionStatus$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PredictionStatus"].PENDING) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValidationError"]('Can only cancel pending predictions');
        }
        this.props.status = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$predictions$2f$value$2d$objects$2f$PredictionStatus$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PredictionStatus"].CANCELLED;
        this.props.updatedAt = new Date();
    }
    markInProgress() {
        if (this.props.status !== __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$predictions$2f$value$2d$objects$2f$PredictionStatus$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PredictionStatus"].PENDING) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValidationError"]('Can only mark pending predictions as in-progress');
        }
        this.props.status = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$predictions$2f$value$2d$objects$2f$PredictionStatus$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PredictionStatus"].IN_PROGRESS;
        this.props.updatedAt = new Date();
    }
    getId() {
        return this.props.id;
    }
    getUserId() {
        return this.props.userId;
    }
    getWalletAddress() {
        return this.props.walletAddress;
    }
    getMatchId() {
        return this.props.matchId;
    }
    getPredictionType() {
        return this.props.predictionType;
    }
    getPredictionValue() {
        return this.props.predictionValue;
    }
    getTransactionHash() {
        return this.props.transactionHash;
    }
    getStatus() {
        return this.props.status;
    }
    getOdds() {
        return this.props.odds;
    }
    getMatchStartTime() {
        return this.props.matchStartTime;
    }
    toJSON() {
        return {
            id: this.props.id,
            userId: this.props.userId,
            walletAddress: this.props.walletAddress,
            username: this.props.username,
            matchId: this.props.matchId,
            matchName: this.props.matchName,
            predictionType: this.props.predictionType,
            predictionValue: this.props.predictionValue,
            predictedTeam: this.props.predictedTeam,
            odds: this.props.odds.getValue(),
            status: this.props.status,
            actualResult: this.props.actualResult,
            transactionHash: this.props.transactionHash.getValue(),
            placedAt: this.props.placedAt,
            matchStartTime: this.props.matchStartTime,
            settledAt: this.props.settledAt,
            createdAt: this.props.createdAt,
            updatedAt: this.props.updatedAt
        };
    }
}
}}),
"[project]/packages/domain/src/predictions/repositories/IPredictionRepository.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
}}),
"[project]/packages/domain/src/predictions/value-objects/Odds.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Odds": (()=>Odds)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/ValidationError.ts [app-ssr] (ecmascript)");
;
class Odds {
    value;
    constructor(value){
        this.value = value;
    }
    static create(value) {
        if (typeof value !== 'number' || isNaN(value)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValidationError"]('Odds must be a valid number');
        }
        if (value <= 1) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValidationError"]('Odds must be greater than 1');
        }
        if (value > 1000) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValidationError"]('Odds seem unrealistic (max 1000)');
        }
        return new Odds(value);
    }
    getValue() {
        return this.value;
    }
    equals(other) {
        return this.value === other.value;
    }
}
}}),
"[project]/packages/domain/src/predictions/value-objects/TransactionHash.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "TransactionHash": (()=>TransactionHash)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/ValidationError.ts [app-ssr] (ecmascript)");
;
class TransactionHash {
    value;
    constructor(value){
        this.value = value;
    }
    static create(value) {
        if (!value || typeof value !== 'string') {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValidationError"]('Transaction hash is required');
        }
        if (!/^0x[a-fA-F0-9]{64}$/.test(value)) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValidationError"]('Invalid transaction hash format');
        }
        return new TransactionHash(value);
    }
    getValue() {
        return this.value;
    }
    equals(other) {
        return this.value === other.value;
    }
}
}}),
"[project]/packages/domain/src/chat/entities/ChatMessage.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ChatMessage": (()=>ChatMessage),
    "MessageType": (()=>MessageType)
});
var MessageType = /*#__PURE__*/ function(MessageType) {
    MessageType["REGULAR"] = "REGULAR";
    MessageType["BET"] = "BET";
    MessageType["SYSTEM"] = "SYSTEM";
    MessageType["DONATION"] = "DONATION";
    return MessageType;
}({});
class ChatMessage {
    props;
    constructor(props){
        this.props = props;
    }
    static create(props) {
        return new ChatMessage({
            ...props,
            id: crypto.randomUUID(),
            timestamp: new Date()
        });
    }
    static reconstitute(props) {
        return new ChatMessage(props);
    }
    getId() {
        return this.props.id;
    }
    getMatchId() {
        return this.props.matchId;
    }
    getStreamId() {
        return this.props.streamId;
    }
    getUserId() {
        return this.props.userId;
    }
    isBetMessage() {
        return this.props.type === "BET";
    }
    toJSON() {
        return {
            id: this.props.id,
            matchId: this.props.matchId,
            streamId: this.props.streamId ?? null,
            userId: this.props.userId,
            walletAddress: this.props.walletAddress,
            username: this.props.username,
            message: this.props.message,
            timestamp: this.props.timestamp.getTime(),
            type: this.props.type,
            isFeatured: this.props.isFeatured,
            ...this.props.systemType && {
                systemType: this.props.systemType
            },
            ...this.props.betType && {
                betType: this.props.betType
            },
            ...this.props.betSubType && {
                betSubType: this.props.betSubType
            },
            ...this.props.amount && {
                amount: this.props.amount
            },
            ...this.props.odds && {
                odds: this.props.odds
            }
        };
    }
}
}}),
"[project]/packages/domain/src/chat/entities/ConnectedUser.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ConnectedUser": (()=>ConnectedUser)
});
class ConnectedUser {
    props;
    constructor(props){
        this.props = props;
    }
    static create(props) {
        const now = new Date();
        return new ConnectedUser({
            ...props,
            id: crypto.randomUUID(),
            connectedAt: now,
            lastActivity: now
        });
    }
    static reconstitute(props) {
        return new ConnectedUser(props);
    }
    updateActivity() {
        this.props.lastActivity = new Date();
    }
    getId() {
        return this.props.id;
    }
    getMatchId() {
        return this.props.matchId;
    }
    getUserId() {
        return this.props.userId;
    }
    toJSON() {
        return {
            id: this.props.id,
            matchId: this.props.matchId,
            userId: this.props.userId,
            username: this.props.username,
            connectedAt: this.props.connectedAt.getTime(),
            lastActivity: this.props.lastActivity.getTime()
        };
    }
}
}}),
"[project]/packages/domain/src/chat/repositories/IChatRepository.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
}}),
"[project]/packages/domain/src/fan-tokens/repositories/IFanTokenRepository.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
}}),
"[project]/packages/domain/src/follows/entities/Follow.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Follow": (()=>Follow)
});
class Follow {
    props;
    constructor(props){
        this.props = props;
    }
    static create(props) {
        return new Follow({
            ...props,
            id: crypto.randomUUID(),
            createdAt: new Date()
        });
    }
    static reconstitute(props) {
        return new Follow(props);
    }
    getId() {
        return this.props.id;
    }
    toJSON() {
        return {
            ...this.props
        };
    }
}
}}),
"[project]/packages/domain/src/follows/repositories/IFollowRepository.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
}}),
"[project]/packages/domain/src/streams/entities/Stream.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Stream": (()=>Stream),
    "StreamStatus": (()=>StreamStatus)
});
var StreamStatus = /*#__PURE__*/ function(StreamStatus) {
    StreamStatus["CREATED"] = "created";
    StreamStatus["LIVE"] = "live";
    StreamStatus["ENDED"] = "ended";
    return StreamStatus;
}({});
class Stream {
    props;
    constructor(props){
        this.props = props;
    }
    static create(props) {
        const now = new Date();
        return new Stream({
            ...props,
            id: crypto.randomUUID(),
            createdAt: now
        });
    }
    static reconstitute(props) {
        return new Stream(props);
    }
    /** Transition to LIVE. No-op if already LIVE (idempotent). */ start() {
        if (this.props.status === "live") return;
        this.props.status = "live";
    }
    /** Transition to ENDED. No-op if already ENDED (idempotent). */ end() {
        if (this.props.status === "ended") return;
        this.props.status = "ended";
        this.props.endedAt = new Date();
    }
    /** Refresh heartbeat timestamp — guarantees lastHeartbeatAt is non-null while LIVE. */ heartbeat() {
        this.props.lastHeartbeatAt = new Date();
    }
    getStatus() {
        return this.props.status;
    }
    updateViewerCount(count) {
        this.props.viewerCount = count;
    }
    getId() {
        return this.props.id;
    }
    getStreamKey() {
        return this.props.streamKey;
    }
    getStreamerId() {
        return this.props.streamerId;
    }
    /** Backward-compatible helper. Returns true only when status is LIVE. */ isLive() {
        return this.props.status === "live";
    }
    toJSON() {
        return {
            id: this.props.id,
            matchId: this.props.matchId,
            streamerId: this.props.streamerId,
            streamerName: this.props.streamerName,
            streamerWalletAddress: this.props.streamerWalletAddress,
            streamKey: this.props.streamKey,
            hlsUrl: this.props.hlsUrl,
            title: this.props.title,
            status: this.props.status,
            isLive: this.props.status === "live",
            thumbnailUrl: this.props.thumbnailUrl ?? null,
            lastHeartbeatAt: this.props.lastHeartbeatAt,
            viewerCount: this.props.viewerCount,
            endedAt: this.props.endedAt,
            createdAt: this.props.createdAt
        };
    }
}
}}),
"[project]/packages/domain/src/streams/repositories/IStreamRepository.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
}}),
"[project]/packages/domain/src/stream-wallet/entities/Donation.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Donation": (()=>Donation)
});
class Donation {
    props;
    constructor(props){
        this.props = props;
    }
    static create(props) {
        return new Donation({
            ...props,
            id: crypto.randomUUID()
        });
    }
    static reconstitute(props) {
        return new Donation(props);
    }
    toJSON() {
        return {
            id: this.props.id,
            streamerAddress: this.props.streamerAddress,
            donorAddress: this.props.donorAddress,
            streamWalletAddress: this.props.streamWalletAddress,
            amount: this.props.amount,
            platformFee: this.props.platformFee,
            streamerAmount: this.props.streamerAmount,
            message: this.props.message,
            transactionHash: this.props.transactionHash,
            timestamp: this.props.timestamp
        };
    }
}
}}),
"[project]/packages/domain/src/stream-wallet/entities/Subscription.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Subscription": (()=>Subscription)
});
class Subscription {
    props;
    constructor(props){
        this.props = props;
    }
    static create(props) {
        return new Subscription({
            ...props,
            id: crypto.randomUUID()
        });
    }
    static reconstitute(props) {
        return new Subscription(props);
    }
    isActive() {
        const now = new Date();
        return this.props.startDate <= now && now <= this.props.endDate;
    }
    toJSON() {
        return {
            id: this.props.id,
            streamerAddress: this.props.streamerAddress,
            subscriberAddress: this.props.subscriberAddress,
            streamWalletAddress: this.props.streamWalletAddress,
            durationSeconds: this.props.durationSeconds,
            amount: this.props.amount,
            platformFee: this.props.platformFee,
            streamerAmount: this.props.streamerAmount,
            startDate: this.props.startDate,
            endDate: this.props.endDate,
            transactionHash: this.props.transactionHash,
            status: this.props.status,
            isActive: this.isActive()
        };
    }
}
}}),
"[project]/packages/domain/src/stream-wallet/repositories/IStreamWalletRepository.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
}}),
"[project]/packages/domain/src/waitlist/entities/WaitlistEntry.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "WaitlistEntry": (()=>WaitlistEntry)
});
class WaitlistEntry {
    props;
    constructor(props){
        this.props = props;
    }
    static create(props) {
        return new WaitlistEntry({
            ...props,
            id: crypto.randomUUID(),
            createdAt: new Date()
        });
    }
    static reconstitute(props) {
        return new WaitlistEntry(props);
    }
    getId() {
        return this.props.id;
    }
    getEmail() {
        return this.props.email;
    }
    getWalletAddress() {
        return this.props.walletAddress;
    }
    hasAccess() {
        return this.props.hasAccess;
    }
    toJSON() {
        return {
            id: this.props.id,
            email: this.props.email,
            walletAddress: this.props.walletAddress,
            source: this.props.source,
            hasAccess: this.props.hasAccess,
            createdAt: this.props.createdAt
        };
    }
}
}}),
"[project]/packages/domain/src/waitlist/repositories/IWaitlistRepository.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
;
}}),
"[project]/packages/domain/src/index.ts [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Shared — errors
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/index.ts [app-ssr] (ecmascript) <module evaluation>");
// Shared — tokens
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/tokens.ts [app-ssr] (ecmascript)");
// Shared — ports
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$ports$2f$ILogger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/ports/ILogger.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$ports$2f$IAuthConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/ports/IAuthConfig.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$ports$2f$INetworkConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/ports/INetworkConfig.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$ports$2f$ISchedulerService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/ports/ISchedulerService.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$ports$2f$ISubscriptionChecker$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/ports/ISubscriptionChecker.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$ports$2f$IFootballApiService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/ports/IFootballApiService.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$ports$2f$IBlockchainService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/ports/IBlockchainService.ts [app-ssr] (ecmascript)");
// Matches
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$matches$2f$entities$2f$Match$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/matches/entities/Match.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$matches$2f$repositories$2f$IMatchRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/matches/repositories/IMatchRepository.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$matches$2f$value$2d$objects$2f$MatchFetchWindow$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/matches/value-objects/MatchFetchWindow.ts [app-ssr] (ecmascript)");
// Predictions
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$predictions$2f$entities$2f$Prediction$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/predictions/entities/Prediction.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$predictions$2f$repositories$2f$IPredictionRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/predictions/repositories/IPredictionRepository.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$predictions$2f$value$2d$objects$2f$Odds$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/predictions/value-objects/Odds.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$predictions$2f$value$2d$objects$2f$PredictionStatus$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/predictions/value-objects/PredictionStatus.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$predictions$2f$value$2d$objects$2f$TransactionHash$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/predictions/value-objects/TransactionHash.ts [app-ssr] (ecmascript)");
// Chat
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$chat$2f$entities$2f$ChatMessage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/chat/entities/ChatMessage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$chat$2f$entities$2f$ConnectedUser$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/chat/entities/ConnectedUser.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$chat$2f$repositories$2f$IChatRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/chat/repositories/IChatRepository.ts [app-ssr] (ecmascript)");
// Fan tokens
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$fan$2d$tokens$2f$repositories$2f$IFanTokenRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/fan-tokens/repositories/IFanTokenRepository.ts [app-ssr] (ecmascript)");
// Follows
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$follows$2f$entities$2f$Follow$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/follows/entities/Follow.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$follows$2f$repositories$2f$IFollowRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/follows/repositories/IFollowRepository.ts [app-ssr] (ecmascript)");
// Streams
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$streams$2f$entities$2f$Stream$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/streams/entities/Stream.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$streams$2f$repositories$2f$IStreamRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/streams/repositories/IStreamRepository.ts [app-ssr] (ecmascript)");
// Stream wallet
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$stream$2d$wallet$2f$entities$2f$Donation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/stream-wallet/entities/Donation.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$stream$2d$wallet$2f$entities$2f$Subscription$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/stream-wallet/entities/Subscription.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$stream$2d$wallet$2f$repositories$2f$IStreamWalletRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/stream-wallet/repositories/IStreamWalletRepository.ts [app-ssr] (ecmascript)");
// Waitlist
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$waitlist$2f$entities$2f$WaitlistEntry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/waitlist/entities/WaitlistEntry.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$waitlist$2f$repositories$2f$IWaitlistRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/waitlist/repositories/IWaitlistRepository.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
}}),
"[project]/packages/domain/src/index.ts [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/tokens.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$ports$2f$ILogger$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/ports/ILogger.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$ports$2f$IAuthConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/ports/IAuthConfig.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$ports$2f$INetworkConfig$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/ports/INetworkConfig.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$ports$2f$ISchedulerService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/ports/ISchedulerService.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$ports$2f$ISubscriptionChecker$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/ports/ISubscriptionChecker.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$ports$2f$IFootballApiService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/ports/IFootballApiService.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$ports$2f$IBlockchainService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/ports/IBlockchainService.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$matches$2f$entities$2f$Match$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/matches/entities/Match.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$matches$2f$repositories$2f$IMatchRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/matches/repositories/IMatchRepository.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$matches$2f$value$2d$objects$2f$MatchFetchWindow$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/matches/value-objects/MatchFetchWindow.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$predictions$2f$entities$2f$Prediction$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/predictions/entities/Prediction.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$predictions$2f$repositories$2f$IPredictionRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/predictions/repositories/IPredictionRepository.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$predictions$2f$value$2d$objects$2f$Odds$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/predictions/value-objects/Odds.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$predictions$2f$value$2d$objects$2f$PredictionStatus$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/predictions/value-objects/PredictionStatus.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$predictions$2f$value$2d$objects$2f$TransactionHash$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/predictions/value-objects/TransactionHash.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$chat$2f$entities$2f$ChatMessage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/chat/entities/ChatMessage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$chat$2f$entities$2f$ConnectedUser$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/chat/entities/ConnectedUser.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$chat$2f$repositories$2f$IChatRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/chat/repositories/IChatRepository.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$fan$2d$tokens$2f$repositories$2f$IFanTokenRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/fan-tokens/repositories/IFanTokenRepository.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$follows$2f$entities$2f$Follow$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/follows/entities/Follow.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$follows$2f$repositories$2f$IFollowRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/follows/repositories/IFollowRepository.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$streams$2f$entities$2f$Stream$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/streams/entities/Stream.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$streams$2f$repositories$2f$IStreamRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/streams/repositories/IStreamRepository.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$stream$2d$wallet$2f$entities$2f$Donation$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/stream-wallet/entities/Donation.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$stream$2d$wallet$2f$entities$2f$Subscription$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/stream-wallet/entities/Subscription.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$stream$2d$wallet$2f$repositories$2f$IStreamWalletRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/stream-wallet/repositories/IStreamWalletRepository.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$waitlist$2f$entities$2f$WaitlistEntry$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/waitlist/entities/WaitlistEntry.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$waitlist$2f$repositories$2f$IWaitlistRepository$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/waitlist/repositories/IWaitlistRepository.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/domain/src/index.ts [app-ssr] (ecmascript) <locals>");
}}),
"[project]/apps/frontend/lib/api/errors.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "mapApiError": (()=>mapApiError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/packages/domain/src/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$NotFoundError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/NotFoundError.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$UnauthorizedError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/UnauthorizedError.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$ConflictError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/ConflictError.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$BusinessRuleError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/BusinessRuleError.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/domain/src/shared/errors/ValidationError.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$error$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/error.ts [app-ssr] (ecmascript)");
;
;
function mapApiError(code, message) {
    switch(code){
        case 'NOT_FOUND':
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$NotFoundError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NotFoundError"](message, '');
        case 'UNAUTHORIZED':
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$UnauthorizedError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnauthorizedError"](message);
        case 'CONFLICT':
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$ConflictError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConflictError"](message);
        case 'BUSINESS_RULE_VIOLATION':
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$BusinessRuleError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BusinessRuleError"](message);
        case 'VALIDATION_ERROR':
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$domain$2f$src$2f$shared$2f$errors$2f$ValidationError$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ValidationError"](message);
        default:
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$error$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiError"](__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$error$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ApiErrorCode"].UNKNOWN, `[${code}] ${message}`);
    }
}
}}),
"[project]/apps/frontend/lib/api/client.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "apiClient": (()=>apiClient),
    "apiDelete": (()=>apiDelete),
    "apiGet": (()=>apiGet),
    "apiPost": (()=>apiPost),
    "apiPut": (()=>apiPut),
    "handleFormatBError": (()=>handleFormatBError),
    "normalizeFormatA": (()=>normalizeFormatA),
    "normalizeFormatB": (()=>normalizeFormatB)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$axios$40$1$2e$14$2e$0$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/axios@1.14.0/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/auth.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$error$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/error.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$errors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/errors.ts [app-ssr] (ecmascript)");
;
;
;
;
function normalizeFormatB(raw) {
    if (raw !== null && typeof raw === 'object' && 'success' in raw && raw.success === true && 'data' in raw) {
        return raw.data;
    }
    return raw;
}
function normalizeFormatA(raw, payloadKey) {
    if (raw !== null && typeof raw === 'object' && payloadKey in raw) {
        return raw[payloadKey];
    }
    return normalizeFormatB(raw);
}
function handleFormatBError(raw) {
    if (raw !== null && typeof raw === 'object' && 'success' in raw && raw.success === false && 'error' in raw) {
        const err = raw;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$errors$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mapApiError"])(err.error.code, err.error.message);
    }
    throw new Error('Unknown API error');
}
/**
 * @notice Centralized API client with automatic JWT injection and error handling
 * @dev Implements request/response interceptors for auth and rate limiting
 */ class ApiClient {
    client;
    constructor(){
        this.client = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$axios$40$1$2e$14$2e$0$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
            baseURL: ("TURBOPACK compile-time value", "http://localhost:3001") ?? 'http://localhost:3001',
            timeout: 30000,
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        this.setupInterceptors();
    }
    /**
   * @notice Configures request and response interceptors
   * @dev Handles JWT injection, 401 refresh, and 429 rate limiting
   */ setupInterceptors() {
        this.client.interceptors.request.use(async (config)=>{
            const token = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getAuthToken"])();
            if (token && config.headers) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        }, (error)=>Promise.reject(error));
        this.client.interceptors.response.use((response)=>{
            // Defensive: the backend always uses non-200 for errors, but guard
            // against any future 200+success:false body on Format B endpoints.
            const data = response.data;
            if (data !== null && typeof data === 'object' && 'success' in data && data.success === false && 'error' in data) {
                handleFormatBError(data);
            }
            return response;
        }, async (error)=>{
            const originalRequest = error.config;
            // Handle 401 Unauthorized - clear token and let auth provider regenerate
            if (error.response?.status === 401) {
                // Prevent infinite retry loops by checking if we've already tried
                if (!originalRequest._retry) {
                    originalRequest._retry = true;
                    // Clear expired/invalid token
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearAuthToken"])();
                }
                throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$error$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleApiError"])(error);
            }
            // Handle rate limiting (429)
            if (error.response?.status === 429) {
                return this.handleRateLimit(error, originalRequest);
            }
            throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$error$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleApiError"])(error);
        });
    }
    /**
   * @notice Handles rate limiting with exponential backoff
   * @param error The Axios error response
   * @param originalRequest The original request config
   * @param maxRetries Maximum number of retry attempts
   * @return Promise resolving to the successful response
   */ async handleRateLimit(error, originalRequest, maxRetries = 3) {
        const retryCount = originalRequest._retryCount || 0;
        if (retryCount >= maxRetries) {
            throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$error$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleApiError"])(error);
        }
        const retryAfter = error.response?.headers['retry-after'];
        const delay = retryAfter ? parseInt(retryAfter, 10) * 1000 : Math.pow(2, retryCount) * 1000;
        await new Promise((resolve)=>setTimeout(resolve, delay));
        originalRequest._retryCount = retryCount + 1;
        return this.client(originalRequest);
    }
    /**
   * @notice Performs GET request
   * @param url Request URL
   * @param config Optional Axios config
   * @return Promise resolving to response data
   */ async get(url, config) {
        const response = await this.client.get(url, config);
        return response.data;
    }
    /**
   * @notice Performs POST request
   * @param url Request URL
   * @param data Request body data
   * @param config Optional Axios config
   * @return Promise resolving to response data
   */ async post(url, data, config) {
        const response = await this.client.post(url, data, config);
        return response.data;
    }
    /**
   * @notice Performs PUT request
   * @param url Request URL
   * @param data Request body data
   * @param config Optional Axios config
   * @return Promise resolving to response data
   */ async put(url, data, config) {
        const response = await this.client.put(url, data, config);
        return response.data;
    }
    /**
   * @notice Performs DELETE request
   * @param url Request URL
   * @param config Optional Axios config
   * @return Promise resolving to response data
   */ async delete(url, config) {
        const response = await this.client.delete(url, config);
        return response.data;
    }
}
const apiClient = new ApiClient();
async function apiGet(path, config) {
    const raw = await apiClient.get(path, config);
    return normalizeFormatB(raw);
}
async function apiPost(path, body, config) {
    const raw = await apiClient.post(path, body, config);
    return normalizeFormatB(raw);
}
async function apiPut(path, body, config) {
    const raw = await apiClient.put(path, body, config);
    return normalizeFormatB(raw);
}
async function apiDelete(path, config) {
    await apiClient.delete(path, config);
}
}}),
"[project]/apps/frontend/lib/api/endpoints/browse.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "browseApi": (()=>browseApi)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/client.ts [app-ssr] (ecmascript)");
;
const browseApi = {
    getMatches: async ()=>{
        return await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/matches/browse');
    }
};
}}),
"[project]/apps/frontend/lib/api/endpoints/chat.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "chatApi": (()=>chatApi)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/client.ts [app-ssr] (ecmascript)");
;
const chatApi = {
    /**
   * @notice Join a chat room for a match
   * @param matchId Match ID
   * @param data Join room data
   * @return Promise resolving to success response
   */ joinRoom: (matchId, data)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(`/chat/join/${matchId}`, data),
    /**
   * @notice Leave a chat room for a match
   * @param matchId Match ID
   * @param data Leave room data
   * @return Promise resolving to success response
   */ leaveRoom: (matchId, data)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(`/chat/leave/${matchId}`, data),
    /**
   * @notice Send a text message to a chat room
   * @param matchId Match ID
   * @param data Message data
   * @return Promise resolving to created message
   */ sendMessage: (matchId, data)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(`/chat/message/${matchId}`, data),
    /**
   * @notice Send a bet message to a chat room
   * @param matchId Match ID
   * @param data Bet message data
   * @return Promise resolving to created bet message
   */ sendBetMessage: (matchId, data)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(`/chat/bet/${matchId}`, data),
    /**
   * @notice Fetch messages for a chat room
   * @param matchId Match ID
   * @param limit Maximum number of messages to fetch
   * @param offset Number of messages to skip
   * @return Promise resolving to array of messages
   */ getRoomMessages: (matchId, limit = 50, offset = 0)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/chat/messages/${matchId}?limit=${limit}&offset=${offset}`),
    /**
   * @notice Fetch connected users in a chat room
   * @param matchId Match ID
   * @return Promise resolving to array of connected users
   */ getConnectedUsers: (matchId)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/chat/users/${matchId}`),
    /**
   * @notice Fetch global chat statistics
   * @return Promise resolving to chat stats
   */ getChatStats: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/chat/stats')
};
}}),
"[project]/apps/frontend/lib/api/endpoints/fan-tokens.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "fanTokensApi": (()=>fanTokensApi)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/client.ts [app-ssr] (ecmascript)");
;
const fanTokensApi = {
    /**
   * @notice Fetches fan token balances for a wallet address
   * @param walletAddress User's wallet address
   * @return Promise resolving to user token balance
   */ getUserBalances: (walletAddress)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/fan-tokens/balances/${walletAddress}`)
};
}}),
"[project]/apps/frontend/lib/api/endpoints/follows.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "followsApi": (()=>followsApi)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/client.ts [app-ssr] (ecmascript)");
;
const followsApi = {
    follow: async (followerId, streamerId, streamerName)=>{
        return await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post('/follows', {
            followerId,
            streamerId,
            streamerName
        });
    },
    unfollow: async (followerId, streamerId)=>{
        return await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].delete('/follows', {
            data: {
                followerId,
                streamerId
            }
        });
    },
    isFollowing: async (followerId, streamerId)=>{
        return await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/follows/is-following?followerId=${encodeURIComponent(followerId)}&streamerId=${encodeURIComponent(streamerId)}`);
    },
    getFollowerCount: async (streamerId)=>{
        return await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/follows/count/${encodeURIComponent(streamerId)}`);
    },
    getFollowedStreamers: async (followerId)=>{
        return await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/follows/following/${encodeURIComponent(followerId)}`);
    }
};
}}),
"[project]/apps/frontend/lib/api/endpoints/matches.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "matchesApi": (()=>matchesApi)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/client.ts [app-ssr] (ecmascript)");
;
/**
 * Maps the nested MatchResponseDto (raw backend shape) to the flat Match type
 * consumed by frontend components. Consumers depend on Match, not MatchResponseDto.
 *
 * score?.home can be number | null at runtime (backend returns null when no score);
 * `?? undefined` normalises null → undefined to satisfy Match.homeScore?: number.
 */ function transformMatch(m) {
    return {
        id: m.apiFootballId,
        homeTeam: m.homeTeam.name,
        awayTeam: m.awayTeam.name,
        homeTeamLogo: m.homeTeam.logo,
        awayTeamLogo: m.awayTeam.logo,
        league: m.league.name,
        status: m.status,
        startTime: m.matchDate,
        homeScore: m.score?.home ?? undefined,
        awayScore: m.score?.away ?? undefined,
        venue: m.venue,
        contractAddress: m.bettingContractAddress,
        odds: m.odds ? {
            match_winner: {
                home: m.odds.homeWin,
                draw: m.odds.draw,
                away: m.odds.awayWin
            }
        } : undefined
    };
}
const matchesApi = {
    /**
   * @notice Fetches all matches
   * @return Promise resolving to array of matches
   */ getAll: async ()=>{
        const raw = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/matches');
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeFormatA"])(raw, 'matches').map(transformMatch);
    },
    /**
   * @notice Fetches single match by ID
   * @param id Match ID
   * @return Promise resolving to match data
   */ getById: async (id)=>{
        const raw = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/matches/${id}`);
        return transformMatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeFormatA"])(raw, 'match'));
    },
    /**
   * @notice Fetches live matches
   * @return Promise resolving to array of live matches
   */ getLive: async ()=>{
        const raw = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/matches/live');
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeFormatA"])(raw, 'matches').map(transformMatch);
    },
    /**
   * @notice Fetches upcoming matches
   * @return Promise resolving to array of upcoming matches
   */ getUpcoming: async ()=>{
        const raw = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/matches/upcoming');
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeFormatA"])(raw, 'matches').map(transformMatch);
    },
    /**
   * @notice Fetches matches by league
   * @param league League name
   * @return Promise resolving to array of matches in the league
   */ getByLeague: async (league)=>{
        const raw = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/matches/league/${league}`);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeFormatA"])(raw, 'matches').map(transformMatch);
    },
    /**
   * @notice Fetches match statistics summary
   * @return Promise resolving to statistics data
   */ getStats: async ()=>{
        const raw = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/matches/stats/summary');
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeFormatA"])(raw, 'stats');
    }
};
}}),
"[project]/apps/frontend/lib/api/endpoints/predictions.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "predictionsApi": (()=>predictionsApi)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/client.ts [app-ssr] (ecmascript)");
;
const predictionsApi = {
    /**
   * @notice Creates a new prediction
   * @param data Prediction data
   * @return Promise resolving to created prediction
   */ create: async (data)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiPost"])('/predictions', data);
    },
    /**
   * @notice Fetches predictions by user ID
   * @param userId User ID
   * @return Promise resolving to array of predictions
   */ getByUser: async (userId)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiGet"])(`/predictions/${userId}`);
    },
    /**
   * @notice Fetches user prediction statistics
   * @param userId User ID
   * @return Promise resolving to prediction stats
   */ getUserStats: async (userId)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiGet"])(`/predictions/stats/${userId}`);
    }
};
}}),
"[project]/apps/frontend/lib/api/endpoints/stream-wallet.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "streamWalletApi": (()=>streamWalletApi)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/client.ts [app-ssr] (ecmascript)");
;
const streamWalletApi = {
    /**
   * @notice Fetches all donations for a streamer
   * @param streamerAddress Streamer's wallet address
   * @return Promise resolving to donations array
   */ getStreamerDonations: (streamerAddress)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/stream-wallet/donations/${streamerAddress}`),
    /**
   * @notice Fetches all subscriptions for a streamer
   * @param streamerAddress Streamer's wallet address
   * @return Promise resolving to subscriptions array
   */ getStreamerSubscriptions: (streamerAddress)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/stream-wallet/subscriptions/${streamerAddress}`),
    /**
   * @notice Fetches earnings statistics for a streamer
   * @param streamerAddress Streamer's wallet address
   * @return Promise resolving to streamer stats
   */ getStreamerStats: (streamerAddress)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/stream-wallet/stats/${streamerAddress}`),
    /**
   * @notice Fetches donation history for a donor
   * @param donorAddress Donor's wallet address
   * @return Promise resolving to donations array
   */ getDonorHistory: (donorAddress)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/stream-wallet/donor/${donorAddress}/donations`),
    /**
   * @notice Fetches subscription history for a subscriber
   * @param subscriberAddress Subscriber's wallet address
   * @return Promise resolving to subscriptions array
   */ getSubscriberHistory: (subscriberAddress)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/stream-wallet/subscriber/${subscriberAddress}/subscriptions`)
};
}}),
"[project]/apps/frontend/lib/api/endpoints/streams.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "streamsApi": (()=>streamsApi)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/client.ts [app-ssr] (ecmascript)");
;
const streamsApi = {
    /**
   * @notice Fetches active streams for a match
   * @param matchId The match ID to get streams for
   */ getActive: async (matchId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/stream', {
            params: {
                matchId
            }
        });
    },
    /**
   * @notice Fetches the preferred stream for a user (follow-aware)
   * @param matchId The match ID
   * @param userId Optional user ID for follow-based prioritization
   */ getPreferred: async (matchId, userId)=>{
        const params = {
            matchId
        };
        if (userId) params.userId = userId;
        const raw = await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/stream/preferred', {
            params
        });
        return {
            stream: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeFormatA"])(raw, 'stream'),
            source: (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeFormatA"])(raw, 'source')
        };
    },
    /**
   * @notice Creates a new stream
   */ create: async (request)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post('/stream', request);
    },
    /**
   * @notice Ends/deletes a stream
   */ end: async (streamId, streamerId)=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].delete('/stream', {
            data: {
                streamId,
                streamerId
            }
        });
    },
    /**
   * @notice Registers a viewer session joining a stream
   */ joinViewer: async (streamId, sessionToken)=>{
        await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(`/stream/${streamId}/join`, {
            sessionToken
        });
    },
    /**
   * @notice Registers a viewer session leaving a stream
   */ leaveViewer: async (streamId, sessionToken)=>{
        await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post(`/stream/${streamId}/leave`, {
            sessionToken
        });
    },
    /**
   * @notice Uploads a stream thumbnail
   */ uploadThumbnail: async (streamId, file)=>{
        const form = new FormData();
        form.append('file', file, 'thumbnail.jpg');
        await __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].put(`/stream/${streamId}/thumbnail`, form, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }
};
}}),
"[project]/apps/frontend/lib/api/endpoints/waitlist.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "waitlistApi": (()=>waitlistApi)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/client.ts [app-ssr] (ecmascript)");
;
const waitlistApi = {
    /**
   * @notice Join the waitlist
   * @param data Waitlist entry data
   * @return Promise resolving to created entry
   */ join: (data)=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].post('/waitlist', data),
    /**
   * @notice Check if user has access
   * @param email User's email (optional)
   * @param walletAddress User's wallet address (optional)
   * @return Promise resolving to access check result
   */ checkAccess: (email, walletAddress)=>{
        const params = new URLSearchParams();
        if (email) params.append('email', email);
        if (walletAddress) params.append('walletAddress', walletAddress);
        return __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get(`/waitlist/check-access?${params.toString()}`);
    },
    /**
   * @notice Fetch waitlist statistics
   * @return Promise resolving to waitlist stats
   */ getStats: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$client$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["apiClient"].get('/waitlist/stats')
};
}}),
"[project]/apps/frontend/lib/api/endpoints/index.ts [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$browse$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/browse.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$chat$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/chat.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$fan$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/fan-tokens.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$follows$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/follows.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$matches$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/matches.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$predictions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/predictions.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$stream$2d$wallet$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/stream-wallet.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$streams$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/streams.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$waitlist$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/waitlist.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
}}),
"[project]/apps/frontend/lib/api/endpoints/index.ts [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$browse$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/browse.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$chat$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/chat.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$fan$2d$tokens$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/fan-tokens.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$follows$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/follows.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$matches$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/matches.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$predictions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/predictions.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$stream$2d$wallet$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/stream-wallet.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$streams$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/streams.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$waitlist$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/waitlist.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/index.ts [app-ssr] (ecmascript) <locals>");
}}),
"[project]/apps/frontend/lib/query/keys.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @notice Query key factory for React Query cache management
 * @dev Provides type-safe, hierarchical query keys for all API resources
 */ __turbopack_context__.s({
    "queryKeys": (()=>queryKeys)
});
const queryKeys = {
    browse: {
        all: [
            'browse'
        ]
    },
    matches: {
        all: [
            'matches'
        ],
        lists: ()=>[
                ...queryKeys.matches.all,
                'list'
            ],
        list: (filters)=>[
                ...queryKeys.matches.lists(),
                filters
            ],
        details: ()=>[
                ...queryKeys.matches.all,
                'detail'
            ],
        detail: (id)=>[
                ...queryKeys.matches.details(),
                id
            ],
        live: ()=>[
                ...queryKeys.matches.all,
                'live'
            ],
        upcoming: ()=>[
                ...queryKeys.matches.all,
                'upcoming'
            ],
        byLeague: (league)=>[
                ...queryKeys.matches.all,
                'league',
                league
            ],
        stats: ()=>[
                ...queryKeys.matches.all,
                'stats'
            ]
    },
    predictions: {
        all: [
            'predictions'
        ],
        lists: ()=>[
                ...queryKeys.predictions.all,
                'list'
            ],
        byUser: (userId)=>[
                ...queryKeys.predictions.lists(),
                userId
            ],
        stats: (userId)=>[
                ...queryKeys.predictions.all,
                'stats',
                userId
            ]
    },
    chat: {
        all: [
            'chat'
        ],
        messages: (matchId, limit, offset)=>[
                ...queryKeys.chat.all,
                'messages',
                matchId,
                limit,
                offset
            ],
        users: (matchId)=>[
                ...queryKeys.chat.all,
                'users',
                matchId
            ],
        stats: ()=>[
                ...queryKeys.chat.all,
                'stats'
            ]
    },
    streamWallet: {
        all: [
            'streamWallet'
        ],
        donations: (streamerAddress)=>[
                ...queryKeys.streamWallet.all,
                'donations',
                streamerAddress
            ],
        subscriptions: (streamerAddress)=>[
                ...queryKeys.streamWallet.all,
                'subscriptions',
                streamerAddress
            ],
        stats: (streamerAddress)=>[
                ...queryKeys.streamWallet.all,
                'stats',
                streamerAddress
            ],
        donorDonations: (donorAddress)=>[
                ...queryKeys.streamWallet.all,
                'donor',
                donorAddress,
                'donations'
            ],
        subscriberSubscriptions: (subscriberAddress)=>[
                ...queryKeys.streamWallet.all,
                'subscriber',
                subscriberAddress,
                'subscriptions'
            ]
    },
    waitlist: {
        all: [
            'waitlist'
        ],
        access: ()=>[
                ...queryKeys.waitlist.all,
                'access'
            ],
        stats: ()=>[
                ...queryKeys.waitlist.all,
                'stats'
            ]
    },
    fanTokens: {
        all: [
            'fanTokens'
        ],
        balances: (walletAddress)=>[
                ...queryKeys.fanTokens.all,
                'balances',
                walletAddress
            ]
    },
    follows: {
        all: [
            'follows'
        ],
        isFollowing: (followerId, streamerId)=>[
                ...queryKeys.follows.all,
                'isFollowing',
                followerId,
                streamerId
            ],
        count: (streamerId)=>[
                ...queryKeys.follows.all,
                'count',
                streamerId
            ],
        following: (followerId)=>[
                ...queryKeys.follows.all,
                'following',
                followerId
            ]
    }
};
}}),
"[project]/apps/frontend/hooks/useAuth.ts [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$providers$2f$auth$2d$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/providers/auth-provider.tsx [app-ssr] (ecmascript)");
;
}}),
"[project]/apps/frontend/hooks/useAuth.ts [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$providers$2f$auth$2d$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/providers/auth-provider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/apps/frontend/hooks/useAuth.ts [app-ssr] (ecmascript) <locals>");
}}),
"[project]/apps/frontend/hooks/api/useBrowseMatches.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useBrowseMatches": (()=>useBrowseMatches)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@tanstack+react-query@5.96.1_react@19.2.4/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$browse$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/api/endpoints/browse.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/query/keys.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$useAuth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/frontend/hooks/useAuth.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$providers$2f$auth$2d$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/providers/auth-provider.tsx [app-ssr] (ecmascript)");
;
;
;
;
function useBrowseMatches() {
    const { isAuthenticated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$providers$2f$auth$2d$provider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$96$2e$1_react$40$19$2e$2$2e$4$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$query$2f$keys$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["queryKeys"].browse.all,
        queryFn: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$api$2f$endpoints$2f$browse$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["browseApi"].getMatches,
        enabled: isAuthenticated,
        staleTime: 30_000,
        refetchInterval: 60_000
    });
}
}}),
"[project]/apps/frontend/components/features/browse/PoolStatsSection.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "PoolStatsSection": (()=>PoolStatsSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/lock.js [app-ssr] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
"use client";
;
;
const METRICS = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"],
        label: "Wallets Locked",
        value: "—",
        sub: "On-chain"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
        label: "Bets to Resolve",
        value: "—",
        sub: "Pending"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
        label: "Pool Growth",
        value: "—",
        sub: "This month"
    }
];
function PoolStatsSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-3 mb-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-1 h-6 rounded-full flex-shrink-0",
                        style: {
                            background: "#E8001D"
                        }
                    }, void 0, false, {
                        fileName: "[project]/apps/frontend/components/features/browse/PoolStatsSection.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-[22px] font-bold uppercase tracking-[0.05em] leading-none",
                        style: {
                            fontFamily: "'Barlow Condensed', sans-serif",
                            color: "#fff"
                        },
                        children: "Pool"
                    }, void 0, false, {
                        fileName: "[project]/apps/frontend/components/features/browse/PoolStatsSection.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/frontend/components/features/browse/PoolStatsSection.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg overflow-hidden",
                style: {
                    background: "#141414",
                    border: "1px solid #2A2A2A",
                    boxShadow: "0 0 48px rgba(232,0,29,0.06)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-[2px]",
                        style: {
                            background: "linear-gradient(90deg, #E8001D 0%, transparent 60%)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/apps/frontend/components/features/browse/PoolStatsSection.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col lg:flex-row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col justify-between p-6 lg:p-8 lg:w-[320px] flex-shrink-0",
                                style: {
                                    background: "linear-gradient(135deg, rgba(232,0,29,0.07) 0%, transparent 70%)",
                                    borderRight: "1px solid #2A2A2A"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-[10px] font-semibold tracking-[0.14em] uppercase mb-3",
                                                style: {
                                                    color: "#555"
                                                },
                                                children: "Total Value Locked"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/frontend/components/features/browse/PoolStatsSection.tsx",
                                                lineNumber: 61,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-mono font-bold leading-none mb-1",
                                                style: {
                                                    fontSize: "42px",
                                                    color: "#fff",
                                                    fontFamily: "'JetBrains Mono', monospace"
                                                },
                                                children: "—"
                                            }, void 0, false, {
                                                fileName: "[project]/apps/frontend/components/features/browse/PoolStatsSection.tsx",
                                                lineNumber: 67,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 mt-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1.5 px-2.5 py-1 rounded",
                                                        style: {
                                                            background: "rgba(245,197,24,0.1)",
                                                            border: "1px solid rgba(245,197,24,0.2)"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                                size: 11,
                                                                style: {
                                                                    color: "#F5C518"
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/frontend/components/features/browse/PoolStatsSection.tsx",
                                                                lineNumber: 82,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[11px] font-bold",
                                                                style: {
                                                                    color: "#F5C518",
                                                                    fontFamily: "'JetBrains Mono', monospace"
                                                                },
                                                                children: "APY —"
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/frontend/components/features/browse/PoolStatsSection.tsx",
                                                                lineNumber: 83,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/frontend/components/features/browse/PoolStatsSection.tsx",
                                                        lineNumber: 78,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[11px]",
                                                        style: {
                                                            color: "#555"
                                                        },
                                                        children: "Rolling 30d"
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/frontend/components/features/browse/PoolStatsSection.tsx",
                                                        lineNumber: 90,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/apps/frontend/components/features/browse/PoolStatsSection.tsx",
                                                lineNumber: 77,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/frontend/components/features/browse/PoolStatsSection.tsx",
                                        lineNumber: 60,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "mt-8 w-full flex items-center justify-center gap-2 py-3 rounded text-[13px] font-bold tracking-[0.08em] uppercase transition-all duration-150 group",
                                        style: {
                                            background: "#E8001D",
                                            color: "#fff"
                                        },
                                        onMouseEnter: (e)=>{
                                            const b = e.currentTarget;
                                            b.style.background = "#B0001A";
                                            b.style.transform = "translateY(-1px)";
                                            b.style.boxShadow = "0 4px 20px rgba(232,0,29,0.35)";
                                        },
                                        onMouseLeave: (e)=>{
                                            const b = e.currentTarget;
                                            b.style.background = "#E8001D";
                                            b.style.transform = "translateY(0)";
                                            b.style.boxShadow = "none";
                                        },
                                        children: [
                                            "Join the Pool",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/apps/frontend/components/features/browse/PoolStatsSection.tsx",
                                                lineNumber: 112,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/frontend/components/features/browse/PoolStatsSection.tsx",
                                        lineNumber: 95,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/frontend/components/features/browse/PoolStatsSection.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col justify-between p-6 lg:p-8 flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-0",
                                        children: METRICS.map(({ icon: Icon, label, value, sub }, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start gap-3 sm:px-6",
                                                style: {
                                                    borderLeft: i > 0 ? "1px solid #2A2A2A" : "none"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-8 h-8 rounded flex items-center justify-center flex-shrink-0 mt-0.5",
                                                        style: {
                                                            background: "#1E1E1E"
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                            size: 14,
                                                            style: {
                                                                color: "#555"
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/apps/frontend/components/features/browse/PoolStatsSection.tsx",
                                                            lineNumber: 132,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/apps/frontend/components/features/browse/PoolStatsSection.tsx",
                                                        lineNumber: 128,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[10px] font-semibold tracking-[0.1em] uppercase mb-1",
                                                                style: {
                                                                    color: "#555"
                                                                },
                                                                children: label
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/frontend/components/features/browse/PoolStatsSection.tsx",
                                                                lineNumber: 135,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-mono text-[20px] font-bold leading-none",
                                                                style: {
                                                                    color: "#fff",
                                                                    fontFamily: "'JetBrains Mono', monospace"
                                                                },
                                                                children: value
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/frontend/components/features/browse/PoolStatsSection.tsx",
                                                                lineNumber: 141,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-[10px] mt-1",
                                                                style: {
                                                                    color: "#444"
                                                                },
                                                                children: sub
                                                            }, void 0, false, {
                                                                fileName: "[project]/apps/frontend/components/features/browse/PoolStatsSection.tsx",
                                                                lineNumber: 147,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/apps/frontend/components/features/browse/PoolStatsSection.tsx",
                                                        lineNumber: 134,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, label, true, {
                                                fileName: "[project]/apps/frontend/components/features/browse/PoolStatsSection.tsx",
                                                lineNumber: 121,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/apps/frontend/components/features/browse/PoolStatsSection.tsx",
                                        lineNumber: 119,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-6 pt-5",
                                        style: {
                                            borderTop: "1px solid #1E1E1E"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-[12px] leading-relaxed",
                                                style: {
                                                    color: "#555"
                                                },
                                                children: "The pool is the house. Liquidity providers earn yield from every losing prediction — no transaction fees, no middleman. Pure on-chain mechanics."
                                            }, void 0, false, {
                                                fileName: "[project]/apps/frontend/components/features/browse/PoolStatsSection.tsx",
                                                lineNumber: 160,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-4 mt-4",
                                                children: [
                                                    "No lock-up period",
                                                    "100% on-chain",
                                                    "CHZ-native yield"
                                                ].map((tag)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[10px] font-semibold tracking-[0.08em] uppercase px-2.5 py-1 rounded",
                                                        style: {
                                                            background: "#1E1E1E",
                                                            color: "#888",
                                                            border: "1px solid #2A2A2A"
                                                        },
                                                        children: tag
                                                    }, tag, false, {
                                                        fileName: "[project]/apps/frontend/components/features/browse/PoolStatsSection.tsx",
                                                        lineNumber: 166,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/apps/frontend/components/features/browse/PoolStatsSection.tsx",
                                                lineNumber: 164,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/apps/frontend/components/features/browse/PoolStatsSection.tsx",
                                        lineNumber: 156,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/frontend/components/features/browse/PoolStatsSection.tsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/frontend/components/features/browse/PoolStatsSection.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/frontend/components/features/browse/PoolStatsSection.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/frontend/components/features/browse/PoolStatsSection.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
}}),
"[project]/apps/frontend/lib/utils/formatting/number.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @notice Number formatting utilities
 * @dev Provides consistent number display across the app
 */ /**
 * @notice Format large numbers with locale formatting
 * @param num Number to format
 * @return Formatted number string with commas
 */ __turbopack_context__.s({
    "abbreviateNumber": (()=>abbreviateNumber),
    "clamp": (()=>clamp),
    "formatDecimal": (()=>formatDecimal),
    "formatLargeNumber": (()=>formatLargeNumber),
    "formatPercentage": (()=>formatPercentage)
});
function formatLargeNumber(num) {
    return num.toLocaleString("en-US");
}
function formatPercentage(value, decimals = 1) {
    return `${value.toFixed(decimals)}%`;
}
function abbreviateNumber(num) {
    if (num >= 1_000_000_000) {
        return `${(num / 1_000_000_000).toFixed(1)}B`;
    } else if (num >= 1_000_000) {
        return `${(num / 1_000_000).toFixed(1)}M`;
    } else if (num >= 1_000) {
        return `${(num / 1_000).toFixed(1)}K`;
    }
    return num.toString();
}
function formatDecimal(num, decimals) {
    return num.toFixed(decimals);
}
function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
}
}}),
"[project]/apps/frontend/components/features/browse/DiscoverMatchCard.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DiscoverMatchCard": (()=>DiscoverMatchCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.525.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/eye.js [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$utils$2f$formatting$2f$number$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/lib/utils/formatting/number.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const LIVE_STATUSES = new Set([
    "1H",
    "2H",
    "ET",
    "BT",
    "P",
    "LIVE"
]);
function getMinute(status, kickoffAt, now) {
    const elapsed = Math.floor((now.getTime() - new Date(kickoffAt).getTime()) / 60_000);
    if (status === "1H") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$utils$2f$formatting$2f$number$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(elapsed, 0, 45);
    if (status === "2H") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$lib$2f$utils$2f$formatting$2f$number$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clamp"])(elapsed, 46, 90);
    return elapsed;
}
function getCountdown(kickoffAt, now) {
    const diff = Math.floor((new Date(kickoffAt).getTime() - now.getTime()) / 60_000);
    if (diff <= 0) return "Now";
    if (diff < 60) return `in ${diff}m`;
    const h = Math.floor(diff / 60);
    const m = diff % 60;
    return m > 0 ? `in ${h}h ${m}m` : `in ${h}h`;
}
function formatKickoff(kickoffAt) {
    return new Date(kickoffAt).toLocaleString("en-GB", {
        weekday: "short",
        day: "numeric",
        month: "short",
        hour: "2-digit",
        minute: "2-digit"
    });
}
function TeamLogo({ name, logo }) {
    const [err, setErr] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-9 h-9 rounded-full overflow-hidden flex items-center justify-center flex-shrink-0",
        style: {
            background: "#252525",
            border: "1px solid #2A2A2A"
        },
        children: logo && !err ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            src: logo,
            alt: name,
            width: 36,
            height: 36,
            className: "object-contain",
            onError: ()=>setErr(true)
        }, void 0, false, {
            fileName: "[project]/apps/frontend/components/features/browse/DiscoverMatchCard.tsx",
            lineNumber: 52,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-[12px] font-bold uppercase",
            style: {
                color: "#888",
                fontFamily: "'Barlow Condensed', sans-serif"
            },
            children: name.slice(0, 3)
        }, void 0, false, {
            fileName: "[project]/apps/frontend/components/features/browse/DiscoverMatchCard.tsx",
            lineNumber: 61,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/frontend/components/features/browse/DiscoverMatchCard.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
function DiscoverMatchCard({ match, leagueName, now }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const isLive = LIVE_STATUSES.has(match.status);
    const minute = isLive ? getMinute(match.status, match.kickoffAt, now) : null;
    const totalViewers = match.streamsPreview.reduce((s, sp)=>s + sp.viewers, 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "rounded-lg overflow-hidden cursor-pointer transition-all duration-150",
        style: {
            background: "#141414",
            border: "1px solid #2A2A2A"
        },
        onClick: ()=>router.push(`/live/${match.id}`),
        onMouseEnter: (e)=>{
            const el = e.currentTarget;
            el.style.borderColor = "#3A3A3A";
            el.style.transform = "translateY(-2px)";
        },
        onMouseLeave: (e)=>{
            const el = e.currentTarget;
            el.style.borderColor = "#2A2A2A";
            el.style.transform = "translateY(0)";
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-4 py-2.5",
                style: {
                    background: "#1E1E1E",
                    borderBottom: "1px solid #2A2A2A"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[11px] font-semibold tracking-[0.08em] uppercase truncate",
                        style: {
                            color: "#888",
                            fontFamily: "'Barlow', sans-serif"
                        },
                        children: leagueName
                    }, void 0, false, {
                        fileName: "[project]/apps/frontend/components/features/browse/DiscoverMatchCard.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    isLive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1.5 flex-shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "w-1.5 h-1.5 rounded-full",
                                style: {
                                    background: "#00C853",
                                    animation: "pulse 1.4s infinite",
                                    display: "inline-block"
                                }
                            }, void 0, false, {
                                fileName: "[project]/apps/frontend/components/features/browse/DiscoverMatchCard.tsx",
                                lineNumber: 108,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[11px] font-bold tracking-[0.08em]",
                                style: {
                                    color: "#00C853"
                                },
                                children: "LIVE"
                            }, void 0, false, {
                                fileName: "[project]/apps/frontend/components/features/browse/DiscoverMatchCard.tsx",
                                lineNumber: 116,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/frontend/components/features/browse/DiscoverMatchCard.tsx",
                        lineNumber: 107,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[11px] flex-shrink-0",
                        style: {
                            color: "#555"
                        },
                        children: match.status === "NS" ? getCountdown(match.kickoffAt, now) : formatKickoff(match.kickoffAt)
                    }, void 0, false, {
                        fileName: "[project]/apps/frontend/components/features/browse/DiscoverMatchCard.tsx",
                        lineNumber: 124,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/frontend/components/features/browse/DiscoverMatchCard.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-4 py-5 gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center gap-2 flex-1 min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TeamLogo, {
                                name: match.homeTeam.name,
                                logo: match.homeTeam.logoUrl
                            }, void 0, false, {
                                fileName: "[project]/apps/frontend/components/features/browse/DiscoverMatchCard.tsx",
                                lineNumber: 136,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[13px] font-bold uppercase text-center truncate w-full",
                                style: {
                                    color: "#fff",
                                    fontFamily: "'Barlow Condensed', sans-serif"
                                },
                                children: match.homeTeam.name
                            }, void 0, false, {
                                fileName: "[project]/apps/frontend/components/features/browse/DiscoverMatchCard.tsx",
                                lineNumber: 137,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/frontend/components/features/browse/DiscoverMatchCard.tsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center gap-1 flex-shrink-0 px-2",
                        children: isLive && match.score !== null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-mono font-bold leading-none",
                                    style: {
                                        fontSize: "24px",
                                        color: "#fff",
                                        fontFamily: "'JetBrains Mono', monospace"
                                    },
                                    children: [
                                        match.score.home,
                                        " — ",
                                        match.score.away
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/frontend/components/features/browse/DiscoverMatchCard.tsx",
                                    lineNumber: 149,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[11px] font-semibold",
                                    style: {
                                        color: "#E8001D"
                                    },
                                    children: [
                                        minute,
                                        "'"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/apps/frontend/components/features/browse/DiscoverMatchCard.tsx",
                                    lineNumber: 159,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[15px] font-semibold",
                            style: {
                                color: "#555"
                            },
                            children: "vs"
                        }, void 0, false, {
                            fileName: "[project]/apps/frontend/components/features/browse/DiscoverMatchCard.tsx",
                            lineNumber: 167,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/apps/frontend/components/features/browse/DiscoverMatchCard.tsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center gap-2 flex-1 min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TeamLogo, {
                                name: match.awayTeam.name,
                                logo: match.awayTeam.logoUrl
                            }, void 0, false, {
                                fileName: "[project]/apps/frontend/components/features/browse/DiscoverMatchCard.tsx",
                                lineNumber: 178,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[13px] font-bold uppercase text-center truncate w-full",
                                style: {
                                    color: "#fff",
                                    fontFamily: "'Barlow Condensed', sans-serif"
                                },
                                children: match.awayTeam.name
                            }, void 0, false, {
                                fileName: "[project]/apps/frontend/components/features/browse/DiscoverMatchCard.tsx",
                                lineNumber: 179,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/frontend/components/features/browse/DiscoverMatchCard.tsx",
                        lineNumber: 177,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/frontend/components/features/browse/DiscoverMatchCard.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, this),
            match.odds && (match.odds.home !== null || match.odds.draw !== null || match.odds.away !== null) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 px-4 pb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[10px] tracking-[0.08em] uppercase",
                        style: {
                            color: "#555"
                        },
                        children: "Odds"
                    }, void 0, false, {
                        fileName: "[project]/apps/frontend/components/features/browse/DiscoverMatchCard.tsx",
                        lineNumber: 193,
                        columnNumber: 11
                    }, this),
                    match.odds.home !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "px-2 py-0.5 rounded text-[11px] font-mono",
                        style: {
                            background: "#1E1E1E",
                            color: "#888",
                            border: "1px solid #2A2A2A"
                        },
                        children: [
                            "H ",
                            match.odds.home.toFixed(2)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/frontend/components/features/browse/DiscoverMatchCard.tsx",
                        lineNumber: 197,
                        columnNumber: 13
                    }, this),
                    match.odds.draw !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "px-2 py-0.5 rounded text-[11px] font-mono",
                        style: {
                            background: "#1E1E1E",
                            color: "#888",
                            border: "1px solid #2A2A2A"
                        },
                        children: [
                            "D ",
                            match.odds.draw.toFixed(2)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/frontend/components/features/browse/DiscoverMatchCard.tsx",
                        lineNumber: 205,
                        columnNumber: 13
                    }, this),
                    match.odds.away !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "px-2 py-0.5 rounded text-[11px] font-mono",
                        style: {
                            background: "#1E1E1E",
                            color: "#888",
                            border: "1px solid #2A2A2A"
                        },
                        children: [
                            "A ",
                            match.odds.away.toFixed(2)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/frontend/components/features/browse/DiscoverMatchCard.tsx",
                        lineNumber: 213,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/frontend/components/features/browse/DiscoverMatchCard.tsx",
                lineNumber: 190,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 px-4 py-3",
                style: {
                    borderTop: "1px solid #2A2A2A"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "flex-1 py-2 rounded text-[12px] font-bold tracking-[0.06em] uppercase transition-colors duration-150",
                        style: {
                            background: "#E8001D",
                            color: "#fff"
                        },
                        onClick: (e)=>{
                            e.stopPropagation();
                            router.push(`/live/${match.id}`);
                        },
                        onMouseEnter: (e)=>e.currentTarget.style.background = "#B0001A",
                        onMouseLeave: (e)=>e.currentTarget.style.background = "#E8001D",
                        children: "Predict"
                    }, void 0, false, {
                        fileName: "[project]/apps/frontend/components/features/browse/DiscoverMatchCard.tsx",
                        lineNumber: 228,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "px-3 py-2 rounded text-[12px] transition-colors duration-150",
                        style: {
                            background: "transparent",
                            border: "1px solid #2A2A2A",
                            color: "#888"
                        },
                        onClick: (e)=>{
                            e.stopPropagation();
                            router.push(`/live/${match.id}`);
                        },
                        onMouseEnter: (e)=>e.currentTarget.style.borderColor = "#3A3A3A",
                        onMouseLeave: (e)=>e.currentTarget.style.borderColor = "#2A2A2A",
                        children: "▶"
                    }, void 0, false, {
                        fileName: "[project]/apps/frontend/components/features/browse/DiscoverMatchCard.tsx",
                        lineNumber: 241,
                        columnNumber: 9
                    }, this),
                    totalViewers > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1 flex-shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$525$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                size: 11,
                                style: {
                                    color: "#555"
                                }
                            }, void 0, false, {
                                fileName: "[project]/apps/frontend/components/features/browse/DiscoverMatchCard.tsx",
                                lineNumber: 256,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[11px]",
                                style: {
                                    color: "#555"
                                },
                                children: totalViewers >= 1000 ? `${(totalViewers / 1000).toFixed(1)}K` : totalViewers
                            }, void 0, false, {
                                fileName: "[project]/apps/frontend/components/features/browse/DiscoverMatchCard.tsx",
                                lineNumber: 257,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/apps/frontend/components/features/browse/DiscoverMatchCard.tsx",
                        lineNumber: 255,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/apps/frontend/components/features/browse/DiscoverMatchCard.tsx",
                lineNumber: 224,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/frontend/components/features/browse/DiscoverMatchCard.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
}}),
"[project]/apps/frontend/components/features/browse/mockMatches.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "MOCK_LEAGUES": (()=>MOCK_LEAGUES)
});
function minutesAgo(n) {
    return new Date(Date.now() - n * 60_000).toISOString();
}
function hoursFromNow(n) {
    return new Date(Date.now() + n * 3_600_000).toISOString();
}
const MOCK_LEAGUES = [
    {
        league: {
            id: 1,
            name: "UEFA Champions League",
            logoUrl: null,
            country: null
        },
        matches: [
            {
                id: 101,
                homeTeam: {
                    name: "PSG",
                    logoUrl: "https://media.api-sports.io/football/teams/85.png"
                },
                awayTeam: {
                    name: "Juventus",
                    logoUrl: "https://media.api-sports.io/football/teams/496.png"
                },
                kickoffAt: minutesAgo(67),
                status: "2H",
                score: {
                    home: 2,
                    away: 1
                },
                odds: {
                    home: 1.85,
                    draw: 3.5,
                    away: 4.2
                },
                streamsPreview: [
                    {
                        streamId: "s-101-a",
                        streamerName: "FootballKing",
                        thumbnailUrl: null,
                        viewers: 4821
                    },
                    {
                        streamId: "s-101-b",
                        streamerName: "LivePredictionPro",
                        thumbnailUrl: null,
                        viewers: 2134
                    }
                ]
            },
            {
                id: 102,
                homeTeam: {
                    name: "Barcelona",
                    logoUrl: "https://media.api-sports.io/football/teams/529.png"
                },
                awayTeam: {
                    name: "Real Madrid",
                    logoUrl: "https://media.api-sports.io/football/teams/541.png"
                },
                kickoffAt: hoursFromNow(2),
                status: "NS",
                score: null,
                odds: {
                    home: 2.1,
                    draw: 3.2,
                    away: 3.6
                },
                streamsPreview: []
            }
        ]
    },
    {
        league: {
            id: 2,
            name: "Premier League",
            logoUrl: null,
            country: "England"
        },
        matches: [
            {
                id: 201,
                homeTeam: {
                    name: "Man City",
                    logoUrl: "https://media.api-sports.io/football/teams/50.png"
                },
                awayTeam: {
                    name: "Liverpool",
                    logoUrl: "https://media.api-sports.io/football/teams/40.png"
                },
                kickoffAt: minutesAgo(34),
                status: "1H",
                score: {
                    home: 1,
                    away: 1
                },
                odds: {
                    home: 2.0,
                    draw: 3.4,
                    away: 3.8
                },
                streamsPreview: [
                    {
                        streamId: "s-201-a",
                        streamerName: "GoalPredictor",
                        thumbnailUrl: null,
                        viewers: 6540
                    }
                ]
            }
        ]
    }
];
}}),
"[project]/apps/frontend/components/features/browse/DiscoverPage.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DiscoverPage": (()=>DiscoverPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.5_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$api$2f$useBrowseMatches$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/hooks/api/useBrowseMatches.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$features$2f$browse$2f$PoolStatsSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/components/features/browse/PoolStatsSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$features$2f$browse$2f$DiscoverMatchCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/components/features/browse/DiscoverMatchCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$features$2f$browse$2f$mockMatches$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/frontend/components/features/browse/mockMatches.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const LIVE_STATUSES = new Set([
    "1H",
    "2H",
    "ET",
    "BT",
    "P",
    "LIVE"
]);
function SectionTitle({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-3 mb-5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-1 h-6 rounded-full flex-shrink-0",
                style: {
                    background: "#E8001D"
                }
            }, void 0, false, {
                fileName: "[project]/apps/frontend/components/features/browse/DiscoverPage.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-[22px] font-bold uppercase tracking-[0.05em] leading-none",
                style: {
                    fontFamily: "'Barlow Condensed', sans-serif",
                    color: "#fff"
                },
                children: children
            }, void 0, false, {
                fileName: "[project]/apps/frontend/components/features/browse/DiscoverPage.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/frontend/components/features/browse/DiscoverPage.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
function DiscoverPage() {
    const { data } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$hooks$2f$api$2f$useBrowseMatches$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useBrowseMatches"])();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const [now, setNow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(new Date());
    const intervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        intervalRef.current = setInterval(()=>setNow(new Date()), 30_000);
        return ()=>{
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);
    const allMatches = data && data.leagues.length > 0 ? data.leagues.flatMap((l)=>l.matches.map((m)=>({
                ...m,
                leagueName: l.league.name
            }))) : __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$features$2f$browse$2f$mockMatches$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOCK_LEAGUES"].flatMap((l)=>l.matches.map((m)=>({
                ...m,
                leagueName: l.league.name
            })));
    const liveMatches = allMatches.filter((m)=>LIVE_STATUSES.has(m.status));
    const upcomingMatches = allMatches.filter((m)=>m.status === "NS");
    const filtered = activeTab === "live" ? liveMatches : activeTab === "upcoming" ? upcomingMatches : allMatches;
    const tabs = [
        {
            key: "all",
            label: "All"
        },
        {
            key: "live",
            label: "Live",
            count: liveMatches.length
        },
        {
            key: "upcoming",
            label: "Upcoming"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen",
        style: {
            background: "#0A0A0A"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1280px] mx-auto px-4 sm:px-6 py-12 sm:py-14 flex flex-col gap-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 mb-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-1 h-8 rounded-full flex-shrink-0",
                                    style: {
                                        background: "#E8001D"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/apps/frontend/components/features/browse/DiscoverPage.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-[34px] sm:text-[44px] font-black uppercase tracking-[0.05em] leading-none text-white",
                                    style: {
                                        fontFamily: "'Barlow Condensed', sans-serif"
                                    },
                                    children: "Discover"
                                }, void 0, false, {
                                    fileName: "[project]/apps/frontend/components/features/browse/DiscoverPage.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/apps/frontend/components/features/browse/DiscoverPage.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[13px] ml-4",
                            style: {
                                color: "#888",
                                fontFamily: "'Barlow', sans-serif"
                            },
                            children: "Live sports. Live community. On-chain."
                        }, void 0, false, {
                            fileName: "[project]/apps/frontend/components/features/browse/DiscoverPage.tsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/frontend/components/features/browse/DiscoverPage.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$features$2f$browse$2f$PoolStatsSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PoolStatsSection"], {}, void 0, false, {
                    fileName: "[project]/apps/frontend/components/features/browse/DiscoverPage.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SectionTitle, {
                            children: "Matches"
                        }, void 0, false, {
                            fileName: "[project]/apps/frontend/components/features/browse/DiscoverPage.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-0 mb-6",
                            style: {
                                borderBottom: "1px solid #2A2A2A"
                            },
                            children: tabs.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveTab(t.key),
                                    className: "flex items-center gap-2 px-5 py-2.5 text-[12px] font-semibold tracking-[0.08em] uppercase transition-colors duration-150",
                                    style: {
                                        fontFamily: "'Barlow', sans-serif",
                                        color: activeTab === t.key ? "#fff" : "#888",
                                        borderBottom: `2px solid ${activeTab === t.key ? "#E8001D" : "transparent"}`,
                                        marginBottom: "-1px"
                                    },
                                    children: [
                                        t.label,
                                        t.count !== undefined && t.count > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-[9px] font-bold px-1.5 py-0.5 rounded-full",
                                            style: {
                                                background: "rgba(0,200,83,0.15)",
                                                color: "#00C853"
                                            },
                                            children: t.count
                                        }, void 0, false, {
                                            fileName: "[project]/apps/frontend/components/features/browse/DiscoverPage.tsx",
                                            lineNumber: 117,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, t.key, true, {
                                    fileName: "[project]/apps/frontend/components/features/browse/DiscoverPage.tsx",
                                    lineNumber: 104,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/apps/frontend/components/features/browse/DiscoverPage.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this),
                        filtered.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "py-16 text-center text-[14px]",
                            style: {
                                color: "#555",
                                fontFamily: "'Barlow', sans-serif"
                            },
                            children: "No matches for this filter."
                        }, void 0, false, {
                            fileName: "[project]/apps/frontend/components/features/browse/DiscoverPage.tsx",
                            lineNumber: 130,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
                            children: filtered.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$5_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$frontend$2f$components$2f$features$2f$browse$2f$DiscoverMatchCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DiscoverMatchCard"], {
                                    match: m,
                                    leagueName: m.leagueName,
                                    now: now
                                }, m.id, false, {
                                    fileName: "[project]/apps/frontend/components/features/browse/DiscoverPage.tsx",
                                    lineNumber: 139,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/apps/frontend/components/features/browse/DiscoverPage.tsx",
                            lineNumber: 137,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/frontend/components/features/browse/DiscoverPage.tsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/frontend/components/features/browse/DiscoverPage.tsx",
            lineNumber: 69,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/frontend/components/features/browse/DiscoverPage.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=_9ba209fc._.js.map