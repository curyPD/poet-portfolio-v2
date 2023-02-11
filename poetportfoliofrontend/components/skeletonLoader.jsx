export default function SkeletonLoader() {
    return (
        <div className="flex animate-pulse flex-col space-y-7 lg:space-y-8">
            <div className="h-4 w-40 bg-neutral-200 lg:h-5 lg:w-44">&nbsp;</div>
            <div className="h-4 w-40 bg-neutral-200 lg:h-5 lg:w-44">&nbsp;</div>
            <div className="h-4 w-40 bg-neutral-200 lg:h-5 lg:w-44">&nbsp;</div>
            <div className="h-4 w-40 bg-neutral-200 lg:h-5 lg:w-44">&nbsp;</div>
            <div className="h-4 w-40 bg-neutral-200 lg:h-5 lg:w-44">&nbsp;</div>
        </div>
    );
}
